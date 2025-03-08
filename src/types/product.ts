
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'comida' | 'juguetes' | 'accesorios' | 'higiene';
  stock: number;
}
