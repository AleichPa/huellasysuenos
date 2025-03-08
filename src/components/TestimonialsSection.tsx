
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    pet: "Luna - Perro",
    image: "https://images.unsplash.com/photo-1438763298591-75a0d42b7265?auto=format&fit=crop&q=80&w=100&h=100",
    stars: 5,
    text: "Dejé a mi perrita Luna por primera vez y estaba muy nerviosa, pero el personal me mantuvo informada con fotos diarias. Luna regresó feliz y descansada."
  },
  {
    name: "Carlos Rodríguez",
    pet: "Oreo - Gato",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    stars: 5,
    text: "Mi gato Oreo, que es bastante exigente, se adaptó perfectamente a Huellas y Sueños. El personal entendió sus necesidades específicas y lo atendieron de maravilla."
  },
  {
    name: "Ana López",
    pet: "Max - Perro",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    stars: 4,
    text: "Las instalaciones son impecables y Max disfrutó mucho de su estadía. Los servicios de spa dejaron a mi perro luciendo y oliendo increíble."
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-hotel-purple font-medium">TESTIMONIOS</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes y sus mascotas es nuestro mayor orgullo. Aquí hay algunas experiencias de quienes ya han confiado en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-4">
                <div className="flex mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-hotel-orange text-hotel-orange" />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, i) => (
                    <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.pet}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
