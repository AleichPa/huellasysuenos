
import Navbar from "@/components/Navbar";
import RoomsSection from "@/components/RoomsSection";
import Footer from "@/components/Footer";
import { Cat, Dog, Bone, PawPrint } from "lucide-react";

const Habitaciones = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-hotel-pastel-green/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-hotel-pastel-yellow/20 rounded-full blur-3xl -z-10"></div>
      
      {/* Cute animal silhouettes */}
      <div className="absolute top-1/3 right-20 text-hotel-purple/10 -z-5">
        <Cat size={90} className="animate-bounce-slight" style={{ animationDelay: "0.2s" }} />
      </div>
      <div className="absolute bottom-1/3 left-20 text-hotel-orange/10 -z-5">
        <Dog size={100} className="animate-bounce-slight" style={{ animationDelay: "0.6s" }} />
      </div>
      <div className="absolute top-2/3 right-1/3 text-hotel-soft-lavender/10 -z-5">
        <Bone size={70} className="animate-bounce-slight" style={{ animationDelay: "0.4s" }} />
      </div>
      <div className="absolute top-1/2 left-1/4 text-hotel-pastel-green/10 -z-5">
        <PawPrint size={60} className="animate-bounce-slight" style={{ animationDelay: "0.8s" }} />
      </div>
      
      <Navbar />
      <div className="pt-24">
        <div className="text-center py-10 bg-gradient-to-b from-white to-hotel-light-blue/10 relative overflow-hidden">
          {/* Wavy top border */}
          <div className="absolute -top-10 left-0 w-full h-10 bg-repeat-x" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 0 C 10 10, 30 10, 30 0 C 30 10, 50 10, 60 0 L 60 0 L 0 0' fill='%23BDEFFF' /%3E%3C/svg%3E")`,
            backgroundSize: '60px 20px'
          }}></div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-hotel-purple to-hotel-dark-purple">
            Nuestras Habitaciones
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Espacios diseñados con amor para que tu mascota se sienta cómoda, feliz y como en casa.
          </p>
          
          {/* Cute paw decorations */}
          <div className="absolute bottom-2 left-1/4 text-hotel-purple/20">
            <PawPrint size={24} className="transform rotate-12" />
          </div>
          <div className="absolute top-1/2 right-1/4 text-hotel-orange/20">
            <PawPrint size={20} className="transform -rotate-12" />
          </div>
        </div>
        <RoomsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Habitaciones;
