
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import CompanyOverview from "@/components/CompanyOverview";
import LocationsMap from "@/components/LocationsMap";
import DailyLife from "@/components/DailyLife";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const states = [
    { 
      name: "Texas", 
      abbr: "TX", 
      image: "/lovable-uploads/texas-location.jpg",
      description: "Serving Dallas-Fort Worth, Houston, San Antonio and Austin areas"
    },
    { 
      name: "North Carolina", 
      abbr: "NC", 
      image: "/lovable-uploads/north-carolina-location.jpg",
      description: "Covering Charlotte, Raleigh-Durham, and Greensboro regions"
    },
    { 
      name: "Virginia", 
      abbr: "VA", 
      image: "/lovable-uploads/virginia-location.jpg",
      description: "Serving Northern Virginia, Richmond, and Hampton Roads"
    },
    { 
      name: "Georgia", 
      abbr: "GA", 
      image: "/lovable-uploads/georgia-location.jpg",
      description: "Operating throughout Atlanta metro and surrounding areas"
    },
    { 
      name: "Kentucky", 
      abbr: "KY", 
      image: "/lovable-uploads/kentucky-location.jpg",
      description: "Covering Louisville, Lexington and surrounding communities"
    },
  ];

  const testimonials = [
    {
      quote: "Working with National Mobile X-Ray has given me the flexibility I need while still advancing my career. The team is supportive and the equipment is top-notch.",
      author: "Sarah J.",
      role: "Radiologic Technologist",
      location: "Texas",
      image: "/lovable-uploads/rad-tech-testimonial.jpg"
    },
    {
      quote: "I appreciate the independence and trust National Mobile X-Ray gives its technologists. I've grown professionally while maintaining a great work-life balance.",
      author: "Marcus T.",
      role: "Ultrasound Technologist",
      location: "North Carolina",
      image: "/lovable-uploads/ultrasound-tech-testimonial.jpg"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanyOverview />
        <Benefits />
        
        {/* States Coverage Section with Enhanced Imagery */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-10">
              <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Coverage Area</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Serving Five States
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                National Mobile X-Ray provides diagnostic services across multiple states with local licensing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {states.map((state) => (
                <div key={state.name} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition group cursor-default h-full">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={state.image} 
                      alt={`${state.name} location`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{state.name}</h3>
                      <span className="text-2xl font-bold text-brand-red">{state.abbr}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{state.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <LocationsMap />
        <DailyLife />
        
        {/* Testimonials Section with Images */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-10">
              <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Testimonials</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Our Team Says
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.author} - ${testimonial.role}`}
                      className="w-full h-full object-cover"
                      style={{ minHeight: "100%" }}
                    />
                  </div>
                  <div className="p-6 w-full md:w-2/3">
                    <div className="text-xl italic text-gray-700 mb-4">"{testimonial.quote}"</div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red font-semibold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Role Types Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-10">
              <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Career Paths</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Find Your Perfect Role
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Explore specialized opportunities for healthcare professionals in mobile diagnostics
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* X-Ray Tech Card */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/lovable-uploads/xray-tech.jpg" 
                    alt="Radiologic Technologist" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Radiologic Technologist</h3>
                  <p className="text-gray-600 mb-4">
                    Take your X-Ray career mobile with independence, competitive pay, and state-of-the-art portable equipment.
                  </p>
                  <Link
                    to="/jobs?role=rad-tech"
                    className="inline-flex items-center text-brand-red font-medium hover:text-red-700 transition"
                  >
                    View Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              {/* Ultrasound Tech Card */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/lovable-uploads/ultrasound-tech.jpg" 
                    alt="Ultrasound Technologist" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ultrasound Technologist</h3>
                  <p className="text-gray-600 mb-4">
                    Join our team of skilled sonographers and bring vital diagnostic services directly to patients.
                  </p>
                  <Link
                    to="/jobs?role=ultrasound"
                    className="inline-flex items-center text-brand-red font-medium hover:text-red-700 transition"
                  >
                    View Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              {/* EKG Tech Card */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/lovable-uploads/ekg-tech.jpg" 
                    alt="EKG Technician" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">EKG Technician</h3>
                  <p className="text-gray-600 mb-4">
                    Deliver critical cardiac diagnostic services in a mobile setting with flexible scheduling.
                  </p>
                  <Link
                    to="/jobs?role=ekg"
                    className="inline-flex items-center text-brand-red font-medium hover:text-red-700 transition"
                  >
                    View Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section with Updated Copy */}
        <div className="bg-gray-900">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="bg-brand-red rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-12 sm:p-12 lg:flex lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Ready to start your career?
                  </h2>
                  <p className="mt-4 text-lg text-red-100">
                    Join our team of mobile diagnostic professionals today and make a real difference.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                  <Link
                    to="/jobs"
                    className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-brand-red shadow-sm hover:bg-gray-100 transition"
                  >
                    View Open Positions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
