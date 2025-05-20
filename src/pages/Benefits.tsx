
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading pay rates with performance bonuses and incentives"
    },
    {
      title: "Flexible Scheduling",
      description: "Multiple shift options with the ability to create your ideal work-life balance"
    },
    {
      title: "Company Vehicle",
      description: "New 2025 Subaru Forester equipped with mobile imaging technology and navigation"
    },
    {
      title: "Comprehensive Health Benefits",
      description: "Medical, dental, and vision insurance with coverage options for dependents"
    },
    {
      title: "Retirement Planning",
      description: "401(k) plan with company matching to help you save for the future"
    },
    {
      title: "Paid Time Off",
      description: "Generous PTO package including vacation days, sick leave, and holidays"
    },
    {
      title: "Continuing Education",
      description: "Tuition assistance and paid training to advance your career and maintain certifications"
    },
    {
      title: "Career Advancement",
      description: "Clear paths for growth with opportunities to move into leadership roles"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Why Choose Us</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive Benefits Package
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We take care of our team so you can focus on taking care of patients
              </p>
            </div>
            
            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-brand-red text-white">
                        <Check className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Perks</h3>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-brand-red">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">Employee referral program with bonuses</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-brand-red">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">Remote work options for certain positions</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-brand-red">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">Professional development workshops</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-brand-red">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">Wellness programs and gym membership discounts</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-brand-red">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">Company-sponsored team building events</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-brand-red">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">Mental health support resources</p>
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

export default Benefits;
