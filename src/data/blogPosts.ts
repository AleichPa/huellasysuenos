
export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  coverImage: string;
  excerpt: string;
  readingTime: number;
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Un día en Huellas y Sueños",
    slug: "un-dia-en-huellas-y-suenos",
    author: "María Rodríguez",
    date: "15 de mayo 2023",
    category: "Experiencias",
    coverImage: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    excerpt: "Descubre cómo es la experiencia diaria para las mascotas que se hospedan en nuestro hotel. Desde la rutina matutina hasta las actividades vespertinas, cada momento está diseñado para el bienestar y la felicidad de nuestros huéspedes peludos.",
    readingTime: 5,
    content: [
      {
        heading: "El despertar en Huellas y Sueños",
        paragraphs: [
          "El día en Huellas y Sueños comienza temprano. A las 6:30 de la mañana, nuestro equipo ya está listo para recibir a las mascotas que despiertan con energía. Los primeros rayos del sol iluminan las habitaciones a través de amplios ventanales, diseñados específicamente para que nuestros huéspedes disfruten de la luz natural.",
          "Cada mascota tiene su propio ritmo, por lo que respetamos sus hábitos de sueño. Algunos perros madrugan y esperan ansiosos el primer paseo del día, mientras que muchos gatos prefieren estirarse lentamente y observar el movimiento desde la comodidad de sus espacios elevados."
        ],
        image: "https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2Fd97d015a-f302-4637-8eb9-1580b4db8a77.png&s=1024",
        imageAlt: "Mascotas despertando en el hotel",
        imageCaption: "Los primeros rayos de sol iluminan nuestras instalaciones"
      },
      {
        heading: "Rutina matutina y desayuno",
        paragraphs: [
          "Después del despertar, comienza la rutina matutina. Los perros salen a sus primeros paseos en nuestros jardines especialmente diseñados para ellos. Cada uno tiene su turno para disfrutar del aire fresco mientras hacen sus necesidades en un ambiente natural y limpio.",
          "El desayuno se sirve atendiendo a las necesidades específicas de cada mascota. Nuestra cocina prepara los alimentos siguiendo estrictamente las indicaciones de los dueños y las recomendaciones veterinarias. Algunos huéspedes traen su propia comida, y nos aseguramos de mantener una estricta organización para que cada uno reciba exactamente lo que necesita."
        ]
      },
      {
        heading: "Actividades y tiempo de juego",
        paragraphs: [
          "La mañana en Huellas y Sueños está llena de actividades diseñadas para estimular física y mentalmente a nuestros huéspedes. Dependiendo del tipo de mascota, organizamos sesiones de juego grupal o individual. Los perros disfrutan de tiempo en nuestro parque de juegos, donde pueden socializar bajo supervisión constante.",
          "Para los gatos, disponemos de espacios de escalada, juguetes interactivos y tiempo de exploración en zonas seguras. Los roedores y pequeñas mascotas tienen sus momentos de salida en áreas controladas donde pueden ejercitarse y explorar nuevos entornos.",
          "Nuestros especialistas en comportamiento animal supervisan todas las actividades, asegurando que cada mascota se sienta cómoda y disfrute según su personalidad y necesidades."
        ],
      },
      {
        heading: "La siesta y tiempo de tranquilidad",
        paragraphs: [
          "Después del almuerzo, llega el momento de la siesta. Creamos un ambiente tranquilo y relajado en todas nuestras instalaciones. Bajamos las luces, ponemos música suave especialmente seleccionada para calmar a las mascotas, y nos aseguramos de que cada habitación mantenga la temperatura ideal.",
          "Este tiempo de descanso es fundamental para el bienestar de nuestros huéspedes. Mientras algunos duermen profundamente, otros prefieren observar tranquilamente desde sus espacios favoritos. Nuestro personal aprovecha este momento para realizar limpieza profunda en las áreas comunes, siempre con productos seguros para mascotas y técnicas que minimizan el ruido."
        ]
      },
      {
        heading: "La tarde en Huellas y Sueños",
        paragraphs: [
          "La tarde trae consigo una nueva ronda de actividades adaptadas al ritmo natural de cada especie. Es el momento perfecto para las sesiones de cepillado y cuidado personalizado. Nuestros especialistas dedican tiempo a cada huésped, revisando su pelaje, piel y estado general, aplicando los tratamientos autorizados por los dueños.",
          "Para aquellos que han contratado servicios adicionales, la tarde puede incluir sesiones de adiestramiento básico, terapia de comportamiento o incluso masajes relajantes. Nuestro equipo está formado por profesionales apasionados que disfrutan creando vínculos con cada mascota."
        ]
      },
      {
        heading: "La cena y preparación para la noche",
        paragraphs: [
          "A medida que cae la tarde, comenzamos a preparar todo para la cena y el descanso nocturno. La cena se sirve siguiendo los mismos principios personalizados que el desayuno y el almuerzo. Cada mascota tiene su momento específico para comer tranquilamente.",
          "Después de la cena, los perros disfrutan de un último paseo del día. Las luces comienzan a atenuarse gradualmente y la música cambia a tonos más suaves. Preparamos cada habitación con las comodidades que cada mascota necesita para pasar una noche tranquila: mantas favoritas, juguetes reconfortantes y, en algunos casos, prendas con el olor de sus dueños."
        ],
      },
      {
        heading: "La noche: seguridad y tranquilidad",
        paragraphs: [
          "Durante la noche, nuestro equipo de guardia realiza rondas regulares, asegurándose de que todos nuestros huéspedes estén cómodos y tranquilos. Disponemos de sistemas de monitoreo que nos alertan ante cualquier situación inusual, y siempre hay personal veterinario disponible para emergencias.",
          "En Huellas y Sueños entendemos que la calidad del descanso es fundamental para el bienestar de las mascotas, especialmente cuando están lejos de casa. Por eso creamos un ambiente que combina seguridad, comodidad y tranquilidad, para que cada noche sea realmente reparadora.",
          "Al final del día, nos sentimos satisfechos sabiendo que cada huésped ha recibido atención personalizada, ha disfrutado de actividades adecuadas a su especie y personalidad, y se prepara para un nuevo día lleno de aventuras y cuidados en nuestro hotel."
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Un día de aventuras en Huellas y Sueños",
    slug: "un-dia-de-aventuras-en-huellas-y-suenos",
    author: "Carlos Mendoza",
    date: "28 de junio 2023",
    category: "Actividades",
    coverImage: "https://media.istockphoto.com/id/1252455620/es/foto/golden-retriever-dog.jpg?s=612x612&w=0&k=20&c=3EXj38x_IPSOuBHMNp9Wgn6jmS_yr0sFPFwVrSlN30A=",
    excerpt: "¡Acompáñanos en un recorrido por las emocionantes actividades y aventuras que viven nuestros huéspedes peludos en un día especial! Desde juegos en grupo hasta excursiones supervisadas, descubre cómo hacemos que la estancia de cada mascota sea una experiencia inolvidable.",
    readingTime: 7,
    content: [
      {
        heading: "Día de aventuras: ¡comienza la diversión!",
        paragraphs: [
          "En Huellas y Sueños sabemos que la rutina es importante, pero también creemos en crear momentos especiales. Por eso, organizamos regularmente \"Días de Aventura\" donde nuestros huéspedes disfrutan de actividades extraordinarias, siempre adaptadas a sus capacidades y personalidades.",
          "Estos días comienzan con la misma rutina matutina para mantener la estabilidad que las mascotas necesitan, pero desde el desayuno se respira un ambiente diferente. El personal usa distintivos especiales y hay una energía contagiosa que hasta los animales más tímidos perciben."
        ],
        image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170",
        imageAlt: "Perros jugando en grupo durante un día de aventuras",
        imageCaption: "La diversión grupal es una parte esencial de nuestros días especiales"
      },
      {
        heading: "Circuitos de agilidad y juegos cognitivos",
        paragraphs: [
          "Una de las actividades estrella de nuestros días de aventura son los circuitos de agilidad, adaptados para diferentes especies y tamaños. Para los perros más activos, preparamos recorridos con obstáculos, túneles y saltos que desafían sus habilidades físicas mientras se divierten.",
          "Los gatos disfrutan de juegos cognitivos especiales, como laberintos de premios y juguetes interactivos que estimulan su inteligencia natural. Incluso para roedores y pequeñas mascotas creamos entornos de exploración seguros con nuevos elementos que despiertan su curiosidad."
        ]
      },
      {
        heading: "Piscina y juegos acuáticos",
        paragraphs: [
          "Durante los meses cálidos, nuestra piscina para perros se convierte en el centro de atención. Diseñada específicamente para uso canino, cuenta con diferentes profundidades y rampas de acceso para que todos puedan disfrutar según su nivel de comodidad con el agua.",
          "Para las razas que naturalmente disfrutan del agua, organizamos juegos de recuperación y actividades que aprovechan este elemento. Siempre bajo la supervisión de nuestros especialistas certificados en natación canina, estas sesiones son tan divertidas como beneficiosas para la salud de nuestros huéspedes."
        ],
      },
      {
        heading: "Excursiones y paseos temáticos",
        paragraphs: [
          "Una característica exclusiva de nuestros días de aventura son las excursiones guiadas a entornos naturales cercanos. Para los perros más sociables y bien entrenados, organizamos caminatas en grupo por senderos especialmente seleccionados, donde pueden explorar nuevos olores y paisajes.",
          "Estas excursiones siguen rutas cuidadosamente planificadas y están dirigidas por nuestros guías especializados, quienes mantienen una proporción reducida de mascotas por supervisor para garantizar la seguridad y atención personalizada en todo momento."
        ]
      },
      {
        heading: "Sesiones de socialización controlada",
        paragraphs: [
          "Entendemos la importancia de la socialización para muchas mascotas, por lo que dedicamos parte de nuestros días especiales a sesiones controladas donde los animales con temperamentos compatibles pueden interactuar bajo supervisión experta.",
          "Nuestros especialistas en comportamiento animal evalúan previamente a cada participante y crean grupos equilibrados donde todos pueden beneficiarse de la interacción social. Estas sesiones son particularmente valiosas para mascotas jóvenes o aquellas que viven como hijos únicos en sus hogares."
        ]
      },
      {
        heading: "Sesiones de fotografía y recuerdos",
        paragraphs: [
          "¿Qué sería de un día especial sin recuerdos para compartir con los dueños? Durante estos días, nuestro fotógrafo especializado en mascotas captura momentos únicos que luego compartimos con las familias. Estas imágenes profesionales se convierten en un recuerdo invaluable y una forma de mantener a los propietarios conectados con sus mascotas durante la separación.",
          "Además, para las mascotas que lo disfrutan, organizamos pequeñas sesiones temáticas con accesorios seguros y divertidos que realzan su personalidad. Siempre respetando el temperamento de cada animal y sin forzar situaciones que puedan causarles estrés."
        ],
      },
      {
        heading: "Meriendas especiales y treats caseros",
        paragraphs: [
          "Durante nuestros días de aventura, la cocina de Huellas y Sueños prepara treats especiales caseros, elaborados con ingredientes naturales y adaptados a las necesidades dietéticas de cada huésped. Estas pequeñas delicias sirven como refuerzo positivo durante las actividades y como recompensa por la participación.",
          "Nuestra chef especializada en nutrición animal selecciona cuidadosamente cada ingrediente, creando opciones saludables y deliciosas que se convierten en el broche de oro para un día lleno de actividades."
        ]
      },
      {
        heading: "La tarde de relajación",
        paragraphs: [
          "Después de un día tan activo, dedicamos la tarde a la relajación y recuperación. Ofrecemos sesiones de masaje suave para perros y gatos, que ayudan a relajar los músculos tras el ejercicio y refuerzan el vínculo positivo con nuestro personal.",
          "Las habitaciones se preparan con aromaterapia segura para mascotas, música relajante específica para cada especie y elementos confortables adicionales. El objetivo es cerrar un día extraordinario con una sensación de bienestar completo, físico y emocional.",
          "En Huellas y Sueños creemos que estos días especiales no solo proporcionan diversión y estimulación, sino que también construyen confianza, desarrollan habilidades sociales y crean una experiencia tan positiva que muchos de nuestros huéspedes muestran entusiasmo al regresar para futuras estancias."
        ]
      }
    ]
  }
];
