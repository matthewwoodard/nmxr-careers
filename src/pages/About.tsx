
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyOverview from "@/components/CompanyOverview";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <CompanyOverview />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At National Mobile X-Ray, our mission is to provide high-quality, convenient diagnostic services to patients who cannot easily travel to traditional imaging centers. We believe that healthcare should be accessible to everyone, regardless of their mobility limitations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                By bringing our services directly to patients in skilled nursing facilities, assisted living communities, and private homes, we eliminate transportation barriers and reduce stress for patients who may be frail, elderly, or recovering from illness or injury.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8">Our History</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2010, National Mobile X-Ray began with a small team of dedicated healthcare professionals serving a handful of facilities in Texas. Over the years, we've expanded our operations to multiple states, growing our team and capabilities while maintaining our commitment to exceptional patient care.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, we serve thousands of patients across TX, NC, VA, GA, and KY, with plans for continued expansion to meet the growing need for mobile diagnostic services nationwide.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
