
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, User, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-display text-hotel-dark-purple mb-4">
              Blog de Huellas y Sueños
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre historias, consejos y experiencias para el cuidado de tus mascotas. Comparte con nosotros el amor por los animales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-hotel-purple text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-hotel-dark-purple font-display">
                    <Link to={`/blog/${post.slug}`} className="hover:text-hotel-purple transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3 text-justify">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button asChild variant="outline" className="text-hotel-purple border-hotel-purple hover:bg-hotel-purple/10">
                    <Link to={`/blog/${post.slug}`} className="flex items-center gap-2">
                      <span>Leer más</span>
                      <BookOpen size={16} />
                    </Link>
                  </Button>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={14} />
                    {post.readingTime} min de lectura
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
