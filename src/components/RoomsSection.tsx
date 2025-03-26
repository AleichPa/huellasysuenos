import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, PawPrint, Cat, Dog, Heart, Bone, Fish, Bird, Rabbit, Mouse, Turtle } from "lucide-react";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: "perros-pequenos-standard",
    title: "Standard para perros pequeños",
    description: "Espacio acogedor para perros pequeños con cama suave, juguetes seguros y zonas de alimentación. Supervisión constante y entorno tranquilo para que tu mascota disfrute de una estancia feliz y relajada.",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369",
    price: "40€",
    category: "Canino",
    icon: <Dog size={28} className="text-hotel-purple" />,
    features: ["Camita suave y calentita", "Platos coloridos", "Juguetes divertidos", "Limpieza diaria con productos eco"]
  },
  {
    id: "perros-grandes-standard",
    title: "Standard para perros grandes",
    description: "Habitación amplia para perros grandes con cama firme y acolchada, juguetes resistentes y espacios designados para alimentación. Diseñada para garantizar movilidad y comodidad a tus amigos de mayor tamaño.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    price: "50€",
    category: "Canino",
    icon: <Dog size={28} className="text-hotel-orange" />,
    features: ["Cama ortopédica extra suave", "Zona de juegos con túneles", "Galletas y premios caseros", "Paseos extra largos", "TV con programas para mascotas"]
  },
  {
    id: "gatos-standard",
    title: "Standard para gatos",
    description: "Espacio tranquilo para gatos con múltiples niveles para trepar, escondites acogedores y juguetes estimulantes. Incluye rascadores, camas suaves y ventanas para observar el exterior, perfecto para el descanso felino.",
    image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4",
    price: "30€",
    category: "Felino",
    icon: <Cat size={28} className="text-hotel-light-blue" />,
    features: ["Rascadores de diferentes texturas", "Camas elevadas", "Juguetes interactivos", "Ventanas para observación", "Espacios para esconderse"]
  },
  {
    id: "roedores-standard",
    title: "Standard Roedores",
    description: "Habitación diseñada para pequeños roedores con túneles, ruedas y juguetes para masticar. Ambiente controlado con temperatura ideal y materiales seguros que mantendrán a tu mascota activa y entretenida.",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca",
    price: "10€",
    category: "Roedor",
    icon: <Mouse size={28} className="text-hotel-soft-lavender" />,
    features: ["Tubos y túneles", "Juguetes para roer", "Viruta premium", "Control de temperatura", "Ruedas de ejercicio"]
  },
  {
    id: "reptiles-standard",
    title: "Standard Reptiles",
    description: "Espacio especializado para reptiles con control preciso de temperatura y humedad. Equipado con zonas de calor, lámparas UVB/UVA y escondites naturales que simulan su hábitat para una estancia óptima.",
    image: "https://images.unsplash.com/photo-1597162216923-ba9b920f29fa",
    price: "10€",
    category: "Reptil",
    icon: <Turtle size={28} className="text-hotel-sage" />,
    features: ["Control preciso de temperatura", "Lámparas UVB/UVA", "Escondites naturales", "Fuentes de agua fresca", "Sustratos específicos"]
  },
  {
    id: "aves-standard",
    title: "Standard aves",
    description: "Espacio luminoso y seguro para aves con perchas variadas, juguetes coloridos y música suave. Ofrecemos alimentación diversa y agua fresca diaria en un ambiente tranquilo diseñado para su bienestar.",
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9",
    price: "8€",
    category: "Ave",
    icon: <Bird size={28} className="text-hotel-pastel-yellow" />,
    features: ["Perchas variadas", "Juguetes coloridos", "Música ambiental", "Alimentación variada", "Baño para aves"]
  },
  {
    id: "peces-standard",
    title: "Standard de peces",
    description: "Alojamiento para peces con mantenimiento profesional del agua. Opción con pecera propia (5€) o peceras profesionales (10€). Incluye control de parámetros, filtración, iluminación adecuada y alimentación específica con monitoreo constante.",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
    price: "5€-10€",
    category: "Acuático",
    icon: <Fish size={28} className="text-hotel-light-blue" />,
    features: ["Control de parámetros del agua", "Alimentación específica", "Monitoreo constante", "Opción con/sin pecera", "Estancia mínima 7 días con pecera propia"]
  },
  {
    id: "suite-perros-pequenos",
    title: "Suite para perros pequeños",
    description: "Lujosa habitación para hasta 3 perros pequeños con camas individuales ultra suaves, zona de juegos, TV con programas caninos, snacks premium y paseos extendidos. Un espacio premium para consentir a tus mascotas.",
    image: "https://images.unsplash.com/photo-1583512603806-077998240c7a",
    price: "60€-70€",
    category: "Premium",
    icon: <Heart size={28} className="text-hotel-purple" />,
    features: ["Capacidad hasta 3 perros pequeños", "Camas individuales premium", "Zona de juegos privada", "Servicio de snacks gourmet", "Paseos personalizados"]
  },
  {
    id: "suite-perros-grandes",
    title: "Suite para perros grandes",
    description: "Suite exclusiva para hasta 3 perros grandes con camas ortopédicas XL, zona de juegos privada, masajes relajantes, menú personalizado y paseos extendidos. El máximo lujo para consentir a tus grandes compañeros.",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0",
    price: "80€-100€",
    category: "Premium",
    icon: <Bone size={28} className="text-hotel-orange" />,
    features: ["Capacidad hasta 3 perros grandes", "Camas ortopédicas XL", "Zona de juegos exclusiva", "Servicio de masajes", "Menú gourmet personalizado", "Paseos VIP"]
  },
];

