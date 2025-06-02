
import { Mail } from "lucide-react";

const RecruitingTeam = () => {
  return (
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
                <p className="text-gray-600">Phone: 833-431-4675</p>
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
  );
};

export default RecruitingTeam;
