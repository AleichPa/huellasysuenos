
import { Bath, Clock, Heart, PawPrint, Shield, Utensils } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <PawPrint className="h-10 w-10 text-hotel-purple" />,
    title: "Alojamiento Confortable",
    description: "Habitaciones espaciosas y cómodas para que tu mascota descanse como en casa."
  },
  {
    icon: <Utensils className="h-10 w-10 text-hotel-purple" />,
    title: "Alimentación Premium",
    description: "Comidas balanceadas preparadas específicamente para las necesidades de tu mascota."
  },
  {
    icon: <Bath className="h-10 w-10 text-hotel-purple" />,
    title: "Servicio de Spa",
    description: "Baños, cortes de pelo y sesiones de cepillado para mantener a tu mascota limpia y feliz."
  },
  {
    icon: <Clock className="h-10 w-10 text-hotel-purple" />,
    title: "Cuidado 24/7",
    description: "Personal capacitado disponible las 24 horas para cualquier necesidad que surja."
  },
  {
    icon: <Shield className="h-10 w-10 text-hotel-purple" />,
    title: "Seguridad Total",
    description: "Instalaciones seguras y monitoreadas para garantizar el bienestar de tu mascota."
  },
  {
    icon: <Heart className="h-10 w-10 text-hotel-purple" />,
    title: "Atención Veterinaria",
    description: "Contamos con veterinarios de guardia para cualquier emergencia que pueda surgir."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-hotel-purple font-medium">NUESTROS SERVICIOS</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Lo Que Ofrecemos Para Tu Mascota
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Huellas y Sueños nos preocupamos por brindar la mejor experiencia tanto para ti como para tu mascota. Estos son algunos de nuestros servicios destacados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
