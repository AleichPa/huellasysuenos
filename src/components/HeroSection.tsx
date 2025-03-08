
import { Button } from "@/components/ui/button";
import { Heart, PawPrint, Cat, Dog, Bird } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-32 pb-16 md:py-32 relative overflow-hidden">
      {/* Background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-hotel-light-orange/30 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-12 left-10 w-36 h-36 bg-hotel-pastel-yellow rounded-full blur-2xl -z-5 opacity-70"></div>
      <div className="absolute bottom-12 right-10 w-48 h-48 bg-hotel-pastel-green rounded-full blur-2xl -z-5 opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-hotel-soft-lavender rounded-full blur-2xl -z-5 opacity-50"></div>
      
      {/* Cute animal patterns */}
      <div className="absolute top-1/4 right-10 text-hotel-purple/20 -z-5 animate-bounce-slight" style={{ animationDelay: "0.5s" }}>
        <Cat size={70} />
      </div>
      <div className="absolute bottom-1/4 left-10 text-hotel-orange/20 -z-5 animate-bounce-slight" style={{ animationDelay: "0.3s" }}>
        <Dog size={90} />
      </div>
      <div className="absolute top-3/4 right-1/4 text-hotel-pastel-green/40 -z-5 animate-bounce-slight" style={{ animationDelay: "0.7s" }}>
        <Bird size={60} />
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left relative">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hotel-purple/20 to-hotel-light-orange/40 px-4 py-2 rounded-full mb-6 shadow-sm">
            <PawPrint size={16} className="text-hotel-orange" />
            <span className="text-sm font-medium text-hotel-orange">¡El hogar más dulce para tu mascota!</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Donde tus mascotas <span className="text-transparent bg-clip-text bg-gradient-to-r from-hotel-purple to-hotel-dark-purple">se sienten en casa</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            En Huellas y Sueños, mimamos a tu mascota con todo el cariño y diversión que merece mientras tú estás fuera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild className="bg-gradient-to-r from-hotel-purple to-hotel-dark-purple hover:from-hotel-dark-purple hover:to-hotel-purple text-white px-6 py-6 h-auto shadow-md hover:shadow-lg transition-all rounded-full">
              <Link to="/reservas" className="flex items-center gap-2">
                <span>Reservar Ahora</span>
                <Heart className="h-4 w-4 animate-pulse" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="border-2 border-hotel-purple/50 text-hotel-purple hover:bg-hotel-purple/10 px-6 py-6 h-auto hover:shadow-md transition-all rounded-full">
              <Link to="/servicios">Conocer Más</Link>
            </Button>
          </div>
          
          {/* Decorative badge */}
          <div className="hidden md:block absolute -bottom-10 -left-10 rotate-12 bg-hotel-purple text-white text-xs px-4 py-2 rounded-full shadow-md animate-wiggle">
            ¡Con amor y mimos!
          </div>
        </div>
        <div className="relative mt-8 md:mt-0">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
              alt="Mascota feliz en Huellas y Sueños" 
              className="w-full h-auto rounded-2xl"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-hotel-purple/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-4 -right-4 w-28 h-28 bg-hotel-orange/30 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-36 h-36 bg-hotel-soft-lavender/40 rounded-full"></div>
          
          {/* Decorative floating paw prints */}
          <div className="absolute top-0 right-0 transform -translate-y-1/2 -translate-x-1/2">
            <div className="relative">
              <PawPrint size={28} className="text-hotel-orange animate-bounce" style={{ animationDelay: '0.1s', animationDuration: '3s' }} />
            </div>
          </div>
          <div className="absolute top-1/3 right-1/4">
            <div className="relative">
              <PawPrint size={22} className="text-hotel-purple animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '2.8s' }} />
            </div>
          </div>
          <div className="absolute bottom-0 left-1/4 transform translate-y-1/2">
            <div className="relative">
              <PawPrint size={20} className="text-hotel-pastel-green animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional cute decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 20 C 10 10, 30 10, 30 20 C 30 10, 50 10, 60 20 L 60 20 L 0 20' fill='%23FFECD9' /%3E%3C/svg%3E")`,
        backgroundSize: '60px 20px'
      }}></div>
    </section>
  );
};

export default HeroSection;
