
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MessageSquare, User, Calendar, Filter, Search } from "lucide-react";
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
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  reviewing: "bg-blue-100 text-blue-800",
  interviewing: "bg-purple-100 text-purple-800",
  rejected: "bg-red-100 text-red-800",
  hired: "bg-green-100 text-green-800",
};

const statusOptions = [
  { value: "pending", label: "Pending" },
  { value: "reviewing", label: "Under Review" },
  { value: "interviewing", label: "Interviewing" },
  { value: "rejected", label: "Rejected" },
  { value: "hired", label: "Hired" },
];

const ApplicationManagement = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
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

  const handleAddNote = () => {
    if (newNote.trim()) {
      toast({
        title: "Note Added",
        description: "Private note has been added to the application",
      });
      setNewNote("");
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesStatus = filterStatus === "all" || app.status === filterStatus;
    const matchesSearch = searchTerm === "" || 
      app.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.user_id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusCounts = () => {
    return statusOptions.reduce((acc, status) => {
      acc[status.value] = applications.filter(app => app.status === status.value).length;
      return acc;
    }, {} as Record<string, number>);
  };

  const statusCounts = getStatusCounts();

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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold">Application Management</h3>
          <p className="text-sm text-gray-600">Review and manage job applications</p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 w-full sm:w-64"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full sm:w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              {statusOptions.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label} ({statusCounts[status.value] || 0})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {statusOptions.map((status) => (
          <Card key={status.value} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setFilterStatus(status.value)}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{statusCounts[status.value] || 0}</p>
                <p className="text-sm text-gray-600">{status.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Applications Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Applicant</TableHead>
              <TableHead>Position</TableHead>
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
                      <p className="font-medium">User {application.user_id.slice(-8)}</p>
                      <p className="text-sm text-gray-500">ID: {application.user_id.slice(0, 8)}...</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{application.job_title}</TableCell>
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
                      View Details
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
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
          No applications found matching your criteria.
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
                  <label className="text-sm font-medium text-gray-500">Applicant ID</label>
                  <p className="font-mono text-sm">{selectedApplication.user_id}</p>
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
                <label className="text-sm font-medium text-gray-500 mb-2 block">Add Private Note</label>
                <Textarea
                  placeholder="Add a private note about this application..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                />
                <Button onClick={handleAddNote} className="mt-2" disabled={!newNote.trim()}>
                  Add Note
                </Button>
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
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApplicationManagement;
