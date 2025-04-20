
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: "1",
    name: "Pienso natural Huellas y Sueños",
    price: 24.99,
    description: "Comida natural de alta calidad para perros y gatos. Elaborada con ingredientes frescos, sin conservantes ni aditivos artificiales. Ideal para mascotas con alergias o problemas digestivos.",
    image: "public/PATÉ.png",
    category: "alimentacion",
    stock: 15
  },
  {
    id: "150",
    name: "Paté natural Huellas y Sueños",
    price: 14.99,
    description: "Comida natural de alta calidad para perros y gatos. Elaborada con ingredientes frescos, sin conservantes ni aditivos artificiales. Ideal para mascotas con alergias o problemas digestivos.",
    image: "public/PIENSO.png",
    category: "alimentacion",
    stock: 15
  },
  {
    id: "2",
    name: "Pienso Orgánico Equilibrado",
    price: 18.50,
    description: "Pienso orgánico formulado específicamente para ofrecer una nutrición completa y equilibrada. Con vitaminas y minerales esenciales para mantener a tu mascota saludable y con un pelaje brillante.",
    image: "https://images.ctfassets.net/550nf1gumh01/3On3unatR5g271dhnyAlY4/0373744af73afb3aca80bfeb08e2d0de/Pack_-_Cat_Adult_Kibble_Salmon_EN.png?fm=webp&q=85&w=1096",
    category: "alimentacion",
    stock: 20
  },
  {
    id: "3",
    name: "Pienso para Cachorros",
    price: 11.99,
    description: "Alimento especial para cachorros que proporciona todos los nutrientes necesarios para un crecimiento óptimo. Enriquecido con DHA para el desarrollo cerebral y visual.",
    image: "https://images.ctfassets.net/550nf1gumh01/77YQSg0m2pgdvftVh8tJqo/d54e0e79809f018a0105c00d05029822/Pack_-_Dog_Junior_Kibble_Duck_Chicken_EN.png?fm=webp&q=85&w=1096",
    category: "alimentacion",
    stock: 18
  },
  {
    id: "4",
    name: "Pelota Interactiva con Sonido",
    price: 7.95,
    description: "Juguete interactivo con sonido que estimula el instinto de juego de tu mascota. Fabricado con materiales resistentes y seguros. Ideal para juegos de buscar y traer.",
    image: "https://img.kwcdn.com/product/1eed5135d0/40b116de-cc29-48dd-b40f-1182bdbb5fe8_800x800.png?imageView2/2/w/800/q/70/format/webp",
    category: "juguetes",
    stock: 25
  },
  {
    id: "5",
    name: "Ratón de Peluche con Catnip",
    price: 5.50,
    description: "Juguete de peluche en forma de ratón relleno de catnip natural. Perfecto para estimular el juego y el ejercicio en gatos. Tamaño ideal para atrapar y morder.",
    image: "https://goldpet.es/36918-large_default/raton-de-peluche-con-catnip-para-gato.jpg",
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
    image: "https://contents.mediadecathlon.com/p2612154/k$31da3913a402ffd55437c4f72d764b33/sq/chaleco-perro-caza-solognac-100-amarillo-fluo.jpg?format=auto&f=1800x1800",
    category: "abrigos",
    stock: 14
  },
  {
    id: "8",
    name: "Arnés Acolchado Ajustable",
    price: 15.99,
    description: "Arnés acolchado con múltiples puntos de ajuste para un ajuste perfecto y cómodo. Diseñado para distribuir la presión uniformemente y evitar tirones en el cuello.",
    image: "https://img.kwcdn.com/product/fancy/f41cc5b7-d61b-47b0-a152-f86d11846a0a.jpg?imageView2/2/w/800/q/70/format/webp",
    category: "arnes",
    stock: 15
  },
  {
    id: "9",
    name: "Arnés Antitirón para Paseos",
    price: 12.50,
    description: "Arnés especialmente diseñado para prevenir tirones durante el paseo. Con punto de enganche frontal que facilita el control y el entrenamiento de paseo.",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S47f73108e8ba478a83a24b9069feb246T.jpg_960x960q75.jpg_.webp",
    category: "arnes",
    stock: 12
  },
  {
    id: "10",
    name: "Chubasquero con Capucha",
    price: 19.99,
    description: "Chubasquero impermeable con capucha para proteger a tu mascota completamente de la lluvia. Con aberturas para las patas y ajuste elástico para mayor comodidad.",
    image: "https://www.dukier.com/cdn/shop/files/chubasqueros_avocado_1.jpg?v=1741720020&width=1800",
    category: "chubasqueros",
    stock: 8
  },
  {
    id: "11",
    name: "Poncho Impermeable Plegable",
    price: 15.75,
    description: "Poncho impermeable ligero y fácil de plegar para llevar a todas partes. Protección instantánea contra la lluvia imprevista durante los paseos.",
    image: "https://img.kwcdn.com/product/fancy/4e5af142-4019-4772-a83e-3e5869c3e091.jpg?imageView2/2/w/800/q/70/format/webp",
    category: "chubasqueros",
    stock: 15
  },
  {
    id: "12",
    name: "Difusor de Feromonas para Gatos",
    price: 22.95,
    description: "Difusor de feromonas que ayuda a reducir el estrés y la ansiedad en gatos. Ideal para mudanzas, viajes o para calmar a gatos nerviosos o asustadizos.",
    image: "https://media.zooplus.com/bilder/0/800/67609_pla_ceva_feliway_classic_starterset_0.jpg",
    category: "feromonas",
    stock: 10
  },
  {
    id: "13",
    name: "Collar con Feromonas Calmantes para gatos",
    price: 18.50,
    description: "Collar que libera feromonas calmantes de forma continua durante hasta 30 días. Ayuda a reducir comportamientos no deseados causados por el estrés.",
    image: "https://img.kwcdn.com/product/fancy/7c5d16d3-c659-459d-9552-6e77d2c7644a.jpg?imageView2/2/w/800/q/70/format/webp",
    category: "feromonas",
    stock: 12
  },
  {
    id: "35",
    name: "Collar con Feromonas Calmantes para perros",
    price: 18.50,
    description: "Collar que libera feromonas calmantes de forma continua durante hasta 30 días. Ayuda a reducir comportamientos no deseados causados por el estrés.",
    image: "https://m.media-amazon.com/images/I/61B-Qg3AytL._AC_SL1500_.jpg",
    category: "feromonas",
    stock: 12
  },
  {
    id: "14",
    name: "Bolso Transportín Premium",
    price: 35.99,
    description: "Bolso transportín elegante y funcional con ventilación óptima y materiales duraderos. Interior acolchado para mayor comodidad durante los viajes.",
    image: "https://media.zooplus.com/bilder/3/800/295099_deluxe_umhaengetasche_fuzz_fg_4568_3.jpg",
    category: "transportin",
    stock: 5
  },
  {
    id: "15",
    name: "Transportín Plegable para Viajes",
    price: 28.50,
    description: "Transportín plegable fácil de almacenar cuando no está en uso. Ligero pero resistente, con múltiples aberturas para una ventilación adecuada.",
    image: "https://media.zooplus.com/bilder/9/800/469744_transporth_tte_first_class_basic_11_9.jpg",
    category: "transportin",
    stock: 7
  },
  {
    id: "16",
    name: "Collar Ajustable de Nylon",
    price: 8.99,
    description: "Collar ajustable de nylon resistente con hebilla de seguridad. Disponible en varios colores y tamaños para adaptarse a cualquier mascota.",
    image: "https://i5.walmartimages.com/asr/56b1c597-5220-41b1-bf88-04a29e6c7e22.1dcd12714c9a4c32eb1161517b667a8f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    category: "correas",
    stock: 22
  },
  {
    id: "36",
    name: "Collar Ajustable de Nylon para gatos",
    price: 8.99,
    description: "Collar ajustable de nylon resistente con hebilla de seguridad. Disponible en varios colores y tamaños para adaptarse a cualquier mascota.",
    image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/356985cee4a8afd2a6ad68c1abaa1e00.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
    category: "correas",
    stock: 22
  },
  {
    id: "17",
    name: "Correa Retráctil con Mango Ergonómico",
    price: 15.50,
    description: "Correa retráctil con sistema de bloqueo y mango ergonómico para mayor comodidad. Ideal para paseos largos y entrenamientos.",
    image: "https://m.media-amazon.com/images/I/71tLWy4rfTL.jpg",
    category: "correas",
    stock: 18
  },
  {
    id: "18",
    name: "Cepillo Desenredante para Pelo Largo",
    price: 9.75,
    description: "Cepillo especialmente diseñado para desenredar el pelo largo sin causar molestias. Ideal para gatos y perros de pelo largo o semi-largo.",
    image: "https://img.kwcdn.com/product/fancy/a9bc7f6c-ce8b-4642-b8cf-bf98cc07b984.jpg?imageView2/2/w/800/q/70/format/webp",
    category: "cepillos",
    stock: 14
  },
  {
    id: "19",
    name: "Peine de Púas Finas para Pelo Corto",
    price: 6.50,
    description: "Peine con púas finas para eliminar pelo muerto y suciedad en mascotas de pelo corto. Ayuda a prevenir la formación de nudos y mantiene el pelaje sano.",
    image: "https://m.media-amazon.com/images/I/716bOT6xCDL._AC_SL1500_.jpg",
    category: "cepillos",
    stock: 20
  },
  {
    id: "20",
    name: "Champú Hidratante para Pieles Sensibles",
    price: 14.99,
    description: "Champú formulado específicamente para mascotas con piel sensible. Con ingredientes naturales que hidratan y calman la irritación, dejando el pelo suave y brillante.",
    image: "https://m.media-amazon.com/images/I/81X2E61q4RL._AC_UF894,1000_QL80_.jpg",
    category: "champus",
    stock: 12
  },
  {
    id: "21",
    name: "Acondicionador Desenredante con Aloe Vera",
    price: 12.25,
    description: "Acondicionador con aloe vera que facilita el desenredado y aporta brillo al pelaje. Ideal para usar después del champú para un cuidado completo.",
    image: "https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwba03abc5/images/large/980db82678ad42d8ae95a2829806c7b6.jpg?sw=780&sh=780&sm=fit&q=85",
    category: "champus",
    stock: 15
  },
  {
    id: "22",
    name: "Snacks Naturales Deshidratados",
    price: 6.95,
    description: "Snacks naturales deshidratados sin conservantes ni aditivos. Perfectos como premio o complemento a la alimentación diaria de tu mascota.",
    image: "https://maikaipets.com/wp-content/uploads/09-maikai-pets-blog-snacks-deshi.jpg",
    category: "snacks",
    stock: 28
  },
  {
    id: "23",
    name: "Premios Dentales Masticables",
    price: 4.50,
    description: "Premios masticables que ayudan a limpiar los dientes y reducir el sarro mientras tu mascota disfruta. Con forma especial para llegar a todas las zonas de la boca.",
    image: "https://images.ctfassets.net/550nf1gumh01/6sw4NfnoWoeTG67Z9MoBk/4a7afa442a2b2ee460de66a376d76d03/Pack_-_Dog_Adult_Dental_Apple_Eucalyptus_Small_EN.png",
    category: "snacks",
    stock: 32
  },
  {
    id: "24",
    name: "Kit Dental con Pasta y Cepillo",
    price: 12.99,
    description: "Kit completo para la higiene dental de tu mascota, incluye pasta dental con sabor a pollo y cepillo de dientes ergonómico para facilitar la limpieza.",
    image: "https://static.zoomalia.com/prod_img/33703/lm_33904025959b191f8f9de3f924f0940515f1479204072.jpg",
    category: "higiene-dental",
    stock: 10
  },
  {
    id: "25",
    name: "Limpiador Bucal Líquido",
    price: 8.75,
    description: "Limpiador bucal líquido que se añade al agua de tu mascota. Ayuda a combatir el mal aliento y reduce la formación de placa bacteriana sin necesidad de cepillado.",
    image: "https://media.zooplus.com/bilder/2/800/317896_pla_vetsbest_dental_atemerfrischer_hs_01_2.jpg",
    category: "higiene-dental",
    stock: 18
  },
  {
    id: "26",
    name: "Collar Antiparasitario de Larga Duración",
    price: 18.99,
    description: "Collar antiparasitario que protege a tu mascota contra pulgas y garrapatas durante hasta 8 meses. Resistente al agua y ajustable para diferentes tamaños.",
    image: "https://piensoymascotas.com/21256-thickbox_default/prevendog-collar-garrapatas-perro-picaduras.webp",
    category: "antiparasitarios",
    stock: 15
  },
  {
    id: "27",
    name: "Pipetas Repelentes para Perros",
    price: 14.50,
    description: "Pack de pipetas repelentes de insectos y parásitos para perros. Fácil aplicación y efecto duradero, protegiéndolos durante semanas.",
    image: "https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwc31c83ac/images/pipetas_antiparasitarias_perros_grandes_beaphar_spot_on_BEA10616.jpg?sw=780&sh=780&sm=fit&q=85",
    category: "antiparasitarios",
    stock: 20
  },
  {
    id: "28",
    name: "Golosinas para Perros Variadas",
    price: 7.99,
    description: "Surtido de golosinas para perros con diferentes sabores y texturas. Perfectas para el entrenamiento o como premio. Elaboradas con ingredientes naturales.",
    image: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb",
    category: "snacks",
    stock: 25
  },
  {
    id: "29",
    name: "Barritas de Semillas para Aves",
    price: 4.99,
    description: "Barritas nutritivas con mezcla de semillas y frutas para canarios, periquitos y otras aves. Proporcionan vitaminas y minerales esenciales.",
    image: "https://static.zoomalia.com/prod_img/60632/lm_49f457c545a9ded88f18ecee47145a72c01562832607.jpg",
    category: "snacks",
    stock: 20
  },
  {
    id: "30",
    name: "Snacks de Heno para Conejos",
    price: 3.75,
    description: "Snacks de heno prensado con hierbas aromáticas. Ayudan al desgaste dental y aportan fibra a la dieta de conejos y roedores.",
    image: "https://media.zooplus.com/bilder/5/400/28140_pla_jrfarm_grainless_complete_zwergkaninchen_5.jpg",
    category: "snacks",
    stock: 18
  },
  {
    id: "31",
    name: "Topping de Vegetales para Roedores",
    price: 2.95,
    description: "Mezcla deshidratada de vegetales para complementar la alimentación de cobayos, hámsters y otros pequeños roedores. Rico en vitamina C.",
    image: "https://media.zooplus.com/bilder/6/400/84485_pla_jr_farm_nager_traum_600g_2__6.jpg",
    category: "snacks",
    stock: 22
  },
  {
    id: "32",
    name: "Cubos de Alfalfa para Conejos",
    price: 5.25,
    description: "Cubos de alfalfa comprimida, ideales como golosina nutritiva para conejos y cobayas. Favorecen un correcto desgaste dental.",
    image: "https://media.zooplus.com/bilder/4/400/84624_pla_jr_farm_grainless_one_2850g_4.jpg",
    category: "snacks",
    stock: 15
  },
  {
    id: "33",
    name: "Insectos Deshidratados para Reptiles",
    price: 8.50,
    description: "Mezcla de grillos y gusanos de la harina deshidratados. Alimento complementario alto en proteínas para lagartos, camaleones y otros reptiles.",
    image: "https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw93472827/images/Trixie_grillos_deshidratados_para_reptil_y_erizo_TRI14389.jpg?sw=780&sh=780&sm=fit&q=85",
    category: "snacks",
    stock: 12
  },
  {
    id: "34",
    name: "Alimento Liofilizado para Peces",
    price: 6.75,
    description: "Alimento liofilizado en escamas para peces tropicales. Conserva todas las propiedades nutricionales y vitaminas. No enturbia el agua.",
    image: "https://www.tropiacuariumbilbao.com/contents/media/t_1540_fd_artemia_shrimps100_20180308130341.jpg",
    category: "snacks",
    stock: 20
  },
  {
    id: "37",
    name: "Champú Hidratante para Gatos",
    price: 13.99,
    description: "Champú especialmente formulado para la piel sensible de los gatos. Con ingredientes naturales que mantienen el pelo suave y brillante sin irritar la piel.",
    image: "https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw0b9af9d2/images/champu_gatos_yesph_antinudos_YESTA38NCHGG_M.jpg?sw=780&sh=780&sm=fit&q=85",
    category: "champus",
    stock: 14
  },
  {
    id: "38",
    name: "Champú Suave para Conejos",
    price: 11.50,
    description: "Champú suave y sin lágrimas para la higiene de conejos. Formulado con extractos vegetales para limpiar sin dañar su delicada piel.",
    image: "https://static.zoomalia.com/prod_img/135364/lm_242e4a6222cdb5b34375400904f03d8e6a51680611579.jpg",
    category: "champus",
    stock: 10
  },
  // Nuevos antiparasitarios para otros mamíferos
  {
    id: "39",
    name: "Antiparasitario para Conejos",
    price: 16.75,
    description: "Tratamiento antiparasitario seguro y eficaz para conejos. Protege contra parásitos externos como pulgas y ácaros. Aplicación tópica de fácil uso.",
    image: "https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwb6856dcf/images/Nayeco_Dancing_Rain_chubasquero_para_perro_azul_MENM0015.jpg?sw=780&sh=780&sm=fit&q=85",
    category: "antiparasitarios",
    stock: 12
  },
  {
    id: "40",
    name: "Antiparasitario para Hurones",
    price: 18.50,
    description: "Solución antiparasitaria para hurones que elimina y previene infestaciones de pulgas, garrapatas y ácaros. Con aplicador especial para facilitar el tratamiento.",
    image: "https://www.lepetitrongeur.com/4087-medium_default/hamiform-pipetas-antiparasitarias-para-hurones.jpg",
    category: "antiparasitarios",
    stock: 8
  },
  {
    id: "41",
    name: "Spray Antiparasitario para Roedores",
    price: 12.25,
    description: "Spray suave para proteger a hámsters, cobayas y otros pequeños roedores contra parásitos. Sin olor y de secado rápido, seguro para mascotas sensibles.",
    image: "https://static.miscota.com/media/1/photos/products/512925/00082380-6571ec3f6787d_g.png",
    category: "antiparasitarios",
    stock: 15
  },
  {
    id: "42",
    name: "Desparasitario para aves",
    price: 14.99,
    description: "Gotas concentradas para añadir al agua de bebida de aves ornamentales. Tratamiento preventivo contra parásitos internos común en canarios, periquitos y otras aves.",
    image: "https://static.miscota.com/media/1/photos/products/512925/00082380-6571ec3f6787d_g.png",
    category: "antiparasitarios",
    stock: 10
  },
  {
    id: "46",
    name: "Hueso de Golosinas Sabor Pollo",
    price: 3.75,
    description: "Hueso masticable hecho con ingredientes naturales y sabor a pollo. Una deliciosa recompensa que además ayuda a mantener la higiene dental de tu perro. Para razas pequeñas y medianas.",
    image: "https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwcd473cb4/images/snacks_perros_trixie_huesos_denta_fun_TRI31774.jpg?sw=780&sh=780&sm=fit&q=85",
    category: "snacks",
    stock: 40
  },
  {
    id: "47",
    name: "Hueso de Golosinas XXL para Razas Grandes",
    price: 5.50,
    description: "Hueso de golosinas de tamaño extra grande para perros de razas grandes. Con sabor a carne de vacuno y fórmula especial que promueve la masticación prolongada y saludable.",
    image: "https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw0a6342a1/images/snacks_perros_arquizoo_hueso_blanco_8_pulgadas_ARQTE012.jpg?sw=780&sh=780&sm=fit&q=85",
    category: "snacks",
    stock: 22
  },
  {
    id: "48",
    name: "Hueso Dental Antibacteriano",
    price: 7.25,
    description: "Hueso dental con fórmula antibacteriana para una limpieza profunda. Ayuda a eliminar el sarro y la placa dental mientras tu perro disfruta masticando. Con forma ergonómica para alcanzar todas las zonas de la boca.",
    image: "https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwd78d14ee/images/hueso_dental_perros_nylabone_NYLNTE202.jpg?sw=780&sh=780&sm=fit&q=85",
    category: "higiene-dental",
    stock: 18
  },
  {
    id: "49",
    name: "Hueso Dental para Cachorros",
    price: 5.95,
    description: "Hueso dental especialmente diseñado para cachorros en etapa de dentición. Con textura suave que alivia las encías y limpia los dientes emergentes. Sabor a pollo que encantará a tu cachorro.",
    image: "https://www.kiwoko.com/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw1bea8a17/images/hueso_dental_cachorros_nylabone_puppy_NYLNTE203.jpg?sw=780&sh=780&sm=fit&q=85",
    category: "higiene-dental",
    stock: 15
  },
  {
    id: "50",
    name: "Juguete Masticable de Nylon Ultra Resistente",
    price: 11.99,
    description: "Juguete masticable fabricado con nylon de alta calidad. Diseñado para los masticadores más intensos, este juguete resiste incluso a los perros más destructivos. Con textura que ayuda a la limpieza dental.",
    image: "https://img.kwcdn.com/product/fancy/2551cffa-f5f0-4216-991b-7a42a1564f5f.jpg?imageView2/2/w/800/q/70/format/webp",
    category: "juguetes",
    stock: 18
  },
  {
    id: "51",
    name: "Pelota con Sonido para Perros",
    price: 7.50,
    description: "Pelota de goma resistente con sonido que estimula el juego. Perfecta para lanzar y recuperar, proporcionando horas de diversión y ejercicio para tu perro.",
    image: "https://img.kwcdn.com/product/fancy/0ba9a1cd-2374-40de-a148-1e7349d10f83.jpg?imageView2/2/w/800/q/70/format/webp",
    category: "juguetes",
    stock: 25
  },
  {
    id: "52",
    name: "Ratón Electrónico para Gatos",
    price: 12.99,
    description: "Juguete electrónico con forma de ratón que se mueve de manera impredecible, estimulando el instinto cazador de tu gato. Con batería recargable y función de apagado automático.",
    image: "https://media.zooplus.com/bilder/9/800/67334_katzenspielzeug_wild_mouse_mit_sound_und_led_fg_2719_9.jpg",
    category: "juguetes",
    stock: 15
  },
  {
    id: "53",
    name: "Túnel Plegable para Gatos",
    price: 14.50,
    description: "Túnel de juego plegable con múltiples entradas. Proporciona un escondite perfecto y estimula el ejercicio de tu gato. Fácil de guardar cuando no está en uso.",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S16162ed65c0a4e52bd26c6b477d26cb2g.jpg_960x960q75.jpg_.avif",
    category: "juguetes",
    stock: 10
  },
  {
    id: "54",
    name: "Frisbee Flotante para Perros",
    price: 8.99,
    description: "Frisbee de goma suave y resistente que flota en el agua. Ideal para juegos de recuperación en tierra o agua. Diseño ergonómico que no daña los dientes ni encías.",
    image: "https://media.zooplus.com/bilder/4/400/26785_pla_kong_flyer_hundefrisbee_l_hs_kf3e_4.jpg",
    category: "juguetes",
    stock: 20
  },
  {
    id: "55",
    name: "Columpio para Pájaros",
    price: 6.75,
    description: "Columpio de madera natural para jaulas de pájaros. Proporciona entretenimiento y ejercicio, estimulando el comportamiento natural de balanceo en aves domésticas.",
    image: "https://media.zooplus.com/bilder/4/400/451114_tiaki_bird_swing_s_fg_9567_4.jpg",
    category: "juguetes",
    stock: 18
  },
  {
    id: "56",
    name: "Pelota de Caucho Natural para Perros",
    price: 9.95,
    description: "Pelota resistente hecha de caucho 100% natural y sostenible. Ideal para perros con mucha energía o masticadores intensos. Su diseño rebotante proporciona horas de diversión y ejercicio.",
    image: "https://media.zooplus.com/bilder/0/800/554997_pla_earth_rated_fetch_toy_hs_01_0.jpg",
    category: "juguetes",
    stock: 25
  },
  {
    id: "57",
    name: "Pelota de Caucho Natural para Gatos",
    price: 6.50,
    description: "Pelota suave de caucho natural con cascabel interior. Perfecta para gatos activos que disfrutan persiguiendo objetos. Su textura agradable y sonido estimulan el instinto cazador de forma natural.",
    image: "https://w24cdn.cz/www.stepar.cz/_/520x520-1-0-0-0-255255255/product/product_595/b4bb44ee73b4c5821a2c849054eebfd5.jpg",
    category: "juguetes",
    stock: 30
  },
  {
    id: "58",
    name: "Pelota de Ejercicio para Pequeños Roedores",
    price: 4.95,
    description: "Pelota de ejercicio segura para hámsters, jerbos y otros pequeños roedores. Permite que tu mascota haga ejercicio rodando mientras explora el entorno de forma segura.",
    image: "https://media.zooplus.com/bilder/1/400/11906_PLA_Trixie_Snacky_1.jpg",
    category: "juguetes",
    stock: 15
  }
];
