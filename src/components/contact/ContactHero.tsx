
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">We're Here to Help You Get Started</h1>
            <p className="text-lg text-gray-600 mb-8">
              Have a question about working with us? Reach out today – we'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-black hover:bg-gray-800 text-white"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Send Message
              </Button>
              <Link to="/jobs">
                <Button variant="outline">
                  Explore Careers
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[500px]">
              <div className="col-span-2 row-span-1 bg-gray-200 rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Mobile X-Ray Team" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-1 row-span-2 bg-gray-200 rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Mobile X-Ray Equipment" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-1 row-span-1 bg-gray-200 rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Patient Care" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-1 row-span-1 bg-gray-200 rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Mobile X-Ray Van" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-2 row-span-1 bg-gray-200 rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Technologist at Work" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
