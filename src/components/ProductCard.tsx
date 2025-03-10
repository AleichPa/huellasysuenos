
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Info, Utensils, ToyBrick, Shirt, Package, Umbrella, Droplets, Scissors, Bath, Cookie, Brush, Shield } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'alimentacion':
        return <Utensils size={14} />;
      case 'juguetes':
        return <ToyBrick size={14} />;
      case 'abrigos':
      case 'arnes':
        return <Shirt size={14} />;
      case 'chubasqueros':
        return <Umbrella size={14} />;
      case 'feromonas':
        return <Droplets size={14} />;
      case 'transportin':
        return <Package size={14} />;
      case 'correas':
        return <Scissors size={14} />;
      case 'cepillos':
        return <Scissors size={14} />;
      case 'champus':
        return <Bath size={14} />;
      case 'snacks':
        return <Cookie size={14} />;
      case 'higiene-dental':
        return <Brush size={14} />; // Changed from Tooth to Brush
      case 'antiparasitarios':
        return <Shield size={14} />;
      default:
        return null;
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'alimentacion': 'Alimentación',
      'juguetes': 'Juguetes',
      'abrigos': 'Abrigos',
      'arnes': 'Arnés',
      'chubasqueros': 'Chubasqueros',
      'feromonas': 'Feromonas',
      'transportin': 'Transportín',
      'correas': 'Correas y Collares',
      'cepillos': 'Cepillos y Peines',
      'champus': 'Champús',
      'snacks': 'Snacks y Premios',
      'higiene-dental': 'Higiene Dental',
      'antiparasitarios': 'Antiparasitarios'
    };
    
    return labels[category] || category;
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-hotel-light-purple/30">
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="overflow-hidden h-56">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <Badge className="absolute top-2 right-2 bg-hotel-purple text-white flex items-center gap-1">
          {getCategoryIcon(product.category)}
          {getCategoryLabel(product.category)}
        </Badge>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2 text-hotel-dark-purple group-hover:text-hotel-purple transition-colors">
          {product.name}
        </CardTitle>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-semibold text-hotel-dark-purple">
            {product.price.toFixed(2)}€
          </span>
          <span className={`text-sm ${product.stock > 5 ? 'text-green-600' : product.stock > 0 ? 'text-orange-500' : 'text-red-500'}`}>
            {product.stock > 5 ? 'En stock' : product.stock > 0 ? `Solo ${product.stock} disponibles` : 'Agotado'}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          onClick={() => addToCart(product)}
          className="flex-1 bg-hotel-purple hover:bg-hotel-dark-purple transition-colors"
          disabled={product.stock === 0}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Añadir
        </Button>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="border-hotel-purple text-hotel-purple hover:bg-hotel-light-purple/10">
              <Info className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{product.name}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="rounded-lg max-h-48 object-cover"
                />
              </div>
              <DialogDescription>
                {product.description}
              </DialogDescription>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">{product.price.toFixed(2)}€</span>
                <Button 
                  onClick={() => {
                    addToCart(product);
                    setIsOpen(false);
                  }}
                  className="bg-hotel-purple hover:bg-hotel-dark-purple"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Añadir al carrito
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
