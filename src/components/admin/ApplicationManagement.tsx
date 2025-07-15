
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MessageSquare, User, Calendar, Filter, Search, Eye, ExternalLink } from "lucide-react";
import { Loader2 } from "lucide-react";
interface Application {
  id: string;
  job_id: string;
  job_title: string;
  status: string;
  resume_url: string | null;
  cover_letter_url: string | null;
  submitted_at: string;
  user_id: string;
  modality: string | null;
  certification: string | null;
  notes: string | null;
}

interface Job {
  id: string;
  title: string;
  location: string;
  employment_type: string;
  modality: string | null;
}

interface UserProfile {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  state: string | null;
}

const statusColors: Record<string, string> = {
  new: "bg-yellow-100 text-yellow-800",
  under_review: "bg-blue-100 text-blue-800",
  contacted: "bg-purple-100 text-purple-800",
  interview: "bg-indigo-100 text-indigo-800",
  hired: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

const statusOptions = [
  { value: "new", label: "New" },
  { value: "under_review", label: "Under Review" },
  { value: "contacted", label: "Contacted" },
  { value: "interview", label: "Interview" },
  { value: "hired", label: "Hired" },
  { value: "rejected", label: "Rejected" },
];

const certificationOptions = [
  { value: "all", label: "All Certifications" },
  { value: "ARRT", label: "ARRT" },
  { value: "ARDMS", label: "ARDMS" },
];

const employmentTypeOptions = [
  { value: "all", label: "All Types" },
  { value: "full-time", label: "Full-Time" },
  { value: "part-time", label: "Part-Time" },
];

const ApplicationManagement = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const [showNoteDialog, setShowNoteDialog] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterJob, setFilterJob] = useState<string>("all");
  const [filterCertification, setFilterCertification] = useState<string>("all");
  const [filterEmploymentType, setFilterEmploymentType] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [profileLoading, setProfileLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
    fetchJobs();
  }, []);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('submitted_at', { ascending: false });
        
      if (error) throw error;
      setApplications(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching applications",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('id, title, location, employment_type, modality')
        .eq('is_active', true);
        
      if (error) throw error;
      setJobs(data || []);
    } catch (error: any) {
      toast({
        title: "Error fetching jobs",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const fetchUserProfile = async (userId: string) => {
    setProfileLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
        
      if (error) throw error;
      setSelectedProfile(data);
      setShowProfileDialog(true);
    } catch (error: any) {
      toast({
        title: "Error fetching user profile",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setProfileLoading(false);
    }
  };

  const updateApplicationStatus = async (applicationId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', applicationId);
        
      if (error) throw error;
      
      setApplications(prev => 
        prev.map(app => 
          app.id === applicationId 
            ? { ...app, status: newStatus }
            : app
        )
      );
      
      toast({
        title: "Status Updated",
        description: `Application status updated to ${newStatus}`,
      });
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleViewApplication = (application: Application) => {
    setSelectedApplication(application);
    setShowDialog(true);
  };

  const handleViewApplicant = (application: Application) => {
    fetchUserProfile(application.user_id);
  };

  const handleViewJobDetails = (jobId: string) => {
    navigate(`/open-positions/${jobId}`);
  };

  const handleViewJobApplicants = (jobId: string) => {
    navigate(`/admin/jobs/${jobId}/applicants`);
  };

  const handleOpenNoteDialog = (application: Application) => {
    setSelectedApplication(application);
    setShowNoteDialog(true);
  };

  const handleAddNote = async () => {
    if (!selectedApplication || !newNote.trim()) return;

    try {
      const { error } = await supabase
        .from('applications')
        .update({ notes: newNote })
        .eq('id', selectedApplication.id);

      if (error) throw error;

      // Update local state
      setApplications(prev => prev.map(app => 
        app.id === selectedApplication.id 
          ? { ...app, notes: newNote }
          : app
      ));

      toast({
        title: "Note Added",
        description: "Private note has been added to the application",
      });
      setNewNote("");
      setShowNoteDialog(false);
    } catch (error: any) {
      toast({
        title: "Error adding note",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesStatus = filterStatus === "all" || app.status === filterStatus;
    const matchesJob = filterJob === "all" || app.job_id === filterJob;
    const matchesCertification = filterCertification === "all" || app.certification === filterCertification;
    const matchesEmploymentType = filterEmploymentType === "all" || getJobEmploymentType(app.job_id) === filterEmploymentType;
    const matchesSearch = searchTerm === "" || 
      app.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.user_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesJob && matchesCertification && matchesEmploymentType && matchesSearch;
  });

  const getStatusCounts = () => {
    return statusOptions.reduce((acc, status) => {
      acc[status.value] = applications.filter(app => app.status === status.value).length;
      return acc;
    }, {} as Record<string, number>);
  };

  const getJobCounts = () => {
    const jobCounts: Record<string, number> = {};
    applications.forEach(app => {
      jobCounts[app.job_id] = (jobCounts[app.job_id] || 0) + 1;
    });
    return jobCounts;
  };

  const statusCounts = getStatusCounts();
  const jobCounts = getJobCounts();

  const getJobTitle = (jobId: string) => {
    const job = jobs.find(j => j.id === jobId);
    return job ? job.title : `Job ${jobId}`;
  };

  const getJobEmploymentType = (jobId: string) => {
    const job = jobs.find(j => j.id === jobId);
    return job ? job.employment_type : 'full-time';
  };

  const getJobLocation = (jobId: string) => {
    const job = jobs.find(j => j.id === jobId);
    return job ? job.location : 'Unknown Location';
  };

  const getJobModality = (jobId: string) => {
    const job = jobs.find(j => j.id === jobId);
    return job ? job.modality : null;
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-brand-red" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold">Application Management</h3>
          <p className="text-sm text-gray-600">Review and manage job applications across all positions</p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search applications, job titles, or user IDs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status ({applications.length})</SelectItem>
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label} ({statusCounts[status.value] || 0})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterCertification} onValueChange={setFilterCertification}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by certification" />
              </SelectTrigger>
              <SelectContent>
                {certificationOptions.map((cert) => (
                  <SelectItem key={cert.value} value={cert.value}>
                    {cert.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterEmploymentType} onValueChange={setFilterEmploymentType}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                {employmentTypeOptions.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterJob} onValueChange={setFilterJob}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by job" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Jobs</SelectItem>
                {jobs.map((job) => (
                  <SelectItem key={job.id} value={job.id}>
                    {job.title} ({jobCounts[job.id] || 0})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {statusOptions.map((status) => (
          <Card 
            key={status.value} 
            className="cursor-pointer hover:shadow-md transition-shadow" 
            onClick={() => setFilterStatus(status.value)}
          >
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{statusCounts[status.value] || 0}</p>
                <p className="text-sm text-gray-600">{status.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Job Performance Cards */}
      <div>
        <h4 className="text-md font-semibold mb-3">Applications by Job</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.slice(0, 6).map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{job.title}</CardTitle>
                <p className="text-xs text-gray-500">{job.location}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{jobCounts[job.id] || 0}</p>
                    <p className="text-xs text-gray-600">Applications</p>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewJobDetails(job.id)}
                      className="h-8 w-8 p-0"
                      title="View job details"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewJobApplicants(job.id)}
                      className="h-8 w-8 p-0"
                      title="View applicants"
                    >
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Applications Table */}
      <div className="border rounded-lg">
        <Table>
           <TableHeader>
             <TableRow>
               <TableHead>Applicant</TableHead>
               <TableHead>Position</TableHead>
               <TableHead>Modality</TableHead>
               <TableHead>Location</TableHead>
               <TableHead>Status</TableHead>
               <TableHead>Applied Date</TableHead>
               <TableHead>Documents</TableHead>
               <TableHead>Actions</TableHead>
             </TableRow>
           </TableHeader>
          <TableBody>
            {filteredApplications.map((application) => (
              <TableRow key={application.id}>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-gray-100 rounded-full">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <button
                        onClick={() => handleViewApplicant(application)}
                        className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        User {application.user_id.slice(-8)}
                      </button>
                      <p className="text-sm text-gray-500">ID: {application.user_id.slice(0, 8)}...</p>
                    </div>
                  </div>
                </TableCell>
                 <TableCell>
                   <div>
                     <p className="font-medium">{application.job_title}</p>
                     <button
                       onClick={() => handleViewJobDetails(application.job_id)}
                       className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                     >
                       View Job Details
                     </button>
                   </div>
                 </TableCell>
                  <TableCell>
                    <Badge variant="outline">{application.modality || getJobModality(application.job_id) || 'N/A'}</Badge>
                  </TableCell>
                 <TableCell>
                   <span className="text-sm">{getJobLocation(application.job_id)}</span>
                 </TableCell>
                <TableCell>
                  <Select
                    value={application.status}
                    onValueChange={(value) => updateApplicationStatus(application.id, value)}
                  >
                    <SelectTrigger className="w-auto border-none p-0">
                      <Badge className={statusColors[application.status]}>
                        <SelectValue />
                      </Badge>
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>{new Date(application.submitted_at).toLocaleDateString()}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    {application.resume_url && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(application.resume_url!, '_blank')}
                        className="h-8 w-8 p-0"
                        title="View Resume"
                      >
                        <FileText className="h-4 w-4" />
                      </Button>
                    )}
                    {application.cover_letter_url && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(application.cover_letter_url!, '_blank')}
                        className="h-8 w-8 p-0"
                        title="View Cover Letter"
                      >
                        <FileText className="h-4 w-4 text-blue-600" />
                      </Button>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewApplication(application)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => handleOpenNoteDialog(application)}
                      title="Add Note"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredApplications.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          {applications.length === 0 
            ? "No applications found. Applications will appear here once candidates start applying."
            : "No applications match your current filters."
          }
        </div>
      )}

      {/* Application Details Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
          </DialogHeader>
          {selectedApplication && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Position</label>
                  <p className="font-medium">{selectedApplication.job_title}</p>
                  <Button
                    variant="link"
                    onClick={() => handleViewJobDetails(selectedApplication.job_id)}
                    className="p-0 h-auto text-blue-600 hover:text-blue-800"
                  >
                    View Job Details
                  </Button>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <Badge className={statusColors[selectedApplication.status]}>
                    {selectedApplication.status.charAt(0).toUpperCase() + selectedApplication.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Applied Date</label>
                  <p>{new Date(selectedApplication.submitted_at).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Application ID</label>
                  <p className="font-mono text-sm">{selectedApplication.id}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500 mb-2 block">Documents</label>
                <div className="flex space-x-2">
                  {selectedApplication.resume_url && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedApplication.resume_url!, '_blank')}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      View Resume
                    </Button>
                  )}
                  {selectedApplication.cover_letter_url && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedApplication.cover_letter_url!, '_blank')}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      View Cover Letter
                    </Button>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500 mb-2 block">Update Status</label>
                <Select
                  value={selectedApplication.status}
                  onValueChange={(value) => {
                    updateApplicationStatus(selectedApplication.id, value);
                    setSelectedApplication({ ...selectedApplication, status: value });
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => handleViewApplicant(selectedApplication)}
                  disabled={profileLoading}
                >
                  {profileLoading ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <User className="h-4 w-4 mr-2" />
                  )}
                  View Applicant Profile
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleViewJobApplicants(selectedApplication.job_id)}
                >
                  <User className="h-4 w-4 mr-2" />
                  View All Applicants for this Job
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* User Profile Dialog */}
      <Dialog open={showProfileDialog} onOpenChange={setShowProfileDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Applicant Profile</DialogTitle>
          </DialogHeader>
          {selectedProfile && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Full Name</label>
                  <p className="font-medium">{selectedProfile.full_name || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p>{selectedProfile.email || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone</label>
                  <p>{selectedProfile.phone || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">State</label>
                  <p>{selectedProfile.state || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">User ID</label>
                  <p className="font-mono text-sm">{selectedProfile.id}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Note Dialog */}
      <Dialog open={showNoteDialog} onOpenChange={setShowNoteDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Private Note</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {selectedApplication && (
              <div className="text-sm text-gray-600">
                Adding note for: <span className="font-medium">{selectedApplication.job_title}</span>
                <br />
                Applicant: <span className="font-medium">User {selectedApplication.user_id.slice(-8)}</span>
              </div>
            )}
            <Textarea
              placeholder="Add a private note about this application..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              rows={4}
            />
            <div className="flex space-x-2">
              <Button onClick={handleAddNote} disabled={!newNote.trim()}>
                Add Note
              </Button>
              <Button variant="outline" onClick={() => setShowNoteDialog(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApplicationManagement;
