
import { Button } from "@/components/ui/button";
import { PawPrint, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 py-3 px-4 md:px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <PawPrint className="h-8 w-8 text-hotel-purple" />
          <span className="font-display font-semibold text-xl md:text-2xl">Huellas y Sueños</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors">
            Servicios
          </a>
          <a href="#habitaciones" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors">
            Habitaciones
          </a>
          <a href="#testimonios" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors">
            Testimonios
          </a>
          <a href="#contacto" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors">
            Contacto
          </a>
          <Button asChild className="bg-hotel-purple hover:bg-hotel-dark-purple">
            <Link to="/reservas">Reservar Ahora</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 md:hidden flex flex-col gap-4">
            <a href="#inicio" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors py-2">
              Inicio
            </a>
            <a href="#servicios" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors py-2">
              Servicios
            </a>
            <a href="#habitaciones" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors py-2">
              Habitaciones
            </a>
            <a href="#testimonios" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors py-2">
              Testimonios
            </a>
            <a href="#contacto" className="font-medium text-gray-700 hover:text-hotel-purple transition-colors py-2">
              Contacto
            </a>
            <Button asChild className="bg-hotel-purple hover:bg-hotel-dark-purple w-full">
              <Link to="/reservas">Reservar Ahora</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
