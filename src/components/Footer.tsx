
import { Facebook, Instagram, Twitter, PawPrint } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <PawPrint className="h-8 w-8 text-hotel-purple" />
              <span className="font-display font-semibold text-xl">Huellas y Sueños</span>
            </div>
            <p className="text-gray-400 mb-6">
              Cuidamos a tus mascotas como si fueran nuestras. Confía en nosotros para darles la mejor experiencia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hotel-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hotel-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hotel-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#habitaciones" className="text-gray-400 hover:text-white transition-colors">Habitaciones</a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-400 hover:text-white transition-colors">Testimonios</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Alojamiento</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Spa para Mascotas</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Guardería</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Paseos</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Atención Veterinaria</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Horario de Atención</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-gray-400">Lunes - Viernes:</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sábados:</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Domingos:</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="mt-6 text-hotel-purple font-semibold">
                Atención de emergencias 24/7
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Huellas y Sueños. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
