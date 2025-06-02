
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import RecruitingTeam from "@/components/contact/RecruitingTeam";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <ContactHero />
        
        {/* Contact Information & Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
        
        <RecruitingTeam />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
