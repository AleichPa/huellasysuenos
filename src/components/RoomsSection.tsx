import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, PawPrint, Cat, Dog, Heart, Bone, Fish, Bird, Rabbit, Mouse, Turtle, Squirrel } from "lucide-react";
import { Link } from "react-router-dom";

const rooms = [
  {
    title: "Standard para perros pequeños",
    description: "La **Habitación Standard para Perros Pequeños** es un espacio pensado para brindar comodidad y calidez a los pequeños amigos de cuatro patas. Con una cama suave adaptada a su tamaño, juguetes divertidos y seguros, y detalles cuidadosamente seleccionados para su bienestar, esta habitación ofrece un entorno tranquilo y acogedor. Además, cuenta con áreas específicas para facilitar el acceso a la comida y agua, junto con un diseño que asegura supervisión constante y protección. Ideal para que los perros pequeños disfruten de una estancia feliz y relajada. 🐶✨",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369",
    price: "40€",
    features: ["Camita suave y calentita", "Platos coloridos", "Juguetes divertidos", "Limpieza diaria con productos eco"],
    icon: <Dog size={28} className="text-hotel-purple" />
  },
  {
    title: "Standard para perros grandes",
    description: "La Habitación Standard para Perros Grandes es un espacio amplio y diseñado para ofrecer comodidad a los amigos peludos de mayor tamaño. Equipada con una cama firme pero acolchada que se adapta a su peso y complexión, esta habitación garantiza descanso y relax. Además, cuenta con juguetes resistentes y un área designada para facilitar su alimentación. Con un diseño que prioriza la movilidad y espacio suficiente para estirarse o jugar, tu perro grande disfrutará de una experiencia cómoda y segura. 🐕💪",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    price: "50€",
    features: ["Cama ortopédica extra suave", "Zona de juegos con túneles", "Galletas y premios caseros", "Paseos extra largos", "TV con programas para mascotas"],
    icon: <Dog size={28} className="text-hotel-orange" />
  },
  {
    title: "Standard para gatos",
    description: "Un espacio tranquilo y confortable diseñado específicamente para gatos, con múltiples niveles para trepar, escondites acogedores, y juguetes que estimulan su instinto cazador. Nuestro alojamiento felino garantiza seguridad y privacidad, con rascadores, camas suaves y ventanas para observar el exterior. Un ambiente perfecto para que tu minino se sienta como en casa. 🐱",
    image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4",
    price: "30€",
    features: ["Rascadores de diferentes texturas", "Camas elevadas", "Juguetes interactivos", "Ventanas para observación", "Espacios para esconderse"],
    icon: <Cat size={28} className="text-hotel-light-blue" />
  },
  {
    title: "Standard Roedores",
    description: "Habitación diseñada para el confort y seguridad de pequeños roedores como hámsters, cobayas y conejos enanos. Cuenta con túneles, ruedas y juguetes para masticar que mantendrán a tu pequeña mascota entretenida y activa durante su estancia. Ambiente controlado con temperatura ideal y materiales seguros para mordisquear. 🐹",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca",
    price: "10€",
    features: ["Tubos y túneles", "Juguetes para roer", "Viruta premium", "Control de temperatura", "Ruedas de ejercicio"],
    icon: <Mouse size={28} className="text-hotel-soft-lavender" />
  },
  {
    title: "Standard Reptiles",
    description: "Espacio especializado para reptiles con control preciso de temperatura y humedad. Equipado con zonas de calor, lámparas UVB y UVA, y escondites naturales que simulan su hábitat. Mantenemos un ambiente limpio y seguro, con agua fresca diaria y las condiciones ideales para que tu reptil disfrute de una estancia óptima. 🦎",
    image: "https://images.unsplash.com/photo-1597162216923-ba9b920f29fa",
    price: "10€",
    features: ["Control preciso de temperatura", "Lámparas UVB/UVA", "Escondites naturales", "Fuentes de agua fresca", "Sustratos específicos"],
    icon: <Turtle size={28} className="text-hotel-sage" />
  },
  {
    title: "Standard aves",
    description: "Un espacio luminoso y seguro para que tus aves disfruten de su estancia. Con perchas de diferentes grosores para el cuidado de sus patas, juguetes coloridos para estimulación mental, y un ambiente tranquilo con música suave. Ofrecemos alimentación variada y agua fresca diaria en un espacio diseñado para su comodidad. 🦜",
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9",
    price: "8€",
    features: ["Perchas variadas", "Juguetes coloridos", "Música ambiental", "Alimentación variada", "Baño para aves"],
    icon: <Bird size={28} className="text-hotel-pastel-yellow" />
  },
  {
    title: "Standard de peces con pecera",
    description: "Alojamiento perfecto para peces con mantenimiento profesional de la calidad del agua. **Condición: estancia mínima de una semana y es necesario traer su propia pecera**. Incluye control de parámetros del agua, alimentación adecuada para cada especie y monitoreo constante para garantizar el bienestar de tus amigos acuáticos. 🐠",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
    price: "5€",
    features: ["Control de parámetros del agua", "Alimentación específica", "Monitoreo constante", "Mínimo una semana de estancia", "Requiere traer pecera propia"],
    icon: <Fish size={28} className="text-hotel-light-blue" />
  },
  {
    title: "Standard de peces sin pecera",
    description: "Servicio completo para el cuidado de tus peces en nuestras peceras profesionales. Incluye control de temperatura, filtración avanzada, iluminación adecuada y alimentación específica según especies. Nuestro equipo especializado monitorizará constantemente los parámetros del agua para garantizar un entorno óptimo durante toda la estancia. 🐟",
    image: "https://images.unsplash.com/photo-1571106816054-1aa8af14e471",
    price: "10€",
    features: ["Peceras profesionales", "Filtración avanzada", "Iluminación controlada", "Mantenimiento diario", "Tratamiento de agua especializado"],
    icon: <Fish size={28} className="text-hotel-dark-purple" />
  },
  {
    title: "Suite para perros pequeños",
    description: "Lujosa habitación con espacio para hasta 3 perros pequeños que quieran disfrutar de una estancia premium. Con camas individuales ultra suaves, zona de juegos amplia, televisión con programas caninos, servicio de snacks premium y paseos extendidos. El espacio perfecto para que tus pequeños compañeros se sientan como auténticas estrellas. 🌟🐕",
    image: "https://images.unsplash.com/photo-1583512603806-077998240c7a",
    price: "60€-70€",
    features: ["Capacidad hasta 3 perros pequeños", "Camas individuales premium", "Zona de juegos privada", "Servicio de snacks gourmet", "Paseos personalizados"],
    icon: <Heart size={28} className="text-hotel-purple" />
  },
  {
    title: "Suite para perros grandes",
    description: "Nuestra suite más exclusiva y espaciosa para perros grandes, con capacidad hasta 3 perros. Cuenta con camas ortopédicas XL, zona de juegos privada con obstáculos, servicio de masajes relajantes, menú personalizado y paseos extendidos. El lujo máximo para que tus grandes compañeros disfruten de unas vacaciones inolvidables. 🏆🐕‍🦺",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0",
    price: "80€-100€",
    features: ["Capacidad hasta 3 perros grandes", "Camas ortopédicas XL", "Zona de juegos exclusiva", "Servicio de masajes", "Menú gourmet personalizado", "Paseos VIP"],
    icon: <Bone size={28} className="text-hotel-orange" />
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
