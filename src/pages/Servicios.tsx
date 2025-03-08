
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Servicios = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-hotel-light-orange/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-hotel-light-blue/20 rounded-full blur-3xl -z-10"></div>
      
      <Navbar />
      <div className="pt-24">
        <div className="text-center py-10 bg-gradient-to-b from-white to-hotel-light-orange/10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">Nuestros Servicios</h1>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Descubre todos los servicios que ofrecemos para hacer que la estancia de tu mascota sea inolvidable.
          </p>
        </div>
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Servicios;