const RoomsSection = () => {
  return (
    <section id="habitaciones" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Cute decorative elements */}
      <div className="absolute -top-10 left-0 w-full h-10 bg-repeat-x" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 0 C 10 10, 30 10, 30 0 C 30 10, 50 10, 60 0 L 60 0 L 0 0' fill='%23B8F4D3' /%3E%3C/svg%3E")`,
        backgroundSize: '60px 20px'
      }}></div>

      <div className="absolute top-0 right-0 w-80 h-80 bg-hotel-soft-lavender/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-hotel-pastel-yellow/30 rounded-full blur-3xl -z-10"></div>

      {/* Paw pattern decoration */}
      <div className="absolute top-20 left-10 text-hotel-purple/10 opacity-50 animate-bounce-slight" style={{ animationDelay: "0.3s" }}>
        <PawPrint size={60} />
      </div>
      <div className="absolute bottom-20 right-10 text-hotel-orange/10 opacity-50 animate-bounce-slight" style={{ animationDelay: "0.6s" }}>
        <PawPrint size={80} />
      </div>
      <div className="absolute top-1/3 right-1/3 text-hotel-pastel-green/20 opacity-50 animate-bounce-slight" style={{ animationDelay: "0.9s" }}>
        <Bone size={70} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-8 bg-hotel-purple/50 mr-4"></div>
            <span className="text-hotel-purple font-medium">NUESTRAS HABITACIONES</span>
            <div className="h-px w-8 bg-hotel-purple/50 ml-4"></div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-hotel-purple to-hotel-dark-purple">
            Dormitorios Llenos de Mimos y Confort
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Todas nuestras habitaciones están diseñadas con amor para que tu mascota se sienta como en casa, con diferentes opciones para adaptarse a sus gustos y personalidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl group rounded-3xl">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-hotel-purple font-bold shadow-lg flex items-center gap-2">
                  {room.price}/noche
                  <Heart className="h-4 w-4 text-hotel-dark-purple" />
                </div>

                {/* Updated room category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                  {room.icon}
                  <span className="text-sm font-medium">
                    {room.category}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <span>{room.title}</span>
                </CardTitle>
                <CardDescription className="text-gray-600 text-justify">{room.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <PawPrint className="h-4 w-4 text-hotel-purple flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-gradient-to-r from-hotel-purple to-hotel-dark-purple hover:from-hotel-dark-purple hover:to-hotel-purple shadow-md hover:shadow-lg transition-all rounded-full">
                  <Link to={`/reserva?room=${encodeURIComponent(room.title)}`} className="flex items-center justify-center gap-2">
                    <span>Reservar Ahora</span>
                    <Heart className="h-4 w-4 animate-pulse" />
                  </Link>
                </Button>
              </CardFooter>

              {/* Cute paw print corner decoration */}
              <div className="absolute -top-4 -right-4 transform rotate-45 opacity-20 group-hover:opacity-100 transition-opacity">
                <PawPrint size={24} className="text-hotel-orange" />
              </div>
              <div className="absolute -bottom-4 -left-4 transform -rotate-45 opacity-20 group-hover:opacity-100 transition-opacity">
                <PawPrint size={24} className="text-hotel-purple" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute -bottom-2 left-0 right-0 h-8 bg-repeat-x" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 20 C 10 10, 30 10, 30 20 C 30 10, 50 10, 60 20 L 60 20 L 0 20' fill='%23FFECD9' /%3E%3C/svg%3E")`,
        backgroundSize: '60px 20px'
      }}></div>
    </section>
  );
};

export default RoomsSection;
