
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: "1",
    name: "Alimentación Natural Premium",
    price: 24.99,
    description: "Comida natural de alta calidad para perros y gatos. Elaborada con ingredientes frescos, sin conservantes ni aditivos artificiales. Ideal para mascotas con alergias o problemas digestivos.",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd",
    category: "alimentacion",
    stock: 15
  },
  {
    id: "2",
    name: "Pienso Orgánico Equilibrado",
    price: 18.50,
    description: "Pienso orgánico formulado específicamente para ofrecer una nutrición completa y equilibrada. Con vitaminas y minerales esenciales para mantener a tu mascota saludable y con un pelaje brillante.",
    image: "https://images.unsplash.com/photo-1589924691985-18e8c2327512",
    category: "alimentacion",
    stock: 20
  },
  {
    id: "3",
    name: "Pienso para Cachorros",
    price: 11.99,
    description: "Alimento especial para cachorros que proporciona todos los nutrientes necesarios para un crecimiento óptimo. Enriquecido con DHA para el desarrollo cerebral y visual.",
    image: "https://images.unsplash.com/photo-1602341129460-344ccc225d0a",
    category: "alimentacion",
    stock: 18
  },
  {
    id: "4",
    name: "Pelota Interactiva con Sonido",
    price: 7.95,
    description: "Juguete interactivo con sonido que estimula el instinto de juego de tu mascota. Fabricado con materiales resistentes y seguros. Ideal para juegos de buscar y traer.",
    image: "https://images.unsplash.com/photo-1546975490-e8b92a360b24",
    category: "juguetes",
    stock: 25
  },
  {
    id: "5",
    name: "Ratón de Peluche con Catnip",
    price: 5.50,
    description: "Juguete de peluche en forma de ratón relleno de catnip natural. Perfecto para estimular el juego y el ejercicio en gatos. Tamaño ideal para atrapar y morder.",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
    category: "juguetes",
    stock: 30
  },
  {
    id: "6",
    name: "Juguete Dispensador de Premios",
    price: 12.75,
    description: "Juguete interactivo que dispensa premios mientras tu mascota juega. Estimula mentalmente a tu mascota y la mantiene entretenida durante horas.",
    image: "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee",
    category: "juguetes",
    stock: 12
  },
  {
    id: "7",
    name: "Abrigo Térmico para Invierno",
    price: 18.99,
    description: "Abrigo térmico ideal para paseos en invierno. Diseñado para mantener a tu mascota caliente y protegida del frío. Con cierre ajustable y fácil de poner y quitar.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    category: "abrigos",
    stock: 8
  },
  {
    id: "8",
    name: "Chaleco Ligero Reflectante",
    price: 8.25,
    description: "Chaleco ligero con bandas reflectantes para mayor visibilidad en paseos nocturnos. Proporciona una capa extra de protección sin limitar el movimiento.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c44",
    category: "abrigos",
    stock: 14
  },
  {
    id: "9",
    name: "Abrigo Impermeable con Forro Polar",
    price: 15.50,
    description: "Abrigo impermeable con forro polar interior para mayor calidez. Resistente al agua y al viento, perfecto para días lluviosos y fríos.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    category: "abrigos",
    stock: 10
  },
  {
    id: "10",
    name: "Arnés Acolchado Ajustable",
    price: 15.99,
    description: "Arnés acolchado con múltiples puntos de ajuste para un ajuste perfecto y cómodo. Diseñado para distribuir la presión uniformemente y evitar tirones en el cuello.",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e",
    category: "arnes",
    stock: 15
  },
  {
    id: "11",
    name: "Arnés Antitirón para Paseos",
    price: 12.50,
    description: "Arnés especialmente diseñado para prevenir tirones durante el paseo. Con punto de enganche frontal que facilita el control y el entrenamiento de paseo.",
    image: "https://images.unsplash.com/photo-1567014327298-1abd38a5a3ff",
    category: "arnes",
    stock: 12
  },
  {
    id: "12",
    name: "Arnés Básico para Cachorros",
    price: 10.25,
    description: "Arnés ligero y fácil de poner, ideal para cachorros. Hecho con materiales suaves y transpirables para mayor comodidad durante los primeros paseos.",
    image: "https://images.unsplash.com/photo-1565440707934-c9bacbad2146",
    category: "arnes",
    stock: 20
  },
  {
    id: "13",
    name: "Chubasquero con Capucha",
    price: 19.99,
    description: "Chubasquero impermeable con capucha para proteger a tu mascota completamente de la lluvia. Con aberturas para las patas y ajuste elástico para mayor comodidad.",
    image: "https://images.unsplash.com/photo-1600077106724-946750eeaf3c",
    category: "chubasqueros",
    stock: 8
  },
  {
    id: "14",
    name: "Poncho Impermeable Plegable",
    price: 15.75,
    description: "Poncho impermeable ligero y fácil de plegar para llevar a todas partes. Protección instantánea contra la lluvia imprevista durante los paseos.",
    image: "https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2",
    category: "chubasqueros",
    stock: 15
  },
  {
    id: "15",
    name: "Difusor de Feromonas para Gatos",
    price: 22.95,
    description: "Difusor de feromonas que ayuda a reducir el estrés y la ansiedad en gatos. Ideal para mudanzas, viajes o para calmar a gatos nerviosos o asustadizos.",
    image: "https://images.unsplash.com/photo-1563278689-3819a3be1cd1",
    category: "feromonas",
    stock: 10
  },
  {
    id: "16",
    name: "Collar con Feromonas Calmantes",
    price: 18.50,
    description: "Collar que libera feromonas calmantes de forma continua durante hasta 30 días. Ayuda a reducir comportamientos no deseados causados por el estrés.",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f",
    category: "feromonas",
    stock: 12
  },
  {
    id: "17",
    name: "Spray de Feromonas para Viajes",
    price: 15.25,
    description: "Spray de feromonas para usar en transportines o nuevos entornos. Proporciona un efecto calmante inmediato y ayuda a tu mascota a adaptarse a situaciones estresantes.",
    image: "https://images.unsplash.com/photo-1543363136-2ae17fd2cba1",
    category: "feromonas",
    stock: 18
  },
  {
    id: "18",
    name: "Bolso Transportín Premium",
    price: 35.99,
    description: "Bolso transportín elegante y funcional con ventilación óptima y materiales duraderos. Interior acolchado para mayor comodidad durante los viajes.",
    image: "https://images.unsplash.com/photo-1560743641-3914f2c45636",
    category: "transportin",
    stock: 5
  },
  {
    id: "19",
    name: "Transportín Plegable para Viajes",
    price: 28.50,
    description: "Transportín plegable fácil de almacenar cuando no está en uso. Ligero pero resistente, con múltiples aberturas para una ventilación adecuada.",
    image: "https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95",
    category: "transportin",
    stock: 7
  },
  {
    id: "20",
    name: "Mochila Transportín para Gatos",
    price: 45.75,
    description: "Mochila transportín espaciosa con ventana tipo burbuja. Permite llevar a tu gato cómodamente mientras puede observar el exterior de forma segura.",
    image: "https://images.unsplash.com/photo-1518288774672-b94e808873ff",
    category: "transportin",
    stock: 4
  }
];
