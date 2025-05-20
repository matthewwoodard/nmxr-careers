
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-90"></div>
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 relative flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Your Career in</span>
            <span className="block text-brand-red">Mobile Diagnostics</span>
          </h1>
          <p className="mt-6 max-w-lg text-xl text-gray-500">
            Join National Mobile X-Ray and deliver essential diagnostic services across five states. Flexible schedules, competitive pay, and a supportive team.
          </p>
          <div className="mt-10 flex items-center space-x-4">
            <Link
              to="/jobs"
              className="rounded-md bg-brand-red px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 transition"
            >
              Start Your Career Today
            </Link>
            <Link
              to="/about"
              className="text-brand-red hover:text-red-700 font-medium transition flex items-center"
            >
              Learn More
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Now Hiring:</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">X-Ray Technologists</h3>
                  <p className="text-gray-600">ARRT certified in TX, NC, VA, GA, KY</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Ultrasound Technologists</h3>
                  <p className="text-gray-600">ARDMS certified professionals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">EKG Technicians</h3>
                  <p className="text-gray-600">Certified technicians for cardiac services</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/jobs"
                className="text-brand-red text-sm font-medium flex items-center hover:text-red-700 transition"
              >
                View all openings
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
