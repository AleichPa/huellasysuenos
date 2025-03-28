
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Clock, Calendar, User, ArrowLeft, Share2, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="pt-24 pb-16 min-h-screen container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-hotel-dark-purple mb-4">Artículo no encontrado</h1>
            <p className="text-gray-600 mb-6">Lo sentimos, el artículo que buscas no existe o ha sido movido.</p>
            <Button asChild>
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                <span>Volver al Blog</span>
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link to="/blog" className="flex items-center gap-2 text-hotel-purple hover:text-hotel-dark-purple transition-colors">
              <ArrowLeft size={16} />
              <span>Volver al Blog</span>
            </Link>
          </div>

          <div className="mb-8">
            <span className="px-3 py-1 bg-hotel-purple text-white text-sm rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-display text-hotel-dark-purple mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600 border-b border-gray-200 pb-6">
            <span className="flex items-center gap-1">
              <User size={16} />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {post.readingTime} min de lectura
            </span>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 size={16} className="mr-1" /> Compartir
            </Button>
          </div>

          <div className="relative h-80 md:h-96 mb-8 overflow-hidden rounded-lg">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="object-cover w-full h-full"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && (
                  <h2 className="text-2xl font-bold text-hotel-dark-purple mb-4 flex items-center gap-2">
                    <PawPrint size={20} className="text-hotel-purple" />
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
                {section.image && (
                  <div className="my-6">
                    <img
                      src={section.image}
                      alt={section.imageAlt || "Imagen del blog"}
                      className="rounded-lg w-full h-auto"
                    />
                    {section.imageCaption && (
                      <p className="text-center text-sm text-gray-500 mt-2">{section.imageCaption}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold font-display text-hotel-dark-purple mb-4">
              Te puede interesar también
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <div key={relatedPost.id} className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-hotel-dark-purple mb-1">
                        <Link to={`/blog/${relatedPost.slug}`} className="hover:text-hotel-purple transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-gray-500">{relatedPost.date}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
