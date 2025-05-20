import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestAccountsCreator from "@/components/TestAccountsCreator";
import { 
  Table, TableHeader, TableRow, TableHead, 
  TableBody, TableCell 
} from "@/components/ui/table";
import { 
  Card, CardHeader, CardTitle, CardDescription, 
  CardContent 
} from "@/components/ui/card";
import { Loader2, FileText, FileX } from "lucide-react";

interface Application {
  id: string;
  job_id: string;
  job_title: string;
  status: string;
  resume_url: string | null;
  cover_letter_url: string | null;
  submitted_at: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  reviewing: "bg-blue-100 text-blue-800",
  interviewed: "bg-purple-100 text-purple-800",
  rejected: "bg-red-100 text-red-800",
  hired: "bg-green-100 text-green-800",
};

const Dashboard = () => {
  const { user, profile, isLoading, signOut, isAdmin } = useUser();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/auth");
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    const fetchApplications = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('applications')
          .select('*')
          .order('submitted_at', { ascending: false });
          
        if (error) {
          throw error;
        }
        
        setApplications(data || []);
      } catch (error: any) {
        toast({
          title: "Error fetching applications",
          description: error.message || "An error occurred while fetching your applications.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchApplications();
    }
  }, [user, toast]);

  if (isLoading) {
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

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
    toast({
      title: "Signed out successfully",
      description: "You have been signed out of your account."
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="container mx-auto px-4">
          {/* Show the test account creator only for admins */}
          {isAdmin && (
            <div className="mb-6">
              <TestAccountsCreator />
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* User Profile Section */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                  <CardDescription>Your account information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p className="text-base">{profile?.full_name || user?.user_metadata?.full_name || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-base">{user?.email}</p>
                    </div>
                    {profile?.phone && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">Phone</p>
                        <p className="text-base">{profile.phone}</p>
                      </div>
                    )}
                    {profile?.state && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">State</p>
                        <p className="text-base">{profile.state}</p>
                      </div>
                    )}
                    {isAdmin && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">Role</p>
                        <p className="text-base bg-blue-100 text-blue-800 inline-block px-2 py-0.5 rounded-full text-xs font-medium">Admin</p>
                      </div>
                    )}
                    <div className="pt-4">
                      <Link
                        to="/jobs"
                        className="inline-block rounded-md bg-brand-red px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 transition"
                      >
                        Browse Jobs
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="ml-2 inline-block rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-50 transition"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Applications Section */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>My Applications</CardTitle>
                  <CardDescription>Track the status of your job applications</CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-brand-red" />
                    </div>
                  ) : applications.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Position</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Applied On</TableHead>
                          <TableHead>Resume</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {applications.map((app) => (
                          <TableRow key={app.id}>
                            <TableCell className="font-medium">
                              <Link 
                                to={`/jobs/${app.job_id}`}
                                className="text-brand-red hover:underline"
                              >
                                {app.job_title}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[app.status]}`}>
                                {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                              </span>
                            </TableCell>
                            <TableCell>
                              {new Date(app.submitted_at).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              {app.resume_url ? (
                                <a 
                                  href={app.resume_url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  <FileText size={18} />
                                </a>
                              ) : (
                                <FileX size={18} className="text-gray-400" />
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="py-8 text-center">
                      <p className="text-gray-500">You haven't applied to any positions yet.</p>
                      <Link
                        to="/jobs"
                        className="mt-4 inline-block rounded-md bg-brand-red px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 transition"
                      >
                        Browse Available Positions
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
