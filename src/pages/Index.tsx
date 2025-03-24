import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Heart, PawPrint, Star, Sparkles, Gift, Clock, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";

const FeatureCard = ({ icon, title, description, link, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center text-center group">
    <div className={`mb-4 p-3 ${color} rounded-full group-hover:bg-opacity-70 transition-colors`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to={link} className="text-hotel-purple font-medium group-hover:underline flex items-center gap-1">
      <span>Descubrir más</span>
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

const Index = () => {
  const features = [
    {
      icon: <PawPrint className="h-8 w-8 text-hotel-orange" />,
      title: "Cuidado Personalizado",
      description: "Atención adaptada a las necesidades específicas de tu mascota.",
      link: "/servicios",
      color: "bg-hotel-light-orange/20 group-hover:bg-hotel-light-orange/40"
    },
    {
      icon: <Heart className="h-8 w-8 text-hotel-purple" />,
      title: "Ambiente Acogedor",
      description: "Espacios diseñados para que tu mascota se sienta cómoda y segura.",
      link: "/habitaciones",
      color: "bg-hotel-light-blue/30 group-hover:bg-hotel-light-blue/50"
    },
    {
      icon: <Star className="h-8 w-8 text-hotel-orange" />,
      title: "Experiencia Feliz",
      description: "Actividades divertidas y estimulantes para una estancia inolvidable.",
      link: "/testimonios",
      color: "bg-hotel-cream/50 group-hover:bg-hotel-cream/70"
    },
    {
      icon: <Calendar className="h-8 w-8 text-hotel-purple" />,
      title: "Temporadas y Tarifas",
      description: "Consulta nuestro calendario de temporadas y planifica al mejor precio.",
      link: "/temporadas",
      color: "bg-hotel-soft-lavender/30 group-hover:bg-hotel-soft-lavender/50"
    },
  ];

  const quickStats = [
    { number: "500+", text: "Mascotas Felices", icon: <PawPrint className="h-6 w-6" /> },
    { number: "50+", text: "Cuidadores Expertos", icon: <Heart className="h-6 w-6" /> },
    { number: "100%", text: "Satisfacción", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", text: "Atención y Cuidado", icon: <Clock className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      
      {/* Stats Counter Section */}
      <div className="py-12 bg-gradient-to-r from-hotel-purple/5 to-hotel-soft-lavender/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col items-center group">
                <div className="mb-2 text-hotel-purple/80">{stat.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1 text-hotel-dark-purple">{stat.number}</h3>
                <p className="text-gray-600 text-sm">{stat.text}</p>
                <div className="w-0 group-hover:w-1/2 h-1 bg-hotel-orange/50 mt-2 transition-all duration-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-white to-hotel-light-orange/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-hotel-light-orange/20 text-hotel-orange text-sm font-medium mb-3">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-3xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-hotel-purple to-hotel-dark-purple">
              La mejor experiencia para tu mascota
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En Huellas y Sueños nos dedicamos a brindar un cuidado excepcional para que tanto tú como tu mascota disfrutéis de tranquilidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Highlight Services Preview */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-hotel-soft-lavender/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-hotel-light-orange/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-hotel-soft-lavender/20 text-hotel-purple text-sm font-medium">
                Servicios Destacados
              </span>
              <h2 className="text-3xl font-display font-bold text-gray-800">
                Proporcionamos el <span className="text-hotel-purple">mejor cuidado</span> para tus pequeños amigos
              </h2>
              <p className="text-gray-600">
                Nuestros servicios están diseñados pensando en el bienestar, la comodidad y la felicidad de tu mascota. Desde alojamiento de lujo hasta atención veterinaria, lo tenemos todo cubierto.
              </p>
              
              <ul className="space-y-3">
                {[
                  { text: "Alojamiento confortable y seguro", icon: <PawPrint className="h-5 w-5 text-hotel-orange" /> },
                  { text: "Alimentación personalizada y nutritiva", icon: <Gift className="h-5 w-5 text-hotel-purple" /> },
                  { text: "Spa y servicios de belleza", icon: <Sparkles className="h-5 w-5 text-hotel-orange" /> },
                  { text: "Atención veterinaria 24/7", icon: <Heart className="h-5 w-5 text-hotel-purple" /> }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-full shadow-sm">{item.icon}</div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild className="bg-gradient-to-r from-hotel-purple to-hotel-dark-purple hover:from-hotel-dark-purple hover:to-hotel-purple text-white shadow-md hover:shadow-lg mt-4">
                <Link to="/servicios" className="flex items-center gap-2">
                  Ver todos los servicios
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee"
                  alt="Mascota recibiendo cuidados" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-white font-semibold text-lg">Experiencia Premium</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-hotel-light-orange/30 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-hotel-soft-lavender/30 -z-10"></div>
              
              {/* Decorative paw prints */}
              <PawPrint className="absolute top-4 right-4 h-6 w-6 text-hotel-orange rotate-12 animate-bounce-slight" />
              <PawPrint className="absolute bottom-12 left-0 h-8 w-8 text-hotel-purple -rotate-12 animate-bounce-slight" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Showcase Section */}
      <div className="py-16 bg-gradient-to-b from-white to-hotel-light-orange/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-hotel-light-orange/20 text-hotel-orange text-sm font-medium mb-3">
              Tienda para mascotas
            </span>
            <h2 className="text-3xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-hotel-purple to-hotel-dark-purple">
              Todo lo que tu mascota necesita
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección de productos de alta calidad para el cuidado y diversión de tu mascota.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                <div className="overflow-hidden rounded-lg mb-4 h-48">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-hotel-purple transition-colors">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-hotel-dark-purple">{product.price.toFixed(2)}€</span>
                  <Badge className="bg-hotel-purple">{product.category}</Badge>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-gradient-to-r from-hotel-purple to-hotel-dark-purple hover:from-hotel-dark-purple hover:to-hotel-purple text-white shadow-md hover:shadow-lg">
              <Link to="/productos" className="flex items-center gap-2">
                Ver todos los productos
                <ShoppingBag className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="py-16 relative overflow-hidden bg-gradient-to-r from-hotel-purple/90 to-hotel-dark-purple text-white">
        <div className="absolute inset-0 pet-bg opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para darle a tu mascota unas vacaciones de ensueño?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Haz tu reserva ahora y asegura el mejor cuidado para tu mejor amigo mientras tú disfrutas de tu tiempo libre.
          </p>
          <Button asChild size="lg" className="bg-white text-hotel-purple hover:bg-white/90 shadow-xl">
            <Link to="/reservas" className="px-8 py-6 h-auto text-lg font-medium flex items-center gap-2">
              <span>Reservar Ahora</span>
              <Heart className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Preview Gallery */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-hotel-purple to-hotel-dark-purple">
              Un vistazo a nuestra experiencia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre cómo tus mascotas pueden disfrutar en nuestras instalaciones
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1560743641-3914f2c45636",
              "https://images.unsplash.com/photo-1602979677071-1781b7f40025",
              "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
              "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e"
            ].map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img 
                  src={img}
                  alt={`Huellas y Sueños Image ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4">
                    <Link to="/habitaciones" className="text-white font-medium">Ver más</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
