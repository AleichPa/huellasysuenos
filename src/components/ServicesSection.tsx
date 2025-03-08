
import { Bath, Clock, Heart, PawPrint, Shield, Utensils } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <PawPrint className="h-12 w-12 text-hotel-purple" />,
    title: "Alojamiento Confortable",
    description: "Habitaciones espaciosas y cómodas para que tu mascota descanse como en casa."
  },
  {
    icon: <Utensils className="h-12 w-12 text-hotel-purple" />,
    title: "Alimentación Premium",
    description: "Comidas balanceadas preparadas específicamente para las necesidades de tu mascota."
  },
  {
    icon: <Bath className="h-12 w-12 text-hotel-purple" />,
    title: "Servicio de Spa",
    description: "Baños, cortes de pelo y sesiones de cepillado para mantener a tu mascota limpia y feliz."
  },
  {
    icon: <Clock className="h-12 w-12 text-hotel-purple" />,
    title: "Cuidado 24/7",
    description: "Personal capacitado disponible las 24 horas para cualquier necesidad que surja."
  },
  {
    icon: <Shield className="h-12 w-12 text-hotel-purple" />,
    title: "Seguridad Total",
    description: "Instalaciones seguras y monitoreadas para garantizar el bienestar de tu mascota."
  },
  {
    icon: <Heart className="h-12 w-12 text-hotel-purple" />,
    title: "Atención Veterinaria",
    description: "Contamos con veterinarios de guardia para cualquier emergencia que pueda surgir."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pet-bg"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-hotel-light-orange/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-hotel-light-blue/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-8 bg-hotel-purple/50 mr-4"></div>
            <span className="text-hotel-purple font-medium">NUESTROS SERVICIOS</span>
            <div className="h-px w-8 bg-hotel-purple/50 ml-4"></div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 gradient-text">
            Lo Que Ofrecemos Para Tu Mascota
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Huellas y Sueños nos preocupamos por brindar la mejor experiencia tanto para ti como para tu mascota. Estos son algunos de nuestros servicios destacados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-hotel-light-orange/10 via-transparent to-hotel-light-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-2 relative">
                <div className="mb-2 transform transition-transform group-hover:scale-110 duration-300">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-hotel-purple to-hotel-dark-purple group-hover:w-full transition-all duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
