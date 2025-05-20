
import { useState, useRef, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { jobs } from "../data/jobs";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useUser } from "@/contexts/UserContext";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const Apply = () => {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("job");
  const job = jobs.find((j) => j.id === jobId);
  const navigate = useNavigate();
  
  const { user, profile } = useUser();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    role: job ? job.title : "",
    resume: null as File | null,
    coverLetter: null as File | null,
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Pre-fill form with user data if available
  useEffect(() => {
    if (user && profile) {
      setFormData(prev => ({
        ...prev,
        fullName: profile.full_name || user.user_metadata?.full_name || "",
        email: user.email || "",
        phone: profile.phone || "",
        state: profile.state || "",
      }));
    }
  }, [user, profile]);
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    
    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }
    
    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // If user is not logged in, redirect to auth page
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please log in or create an account to apply.",
        });
        navigate("/auth");
        return;
      }
      
      // Upload resume to storage if available
      let resumeUrl = null;
      if (formData.resume) {
        // Generate a unique filename for the resume
        const fileExt = formData.resume.name.split('.').pop();
        const fileName = `${user.id}/${Date.now()}-resume.${fileExt}`;
        
        const { data: resumeData, error: resumeError } = await supabase.storage
          .from('applications')
          .upload(fileName, formData.resume);
        
        if (resumeError) throw resumeError;
        
        // Get public URL for the resume
        const { data: publicUrlData } = supabase.storage
          .from('applications')
          .getPublicUrl(fileName);
        
        resumeUrl = publicUrlData.publicUrl;
      }
      
      // Upload cover letter to storage if available
      let coverLetterUrl = null;
      if (formData.coverLetter) {
        // Generate a unique filename for the cover letter
        const fileExt = formData.coverLetter.name.split('.').pop();
        const fileName = `${user.id}/${Date.now()}-coverletter.${fileExt}`;
        
        const { data: coverLetterData, error: coverLetterError } = await supabase.storage
          .from('applications')
          .upload(fileName, formData.coverLetter);
        
        if (coverLetterError) throw coverLetterError;
        
        // Get public URL for the cover letter
        const { data: publicUrlData } = supabase.storage
          .from('applications')
          .getPublicUrl(fileName);
        
        coverLetterUrl = publicUrlData.publicUrl;
      }
      
      // Save application to database
      const { data, error } = await supabase
        .from('applications')
        .insert({
          user_id: user.id,
          job_id: jobId || 'unknown',
          job_title: formData.role,
          resume_url: resumeUrl,
          cover_letter_url: coverLetterUrl,
        });
      
      if (error) throw error;
      
      // Update user profile with form data if needed
      if (
        profile.full_name !== formData.fullName || 
        profile.phone !== formData.phone || 
        profile.state !== formData.state
      ) {
        await supabase
          .from('profiles')
          .update({
            full_name: formData.fullName,
            phone: formData.phone,
            state: formData.state,
          })
          .eq('id', user.id);
      }
      
      setIsSubmitted(true);
      toast({
        title: "Application Submitted",
        description: "Thank you for applying to National Mobile X-Ray!",
      });
    } catch (error: any) {
      console.error('Application error:', error);
      toast({
        title: "Application error",
        description: error.message || "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <div className="bg-gray-50 min-h-screen py-12">
          <div className="container mx-auto px-4 max-w-md">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Received</h2>
              <p className="text-gray-600 mb-6">
                Thank you for applying to National Mobile X-Ray! Our recruiting team will review your application and contact you soon.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center rounded-md bg-brand-red px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 transition"
                >
                  View My Applications
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center rounded-md bg-white border border-gray-300 px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Apply Now</h1>
              {job ? (
                <p className="text-gray-600">
                  You are applying for: <span className="font-medium">{job.title}</span> in <span className="font-medium">{job.location}</span>
                </p>
              ) : (
                <p className="text-gray-600">Complete the form below to submit your application</p>
              )}
              {!user && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> You'll need to create an account or sign in to submit your application. This will allow you to track application status.
                  </p>
                </div>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border ${
                    errors.fullName ? "border-red-300" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red`}
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-brand-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-brand-red">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border ${
                    errors.phone ? "border-red-300" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
              
              {/* State */}
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State <span className="text-brand-red">*</span>
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border ${
                    errors.state ? "border-red-300" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red`}
                >
                  <option value="">Select a state</option>
                  <option value="Texas">Texas</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Kentucky">Kentucky</option>
                </select>
                {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
              </div>
              
              {/* Role */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Role Interested In <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border ${
                    errors.role ? "border-red-300" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red`}
                />
                {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
              </div>
              
              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Resume <span className="text-brand-red">*</span>
                </label>
                <div className="mt-1 flex items-center">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition"
                  >
                    <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Upload Resume
                  </button>
                  <span className="ml-4 text-sm text-gray-600">
                    {formData.resume ? formData.resume.name : "No file selected"}
                  </span>
                </div>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                />
                <p className="mt-1 text-sm text-gray-500">
                  PDF, Word (.doc, .docx) files only
                </p>
                {errors.resume && <p className="mt-1 text-sm text-red-600">{errors.resume}</p>}
              </div>
              
              {/* Cover Letter Upload */}
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter (Optional)
                </label>
                <div className="mt-1 flex items-center">
                  <button
                    type="button"
                    onClick={() => document.getElementById("coverLetter")?.click()}
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition"
                  >
                    <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Upload Cover Letter
                  </button>
                  <span className="ml-4 text-sm text-gray-600">
                    {formData.coverLetter ? formData.coverLetter.name : "No file selected"}
                  </span>
                </div>
                <input
                  type="file"
                  id="coverLetter"
                  name="coverLetter"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                />
                <p className="mt-1 text-sm text-gray-500">
                  PDF, Word (.doc, .docx) files only
                </p>
              </div>
              
              {/* Submit button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center rounded-md bg-brand-red px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 transition ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apply;
