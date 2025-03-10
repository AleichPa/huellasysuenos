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
    name: "Abrigo Térmico para Invierno",
    price: 18.99,
    description: "Abrigo térmico ideal para paseos en invierno. Diseñado para mantener a tu mascota caliente y protegida del frío. Con cierre ajustable y fácil de poner y quitar.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    category: "abrigos",
    stock: 8
  },
  {
    id: "7",
    name: "Chaleco Ligero Reflectante",
    price: 8.25,
    description: "Chaleco ligero con bandas reflectantes para mayor visibilidad en paseos nocturnos. Proporciona una capa extra de protección sin limitar el movimiento.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c44",
    category: "abrigos",
    stock: 14
  },
  {
    id: "8",
    name: "Arnés Acolchado Ajustable",
    price: 15.99,
    description: "Arnés acolchado con múltiples puntos de ajuste para un ajuste perfecto y cómodo. Diseñado para distribuir la presión uniformemente y evitar tirones en el cuello.",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e",
    category: "arnes",
    stock: 15
  },
  {
    id: "9",
    name: "Arnés Antitirón para Paseos",
    price: 12.50,
    description: "Arnés especialmente diseñado para prevenir tirones durante el paseo. Con punto de enganche frontal que facilita el control y el entrenamiento de paseo.",
    image: "https://images.unsplash.com/photo-1567014327298-1abd38a5a3ff",
    category: "arnes",
    stock: 12
  },
  {
    id: "10",
    name: "Chubasquero con Capucha",
    price: 19.99,
    description: "Chubasquero impermeable con capucha para proteger a tu mascota completamente de la lluvia. Con aberturas para las patas y ajuste elástico para mayor comodidad.",
    image: "https://images.unsplash.com/photo-1600077106724-946750eeaf3c",
    category: "chubasqueros",
    stock: 8
  },
  {
    id: "11",
    name: "Poncho Impermeable Plegable",
    price: 15.75,
    description: "Poncho impermeable ligero y fácil de plegar para llevar a todas partes. Protección instantánea contra la lluvia imprevista durante los paseos.",
    image: "https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2",
    category: "chubasqueros",
    stock: 15
  },
  {
    id: "12",
    name: "Difusor de Feromonas para Gatos",
    price: 22.95,
    description: "Difusor de feromonas que ayuda a reducir el estrés y la ansiedad en gatos. Ideal para mudanzas, viajes o para calmar a gatos nerviosos o asustadizos.",
    image: "https://images.unsplash.com/photo-1563278689-3819a3be1cd1",
    category: "feromonas",
    stock: 10
  },
  {
    id: "13",
    name: "Collar con Feromonas Calmantes",
    price: 18.50,
    description: "Collar que libera feromonas calmantes de forma continua durante hasta 30 días. Ayuda a reducir comportamientos no deseados causados por el estrés.",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f",
    category: "feromonas",
    stock: 12
  },
  {
    id: "14",
    name: "Bolso Transportín Premium",
    price: 35.99,
    description: "Bolso transportín elegante y funcional con ventilación óptima y materiales duraderos. Interior acolchado para mayor comodidad durante los viajes.",
    image: "https://images.unsplash.com/photo-1560743641-3914f2c45636",
    category: "transportin",
    stock: 5
  },
  {
    id: "15",
    name: "Transportín Plegable para Viajes",
    price: 28.50,
    description: "Transportín plegable fácil de almacenar cuando no está en uso. Ligero pero resistente, con múltiples aberturas para una ventilación adecuada.",
    image: "https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95",
    category: "transportin",
    stock: 7
  },
  {
    id: "16",
    name: "Collar Ajustable de Nylon",
    price: 8.99,
    description: "Collar ajustable de nylon resistente con hebilla de seguridad. Disponible en varios colores y tamaños para adaptarse a cualquier mascota.",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
    category: "correas",
    stock: 22
  },
  {
    id: "17",
    name: "Correa Retráctil con Mango Ergonómico",
    price: 15.50,
    description: "Correa retráctil con sistema de bloqueo y mango ergonómico para mayor comodidad. Ideal para paseos largos y entrenamientos.",
    image: "https://images.unsplash.com/photo-1548199569-3e1c6aa8f469",
    category: "correas",
    stock: 18
  },
  {
    id: "18",
    name: "Cepillo Desenredante para Pelo Largo",
    price: 9.75,
    description: "Cepillo especialmente diseñado para desenredar el pelo largo sin causar molestias. Ideal para gatos y perros de pelo largo o semi-largo.",
    image: "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee",
    category: "cepillos",
    stock: 14
  },
  {
    id: "19",
    name: "Peine de Púas Finas para Pelo Corto",
    price: 6.50,
    description: "Peine con púas finas para eliminar pelo muerto y suciedad en mascotas de pelo corto. Ayuda a prevenir la formación de nudos y mantiene el pelaje sano.",
    image: "https://images.unsplash.com/photo-1560743641-3914f2c45636",
    category: "cepillos",
    stock: 20
  },
  {
    id: "20",
    name: "Champú Hidratante para Pieles Sensibles",
    price: 14.99,
    description: "Champú formulado específicamente para mascotas con piel sensible. Con ingredientes naturales que hidratan y calman la irritación, dejando el pelo suave y brillante.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    category: "champus",
    stock: 12
  },
  {
    id: "21",
    name: "Acondicionador Desenredante con Aloe Vera",
    price: 12.25,
    description: "Acondicionador con aloe vera que facilita el desenredado y aporta brillo al pelaje. Ideal para usar después del champú para un cuidado completo.",
    image: "https://images.unsplash.com/photo-1589924691985-18e8c2327512",
    category: "champus",
    stock: 15
  },
  {
    id: "22",
    name: "Snacks Naturales Deshidratados",
    price: 6.95,
    description: "Snacks naturales deshidratados sin conservantes ni aditivos. Perfectos como premio o complemento a la alimentación diaria de tu mascota.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    category: "snacks",
    stock: 28
  },
  {
    id: "23",
    name: "Premios Dentales Masticables",
    price: 4.50,
    description: "Premios masticables que ayudan a limpiar los dientes y reducir el sarro mientras tu mascota disfruta. Con forma especial para llegar a todas las zonas de la boca.",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd",
    category: "snacks",
    stock: 32
  },
  {
    id: "24",
    name: "Kit Dental con Pasta y Cepillo",
    price: 12.99,
    description: "Kit completo para la higiene dental de tu mascota, incluye pasta dental con sabor a pollo y cepillo de dientes ergonómico para facilitar la limpieza.",
    image: "https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95",
    category: "higiene-dental",
    stock: 10
  },
  {
    id: "25",
    name: "Limpiador Bucal Líquido",
    price: 8.75,
    description: "Limpiador bucal líquido que se añade al agua de tu mascota. Ayuda a combatir el mal aliento y reduce la formación de placa bacteriana sin necesidad de cepillado.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    category: "higiene-dental",
    stock: 18
  },
  {
    id: "26",
    name: "Collar Antiparasitario de Larga Duración",
    price: 18.99,
    description: "Collar antiparasitario que protege a tu mascota contra pulgas y garrapatas durante hasta 8 meses. Resistente al agua y ajustable para diferentes tamaños.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    category: "antiparasitarios",
    stock: 15
  },
  {
    id: "27",
    name: "Pipetas Repelentes para Perros",
    price: 14.50,
    description: "Pack de pipetas repelentes de insectos y parásitos para perros. Fácil aplicación y efecto duradero, protegiéndolos durante semanas.",
    image: "https://images.unsplash.com/photo-1567014327298-1abd38a5a3ff",
    category: "antiparasitarios",
    stock: 20
  },
  {
    id: "28",
    name: "Rascador para Gatos con Poste",
    price: 25.99,
    description: "Rascador de sisal natural con poste y plataforma superior. Ideal para que tu gato ejercite sus garras, estire sus músculos y tenga un lugar propio para descansar. Base estable y duradera.",
    image: "https://images.unsplash.com/photo-1574144113084-b6f450cc5e0c",
    category: "juguetes",
    stock: 10
  }
];
