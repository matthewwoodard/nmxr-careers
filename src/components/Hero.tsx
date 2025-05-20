
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gray-50">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/hero-background.jpg" 
          alt="Mobile X-Ray technologist" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70 mix-blend-multiply"></div>
      </div>
      <div className="relative">
        <div className="container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0 text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Mobile Imaging.</span>
              <span className="block text-brand-red">Flexible Careers.</span>
              <span className="block text-white">Real Impact.</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-gray-300">
              Join National Mobile X-Ray and deliver essential diagnostic services across five states. Enjoy flexible schedules, competitive pay, and a supportive team.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/jobs"
                className="rounded-md bg-brand-red px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 transition"
              >
                View Open Positions
              </Link>
              <Link
                to="/about"
                className="rounded-md bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-medium text-white border border-white/30 hover:bg-white/20 transition flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 backdrop-blur-sm bg-white/95">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Now Hiring:</h2>
                <span className="bg-brand-red/10 text-brand-red text-sm font-semibold px-3 py-1 rounded-full">Multiple Locations</span>
              </div>
              
              <div className="space-y-6">
                <div className="group">
                  <Link to="/jobs?role=rad-tech" className="flex items-start hover:bg-gray-50 p-3 rounded-lg transition">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition">
                      <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-brand-red transition">X-Ray Technologists</h3>
                      <p className="text-gray-600">ARRT certified professionals needed in TX, NC, VA, GA, KY</p>
                    </div>
                    <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition">
                      <ArrowRight className="h-5 w-5 text-brand-red" />
                    </div>
                  </Link>
                </div>
                
                <div className="group">
                  <Link to="/jobs?role=ultrasound" className="flex items-start hover:bg-gray-50 p-3 rounded-lg transition">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition">
                      <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-brand-red transition">Ultrasound Technologists</h3>
                      <p className="text-gray-600">ARDMS certified sonographers - growing team</p>
                    </div>
                    <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition">
                      <ArrowRight className="h-5 w-5 text-brand-red" />
                    </div>
                  </Link>
                </div>
                
                <div className="group">
                  <Link to="/jobs?role=ekg" className="flex items-start hover:bg-gray-50 p-3 rounded-lg transition">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition">
                      <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-brand-red transition">EKG Technicians</h3>
                      <p className="text-gray-600">Certified technicians for mobile cardiac services</p>
                    </div>
                    <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition">
                      <ArrowRight className="h-5 w-5 text-brand-red" />
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  to="/jobs"
                  className="text-brand-red font-medium flex items-center hover:text-red-700 transition"
                >
                  View all openings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
