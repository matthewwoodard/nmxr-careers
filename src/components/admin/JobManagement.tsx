
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit, Archive, Eye, Trash2, Users, Calendar } from "lucide-react";
import { useForm } from "react-hook-form";

interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
  employment_type: string;
  experience_level: string;
  salary_range: string | null;
  requirements: string[] | null;
  benefits: string[] | null;
  posted_date: string | null;
  is_active: boolean | null;
}

interface JobFormData {
  title: string;
  location: string;
  description: string;
  employment_type: string;
  experience_level: string;
  salary_range: string;
  requirements: string;
  benefits: string;
}

const JobManagement = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [jobApplications, setJobApplications] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const form = useForm<JobFormData>({
    defaultValues: {
      title: "",
      location: "",
      description: "",
      employment_type: "full-time",
      experience_level: "entry",
      salary_range: "",
      requirements: "",
      benefits: "",
    },
  });

  // Fetch jobs from the database
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log('Fetching jobs from database...');
        
        const { data, error } = await supabase
          .from('jobs')
          .select('*')
          .eq('is_active', true)
          .order('posted_date', { ascending: false });

        if (error) {
          console.error('Error fetching jobs:', error);
          throw error;
        }

        console.log('Jobs fetched:', data);
        setJobs(data || []);
      } catch (error: any) {
        console.error('Failed to fetch jobs:', error);
        toast({
          title: "Error",
          description: "Failed to fetch jobs. Please try again.",
          variant: "destructive",
        });
      }
    };

    fetchJobs();
  }, [toast]);

  // Fetch application counts from the database
  useEffect(() => {
    const fetchApplicationCounts = async () => {
      try {
        console.log('Fetching application counts for jobs...');
        
        const { data, error } = await supabase
          .from('applications')
          .select('job_id')
          .order('submitted_at', { ascending: false });

        if (error) {
          console.error('Error fetching applications:', error);
          throw error;
        }

        console.log('Applications data:', data);

        // Count applications per job
        const counts: Record<string, number> = {};
        data?.forEach(app => {
          counts[app.job_id] = (counts[app.job_id] || 0) + 1;
        });

        console.log('Application counts:', counts);
        setJobApplications(counts);
      } catch (error: any) {
        console.error('Failed to fetch application counts:', error);
        toast({
          title: "Error",
          description: "Failed to fetch application counts. Using default values.",
          variant: "destructive",
        });
        setJobApplications({});
      } finally {
        setLoading(false);
      }
    };

    fetchApplicationCounts();
  }, [toast]);

  const handleEditJob = (job: Job) => {
    setSelectedJob(job);
    setIsEditing(true);
    form.reset({
      title: job.title,
      location: job.location,
      description: job.description,
      employment_type: job.employment_type,
      experience_level: job.experience_level,
      salary_range: job.salary_range || '',
      requirements: job.requirements?.join('\n') || '',
      benefits: job.benefits?.join('\n') || '',
    });
    setShowDialog(true);
  };

  const handleAddJob = () => {
    setSelectedJob(null);
    setIsEditing(false);
    form.reset();
    setShowDialog(true);
  };

  const handleViewApplicants = (jobId: string) => {
    navigate(`/admin/jobs/${jobId}/applicants`);
  };

  const handleArchiveJob = async (jobId: string) => {
    try {
      const { error } = await supabase
        .from('jobs')
        .update({ is_active: false })
        .eq('id', jobId);

      if (error) throw error;

      // Update local state
      setJobs(prev => prev.filter(job => job.id !== jobId));
      
      toast({
        title: "Job Archived",
        description: "Job has been archived successfully",
      });
    } catch (error: any) {
      console.error('Failed to archive job:', error);
      toast({
        title: "Error",
        description: "Failed to archive job. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    try {
      // First delete all applications for this job
      await supabase
        .from('applications')
        .delete()
        .eq('job_id', jobId);

      // Then delete the job
      const { error } = await supabase
        .from('jobs')
        .delete()
        .eq('id', jobId);

      if (error) throw error;

      // Update local state
      setJobs(prev => prev.filter(job => job.id !== jobId));
      setJobApplications(prev => {
        const newCounts = { ...prev };
        delete newCounts[jobId];
        return newCounts;
      });
      
      toast({
        title: "Job Deleted",
        description: "Job has been deleted successfully",
        variant: "destructive",
      });
    } catch (error: any) {
      console.error('Failed to delete job:', error);
      toast({
        title: "Error",
        description: "Failed to delete job. Please try again.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = async (data: JobFormData) => {
    try {
      const jobData = {
        title: data.title,
        location: data.location,
        description: data.description,
        employment_type: data.employment_type,
        experience_level: data.experience_level,
        salary_range: data.salary_range || null,
        requirements: data.requirements ? data.requirements.split('\n').filter(r => r.trim()) : null,
        benefits: data.benefits ? data.benefits.split('\n').filter(b => b.trim()) : null,
        is_active: true,
      };

      if (isEditing && selectedJob) {
        const { error } = await supabase
          .from('jobs')
          .update(jobData)
          .eq('id', selectedJob.id);

        if (error) throw error;

        // Update local state
        setJobs(prev => prev.map(job => 
          job.id === selectedJob.id 
            ? { ...job, ...jobData }
            : job
        ));
      } else {
        const { data: newJob, error } = await supabase
          .from('jobs')
          .insert([jobData])
          .select()
          .single();

        if (error) throw error;

        // Add to local state
        setJobs(prev => [newJob, ...prev]);
      }

      toast({
        title: isEditing ? "Job Updated" : "Job Created",
        description: isEditing ? "Job has been updated successfully" : "New job has been created successfully",
      });
      setShowDialog(false);
      form.reset();
    } catch (error: any) {
      console.error('Failed to save job:', error);
      toast({
        title: "Error",
        description: "Failed to save job. Please try again.",
        variant: "destructive",
      });
    }
  };

  const totalApplications = Object.values(jobApplications).reduce((sum, count) => sum + count, 0);
  const averageApplications = jobs.length > 0 ? Math.round(totalApplications / jobs.length) : 0;

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-red"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Active Jobs</h3>
          <p className="text-sm text-gray-600">Manage your job postings and track applications</p>
        </div>
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogTrigger asChild>
            <Button onClick={handleAddJob} className="bg-brand-red hover:bg-red-700">
              <Plus className="h-4 w-4 mr-2" />
              Add New Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{isEditing ? "Edit Job" : "Create New Job"}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Mobile X-Ray Technologist" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Texas" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Detailed job description..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="employment_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employment Type</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. full-time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="experience_level"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience Level</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. entry, mid, senior" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="salary_range"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Salary Range</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. $50,000 - $65,000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requirements (one per line)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="List requirements, one per line..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="benefits"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Benefits (one per line)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="List benefits, one per line..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setShowDialog(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-brand-red hover:bg-red-700">
                    {isEditing ? "Update Job" : "Create Job"}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Jobs</p>
                <p className="text-2xl font-bold">{jobs.length}</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold">{totalApplications}</p>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Applications/Job</p>
                <p className="text-2xl font-bold">{averageApplications}</p>
              </div>
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Eye className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Jobs Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Applications</TableHead>
              <TableHead>Employment Type</TableHead>
              <TableHead>Posted Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>
                  <Button
                    variant="link"
                    onClick={() => handleViewApplicants(job.id)}
                    className="p-0 h-auto text-brand-red hover:text-red-700"
                  >
                    {jobApplications[job.id] || 0} applicants
                  </Button>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">
                    {job.employment_type}
                  </Badge>
                </TableCell>
                <TableCell>
                  {job.posted_date ? new Date(job.posted_date).toLocaleDateString() : 'N/A'}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditJob(job)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewApplicants(job.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Users className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleArchiveJob(job.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Archive className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteJob(job.id)}
                      className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default JobManagement;
