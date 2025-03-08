
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Servicios;
