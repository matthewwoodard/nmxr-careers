
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ArrowLeft, Mail, Phone, FileText, Calendar, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
}

interface Application {
  id: string;
  user_id: string;
  job_id: string;
  job_title: string;
  status: string;
  submitted_at: string;
  resume_url: string | null;
  cover_letter_url: string | null;
  profiles: {
    full_name: string | null;
    email: string | null;
    phone: string | null;
  } | null;
}

// Fictional applicant data for demonstration
const fictionalApplicants = [
  { name: "Sarah Johnson", email: "sarah.johnson@example.com", phone: "+1 (555) 234-5678" },
  { name: "Michael Davis", email: "michael.davis@example.com", phone: "+1 (555) 345-6789" },
  { name: "Emily Wilson", email: "emily.wilson@example.com", phone: "+1 (555) 456-7890" },
  { name: "David Brown", email: "david.brown@example.com", phone: "+1 (555) 567-8901" },
  { name: "Lisa Miller", email: "lisa.miller@example.com", phone: "+1 (555) 678-9012" },
  { name: "Robert Garcia", email: "robert.garcia@example.com", phone: "+1 (555) 789-0123" },
  { name: "Jennifer Martinez", email: "jennifer.martinez@example.com", phone: "+1 (555) 890-1234" },
  { name: "Christopher Lee", email: "christopher.lee@example.com", phone: "+1 (555) 901-2345" },
  { name: "Amanda Taylor", email: "amanda.taylor@example.com", phone: "+1 (555) 012-3456" },
  { name: "James Wilson", email: "james.wilson@example.com", phone: "+1 (555) 123-7890" },
];

const JobApplicants = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const { user, isAdmin, isLoading } = useUser();
  const { toast } = useToast();
  const [job, setJob] = useState<Job | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  // Function to get fictional applicant data based on user_id
  const getFictionalApplicant = (userId: string) => {
    // Use a hash of the user_id to consistently assign the same fictional data
    const hash = userId.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    const index = Math.abs(hash) % fictionalApplicants.length;
    return fictionalApplicants[index];
  };

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate("/auth");
        return;
      }
      
      if (!isAdmin) {
        navigate("/dashboard");
        toast({
          title: "Access Denied",
          description: "You don't have permission to access this page.",
          variant: "destructive",
        });
        return;
      }
    }
  }, [user, isAdmin, isLoading, navigate, toast]);

  useEffect(() => {
    const fetchJob = async () => {
      if (!jobId) return;

      try {
        console.log('Fetching job:', jobId);
        
        const { data, error } = await supabase
          .from('jobs')
          .select('id, title, location, description')
          .eq('id', jobId)
          .single();

        if (error) {
          console.error('Error fetching job:', error);
          throw error;
        }

        console.log('Job fetched:', data);
        setJob(data);
      } catch (error: any) {
        console.error('Failed to fetch job:', error);
        toast({
          title: "Job Not Found",
          description: "The requested job could not be found.",
          variant: "destructive",
        });
        navigate("/admin");
      }
    };

    fetchJob();
  }, [jobId, navigate, toast]);

  useEffect(() => {
    const fetchApplications = async () => {
      if (!jobId || !user || !isAdmin) return;

      try {
        console.log('Fetching applications for job:', jobId);
        
        const { data, error } = await supabase
          .from('applications')
          .select(`
            id,
            user_id,
            job_id,
            job_title,
            status,
            submitted_at,
            resume_url,
            cover_letter_url,
            profiles!fk_applications_user_id (
              full_name,
              email,
              phone
            )
          `)
          .eq('job_id', jobId)
          .order('submitted_at', { ascending: false });

        if (error) {
          console.error('Error fetching applications:', error);
          throw error;
        }

        console.log('Applications fetched:', data);
        setApplications(data || []);
      } catch (error: any) {
        console.error('Failed to fetch applications:', error);
        toast({
          title: "Error",
          description: "Failed to fetch applications. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [jobId, user, isAdmin, toast]);

  const handleStatusChange = async (applicationId: string, newStatus: string) => {
    try {
      console.log('Updating application status:', applicationId, newStatus);
      
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', applicationId);

      if (error) {
        console.error('Error updating status:', error);
        throw error;
      }

      // Update local state
      setApplications(prev => 
        prev.map(app => 
          app.id === applicationId 
            ? { ...app, status: newStatus }
            : app
        )
      );

      toast({
        title: "Status Updated",
        description: `Application status changed to ${newStatus}`,
      });
    } catch (error: any) {
      console.error('Failed to update status:', error);
      toast({
        title: "Error",
        description: "Failed to update status. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "reviewed": return "bg-blue-100 text-blue-800";
      case "interviewed": return "bg-purple-100 text-purple-800";
      case "hired": return "bg-green-100 text-green-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading || loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
        </div>
        <Footer />
      </>
    );
  }

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">Job not found</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/admin")}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Admin Dashboard
            </Button>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Job Applicants</h1>
                <p className="text-gray-600 mt-2">
                  Managing applicants for: <span className="font-semibold">{job.title}</span> - {job.location}
                </p>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {applications.length} Applicants
              </Badge>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Applicant List</CardTitle>
            </CardHeader>
            <CardContent>
              {applications.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No applications found for this job.</p>
                </div>
              ) : (
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Applicant</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Applied Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Documents</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.map((application) => {
                        // Get fictional applicant data for demo purposes
                        const fictionalData = getFictionalApplicant(application.user_id);
                        const applicantName = application.profiles?.full_name || fictionalData.name;
                        const applicantEmail = application.profiles?.email || fictionalData.email;
                        const applicantPhone = application.profiles?.phone || fictionalData.phone;

                        return (
                          <TableRow key={application.id}>
                            <TableCell>
                              <div className="font-medium">
                                {applicantName}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center text-sm text-gray-600">
                                  <Mail className="h-3 w-3 mr-1" />
                                  {applicantEmail}
                                </div>
                                {applicantPhone && (
                                  <div className="flex items-center text-sm text-gray-600">
                                    <Phone className="h-3 w-3 mr-1" />
                                    {applicantPhone}
                                  </div>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center text-sm">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(application.submitted_at).toLocaleDateString()}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={getStatusColor(application.status)}>
                                {application.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                {application.resume_url && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => window.open(application.resume_url!, '_blank')}
                                  >
                                    <FileText className="h-3 w-3 mr-1" />
                                    Resume
                                  </Button>
                                )}
                                {application.cover_letter_url && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => window.open(application.cover_letter_url!, '_blank')}
                                  >
                                    <FileText className="h-3 w-3 mr-1" />
                                    Cover Letter
                                  </Button>
                                )}
                                {!application.resume_url && !application.cover_letter_url && (
                                  <span className="text-sm text-gray-500">No documents</span>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-1">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleStatusChange(application.id, "reviewed")}
                                  disabled={application.status === "reviewed"}
                                >
                                  Review
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleStatusChange(application.id, "interviewed")}
                                  disabled={application.status === "interviewed"}
                                >
                                  Interview
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobApplicants;
