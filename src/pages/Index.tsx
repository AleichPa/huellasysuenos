
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RoomsSection from "@/components/RoomsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      
      {/* Preview section */}
      <div className="py-16 bg-gradient-to-b from-white to-hotel-light-orange/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center text-center group">
              <div className="mb-4 p-3 bg-hotel-light-orange/20 rounded-full group-hover:bg-hotel-light-orange/40 transition-colors">
                <PawPrint className="h-8 w-8 text-hotel-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cuidado Personalizado</h3>
              <p className="text-gray-600 mb-4">Atención individualizada adaptada a las necesidades específicas de tu mascota.</p>
              <Link to="/servicios" className="text-hotel-purple font-medium group-hover:underline flex items-center gap-1">
                <span>Ver servicios</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center text-center group">
              <div className="mb-4 p-3 bg-hotel-light-blue/30 rounded-full group-hover:bg-hotel-light-blue/50 transition-colors">
                <Heart className="h-8 w-8 text-hotel-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ambiente Acogedor</h3>
              <p className="text-gray-600 mb-4">Espacios diseñados para que tu mascota se sienta cómoda y segura durante su estadía.</p>
              <Link to="/habitaciones" className="text-hotel-purple font-medium group-hover:underline flex items-center gap-1">
                <span>Ver habitaciones</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center text-center group">
              <div className="mb-4 p-3 bg-hotel-cream/50 rounded-full group-hover:bg-hotel-cream/70 transition-colors">
                <PawPrint className="h-8 w-8 text-hotel-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiencia Feliz</h3>
              <p className="text-gray-600 mb-4">Actividades divertidas y estimulantes para que tu mascota disfrute al máximo su estancia.</p>
              <Link to="/testimonios" className="text-hotel-purple font-medium group-hover:underline flex items-center gap-1">
                <span>Ver testimonios</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Preview of Services */}
      <ServicesSection />
      
      {/* Call to action */}
      <div className="py-16 relative overflow-hidden bg-gradient-to-r from-hotel-purple/90 to-hotel-dark-purple text-white">
        <div className="absolute inset-0 pet-bg opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para darle a tu mascota unas vacaciones de ensueño?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Haz tu reserva ahora y asegura el mejor cuidado para tu mejor amigo mientras tú disfrutas de tu tiempo libre.
          </p>
          <Button asChild size="lg" className="bg-white text-hotel-purple hover:bg-white/90 shadow-xl">
            <Link to="/reservas" className="px-8 py-6 h-auto text-lg font-medium flex items-center gap-2">
              <span>Reservar Ahora</span>
              <Heart className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Preview of Rooms */}
      <RoomsSection />
      
      {/* Preview of Testimonials */}
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default Index;
