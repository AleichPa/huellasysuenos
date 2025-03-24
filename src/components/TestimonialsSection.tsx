
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, Quote, Star, Rabbit, Bird, Mouse } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    pet: "Luna - Perro",
    image: "https://images.unsplash.com/photo-1438763298591-75a0d42b7265?auto=format&fit=crop&q=80&w=100&h=100",
    stars: 5,
    text: "Dejé a mi perrita Luna por primera vez y estaba muy nerviosa, pero el personal me mantuvo informada con fotos diarias. Luna regresó feliz y descansada.",
    icon: null
  },
  {
    name: "Carlos Rodríguez",
    pet: "Oreo - Gato",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    stars: 5,
    text: "Mi gato Oreo, que es bastante exigente, se adaptó perfectamente a Huellas y Sueños. El personal entendió sus necesidades específicas y lo atendieron de maravilla.",
    icon: null
  },
  {
    name: "Ana López",
    pet: "Max - Perro",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    stars: 4,
    text: "Las instalaciones son impecables y Max disfrutó mucho de su estadía. Los servicios de spa dejaron a mi perro luciendo y oliendo increíble.",
    icon: null
  },
  {
    name: "Lucía Martínez",
    pet: "Coco - Hamster",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
    stars: 5,
    text: "Estaba preocupada por dejar a mi pequeño Coco, pero el hotel cuenta con instalaciones especiales para roedores. Lo cuidaron como si fuera su propio hamster.",
    icon: <Mouse className="h-3 w-3" />
  },
  {
    name: "Daniel Torres",
    pet: "Tambor - Conejo",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    stars: 5,
    text: "Mi conejo Tambor recibió atención personalizada y comida fresca todos los días. El área especial para conejos es espaciosa y segura. ¡Volveremos pronto!",
    icon: <Rabbit className="h-3 w-3" />
  },
  {
    name: "Elena Gómez",
    pet: "Piolín - Canario",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
    stars: 4,
    text: "El personal tiene experiencia con aves y mantuvieron a mi canario Piolín en un ambiente tranquilo y adecuado. Aprecié mucho que respetaran sus rutinas de alimentación.",
    icon: <Bird className="h-3 w-3" />
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-hotel-light-blue/10 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-hotel-purple/5 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-hotel-orange/5 rounded-full blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-8 bg-hotel-purple/50 mr-4"></div>
            <span className="text-hotel-purple font-medium">TESTIMONIOS</span>
            <div className="h-px w-8 bg-hotel-purple/50 ml-4"></div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 gradient-text">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes y sus mascotas es nuestro mayor orgullo. Aquí hay algunas experiencias de quienes ya han confiado en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-hotel-orange/50 opacity-30 group-hover:opacity-100 transition-opacity">
                <Quote size={40} />
              </div>
              <CardContent className="pt-10 pb-4 relative z-10">
                <div className="flex mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-hotel-orange text-hotel-orange" />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, i) => (
                    <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-700 italic relative">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="border-t border-gray-100 pt-4 flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-hotel-purple text-white p-1 rounded-full shadow-md">
                    {testimonial.icon || <Heart size={12} className="fill-white" />}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.pet}</p>
                </div>
              </CardFooter>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-hotel-orange to-hotel-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
