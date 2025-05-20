
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
        agreeToTerms: false,
      });
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">We're Here to Help You Get Started</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Have a question about working with us? Reach out today – we'd love to hear from you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-black hover:bg-gray-800 text-white"
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Send Message
                  </Button>
                  <Link to="/jobs">
                    <Button variant="outline">
                      Explore Careers
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[500px]">
                  <div className="col-span-2 row-span-1 bg-gray-200 rounded-lg">
                    <img 
                      src="/placeholder.svg" 
                      alt="Mobile X-Ray Team" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="col-span-1 row-span-2 bg-gray-200 rounded-lg">
                    <img 
                      src="/placeholder.svg" 
                      alt="Mobile X-Ray Equipment" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="col-span-1 row-span-1 bg-gray-200 rounded-lg">
                    <img 
                      src="/placeholder.svg" 
                      alt="Patient Care" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="col-span-1 row-span-1 bg-gray-200 rounded-lg">
                    <img 
                      src="/placeholder.svg" 
                      alt="Mobile X-Ray Van" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="col-span-2 row-span-1 bg-gray-200 rounded-lg">
                    <img 
                      src="/placeholder.svg" 
                      alt="Technologist at Work" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h2 className="text-lg font-medium text-gray-500 mb-2">Help</h2>
                  <h3 className="text-3xl font-bold text-gray-900">Get in Touch</h3>
                  <p className="mt-4 text-gray-600">We're here to assist you with your inquiries.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-gray-900 mr-3" />
                    <p className="text-gray-600">hello@example.io</p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-gray-900 mr-3" />
                    <p className="text-gray-600">+1 (512) 887-9304</p>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-gray-900 mr-3" />
                    <p className="text-gray-600">Serving patients across TX, NC, VA, GA, KY.</p>
                  </div>
                </div>
              </div>
              
              <div id="contact-form">
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Enter your message..."
                      className="w-full"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreeToTerms}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Agree to Terms
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-black hover:bg-gray-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recruiting Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get in Touch with Our Recruiting Team Today
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to assist you with any inquiries regarding our career opportunities. Don't hesitate to reach out!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Us</h3>
                    <p className="text-gray-600 mb-1">Email: careers@nationalmobilexray.com</p>
                    <p className="text-gray-600">Phone: 512-887-9304</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-600">Monday—Friday, 8:00 AM — 5:00 PM CST</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-200 h-96 rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Our Recruiting Team" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
