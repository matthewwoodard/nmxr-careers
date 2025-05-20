import { Link } from "react-router-dom";

const CompanyOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mobile Imaging. Flexible Careers. Real Impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-gray-700 mb-6">
              National Mobile X-Ray is a full-service mobile radiology provider. We bring bedside X-Ray, Ultrasound, and EKG services directly to patients in skilled nursing facilities, assisted living communities, and homes.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With full operations across TX, NC, VA, GA, and KY—and more coming soon—we offer flexible, rewarding careers for passionate healthcare professionals.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Privately Owned</h3>
                <p className="text-gray-600">Greater operational flexibility and responsive leadership</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Teleradiology</h3>
                <p className="text-gray-600">Operates a successful teleradiology company for integrated care</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Employee-First</h3>
                <p className="text-gray-600">Culture with autonomy and support for every team member</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Modern Fleet</h3>
                <p className="text-gray-600">New 2025 Subaru Forester mobile fleet with safety features</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                to="/jobs"
                className="inline-flex items-center rounded-md bg-brand-red px-5 py-2.5 text-base font-medium text-white shadow-sm hover:bg-red-700 transition"
              >
                Join Our Team
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Mobile X-Ray Technologist"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-50 rounded-lg shadow-lg hidden md:flex items-center justify-center p-4">
                <img
                  src="/placeholder.svg"
                  alt="National Mobile X-Ray Logo"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
