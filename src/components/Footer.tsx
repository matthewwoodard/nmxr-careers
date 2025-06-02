
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-700">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/a4eb3ee7-40b3-4ea1-8e9e-150416b3bef3.png" 
              alt="National Mobile X-Ray Logo" 
              className="h-10 w-auto" 
            />
            <p className="text-gray-300 text-sm">
              Providing mobile diagnostic services nationwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-red transition text-sm">Home</Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-brand-red transition text-sm">Jobs</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-red transition text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/refer" className="text-gray-300 hover:text-brand-red transition text-sm">Refer a Friend</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-red transition text-sm">Mobile X-Ray</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-red transition text-sm">Mobile Ultrasound</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-red transition text-sm">EKG Services</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">Recruiter: (555) 123-4567</span>
              </li>
              <li className="flex items-start text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">careers@nationalmobilexray.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="rounded-md bg-white border border-brand-red px-4 py-2 text-sm font-medium text-brand-red shadow-sm hover:bg-brand-red hover:text-white transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} National Mobile X-Ray. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
