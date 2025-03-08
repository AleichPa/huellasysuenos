
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contacto = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
