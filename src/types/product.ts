
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'alimentacion' | 'juguetes' | 'abrigos' | 'arnes' | 'chubasqueros' | 'feromonas' | 'transportin' | 'correas' | 'cepillos' | 'champus' | 'snacks' | 'higiene-dental' | 'antiparasitarios';
  stock: number;
}
