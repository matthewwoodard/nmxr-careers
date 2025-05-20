
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const jobFAQs = [
    {
      question: "Available positions at NMXR",
      answer: "National Mobile X-Ray offers various roles including Radiologic Technologists and Ultrasound Technologists. We also hire administrative professionals to support our field operations. Check our careers page for current openings."
    },
    {
      question: "Hiring states",
      answer: "We are currently hiring in Texas, North Carolina, Georgia, Virginia, and Kentucky. Our expansion plans mean more states will be added in the near future."
    },
    {
      question: "Full-time and part-time",
      answer: "We offer both full-time and part-time roles to accommodate different lifestyles. Our flexibility allows us to schedule around your needs to maintain a good work-life balance if your availability permits."
    },
    {
      question: "New graduate applications",
      answer: "Absolutely! We welcome new graduates to apply and learn their career with us. We have a structured training program to help new graduates transition to the field environment successfully."
    },
    {
      question: "Application process",
      answer: "To apply, simply visit our careers page and select the position you're interested in. The application process is straightforward, and our team will review your application and reach out to you accordingly."
    },
  ];
  
  const dailyWorkFAQs = [
    {
      question: "What does a typical day look like?",
      answer: "A typical day for a mobile technologist involves traveling to care locations, performing imaging procedures, and interacting with patients. You'll have a daily schedule of assignments and will travel in our company vehicle while operating independently with remote support."
    },
    {
      question: "Will I be working independently?",
      answer: "Yes, as a mobile technologist, you will often work independently. This role allows you to manage your schedule and work autonomously. Independence is a key aspect of the job."
    },
    {
      question: "Is a company vehicle provided?",
      answer: "Yes, we provide a company vehicle for our mobile technologists. This vehicle is equipped with the necessary tools for your job."
    },
    {
      question: "How flexible are scheduling options?",
      answer: "Scheduling options are designed to be flexible to accommodate your needs. We balance service reliability and work-life balance for our team members. We can discuss your availability during the hiring process."
    }
  ];

  const certificationFAQs = [
    {
      question: "What certifications are required?",
      answer: "For most positions, you'll need an ARRT certification for Radiologic Technologists or ARDMS certification for Ultrasound Technologists. Additional state licensing may also be required depending on your location."
    },
    {
      question: "Registry eligible but uncertified?",
      answer: "If you're registry-eligible but not yet certified, we encourage you to apply. Your eligibility demonstrates your commitment to the profession. We value new talent and offer support and certification guidance."
    },
    {
      question: "State license requirements?",
      answer: "Yes, licensing requirements vary by state. It's essential to check the specific regulations in the states where you wish to work. We recommend visiting the state health department website for the proper information."
    },
    {
      question: "Do you offer tuition reimbursement?",
      answer: "Yes, we offer tuition reimbursement to support your continuing education. This benefit is designed to help you advance your skills and career. Check our benefits section for more details on eligibility."
    },
    {
      question: "Is relocation assistance available?",
      answer: "Absolutely! We provide relocation assistance for staff at certain roles before they join our company. We want to make sure the transition to your new role is as smooth as possible and will work with you to support your move."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Questions? We Have Answers.</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Discover what it's like to be part of our team at National Mobile X-Ray. We're here to provide you with all the information you need to make a confident decision about your career.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="bg-black hover:bg-gray-800 text-white">
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/jobs">
                    <Button variant="outline">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Mobile X-Ray Team" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Job Opportunities FAQs */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h2>
              <p className="text-gray-600">
                Explore our frequently asked questions to understand your career journey with us.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {jobFAQs.map((faq, index) => (
                  <AccordionItem 
                    value={`job-item-${index}`} 
                    key={index}
                    className="border border-gray-200 rounded-md bg-white px-4"
                  >
                    <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="max-w-3xl mx-auto mt-12">
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Daily Work FAQs */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h2>
              <p className="text-gray-600">
                Explore our frequently asked questions to learn more about working with National Mobile X-Ray.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {dailyWorkFAQs.map((faq, index) => (
                  <AccordionItem 
                    value={`daily-work-item-${index}`} 
                    key={index}
                    className="border border-gray-200 rounded-md bg-white px-4"
                  >
                    <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="max-w-3xl mx-auto mt-8">
              <div 
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Have more questions?</h3>
                <p className="text-gray-600 mb-4">
                  We're here to address all your questions. Reach out for assistance or more information.
                </p>
                <div className="flex justify-center gap-4">
                  <Link to="/contact">
                    <Button className="bg-black hover:bg-gray-800 text-white">
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/jobs">
                    <Button variant="outline">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Certification FAQs */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h2>
              <p className="text-gray-600">
                Explore our frequently asked questions to learn about joining National Mobile X-Ray.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {certificationFAQs.map((faq, index) => (
                  <AccordionItem 
                    value={`certification-item-${index}`} 
                    key={index}
                    className="border border-gray-200 rounded-md bg-white px-4"
                  >
                    <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
