
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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentCity: "",
    currentState: "",
    role: job ? job.title : "",
    referredBy: "",
    referredByName: "",
    isNewGrad: "",
    school: "",
    hasCertifications: "",
    certifications: [] as string[],
    willingToRelocate: "",
    willingToTravelStatewide: "",
    resume: null as File | null,
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Pre-fill form with user data if available
  useEffect(() => {
    if (user && profile) {
      const fullName = profile.full_name || user.user_metadata?.full_name || "";
      const [first = "", ...lastParts] = fullName.split(" ");
      const last = lastParts.join(" ");
      
      setFormData(prev => ({
        ...prev,
        firstName: first,
        lastName: last,
        email: user.email || "",
        phone: profile.phone || "",
        currentState: profile.state || "",
      }));
    }
  }, [user, profile]);
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.currentCity.trim()) {
      newErrors.currentCity = "Current city is required";
    }
    
    if (!formData.currentState.trim()) {
      newErrors.currentState = "Current state is required";
    }
    
    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }
    
    if (!formData.referredBy.trim()) {
      newErrors.referredBy = "Please select how you heard about us";
    }
    
    if (formData.isNewGrad === "yes" && !formData.school.trim()) {
      newErrors.school = "School name is required for new graduates";
    }
    
    if (formData.hasCertifications === "yes" && formData.certifications.length === 0) {
      newErrors.certifications = "Please select at least one certification";
    }
    
    if (!formData.willingToRelocate.trim()) {
      newErrors.willingToRelocate = "Please indicate if you're willing to relocate";
    }
    
    if (!formData.willingToTravelStatewide.trim()) {
      newErrors.willingToTravelStatewide = "Please indicate if you're willing to travel statewide";
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
  
  const handleCertificationChange = (certification: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      certifications: checked 
        ? [...prev.certifications, certification]
        : prev.certifications.filter(c => c !== certification)
    }));
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
      
      // Save application to database
      const { data, error } = await supabase
        .from('applications')
        .insert({
          user_id: user.id,
          job_id: jobId || 'unknown',
          job_title: formData.role,
          resume_url: resumeUrl,
        });
      
      if (error) throw error;
      
      // Update user profile with form data
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      await supabase
        .from('profiles')
        .update({
          full_name: fullName,
          phone: formData.phone,
          state: formData.currentState,
        })
        .eq('id', user.id);
      
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
        <div className="container mx-auto px-4 max-w-4xl">
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
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full rounded-md border ${
                      errors.firstName ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red`}
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full rounded-md border ${
                      errors.lastName ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red`}
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
              
              {/* Current Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="currentCity" className="block text-sm font-medium text-gray-700 mb-1">
                    Current City <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="currentCity"
                    name="currentCity"
                    value={formData.currentCity}
                    onChange={handleInputChange}
                    className={`w-full rounded-md border ${
                      errors.currentCity ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red`}
                  />
                  {errors.currentCity && <p className="mt-1 text-sm text-red-600">{errors.currentCity}</p>}
                </div>
                
                <div>
                  <label htmlFor="currentState" className="block text-sm font-medium text-gray-700 mb-1">
                    Current State <span className="text-brand-red">*</span>
                  </label>
                  <select
                    id="currentState"
                    name="currentState"
                    value={formData.currentState}
                    onChange={handleInputChange}
                    className={`w-full rounded-md border ${
                      errors.currentState ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red`}
                  >
                    <option value="">Select a state</option>
                    <option value="Texas">Texas</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Kentucky">Kentucky</option>
                  </select>
                  {errors.currentState && <p className="mt-1 text-sm text-red-600">{errors.currentState}</p>}
                </div>
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
              
              {/* Referred By */}
              <div>
                <label htmlFor="referredBy" className="block text-sm font-medium text-gray-700 mb-1">
                  How did you hear about us? <span className="text-brand-red">*</span>
                </label>
                <select
                  id="referredBy"
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleInputChange}
                  className={`w-full rounded-md border ${
                    errors.referredBy ? "border-red-300" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red`}
                >
                  <option value="">Select an option</option>
                  <option value="school">School</option>
                  <option value="indeed">Indeed</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="teacher">Teacher</option>
                  <option value="friend">Friend</option>
                  <option value="current_employee">Current Employee</option>
                </select>
                {errors.referredBy && <p className="mt-1 text-sm text-red-600">{errors.referredBy}</p>}
              </div>
              
              {/* Referred By Name */}
              {(formData.referredBy === "teacher" || formData.referredBy === "friend" || formData.referredBy === "current_employee") && (
                <div>
                  <label htmlFor="referredByName" className="block text-sm font-medium text-gray-700 mb-1">
                    Enter name
                  </label>
                  <input
                    type="text"
                    id="referredByName"
                    name="referredByName"
                    value={formData.referredByName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                  />
                </div>
              )}
              
              {/* New Grad */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Are you a new graduate? <span className="text-brand-red">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isNewGrad"
                      value="yes"
                      checked={formData.isNewGrad === "yes"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-brand-red border-gray-300 focus:ring-brand-red"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isNewGrad"
                      value="no"
                      checked={formData.isNewGrad === "no"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-brand-red border-gray-300 focus:ring-brand-red"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
              </div>
              
              {/* School */}
              {formData.isNewGrad === "yes" && (
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                    What School? <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    className={`w-full rounded-md border ${
                      errors.school ? "border-red-300" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red`}
                  />
                  {errors.school && <p className="mt-1 text-sm text-red-600">{errors.school}</p>}
                </div>
              )}
              
              {/* Certifications */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Do you have certifications?
                </label>
                <div className="flex gap-4 mb-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasCertifications"
                      value="yes"
                      checked={formData.hasCertifications === "yes"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-brand-red border-gray-300 focus:ring-brand-red"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasCertifications"
                      value="no"
                      checked={formData.hasCertifications === "no"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-brand-red border-gray-300 focus:ring-brand-red"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
                
                {formData.hasCertifications === "yes" && (
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.certifications.includes("ARRT")}
                        onChange={(e) => handleCertificationChange("ARRT", e.target.checked)}
                        className="h-4 w-4 text-brand-red border-gray-300 rounded focus:ring-brand-red"
                      />
                      <span className="ml-2 text-sm text-gray-700">ARRT (X-ray)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.certifications.includes("ARDMS")}
                        onChange={(e) => handleCertificationChange("ARDMS", e.target.checked)}
                        className="h-4 w-4 text-brand-red border-gray-300 rounded focus:ring-brand-red"
                      />
                      <span className="ml-2 text-sm text-gray-700">ARDMS - AB/RVT (Ultrasound)</span>
                    </label>
                    {errors.certifications && <p className="mt-1 text-sm text-red-600">{errors.certifications}</p>}
                  </div>
                )}
              </div>
              
              {/* Willing to Relocate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Are you willing to relocate? <span className="text-brand-red">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="willingToRelocate"
                      value="yes"
                      checked={formData.willingToRelocate === "yes"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-brand-red border-gray-300 focus:ring-brand-red"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="willingToRelocate"
                      value="no"
                      checked={formData.willingToRelocate === "no"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-brand-red border-gray-300 focus:ring-brand-red"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
                {errors.willingToRelocate && <p className="mt-1 text-sm text-red-600">{errors.willingToRelocate}</p>}
              </div>
              
              {/* Willing to Travel Statewide */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Are you willing to travel statewide? <span className="text-brand-red">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="willingToTravelStatewide"
                      value="yes"
                      checked={formData.willingToTravelStatewide === "yes"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-brand-red border-gray-300 focus:ring-brand-red"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="willingToTravelStatewide"
                      value="no"
                      checked={formData.willingToTravelStatewide === "no"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-brand-red border-gray-300 focus:ring-brand-red"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
                {errors.willingToTravelStatewide && <p className="mt-1 text-sm text-red-600">{errors.willingToTravelStatewide}</p>}
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
