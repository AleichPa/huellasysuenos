
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Cat, Dog, PawPrint, Heart } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 left-0 w-full h-10 bg-repeat-x" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 0 C 10 10, 30 10, 30 0 C 30 10, 50 10, 60 0 L 60 0 L 0 0' fill='%23FFF9E3' /%3E%3C/svg%3E")`,
        backgroundSize: '60px 20px'
      }}></div>
      
      <div className="absolute top-10 left-10 w-80 h-80 bg-hotel-pastel-yellow/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-hotel-soft-lavender/20 rounded-full blur-3xl -z-10"></div>
      
      {/* Cute animal decorations */}
      <div className="absolute top-20 right-20 text-hotel-purple/10 -z-5 animate-bounce-slight" style={{ animationDelay: "0.2s" }}>
        <Cat size={100} />
      </div>
      <div className="absolute bottom-20 left-20 text-hotel-orange/10 -z-5 animate-bounce-slight" style={{ animationDelay: "0.5s" }}>
        <Dog size={120} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2">
            <Heart className="h-5 w-5 text-hotel-purple" />
            <span className="text-hotel-purple font-medium">HABLEMOS</span>
            <Heart className="h-5 w-5 text-hotel-purple" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-hotel-purple to-hotel-dark-purple">
            ¡Estamos Aquí Para Ti y Tu Mascota!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer una reserva? Contáctanos y te responderemos con la misma alegría con la que recibimos a las mascotas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-3xl shadow-md relative overflow-hidden group hover:shadow-lg transition-all">
              {/* Cute paw pattern overlay */}
              <div className="absolute inset-0 paw-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold mb-6 font-display relative z-10">Información de Contacto</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-hotel-light-orange p-3 rounded-full group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5 text-hotel-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dirección</h4>
                    <p className="text-gray-600">Calle de los Mimos 123, Ciudad Peluda</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-hotel-pastel-green p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5 text-hotel-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-hotel-pastel-yellow p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-hotel-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">mimos@huellasysueños.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-hotel-soft-lavender p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Clock className="h-5 w-5 text-hotel-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horarios</h4>
                    <p className="text-gray-600">Lunes - Domingo: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute -top-4 -left-4 opacity-10">
                <PawPrint size={32} className="text-hotel-purple transform rotate-45" />
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <PawPrint size={32} className="text-hotel-orange transform -rotate-45" />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form className="bg-white p-8 rounded-3xl shadow-md relative overflow-hidden hover:shadow-lg transition-all group">
              {/* Changed from heart-pattern to cat-paw-pattern overlay */}
              <div className="absolute inset-0 cat-paw-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold mb-6 font-display relative z-10">Envíanos un Mensaje</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <PawPrint size={12} className="text-hotel-purple" />
                    Nombre
                  </label>
                  <Input id="name" placeholder="Tu nombre" className="rounded-full border-hotel-purple/20 focus:border-hotel-purple" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <PawPrint size={12} className="text-hotel-purple" />
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Tu email" className="rounded-full border-hotel-purple/20 focus:border-hotel-purple" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <PawPrint size={12} className="text-hotel-purple" />
                    Teléfono
                  </label>
                  <Input id="phone" placeholder="Tu teléfono" className="rounded-full border-hotel-purple/20 focus:border-hotel-purple" />
                </div>
                
                <div>
                  <label htmlFor="pet" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <PawPrint size={12} className="text-hotel-orange" />
                    Tipo de Mascota
                  </label>
                  <Input id="pet" placeholder="Perro, gato, etc." className="rounded-full border-hotel-purple/20 focus:border-hotel-purple" />
                </div>
              </div>
              
              <div className="mb-6 relative z-10">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  <PawPrint size={12} className="text-hotel-orange" />
                  Mensaje
                </label>
                <Textarea id="message" placeholder="Tu mensaje" rows={5} className="rounded-2xl border-hotel-purple/20 focus:border-hotel-purple" />
              </div>
              
              <Button className="w-full md:w-auto bg-gradient-to-r from-hotel-purple to-hotel-dark-purple hover:from-hotel-dark-purple hover:to-hotel-purple relative z-10 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                <span>Enviar Mensaje</span>
                <PawPrint className="h-4 w-4 animate-pulse" />
              </Button>
              
              {/* Corner decorations */}
              <div className="absolute top-4 right-4 opacity-10">
                <Cat size={40} className="text-hotel-purple/20" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-10">
                <Dog size={40} className="text-hotel-orange/20" />
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute -bottom-2 left-0 right-0 h-8 bg-repeat-x" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 20 C 10 10, 30 10, 30 20 C 30 10, 50 10, 60 20 L 60 20 L 0 20' fill='%23BDEFFF' /%3E%3C/svg%3E")`,
        backgroundSize: '60px 20px'
      }}></div>
      
      {/* Add the cat-paw-pattern style */}
      <style>
        {`
          .cat-paw-pattern {
            background-color: rgba(255, 255, 255, 0.8);
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 25c-3-3-7-5-12-5-.9 0-1.9.1-2.8.3-1.6.3-2.7 1.7-2.7 3.4 0 .5.1 1 .2 1.5.7 3 2.7 5.4 5.3 6.8 1.2.7 2.5 1 3.8 1 1.3 0 2.7-.3 3.9-1C19.3 30.4 21 28 22 25c-1.7-2.7-5-5-9-5-2.8 0-5.2 1.2-7 3 .8-.5 1.6-.9 2.5-1.2 3.4-1.3 7.2-.3 9.5 2.2' fill='%239b87f5' fill-opacity='0.1'/%3E%3C/svg%3E");
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;
