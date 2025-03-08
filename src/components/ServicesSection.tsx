
import { Bath, Clock, Heart, PawPrint, Shield, Utensils, Dog, Cat, Bird } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <PawPrint className="h-12 w-12 text-hotel-purple" />,
    title: "Alojamiento Mimoso",
    description: "Habitaciones acogedoras con camitas suaves para que tu mascota duerma como un bebé."
  },
  {
    icon: <Utensils className="h-12 w-12 text-hotel-orange" />,
    title: "Alimentación Deliciosa",
    description: "Comidas caseras y nutritivas preparadas con cariño para tu pequeño amigo peludo."
  },
  {
    icon: <Bath className="h-12 w-12 text-hotel-pastel-green" />,
    title: "Servicio de Spa & Belleza",
    description: "Baños de burbujas, cortes de pelo y sesiones de cepillado para mantener a tu mascota linda y feliz."
  },
  {
    icon: <Clock className="h-12 w-12 text-hotel-soft-lavender" />,
    title: "Cuidado 24/7",
    description: "Cuidadores cariñosos disponibles a todas horas para mimos, juegos y lo que tu mascota necesite."
  },
  {
    icon: <Shield className="h-12 w-12 text-hotel-pastel-yellow" />,
    title: "Seguridad con Cariño",
    description: "Instalaciones seguras y vigiladas para que tanto tú como tu mascota duerman tranquilos."
  },
  {
    icon: <Heart className="h-12 w-12 text-hotel-dark-purple" />,
    title: "Atención Veterinaria",
    description: "Veterinarios amables y amantes de los animales listos para cualquier emergencia."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pet-bg"></div>
      
      {/* Cute decorative elements */}
      <div className="absolute -top-10 left-0 w-full h-10 bg-repeat-x" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 0 C 10 10, 30 10, 30 0 C 30 10, 50 10, 60 0 L 60 0 L 0 0' fill='%23FFECD9' /%3E%3C/svg%3E")`,
        backgroundSize: '60px 20px'
      }}></div>
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-hotel-pastel-yellow/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-hotel-pastel-green/30 rounded-full blur-3xl -z-10"></div>
      
      {/* Cute animal icons */}
      <div className="absolute top-1/4 left-10 text-hotel-purple/20 -z-5 animate-bounce-slight" style={{ animationDelay: "0.2s" }}>
        <Cat size={80} />
      </div>
      <div className="absolute bottom-1/3 right-10 text-hotel-orange/20 -z-5 animate-bounce-slight" style={{ animationDelay: "0.5s" }}>
        <Dog size={90} />
      </div>
      <div className="absolute top-2/3 left-1/3 text-hotel-soft-lavender/30 -z-5 animate-bounce-slight" style={{ animationDelay: "0.8s" }}>
        <Bird size={70} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-8 bg-hotel-purple/50 mr-4"></div>
            <span className="text-hotel-purple font-medium">NUESTROS SERVICIOS</span>
            <div className="h-px w-8 bg-hotel-purple/50 ml-4"></div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-hotel-purple to-hotel-dark-purple">
            Lo Que Ofrecemos Con Mucho Cariño
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Huellas y Sueños nos preocupamos por brindar la mejor experiencia tanto para ti como para tu mascota. Todos nuestros servicios están llenos de amor y atención.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-hotel-light-orange/10 via-transparent to-hotel-light-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-2 relative">
                <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300 p-4 bg-gradient-to-br from-white to-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
              <div className="absolute bottom-0 left-0 w-0 h-2 bg-gradient-to-r from-hotel-purple to-hotel-dark-purple group-hover:w-full transition-all duration-500 rounded-br-xl rounded-bl-xl"></div>
              
              {/* Tiny paw print in corner */}
              <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-100 transition-opacity">
                <PawPrint size={16} className="text-hotel-orange" />
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute -bottom-2 left-0 right-0 h-8 bg-repeat-x" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 20 C 10 10, 30 10, 30 20 C 30 10, 50 10, 60 20 L 60 20 L 0 20' fill='%23B8F4D3' /%3E%3C/svg%3E")`,
        backgroundSize: '60px 20px'
      }}></div>
    </section>
  );
};

export default ServicesSection;
