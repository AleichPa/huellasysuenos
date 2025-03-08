
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-hotel-purple font-medium">CONTÁCTANOS</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Estamos Aquí Para Ayudarte
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer una reserva? Contáctanos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 font-display">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-hotel-light-orange p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-hotel-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dirección</h4>
                    <p className="text-gray-600">Calle Principal 123, Ciudad</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-hotel-light-orange p-3 rounded-full">
                    <Phone className="h-5 w-5 text-hotel-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-hotel-light-orange p-3 rounded-full">
                    <Mail className="h-5 w-5 text-hotel-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@huellasysueños.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-hotel-light-orange p-3 rounded-full">
                    <Clock className="h-5 w-5 text-hotel-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horarios</h4>
                    <p className="text-gray-600">Lunes - Domingo: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 font-display">Envíanos un Mensaje</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Tu email" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <Input id="phone" placeholder="Tu teléfono" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                  <Input id="subject" placeholder="Asunto del mensaje" />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <Textarea id="message" placeholder="Tu mensaje" rows={5} />
              </div>
              
              <Button className="w-full md:w-auto bg-hotel-purple hover:bg-hotel-dark-purple">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
