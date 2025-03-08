
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ShoppingCart from "@/components/ShoppingCart";
import { products } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, ShoppingBag, Filter } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const Productos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("destacados");
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category === "todas" ? null : category);
  };

  const filteredProducts = products.filter((product) => {
    // Check text search
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Check category
    const matchesCategory = selectedCategory === null || product.category === selectedCategory;
    
    // Check price
    const matchesPrice = maxPrice === null || product.price <= maxPrice;
    
    // Check stock
    const matchesStock = !showOnlyInStock || product.stock > 0;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesStock;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "precio-asc":
        return a.price - b.price;
      case "precio-desc":
        return b.price - a.price;
      case "nombre":
        return a.name.localeCompare(b.name);
      case "disponibilidad":
        return b.stock - a.stock;
      default: // destacados (default, keep original order)
        return 0;
    }
  });

  const categories = [
    { value: "todas", label: "Todas las categorías" },
    { value: "comida", label: "Comida" },
    { value: "juguetes", label: "Juguetes" },
    { value: "accesorios", label: "Accesorios" },
    { value: "higiene", label: "Higiene" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-7 w-7 text-hotel-purple" />
            <h1 className="text-3xl font-display font-bold text-gray-800">Tienda para Mascotas</h1>
          </div>
          <ShoppingCart />
        </div>
        
        <div className="rounded-xl bg-gradient-to-r from-hotel-light-purple/20 to-hotel-soft-lavender/30 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-hotel-purple/20 focus-visible:ring-hotel-purple/30"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
              <div className="w-full md:w-auto flex-1 md:flex-none min-w-40">
                <Select onValueChange={(value) => handleCategoryChange(value)} defaultValue="todas">
                  <SelectTrigger className="w-full border-hotel-purple/20 focus:ring-hotel-purple/30">
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full md:w-auto flex-1 md:flex-none min-w-40">
                <Select onValueChange={setSortBy} defaultValue="destacados">
                  <SelectTrigger className="w-full border-hotel-purple/20 focus:ring-hotel-purple/30">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="destacados">Destacados</SelectItem>
                    <SelectItem value="precio-asc">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="precio-desc">Precio: Mayor a Menor</SelectItem>
                    <SelectItem value="nombre">Nombre</SelectItem>
                    <SelectItem value="disponibilidad">Disponibilidad</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="border-hotel-purple/20 text-hotel-purple">
                    <Filter className="mr-2 h-4 w-4" />
                    Filtros
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Precio máximo</h4>
                      <div className="grid grid-cols-5 gap-2">
                        {[10, 20, 30, 50, null].map((price, i) => (
                          <Button
                            key={i}
                            variant={maxPrice === price ? "default" : "outline"}
                            className={maxPrice === price ? "bg-hotel-purple hover:bg-hotel-dark-purple" : ""}
                            onClick={() => setMaxPrice(price)}
                          >
                            {price === null ? "Todos" : `${price}€`}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="stock" 
                        checked={showOnlyInStock}
                        onCheckedChange={(checked) => setShowOnlyInStock(checked === true)}
                        className="data-[state=checked]:bg-hotel-purple data-[state=checked]:border-hotel-purple"
                      />
                      <Label htmlFor="stock">Solo productos en stock</Label>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron productos</h3>
            <p className="text-gray-500">Intenta con otros filtros de búsqueda</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Productos;
