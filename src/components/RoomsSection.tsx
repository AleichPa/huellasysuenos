
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";

const rooms = [
  {
    title: "Habitación Estándar",
    description: "Espacio cómodo con todas las necesidades básicas para mascotas pequeñas.",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369",
    price: "$25",
    features: ["Cama cómoda", "Comedero y bebedero", "Juguetes básicos", "Limpieza diaria"]
  },
  {
    title: "Suite Premium",
    description: "Amplio espacio con extras para mascotas que merecen un trato especial.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    price: "$40",
    features: ["Cama ortopédica", "Área de juegos", "Snacks premium", "Paseos extras", "TV con canales para mascotas"]
  },
  {
    title: "Suite Familiar",
    description: "Perfecta para familias de mascotas que quieren compartir espacio.",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
    price: "$55",
    features: ["Espacio ampliado", "Varias camas", "Juegos interactivos", "Tiempo de juego supervisado", "Cámaras para monitoreo"]
  },
];

const RoomsSection = () => {
  return (
    <section id="habitaciones" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-hotel-cream/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-hotel-light-blue/30 rounded-full blur-3xl -z-10"></div>
      
      {/* Paw pattern decoration */}
      <div className="absolute top-20 left-10 text-hotel-purple/10 opacity-50">
        <PawPrint size={60} />
      </div>
      <div className="absolute bottom-20 right-10 text-hotel-orange/10 opacity-50">
        <PawPrint size={80} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-8 bg-hotel-purple/50 mr-4"></div>
            <span className="text-hotel-purple font-medium">NUESTRAS HABITACIONES</span>
            <div className="h-px w-8 bg-hotel-purple/50 ml-4"></div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 gradient-text">
            Habitaciones Diseñadas Para El Confort
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Todas nuestras habitaciones están diseñadas pensando en la comodidad y seguridad de tu mascota, con diferentes opciones para adaptarse a sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-hotel-purple font-bold shadow-lg">
                  {room.price}/noche
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <span>{room.title}</span>
                  {index === 1 && (
                    <span className="bg-hotel-orange/20 text-hotel-orange text-xs px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </CardTitle>
                <CardDescription className="text-gray-600">{room.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-hotel-purple flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-gradient-to-r from-hotel-purple to-hotel-dark-purple hover:from-hotel-dark-purple hover:to-hotel-purple shadow-md hover:shadow-lg transition-all">
                  <Link to={`/reserva?room=${encodeURIComponent(room.title)}`}>
                    Reservar Ahora
                  </Link>
                </Button>
              </CardFooter>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-hotel-purple/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
