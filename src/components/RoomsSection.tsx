
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="habitaciones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-hotel-purple font-medium">NUESTRAS HABITACIONES</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Habitaciones Diseñadas Para El Confort
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Todas nuestras habitaciones están diseñadas pensando en la comodidad y seguridad de tu mascota, con diferentes opciones para adaptarse a sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold">{room.title}</CardTitle>
                  <span className="text-hotel-purple font-bold">{room.price}/noche</span>
                </div>
                <CardDescription className="text-gray-600">{room.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-hotel-purple"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-hotel-purple hover:bg-hotel-dark-purple">
                  Reservar Ahora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
