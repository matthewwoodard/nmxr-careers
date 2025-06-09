
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
import { ArrowLeft, Mail, Phone, FileText, Calendar } from "lucide-react";
import { jobs } from "@/data/jobs";

const JobApplicants = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const { user, isAdmin, isLoading } = useUser();
  const { toast } = useToast();
  const [job, setJob] = useState<any>(null);

  // Mock applicant data - in a real app this would come from the database
  const mockApplicants = [
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "(555) 123-4567",
      appliedAt: "2024-01-15T10:30:00Z",
      status: "pending",
      resumeUrl: "#",
      coverLetterUrl: "#",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "(555) 987-6543",
      appliedAt: "2024-01-14T14:20:00Z",
      status: "reviewed",
      resumeUrl: "#",
      coverLetterUrl: "#",
    },
    {
      id: "3",
      name: "Mike Davis",
      email: "mike.davis@example.com",
      phone: "(555) 456-7890",
      appliedAt: "2024-01-13T09:15:00Z",
      status: "interviewed",
      resumeUrl: "#",
      coverLetterUrl: null,
    },
  ];

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
    if (jobId) {
      const foundJob = jobs.find(j => j.id === jobId);
      if (foundJob) {
        setJob(foundJob);
      } else {
        toast({
          title: "Job Not Found",
          description: "The requested job could not be found.",
          variant: "destructive",
        });
        navigate("/admin");
      }
    }
  }, [jobId, navigate, toast]);

  const handleStatusChange = (applicantId: string, newStatus: string) => {
    toast({
      title: "Status Updated",
      description: `Applicant status changed to ${newStatus}`,
    });
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

  if (isLoading || !job) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">Loading...</div>
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
                {mockApplicants.length} Applicants
              </Badge>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Applicant List</CardTitle>
            </CardHeader>
            <CardContent>
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
                    {mockApplicants.map((applicant) => (
                      <TableRow key={applicant.id}>
                        <TableCell>
                          <div className="font-medium">{applicant.name}</div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="h-3 w-3 mr-1" />
                              {applicant.email}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Phone className="h-3 w-3 mr-1" />
                              {applicant.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(applicant.appliedAt).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(applicant.status)}>
                            {applicant.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(applicant.resumeUrl, '_blank')}
                            >
                              <FileText className="h-3 w-3 mr-1" />
                              Resume
                            </Button>
                            {applicant.coverLetterUrl && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(applicant.coverLetterUrl, '_blank')}
                              >
                                <FileText className="h-3 w-3 mr-1" />
                                Cover Letter
                              </Button>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleStatusChange(applicant.id, "reviewed")}
                            >
                              Review
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleStatusChange(applicant.id, "interviewed")}
                            >
                              Interview
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobApplicants;
