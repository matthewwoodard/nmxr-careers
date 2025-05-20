
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const states = [
    { name: "Texas", abbr: "TX" },
    { name: "North Carolina", abbr: "NC" },
    { name: "Virginia", abbr: "VA" },
    { name: "Georgia", abbr: "GA" },
    { name: "Kentucky", abbr: "KY" },
  ];

  const testimonials = [
    {
      quote: "Working with National Mobile X-Ray has given me the flexibility I need while still advancing my career. The team is supportive and the equipment is top-notch.",
      author: "Sarah J.",
      role: "X-Ray Technologist",
      location: "Texas",
    },
    {
      quote: "I appreciate the independence and trust National Mobile X-Ray gives its technologists. I've grown professionally while maintaining a great work-life balance.",
      author: "Marcus T.",
      role: "Ultrasound Technologist",
      location: "North Carolina",
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        
        {/* States Coverage Section */}
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
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {states.map((state) => (
                <div key={state.name} className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm hover:shadow-md transition group cursor-default">
                  <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-brand-red transition">
                    {state.abbr}
                  </div>
                  <div className="text-gray-600">{state.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
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
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
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
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gray-900">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="bg-brand-red rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-12 sm:p-12 lg:flex lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Ready to start your career?
                  </h2>
                  <p className="mt-4 text-lg text-red-100">
                    Join our team of mobile diagnostic professionals today.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                  <Link
                    to="/jobs"
                    className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-brand-red shadow-sm hover:bg-gray-100 transition"
                  >
                    View Open Positions
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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
