
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What qualifications are required to work as a mobile x-ray technician?",
      answer: "You need to be a certified Radiologic Technologist with ARRT certification and state licensing. Most positions require at least 1-2 years of experience in radiography."
    },
    {
      question: "What areas do you service?",
      answer: "We currently provide mobile x-ray services across Texas, North Carolina, Virginia, Georgia, and Kentucky, with plans to expand to additional states."
    },
    {
      question: "What are the typical work hours for a mobile x-ray technician?",
      answer: "Our technicians typically work flexible schedules including day, evening, and weekend shifts. We offer both full-time and part-time positions to accommodate different lifestyle needs."
    },
    {
      question: "Do you provide company vehicles?",
      answer: "Yes, most of our positions include a company vehicle for use during work hours. Some positions may offer a vehicle allowance instead."
    },
    {
      question: "What equipment do your technicians use?",
      answer: "Our technicians use state-of-the-art portable digital x-ray equipment that is lightweight, efficient, and produces high-quality diagnostic images."
    },
    {
      question: "What benefits do you offer?",
      answer: "We offer competitive salaries, health insurance, retirement plans, paid time off, continuing education assistance, and career advancement opportunities. Visit our Benefits page for more details."
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700">
                  Have more questions? Contact us at{" "}
                  <a href="mailto:careers@nationalmobilexray.com" className="text-brand-red hover:underline">
                    careers@nationalmobilexray.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
