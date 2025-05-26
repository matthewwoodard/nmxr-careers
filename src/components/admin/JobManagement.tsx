
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
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
import { jobs } from "@/data/jobs";

interface JobFormData {
  title: string;
  location: string;
  summary: string;
  description: string;
  requirements: string;
  benefits: string;
  tags: string;
}

const JobManagement = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [jobApplications, setJobApplications] = useState<Record<string, number>>({});
  const { toast } = useToast();

  const form = useForm<JobFormData>({
    defaultValues: {
      title: "",
      location: "",
      summary: "",
      description: "",
      requirements: "",
      benefits: "",
      tags: "",
    },
  });

  // Mock application counts - in real app this would come from the database
  useEffect(() => {
    const mockCounts: Record<string, number> = {};
    jobs.forEach(job => {
      mockCounts[job.id] = Math.floor(Math.random() * 25) + 1;
    });
    setJobApplications(mockCounts);
  }, []);

  const handleEditJob = (job: any) => {
    setSelectedJob(job);
    setIsEditing(true);
    form.reset({
      title: job.title,
      location: job.location,
      summary: job.summary,
      description: job.description,
      requirements: job.requirements.join('\n'),
      benefits: job.benefits.join('\n'),
      tags: job.tags.join(', '),
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
    toast({
      title: "View Applicants",
      description: `Viewing applicants for job ${jobId}`,
    });
  };

  const handleArchiveJob = (jobId: string) => {
    toast({
      title: "Job Archived",
      description: "Job has been archived successfully",
    });
  };

  const handleDeleteJob = (jobId: string) => {
    toast({
      title: "Job Deleted",
      description: "Job has been deleted successfully",
      variant: "destructive",
    });
  };

  const onSubmit = (data: JobFormData) => {
    toast({
      title: isEditing ? "Job Updated" : "Job Created",
      description: isEditing ? "Job has been updated successfully" : "New job has been created successfully",
    });
    setShowDialog(false);
    form.reset();
  };

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
                        <Input placeholder="e.g. Software Engineer" {...field} />
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
                        <Input placeholder="e.g. San Francisco, CA" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="summary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Summary</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Brief job summary..." {...field} />
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
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags (comma separated)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Full-time, Remote, Senior" {...field} />
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
                <p className="text-2xl font-bold">
                  {Object.values(jobApplications).reduce((sum, count) => sum + count, 0)}
                </p>
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
                <p className="text-2xl font-bold">
                  {jobs.length > 0 ? Math.round(Object.values(jobApplications).reduce((sum, count) => sum + count, 0) / jobs.length) : 0}
                </p>
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
              <TableHead>Tags</TableHead>
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
                  <div className="flex flex-wrap gap-1">
                    {job.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {job.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{job.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>{new Date(job.postedDate).toLocaleDateString()}</TableCell>
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
