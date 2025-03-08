
import { Button } from "@/components/ui/button";
import { PawPrint, Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 py-3 px-4 md:px-6 shadow-md border-b border-hotel-purple/10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <PawPrint className="h-8 w-8 text-hotel-purple group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hotel-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-hotel-orange"></span>
            </span>
          </div>
          <span className="font-display font-semibold text-xl md:text-2xl relative">
            Huellas y Sueños
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hotel-purple group-hover:w-full transition-all duration-300"></span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-hotel-purple transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors relative group py-2">
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hotel-purple group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/servicios" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors relative group py-2">
            Servicios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hotel-purple group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/habitaciones" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors relative group py-2">
            Habitaciones
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hotel-purple group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/testimonios" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors relative group py-2">
            Testimonios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hotel-purple group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/contacto" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors relative group py-2">
            Contacto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hotel-purple group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Button asChild className="bg-gradient-to-r from-hotel-purple to-hotel-dark-purple hover:from-hotel-dark-purple hover:to-hotel-purple shadow-md hover:shadow-lg transition-all">
            <Link to="/reservas" className="flex items-center gap-2">
              <span>Reservar</span> 
              <Heart className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 md:hidden flex flex-col gap-4 z-50 border-t border-hotel-purple/10 animate-in slide-in-from-top duration-300">
            <Link to="/" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors py-2 border-b border-gray-100">
              Inicio
            </Link>
            <Link to="/servicios" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors py-2 border-b border-gray-100">
              Servicios
            </Link>
            <Link to="/habitaciones" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors py-2 border-b border-gray-100">
              Habitaciones
            </Link>
            <Link to="/testimonios" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors py-2 border-b border-gray-100">
              Testimonios
            </Link>
            <Link to="/contacto" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors py-2 border-b border-gray-100">
              Contacto
            </Link>
            <Button asChild className="bg-gradient-to-r from-hotel-purple to-hotel-dark-purple hover:from-hotel-dark-purple hover:to-hotel-purple w-full shadow-sm">
              <Link to="/reservas" className="flex items-center justify-center gap-2">
                <span>Reservar Ahora</span>
                <Heart className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
