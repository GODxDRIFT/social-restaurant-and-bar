export interface MenuItem {
  id: string;
  name: string;
  description: {
    en: string;
    es: string;
  };
  price: string;
  category: 'Starter' | 'Main' | 'Peruvian Classics' | 'Breakfast' | 'Cocktails' | 'Executive Lunch';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: {
    en: string;
    es: string;
  };
  rating: number;
}

export interface RestaurantEvent {
  id: string;
  title: { en: string; es: string };
  date: string;
  time: string;
  description: { en: string; es: string };
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Ceviche Clásico',
    description: {
      es: 'Nuestra pesca del día más fresca curada en leche de tigre de la casa con un toque de cítricos de Florida, acompañada de camote glaseado al estilo sureño y choclo tierno; una fusión costera perfecta.',
      en: 'Our freshest catch of the day cured in signature tiger’s milk with a Florida citrus touch, paired with Southern-style glazed sweet potato and tender corn.'
    },
    price: 'PEN 48',
    category: 'Peruvian Classics',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Menú Ejecutivo',
    description: {
      es: 'Nuestra propuesta semanal de tres tiempos: Entrada, Fondo y Postre. Incluye bebida natural.',
      en: 'Our weekly three-course proposal: Starter, Main, and Dessert. Includes natural beverage.'
    },
    price: 'PEN 69',
    category: 'Executive Lunch',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Arroz con Pato Social',
    description: {
      es: 'Tierno pato confitado lentamente al estilo "low & slow" de Luisiana y macerado en chicha de jora, servido sobre un arroz meloso al cilantro y pimientos ahumados que honra la tradición andina.',
      en: 'Tender duck slow-confited in Louisiana "low & slow" style marinated in chicha de jora, served over cilantro creamy rice.'
    },
    price: 'PEN 65',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Pulpo a la Brasa',
    description: {
      es: 'Tentáculos de pulpo marinados en nuestra salsa anticuchera secreta y grillados a fuego vivo, acompañados de papas nativas al romero y un chimichurri de hierbas californianas para un final vibrante.',
      en: 'Octopus tentacles marinated in our secret anticuchera sauce and grilled, accompanied by rosemary native potatoes and California herb chimichurri.'
    },
    price: 'PEN 72',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Pisco Sour',
    description: {
      es: 'Pisco Quebranta, limón, azúcar, clara de huevo, angostura.',
      en: 'Quebranta Pisco, lime, sugar, egg white, angostura.'
    },
    price: 'PEN 35',
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Eggs Benedict',
    description: {
      es: 'Huevos poche, holandesa, muffin inglés, jamón serrano.',
      en: 'Poached eggs, hollandaise, english muffin, serrano ham.'
    },
    price: 'PEN 42',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Guilherme Sttellet',
    role: 'Local Guide',
    content: {
      es: 'Social Restaurant me conquistó por completo. El ambiente es increíble y la comida es deliciosamente consistente.',
      en: 'Social Restaurant completely won me over. The atmosphere is amazing and the food is consistently delicious.'
    },
    rating: 5,
  },
  {
    id: '2',
    name: 'Carpe Diem Pirate',
    role: 'Local Guide',
    content: {
      es: 'Fantástico restaurante de hotel con comida increíble; el pato es especialmente genial. La mejor parte es la vibra de las 6 PM.',
      en: 'Fantastic hotel restaurant with amazing food — the duck is especially great. Best part is the 6 PM vibe.'
    },
    rating: 5,
  },
  {
    id: '3',
    name: 'Megan W',
    role: 'Food Enthusiast',
    content: {
      es: '¡Qué maravilla de experiencia en nuestra última noche en Perú! El ceviche clásico estuvo divino.',
      en: 'What a wonderful experience on our last night in Peru! The ceviche clasico was divine.'
    },
    rating: 5,
  },
];

