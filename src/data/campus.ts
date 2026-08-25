export type CampusArea = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  slug: string;
  category: 'academic' | 'community' | 'institutional' | 'personal' | 'infrastructure';
  status?: 'Próximamente' | 'En construcción';
  /** Posición oficial en el orden de navegación por teclado (Tab) del Campus. */
  navOrder: number;
  hotspot?: {
    x?: number;
    y?: number;
  };
  overlay?: {
    src: string;
    alt: string;
      x?: number;
      y?: number;
    width?: string;
    offsetX?: string;
    offsetY?: string;
    scale?: string;
    origin?: string;
    zIndex?: number;
  };
  interactiveLayer?: {
    src: string;
    x: number;
    y: number;
    width: string;
  };
  /** Polígono SVG de interacción calibrado al sistema de coordenadas del mapa maestro (solo Academy). */
  interactionPolygon?: {
    points: string;
  };
  /** Destino de navegación al hacer clic/Enter en el foco del área. Si falta, la fuente aún no está definida. */
  interactionUrl?: string;
};

export const campusAreas: CampusArea[] = [
  {
    id: 'academy',
    name: 'YaskCode Academy',
    shortName: 'YaskCode Academy',
    description: 'Formación práctica en desarrollo de software y computación.',
    slug: 'academy',
    category: 'academic',
    navOrder: 1,
    hotspot: { x: 17, y: 47 },
    overlay: {
      src: '/images/overlays/academy-master-derived-v3.png',
      alt: 'YaskCode Academy destacada sobre el mapa del Campus YaskCode.',
      x: 4.784689,
      y: 29.755579,
      width: '23.325359%',
      offsetX: '0',
      offsetY: '0',
      scale: '1',
      origin: 'top left',
      zIndex: 10
    },
    interactionPolygon: {
      points: '113,304 176,291 249,296 324,315 355,324 363,351 397,357 424,372 441,399 439,429 428,453 443,478 454,498 452,519 432,535 389,545 343,545 306,535 269,527 224,527 177,526 140,516 109,502 94,477 92,445 94,404 93,375 100,347'
    },
    interactionUrl: 'https://github.com/YaskCode'
  },
  {
    id: 'posgrado-luz',
    name: 'Posgrado LUZ',
    shortName: 'Posgrado LUZ',
    description: 'Espacio para formación avanzada, investigación y acompañamiento de posgrado.',
    slug: 'posgrado-luz',
    category: 'institutional',
    navOrder: 2,
    hotspot: { x: 28, y: 30 },
    overlay: {
      src: '/images/overlays/posgrado-luz.png',
      alt: 'Edificio de Posgrado LUZ.',
      width: '11rem',
      offsetX: '-8%',
      offsetY: '0',
      scale: '1.01',
      origin: 'bottom left',
      zIndex: 11
    },
    interactionUrl: 'https://github.com/maestriaentic-luz'
  },
  {
    id: 'cti-pregrado',
    name: 'CTI Pregrado',
    shortName: 'CTI Pregrado',
    description: 'Centro de trabajo e iniciativas para estudiantes de la Licenciatura en Computación.',
    slug: 'cti-pregrado',
    category: 'institutional',
    navOrder: 3,
    hotspot: { x: 32, y: 36 },
    overlay: {
      src: '/images/overlays/cti-pregrado.png',
      alt: 'Edificio del CTI Pregrado.',
      width: '10.5rem',
      offsetX: '-8%',
      offsetY: '0',
      scale: '1.02',
      origin: 'bottom center',
      zIndex: 10
    },
    interactionUrl: 'https://github.com/LUZ-Computing-Research'
  },
  {
    id: 'research',
    name: 'YaskCode Research / Centro de Mentoría',
    shortName: 'YaskCode Research',
    description: 'Investigación, publicaciones y acompañamiento académico.',
    slug: 'research-centro-de-mentoria',
    category: 'academic',
    navOrder: 4,
    hotspot: { x: 42, y: 30 },
    overlay: {
      src: '/images/overlays/research.png',
      alt: 'Edificio de YaskCode Research y Centro de Mentoría.',
      width: '11rem',
      offsetX: '-5%',
      offsetY: '0',
      scale: '1.01',
      origin: 'bottom center',
      zIndex: 9
    },
    interactionUrl: 'https://github.com/YaskCode-research'
  },
  {
    id: 'laboratory',
    name: 'YaskCode Laboratory',
    shortName: 'Laboratory',
    description: 'Experimentación tecnológica, proyectos y prototipos.',
    slug: 'laboratory',
    category: 'academic',
    navOrder: 5,
    hotspot: { x: 61, y: 33 },
    overlay: {
      src: '/images/overlays/lab.png',
      alt: 'Edificio de YaskCode Laboratory.'
    },
    interactionUrl: 'https://github.com/YaskCode-laboratory'
  },
  {
    id: 'library',
    name: 'Library',
    shortName: 'Library',
    description: 'Recursos abiertos, documentación y materiales de estudio.',
    slug: 'library',
    category: 'academic',
    navOrder: 6,
    hotspot: { x: 53, y: 53 },
    overlay: {
      src: '/images/overlays/library.png',
      alt: 'Edificio de Library del Campus YaskCode.'
    }
  },
  {
    id: 'community',
    name: 'YaskCode Community',
    shortName: 'Community',
    description: 'Comunidades, encuentros y colaboración tecnológica.',
    slug: 'community',
    category: 'community',
    navOrder: 7,
    hotspot: { x: 59, y: 55 },
    overlay: {
      src: '/images/overlays/community.png',
      alt: 'Edificio de YaskCode Community.'
    },
    interactionUrl: 'https://github.com/YaskCode-community'
  },
  {
    id: 'auditorio',
    name: 'Auditorio',
    shortName: 'Auditorio',
    description: 'Lugar para charlas, encuentros, presentaciones y actividades abiertas.',
    slug: 'auditorio',
    category: 'infrastructure',
    navOrder: 8,
    hotspot: { x: 68, y: 48 },
    overlay: {
      src: '/images/overlays/anfiteatro-moderno.png',
      alt: 'Auditorio del Campus YaskCode.'
    }
  },
  {
    id: 'parque-innovacion-tecnologia',
    name: 'Parque de Innovación y Tecnología',
    shortName: 'Parque Tecnológico',
    description: 'Zona en construcción y proyectos en desarrollo.',
    slug: 'parque-innovacion-tecnologia',
    category: 'infrastructure',
    status: 'En construcción',
    navOrder: 9,
    hotspot: { x: 96, y: 42 },
    overlay: {
      src: '/images/overlays/yaskcode-construccion.png',
      alt: 'Zona en construcción del Parque de Innovación y Tecnología.'
    },
    interactionUrl: 'https://github.com/YaskCode-smart-learning'
  },
  {
    id: 'gdg-caracas',
    name: 'GDG Caracas',
    shortName: 'GDG Caracas',
    description: 'Conexión con la comunidad de desarrolladores y sus actividades tecnológicas.',
    slug: 'gdg-caracas',
    category: 'community',
    navOrder: 10,
    hotspot: { x: 83, y: 82 },
    overlay: {
      src: '/images/overlays/gdg-caracas.png',
      alt: 'Edificio de GDG Caracas.'
    },
    interactionUrl: 'https://github.com/gdg-caracas'
  },
  {
    id: 'wtm-technovation',
    name: 'WTM + Technovation',
    shortName: 'WTM + Tech',
    description: 'Iniciativas para impulsar la participación de mujeres y jóvenes en tecnología.',
    slug: 'wtm-technovation',
    category: 'community',
    navOrder: 11,
    hotspot: { x: 61, y: 84 },
    overlay: {
      src: '/images/overlays/wtm-technovation.png',
      alt: 'Edificio de WTM y Technovation.'
    }
  },
  {
    id: 'smart-learning',
    name: 'Smart Learning',
    description: 'Ecosistemas digitales de aprendizaje y plataformas LMS.',
    shortName: 'Smart Learning',
    slug: 'smart-learning',
    category: 'academic',
    status: 'Próximamente',
    navOrder: 12,
    hotspot: { x: 39, y: 82 },
    overlay: {
      src: '/images/overlays/smart-learning.png',
      alt: 'Edificio de Smart Learning.'
    },
    interactionUrl: 'https://github.com/YaskCode-smart-learning'
  },
  {
    id: 'casa-yaskelly',
    name: 'Casa personal de Yaskelly',
    shortName: 'Casa de Yaskelly',
    description: 'Un espacio personal para conocer la trayectoria, visión y proyectos de Yaskelly.',
    slug: 'casa-personal-yaskelly',
    category: 'personal',
    navOrder: 13,
    hotspot: { x: 17, y: 79 },
    overlay: {
      src: '/images/overlays/home.yaskellyyedra.png',
      alt: 'Casa personal de Yaskelly.'
    },
    interactionUrl: 'https://www.yaskellyyedra.com/'
  },
  {
    id: 'entrada-principal',
    name: 'Entrada principal — YaskCode',
    shortName: 'Entrada principal',
    description: 'El acceso principal al ecosistema Campus YaskCode.',
    slug: 'entrada-principal-yaskcode',
    category: 'infrastructure',
    navOrder: 14,
    hotspot: { x: 54, y: 66 }
  },
  {
    id: 'conexiones-profesionales',
    name: 'Conexiones profesionales — mediante la carretera',
    shortName: 'Conexiones',
    description: 'Rutas para conectar el campus con oportunidades, organizaciones y redes profesionales.',
    slug: 'conexiones-profesionales',
    category: 'community',
    navOrder: 15,
    hotspot: { x: 45, y: 93 }
  }
];