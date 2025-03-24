
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeasonCalendar from "@/components/SeasonCalendar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Temporadas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-hotel-purple to-hotel-dark-purple">
              Calendario de Temporadas
            </h1>
            <p className="text-lg text-gray-600">
              En Huellas y Sueños ajustamos nuestras tarifas según la temporada. Consulta nuestro calendario para planificar la estancia de tu mascota al mejor precio.
            </p>
          </div>
          
          <SeasonCalendar />
          
          <div className="mt-12 p-6 bg-gradient-to-r from-hotel-purple/10 to-hotel-soft-lavender/20 rounded-xl">
            <h2 className="text-xl font-bold mb-4">¿Listo para reservar?</h2>
            <p className="mb-4">Ahora que conoces nuestras temporadas, elige las mejores fechas para la estancia de tu mascota.</p>
            <Button asChild className="bg-hotel-purple hover:bg-hotel-dark-purple text-white">
              <Link to="/reserva" className="flex items-center gap-2">
                Hacer reserva
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Temporadas;
