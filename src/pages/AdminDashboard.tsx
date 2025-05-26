
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import JobManagement from "@/components/admin/JobManagement";
import ApplicationManagement from "@/components/admin/ApplicationManagement";

const AdminDashboard = () => {
  const { user, isAdmin, isLoading } = useUser();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

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
          description: "You don't have permission to access the admin dashboard.",
          variant: "destructive",
        });
        return;
      }
      
      setLoading(false);
    }
  }, [user, isAdmin, isLoading, navigate, toast]);

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

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage jobs, applications, and system operations</p>
          </div>

          <Tabs defaultValue="jobs" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="jobs">Job Management</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>

            <TabsContent value="jobs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Job Management</CardTitle>
                  <CardDescription>
                    Create, edit, and manage job postings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <JobManagement />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Management</CardTitle>
                  <CardDescription>
                    Review applications and update their status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ApplicationManagement />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
