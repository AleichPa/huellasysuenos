import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, PawPrint, Cat, Dog, Heart, Bone, Fish, Bird, Rabbit, Mouse, Turtle, Squirrel } from "lucide-react";
import { Link } from "react-router-dom";

const rooms = [
  {
    title: "Habitación Patitas Pequeñas",
    description: "Un nidito acogedor para mascotas pequeñas con todo lo que necesitan para sentirse como en casa.",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369",
    price: "$25",
    features: ["Camita suave y calentita", "Platos coloridos", "Juguetes divertidos", "Limpieza diaria con productos eco"],
    icon: <Cat size={28} className="text-hotel-purple" />
  },
  {
    title: "Suite Peluditos Felices",
    description: "Un paraíso para mascotas que merecen un trato especial con extras que les encantarán.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    price: "$40",
    features: ["Cama ortopédica extra suave", "Zona de juegos con túneles", "Galletas y premios caseros", "Paseos extra largos", "TV con programas para mascotas"],
    icon: <Dog size={28} className="text-hotel-orange" />
  },
  {
    title: "Suite Familiar Patitas Unidas",
    description: "Perfecta para familias de mascotas que quieren compartir aventuras y sueños.",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
    price: "$55",
    features: ["Espacio extra grande y acogedor", "Varias camitas para elegir", "Juegos interactivos grupales", "Tiempo de juego con otros amigos", "Cámaras para que les veas todo el día"],
    icon: <Heart size={28} className="text-hotel-dark-purple" />
  },
  {
    title: "Refugio Escamitas Felices",
    description: "Espacio diseñado especialmente para peces y reptiles con control de temperatura y humedad.",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
    price: "$35",
    features: ["Control de temperatura", "Iluminación especializada", "Filtración de agua premium", "Mantenimiento diario", "Alimentación especializada"],
    icon: <Fish size={28} className="text-hotel-light-blue" />
  },
  {
    title: "Nido Plumitas Dulces",
    description: "Un espacio tranquilo y seguro para aves con todo lo que necesitan para sentirse en su hábitat natural.",
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9",
    price: "$30",
    features: ["Perchas cómodas y seguras", "Juguetes interactivos", "Semillas premium variadas", "Música relajante", "Área de vuelo supervisado"],
    icon: <Bird size={28} className="text-hotel-pastel-yellow" />
  },
  {
    title: "Madriguera Orejitas Largas",
    description: "Habitación especializada para conejos y roedores con espacios para explorar y esconderse.",
    image: "https://images.unsplash.com/photo-1591382386627-349b692688ff",
    price: "$28",
    features: ["Tubos y túneles para explorar", "Heno fresco premium", "Juguetes para roer", "Área de ejercicio", "Escondites acogedores"],
    icon: <Rabbit size={28} className="text-hotel-pastel-green" />
  },
  {
    title: "Rincón Ratoncitos Curiosos",
    description: "Espacio diseñado para pequeños roedores con laberintos y áreas de exploración seguras.",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca",
    price: "$23",
    features: ["Laberintos divertidos", "Ruedas de ejercicio silenciosas", "Escondites múltiples", "Alimento fresco diario", "Viruta suave y absorbente"],
    icon: <Mouse size={28} className="text-hotel-soft-lavender" />
  },
  {
    title: "Oasis Caparazón Tranquilo",
    description: "Un espacio sereno para tortugas y reptiles con áreas húmedas y secas perfectamente balanceadas.",
    image: "https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2Ffb8841c2-489e-4736-8a27-ae832d79b259.png",
    price: "$32",
    features: ["Áreas secas y húmedas", "Lámparas UV especiales", "Rocas para tomar el sol", "Dieta balanceada especializada", "Limpieza diaria"],
    icon: <Turtle size={28} className="text-hotel-sage" />
  },
  {
    title: "Habitación Naturaleza Viva",
    description: "Espacio con vegetación natural y escondites para que tu mascota exótica se sienta en su hábitat.",
    image: "https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F16ca3a74-02d4-4d59-a41f-b659c9b9d78b.png",
    price: "$42",
    features: ["Vegetación natural", "Control de humedad", "Refugios naturales", "Alimentos exóticos", "Monitoreo 24/7"],
    icon: <Squirrel size={28} className="text-hotel-orange" />
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
                
                {/* Cute room badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                  {room.icon}
                  <span className="text-sm font-medium">
                    {index === 0 ? "Acogedor" : 
                     index === 1 ? "Popular" : 
                     index === 2 ? "Familiar" :
                     index === 3 ? "Acuático" :
                     index === 4 ? "Aves" :
                     index === 5 ? "Conejos" :
                     index === 6 ? "Roedores" :
                     index === 7 ? "Reptiles" :
                     "Exótico"}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <span>{room.title}</span>
                </CardTitle>
                <CardDescription className="text-gray-600">{room.description}</CardDescription>
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
