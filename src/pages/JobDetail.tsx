
import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

  return (
    <>
      <Navbar />
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
                  <svg className="h-5 w-5 text-brand-red mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
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
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Benefits box */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Apply now box */}
              <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interested in this position?</h3>
                <p className="text-gray-600 mb-4">Submit your application today and join our team of mobile diagnostic professionals.</p>
                <Link
                  to={`/apply?job=${job.id}`}
                  className="inline-flex justify-center w-full items-center rounded-md bg-brand-red px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 transition"
                >
                  Apply Now
                </Link>
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
