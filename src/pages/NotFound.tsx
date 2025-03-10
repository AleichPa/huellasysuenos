
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, PawPrint, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-hotel-light-orange/30 to-white px-4">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-36 h-36 bg-hotel-pastel-yellow rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-hotel-pastel-green rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-hotel-soft-lavender rounded-full blur-3xl opacity-50"></div>
      
      {/* Paw Pattern Background */}
      <div className="absolute inset-0 paw-pattern opacity-50 -z-10"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md">
        {/* 404 Error Display - Made more prominent */}
        <div className="mb-8 relative">
          <div className="text-[150px] font-display font-bold gradient-text leading-none">
            404
          </div>
          <div className="absolute -top-4 -right-4 rotate-12">
            <PawPrint size={60} className="text-hotel-purple" />
          </div>
          <div className="absolute -bottom-2 -left-4 -rotate-12">
            <PawPrint size={40} className="text-hotel-orange" />
          </div>
        </div>
        
        {/* Error Text */}
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-hotel-dark-purple">
          ¡Ups! Página no encontrada
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          Parece que esta página se ha escapado como una mascota juguetona. 
          ¿Quieres volver a nuestro hogar?
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-to-r from-hotel-purple to-hotel-dark-purple hover:from-hotel-dark-purple hover:to-hotel-purple text-white px-6 py-6 h-auto shadow-md hover:shadow-lg transition-all rounded-full">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Volver a Inicio</span>
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="border-2 border-hotel-purple/50 text-hotel-purple hover:bg-hotel-purple/10 px-6 py-6 h-auto hover:shadow-md transition-all rounded-full">
            <Link to="/contacto" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Contactar con Nosotros</span>
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Floating Paw Prints */}
      <div className="absolute top-1/4 right-10 text-hotel-orange/40 animate-float" style={{ animationDelay: "0.5s" }}>
        <PawPrint size={36} />
      </div>
      <div className="absolute bottom-1/4 left-10 text-hotel-purple/40 animate-float" style={{ animationDelay: "0.8s" }}>
        <PawPrint size={30} />
      </div>
      <div className="absolute top-3/4 right-1/3 text-hotel-pastel-green/50 animate-float" style={{ animationDelay: "1.2s" }}>
        <PawPrint size={24} />
      </div>
      
      {/* Scalloped Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 20 C 10 10, 30 10, 30 20 C 30 10, 50 10, 60 20 L 60 20 L 0 20' fill='%23FFECD9' /%3E%3C/svg%3E")`,
        backgroundSize: '60px 20px'
      }}></div>
    </div>
  );
};

export default NotFound;