export const EVENTS: RestaurantEvent[] = [
  {
    id: '1',
    title: { en: 'Jazz & Pisco Nights', es: 'Noches de Jazz & Pisco' },
    date: 'Cada Viernes / Every Friday',
    time: '20:00 - 23:00',
    description: { 
      en: 'Enjoy live jazz performances paired with our signature artisanal pisco sours.', 
      es: 'Disfruta de jazz en vivo acompañado de nuestros pisco sours artesanales de autor.' 
    },
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: { en: 'Sunday Rooftop Brunch', es: 'Brunch Dominical' },
    date: 'Cada Domingo / Every Sunday',
    time: '10:30 - 15:00',
    description: { 
      en: 'A curated selection of Peruvian breakfasts and international favorites.', 
      es: 'Una selección curada de desayunos peruanos y favoritos internacionales.' 
    },
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800'
  }
];

export const UI_STRINGS = {
  es: {
    heroTitle: 'Un Ritual',
    heroSubtitle: 'Gastronómico.',
    heroDesc: 'Explora la evolución del sabor peruano a través de una propuesta de autor en el corazón de Lima.',
    reserveBtn: 'Reservar Mesa',
    reviewsCount: '+4k Reseñas en TripAdvisor',
    openedNow: 'Abierto ahora en Miraflores',
    storyTitle: 'Nuestra',
    storySubtitle: 'Historia.',
    storyOrigin: 'El Origen',
    storyConcept: 'El Concepto',
    storyConceptDesc: 'Ubicado en el corazón de Miraflores, Social Restaurant & Bar es un vibrante punto de encuentro.',
    storyFusion: 'La Fusión',
    storyFusionDesc: 'Nuestra propuesta nace del respeto a los ingredientes nativos, refinados con técnicas contemporáneas.',
    storyEssence: 'Nuestra Esencia',
    storyEssenceDesc: 'Diseñado para invitar a la conversación. Desde nuestras mesas compartidas hasta la barra iluminada.',
    chefTitle: 'Nuestra',
    chefSubtitle: 'Visión Gastronómica.',
    chefAuthor: 'El Autor',
    chefDesc: 'Con más de una década de experiencia, el Chef Renzo Miñán ha transformado a Social.',
    chefFocus: 'Enfoque',
    chefFocusVal: 'Producto de Cercanía',
    chefTechnique: 'Técnica',
    chefTechniqueVal: 'Fusión de Vanguardia',
    chefQuote: 'Para mí, cocinar es un acto de honestidad. No buscamos solo alimentar, sino conectar al comensal con la raíz peruana a través de la elegancia y la sorpresa de la fusión americana.',
    chefRole: 'Director Ejecutivo',
    menuTitle: 'Sabores que',
    menuSubtitle: 'Inspiran.',
    menuCarta: 'Nuestra Carta',
    experienceTitle: 'Galería',
    experienceSubtitle: '& Arte.',
    experienceEntorno: 'El Entorno',
    experienceSpace: 'El Espacio',
    experienceDesc: 'Fusionamos la vibrante esencia de Lima con un diseño contemporáneo.',
    testimonialsTitle: 'Historias de',
    testimonialsSubtitle: 'Nuestros Invitados.',
    testimonialsHighlight: 'Vibrantes.',
    testimonialsEcos: 'Ecos',
    eventsTitle: 'Próximos',
    eventsSubtitle: 'Eventos.',
    eventsSubtitleSmall: 'Calendario',
    newsletterTitle: 'Únete al',
    newsletterSubtitle: 'Círculo Social.',
    newsletterDesc: 'Suscríbete para recibir invitaciones exclusivas y noticias de nuestra cocina.',
    newsletterPlaceholder: 'Tu correo electrónico',
    newsletterBtn: 'Suscribirse',
    reservationTitle: 'Reserva',
    reservationSubtitle: 'Tu Mesa.',
    reservationPlanes: 'Planes',
    reservationDesc: 'Garantizamos una experiencia impecable. Por favor, selecciona los detalles de tu visita.',
    reservationConfirm: 'Confirmar Reserva',
    reservationName: 'Nombre Completo',
    reservationEmail: 'Email de Contacto',
    reservationGuests: 'Invitados',
    reservationDate: 'Día',
    reservationTime: 'Hora',
    reservationDietary: 'Restricciones Alimentarias / Notas',
    reserveSuccess: '¡Solicitud Recibida!',
    reserveDetails: 'Detalles de tu Mesa',
    footerLocation: 'Ubicación & Contacto',
    footerHours: 'Horarios',
    footerPhone: 'Llámanos',
  },
  en: {
    heroTitle: 'A Culinary',
    heroSubtitle: 'Ritual.',
    heroDesc: 'Explore the evolution of Peruvian flavor through an author’s proposal in the heart of Lima.',
    reserveBtn: 'Reserve Table',
    reviewsCount: '+4k Reviews on TripAdvisor',
    openedNow: 'Open now in Miraflores',
    storyTitle: 'Our',
    storySubtitle: 'Story.',
    storyOrigin: 'The Origin',
    storyConcept: 'The Concept',
    storyConceptDesc: 'Located in the heart of Miraflores, Social Restaurant & Bar is a vibrant meeting point.',
    storyFusion: 'The Fusion',
    storyFusionDesc: 'Our proposal is born from respect for native ingredients, refined with contemporary techniques.',
    storyEssence: 'Our Essence',
    storyEssenceDesc: 'Designed to invite conversation. From our shared tables to the illuminated bar.',
    chefTitle: 'Our',
    chefSubtitle: 'Gastronomic Vision.',
    chefAuthor: 'The Author',
    chefDesc: 'With over a decade of experience, Chef Renzo Miñán has transformed Social.',
    chefFocus: 'Focus',
    chefFocusVal: 'Local Sourcing',
    chefTechnique: 'Technique',
    chefTechniqueVal: 'Avant-Garde Fusion',
    chefQuote: 'For me, cooking is an act of honesty. We do not just seek to feed, but to connect the diner with the Peruvian root through the elegance and surprise of American fusion.',
    chefRole: 'Executive Director',
    menuTitle: 'Flavors that',
    menuSubtitle: 'Inspire.',
    menuCarta: 'Our Menu',
    experienceTitle: 'Gallery',
    experienceSubtitle: '& Art.',
    experienceEntorno: 'Environment',
    experienceSpace: 'The Space',
    experienceDesc: 'We fuse the vibrant essence of Lima with a contemporary design.',
    testimonialsTitle: 'Stories from',
    testimonialsSubtitle: 'Our Guests.',
    testimonialsHighlight: 'Vibrant.',
    testimonialsEcos: 'Echoes',
    eventsTitle: 'Upcoming',
    eventsSubtitle: 'Events.',
    eventsSubtitleSmall: 'Calendar',
    newsletterTitle: 'Join the',
    newsletterSubtitle: 'Social Circle.',
    newsletterDesc: 'Subscribe to receive exclusive invitations and news from our kitchen.',
    newsletterPlaceholder: 'Your email address',
    newsletterBtn: 'Subscribe',
    reservationTitle: 'Reserve',
    reservationSubtitle: 'Your Table.',
    reservationPlanes: 'Plans',
    reservationDesc: 'We guarantee an impeccable experience. Please select the details of your visit.',
    reservationConfirm: 'Confirm Reservation',
    reservationName: 'Full Name',
    reservationEmail: 'Contact Email',
    reservationGuests: 'Guests',
    reservationDate: 'Date',
    reservationTime: 'Time',
    reservationDietary: 'Dietary Restrictions / Notes',
    reserveSuccess: 'Request Received!',
    reserveDetails: 'Your Table Details',
    footerLocation: 'Location & Contact',
    footerHours: 'Hours',
    footerPhone: 'Call Us',
  }
};
