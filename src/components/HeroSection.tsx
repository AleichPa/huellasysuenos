
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="hero-pattern pt-32 pb-16 md:py-32">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-hotel-light-orange px-4 py-2 rounded-full mb-6">
            <PawPrint size={16} className="text-hotel-orange" />
            <span className="text-sm font-medium text-hotel-orange">El mejor cuidado para tu mascota</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Donde tus mascotas <span className="text-hotel-purple">duermen como reyes</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            En Huellas y Sueños, nos dedicamos a darle a tu mascota una experiencia inolvidable mientras tú disfrutas de tu tiempo libre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-hotel-purple hover:bg-hotel-dark-purple text-white px-6 py-6 h-auto">
              Reservar Ahora
            </Button>
            <Button variant="outline" className="border-hotel-purple text-hotel-purple hover:bg-hotel-purple/10 px-6 py-6 h-auto">
              Conocer Más
            </Button>
          </div>
        </div>
        <div className="relative mt-8 md:mt-0">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl animate-float">
            <img 
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
              alt="Mascota feliz en Huellas y Sueños" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-hotel-purple/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-hotel-orange/20 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-hotel-light-blue/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
