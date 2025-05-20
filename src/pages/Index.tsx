
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const benefitCards = [
    {
      title: "Why Choose National Mobile X-Ray?",
      description: "Discover What Sets Us Apart",
      image: "/placeholder.svg"
    },
    {
      title: "Tuition Reimbursement: Invest in Your Future",
      description: "Supporting Your Continuing Education",
      image: "/placeholder.svg"
    },
    {
      title: "Relocation Assistance: Making Your Move to New Opportunities Seamless",
      description: "We've Got You Covered",
      image: "/placeholder.svg"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Your Career. Our Commitment.</h1>
              <p className="text-xl text-gray-600 mb-8">
                We're committed to helping you build a thriving career in mobile diagnostics while delivering exceptional patient care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/jobs" 
                  className="rounded-md bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800 transition"
                >
                  Find Opportunities
                </Link>
                <Link 
                  to="/contact" 
                  className="rounded-md bg-white border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Image Banner */}
        <section className="bg-gray-100">
          <div className="container mx-auto px-4 py-12">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Mobile X-Ray Technologist" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Discover the Exceptional Benefits of Joining Our Team at National Mobile X-Ray
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitCards.map((card, index) => (
                <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <Link
                      to="/benefits"
                      className="inline-flex items-center text-brand-red font-medium hover:text-red-700 transition"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tuition Reimbursement */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Invest in Your Future with Our Tuition Reimbursement Program
                </h2>
                <p className="text-gray-600 mb-6">
                  National Mobile X-Ray is proud to offer tuition reimbursement to help our team members advance their education and professional development. We're committed to helping you grow your skills and career path.
                </p>
                <Link
                  to="/benefits"
                  className="inline-flex items-center text-brand-red font-medium hover:text-red-700 transition"
                >
                  Learn More About Benefits
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Education and Growth" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Relocation Support */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Relocation Support" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="md:order-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Seamless Relocation Support for Your Career
                </h2>
                <p className="text-gray-600 mb-6">
                  Moving for a new position? National Mobile X-Ray provides comprehensive relocation assistance to help make your transition smooth and stress-free, allowing you to focus on what matters most.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">Housing Assistance</h3>
                      <p className="mt-1 text-sm text-gray-500">Support finding suitable housing options</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">Moving Expenses</h3>
                      <p className="mt-1 text-sm text-gray-500">Financial support for relocation costs</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-brand-red font-medium hover:text-red-700 transition"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Bonus */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Earn Bonuses by Referring Your Friends
                </h2>
                <p className="text-gray-600 mb-6">
                  Know someone who would be a great fit for our team? Refer qualified candidates and earn a bonus when they join National Mobile X-Ray!
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">Easy Process</h3>
                      <p className="mt-1 text-sm text-gray-500">Simple referral submission system</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">Generous Rewards</h3>
                      <p className="mt-1 text-sm text-gray-500">Competitive bonus for successful hires</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    to="/jobs"
                    className="inline-flex items-center text-brand-red font-medium hover:text-red-700 transition"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Referral Program" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Work-Life Balance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Embrace Your Work-Life Balance with Us
              </h2>
              <p className="text-lg text-gray-600">
                National Mobile X-Ray is committed to your well-being. We offer a flexible environment that supports both your professional and personal needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Independence in the Field</h3>
                <p className="text-gray-600">Enjoy autonomy in your daily work while receiving support when you need it</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Supporting Leadership Team</h3>
                <p className="text-gray-600">Get guidance from leaders who understand the unique challenges of mobile healthcare</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Full-Time and Part-Time Opportunities Available</h3>
                <p className="text-gray-600">Choose the schedule that works best for your lifestyle and career goals</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Start Your Rewarding Career Today
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join National Mobile X-Ray today and embrace new opportunities for growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/jobs" 
                  className="rounded-md bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800 transition"
                >
                  Apply Now
                </Link>
                <Link 
                  to="/about" 
                  className="rounded-md bg-white border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
