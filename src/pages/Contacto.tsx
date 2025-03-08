
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Cat, Dog, PawPrint } from "lucide-react";

const Contacto = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-hotel-pastel-yellow/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-hotel-soft-lavender/20 rounded-full blur-3xl -z-10"></div>
      
      {/* Cute animal silhouettes */}
      <div className="absolute top-1/4 right-10 text-hotel-purple/10 -z-5">
        <Cat size={100} className="animate-bounce-slight" style={{ animationDelay: "0.3s" }} />
      </div>
      <div className="absolute bottom-1/4 left-10 text-hotel-orange/10 -z-5">
        <Dog size={120} className="animate-bounce-slight" style={{ animationDelay: "0.7s" }} />
      </div>
      <div className="absolute top-1/2 left-1/3 text-hotel-pastel-green/10 -z-5">
        <PawPrint size={80} className="animate-bounce-slight" style={{ animationDelay: "0.5s" }} />
      </div>
      
      <Navbar />
      <div className="pt-24">
        <div className="text-center py-10 bg-gradient-to-b from-white to-hotel-light-orange/10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-hotel-purple to-hotel-dark-purple">
            Contacto
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Estamos aquí para responder tus preguntas y brindarte toda la información que tú y tu mascota necesitan.
          </p>
        </div>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
