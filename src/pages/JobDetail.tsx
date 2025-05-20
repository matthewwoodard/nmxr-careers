import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Award, Briefcase, CalendarCheck, DollarSign, MapPin, Star, User } from "lucide-react";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="bg-white p-8 rounded-lg shadow text-center max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h2>
            <p className="text-gray-600 mb-6">
              The position you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/jobs"
              className="inline-flex items-center rounded-md bg-brand-red px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 transition"
            >
              Browse All Positions
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Determine which hero image to use based on job type
  const getHeroImage = () => {
    if (job.title.toLowerCase().includes("x-ray") || job.title.toLowerCase().includes("radiologic")) {
      return "/placeholder.svg";
    } else if (job.title.toLowerCase().includes("ultrasound") || job.title.toLowerCase().includes("sonographer")) {
      return "/placeholder.svg";
    } else if (job.title.toLowerCase().includes("ekg")) {
      return "/placeholder.svg";
    }
    return "/placeholder.svg"; // default image
  };

  // Get the state image based on job location
  const getStateImage = () => {
    const state = job.location.split(',')[1]?.trim();
    if (state === "TX" || job.location.includes("Texas")) {
      return "/placeholder.svg";
    } else if (state === "NC" || job.location.includes("North Carolina")) {
      return "/placeholder.svg";
    } else if (state === "VA" || job.location.includes("Virginia")) {
      return "/placeholder.svg";
    } else if (state === "GA" || job.location.includes("Georgia")) {
      return "/placeholder.svg";
    } else if (state === "KY" || job.location.includes("Kentucky")) {
      return "/placeholder.svg";
    }
    return "/placeholder.svg"; // default image
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Banner with Job-Specific Image */}
      <div className="relative">
        <div className="h-64 md:h-80 overflow-hidden">
          <img 
            src={getHeroImage()} 
            alt={job.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{job.title}</h1>
            <p className="text-xl opacity-90">{job.location}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-4">
            <ol className="flex space-x-2 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-brand-red transition">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/jobs" className="hover:text-brand-red transition">Jobs</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium truncate">{job.title}</li>
            </ol>
          </nav>
          
          {/* Job header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 mb-6">
            <div className="sm:flex sm:items-start sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{job.title}</h1>
                <div className="mt-2 flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 text-brand-red mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-brand-red"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 sm:mt-0">
                <Link
                  to={`/apply?job=${job.id}`}
                  className="inline-flex items-center rounded-md bg-brand-red px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 transition"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Job description */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Position Overview</h2>
                <p className="text-gray-700 mb-6">{job.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsibilities</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Equipment Used</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                  {job.equipment.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
                
                {job.stateLicensing && (
                  <div className="bg-gray-50 rounded-md p-4 border-l-4 border-brand-red">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">State Licensing Information</h3>
                    <p className="text-gray-700">{job.stateLicensing}</p>
                  </div>
                )}
              </div>
              
              {/* Vehicle Features */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Company Vehicle</h2>
                  <img src="/placeholder.svg" alt="Subaru" className="h-8" />
                </div>
                
                <div className="mb-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="2025 Subaru Forester" 
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-700">
                    As a mobile technologist, you'll drive our custom 2025 Subaru Forester with safety upgrades and specialized equipment for diagnostic services.
                  </p>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Vehicle Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-900">Winch System</p>
                    <p className="text-gray-600 text-sm">Reduces physical strain when loading equipment</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-900">Inverter System</p>
                    <p className="text-gray-600 text-sm">For on-the-go equipment charging</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-900">GPS & Camera System</p>
                    <p className="text-gray-600 text-sm">Enhanced security and navigation</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="font-medium text-gray-900">Custom Layout</p>
                    <p className="text-gray-600 text-sm">Optimized for technologist workflow</p>
                  </div>
                </div>
              </div>
              
              {/* Location Specific Info */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Location Information</h2>
                <div className="mb-6">
                  <img 
                    src={getStateImage()} 
                    alt={job.location} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.location}</h3>
                    <p className="text-gray-700 mt-1">
                      This position covers facilities in the {job.location.split(',')[0]} area. Technologists typically service a region within 50-75 miles of their home base.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Quick Info Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Briefcase className="h-5 w-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Job Type</p>
                      <p className="text-gray-600">Full-time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Salary Range</p>
                      <p className="text-gray-600">Competitive, based on experience</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CalendarCheck className="h-5 w-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Schedule</p>
                      <p className="text-gray-600">Flexible, with on-call options</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Experience Level</p>
                      <p className="text-gray-600">Entry-level to advanced</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Certification</p>
                      <p className="text-gray-600">Required (see job details)</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Benefits box with Updated Content */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top-Tier Benefits</h3>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm italic">
                    Whether you're a new grad or a seasoned technologist, we provide the tools, training, and flexibility to help you thrive.
                  </p>
                </div>
              </div>
              
              {/* Day in the Life */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">A Typical Day</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-red-50 rounded-full w-6 h-6 flex items-center justify-center text-brand-red font-medium mr-2 flex-shrink-0">1</div>
                    <span className="text-gray-700">Drive company vehicle to assigned facilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-50 rounded-full w-6 h-6 flex items-center justify-center text-brand-red font-medium mr-2 flex-shrink-0">2</div>
                    <span className="text-gray-700">Unload and operate portable imaging equipment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-50 rounded-full w-6 h-6 flex items-center justify-center text-brand-red font-medium mr-2 flex-shrink-0">3</div>
                    <span className="text-gray-700">Capture and transmit studies wirelessly</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-50 rounded-full w-6 h-6 flex items-center justify-center text-brand-red font-medium mr-2 flex-shrink-0">4</div>
                    <span className="text-gray-700">Repeat across multiple sites during shift</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-600 text-sm">
                  Approximately 60-70% of your day will be in transit between locations with independence and decision-making built into your workflow.
                </p>
              </div>
              
              {/* Apply now box with Updated CTA */}
              <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Take the First Step</h3>
                <p className="text-gray-600 mb-4">Submit your application today and join our team of mobile diagnostic professionals.</p>
                <Link
                  to={`/apply?job=${job.id}`}
                  className="inline-flex justify-center w-full items-center rounded-md bg-brand-red px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 transition"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Know someone perfect for this role?
                  </p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Job link copied to clipboard!");
                    }}
                    className="mt-2 text-brand-red text-sm font-medium hover:text-red-700 transition"
                  >
                    Share this position
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetail;
