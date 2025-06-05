
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import RecruitingTeam from "@/components/contact/RecruitingTeam";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <RecruitingTeam />
      <Footer />
    </>
  );
};

export default Contact;
