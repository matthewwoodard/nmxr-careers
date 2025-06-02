
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyOverview from "@/components/CompanyOverview";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <CompanyOverview />
        
        {/* The NMXR Difference */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The NMXR Difference</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-red mb-4">NMXR Mission</h3>
                  <p className="text-gray-700">
                    To provide exceptional mobile diagnostic services while creating meaningful careers for healthcare professionals who want to make a direct impact on patient care in their communities.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-red mb-4">NMXR Story</h3>
                  <p className="text-gray-700">
                    Founded with the vision of bringing healthcare directly to those who need it most, NMXR has grown from a small team serving local facilities to a nationwide provider of mobile diagnostic services.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-red mb-4">Independent Work</h3>
                  <p className="text-gray-700">
                    Enjoy the autonomy of managing your own schedule and patient interactions while being supported by a dedicated team that values your professional expertise.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-red mb-4">Travel & Explore</h3>
                  <p className="text-gray-700">
                    Experience new locations daily, visit different facilities, and build relationships across diverse communities while providing essential healthcare services.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-red mb-4">Critical Thinking</h3>
                  <p className="text-gray-700">
                    Apply your clinical skills in dynamic environments, making important decisions that directly impact patient outcomes and care quality.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-red mb-4">Patient-Centered Care</h3>
                  <p className="text-gray-700">
                    Focus on what matters most - providing compassionate, high-quality diagnostic services that improve patient outcomes and quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Your Career Matters */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Your Career Matters</h2>
              
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    At NMXR, your career isn't just a job - it's a meaningful contribution to healthcare that touches lives, strengthens communities, and makes a real difference where it's needed most.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Impact</h3>
                    <p className="text-gray-700">
                      Your work directly improves healthcare access in underserved communities, bringing essential diagnostic services to those who need them most.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Care</h3>
                    <p className="text-gray-700">
                      Help families care for their loved ones by providing convenient diagnostic services in nursing homes and assisted living facilities, reducing stress during difficult times.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h3>
                    <p className="text-gray-700">
                      Mobile technology allows you to assist patients in less fortunate situations who may not have reliable transportation or resources to access traditional imaging centers.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Growth</h3>
                    <p className="text-gray-700">
                      Improve your communication skills and clinical expertise by working alongside a high-level team of healthcare professionals dedicated to excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We Invest in Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">We Invest in Our Team</h2>
              
              <div className="text-center mb-12">
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Your success is our success. We believe in supporting our team members with competitive compensation, comprehensive benefits, and the resources you need to thrive.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Bonuses</h3>
                  <p className="text-gray-600">Rewarding exceptional performance and dedication with competitive bonus opportunities.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Uniform Allowance</h3>
                  <p className="text-gray-600">Professional uniforms provided to ensure you look and feel your best while representing NMXR.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center md:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Development</h3>
                  <p className="text-gray-600">Ongoing training and development opportunities to advance your skills and career.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
