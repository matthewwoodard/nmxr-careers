
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/contexts/UserContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobListings from "./pages/JobListings";
import JobDetail from "./pages/JobDetail";
import Apply from "./pages/Apply";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import JobApplicants from "./pages/JobApplicants";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/open-positions" element={<JobListings />} />
            <Route path="/open-positions/:id" element={<JobDetail />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/jobs/:jobId/applicants" element={<JobApplicants />} />
            <Route path="/about" element={<About />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
