
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Testimonios = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-hotel-purple/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-hotel-orange/5 rounded-full blur-3xl -z-10"></div>
      
      <Navbar />
      <div className="pt-24">
        <div className="text-center py-10 bg-gradient-to-b from-white to-hotel-light-blue/10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">Testimonios de Clientes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Conoce las experiencias de quienes ya han confiado en nosotros para el cuidado de sus mascotas.
          </p>
        </div>
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Testimonios;
