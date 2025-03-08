
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Testimonios = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Testimonios;
