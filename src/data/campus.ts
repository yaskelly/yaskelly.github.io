export type CampusArea = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  slug: string;
  category: 'academic' | 'community' | 'institutional' | 'personal' | 'infrastructure';
  status?: 'Próximamente' | 'En construcción';
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
};

export const campusAreas: CampusArea[] = [
  {
    id: 'academy',
    name: 'YaskCode Academy',
    shortName: 'YaskCode Academy',
    description: 'Formación práctica en desarrollo de software y computación.',
    slug: 'academy',
    category: 'academic',
    hotspot: { x: 17, y: 47 },
    overlay: {
      src: '/images/overlays/academy.png',
      alt: 'YaskCode Academy destacada sobre el mapa del Campus YaskCode.',
      x: 17,
      y: 47,
      width: '17.25rem',
      offsetX: '-6%',
      offsetY: '0',
      scale: '1.03',
      origin: 'bottom left',
      zIndex: 10
    },
    interactiveLayer: {
      src: '/images/overlays/academy-v2.png',
      x: 4,
      y: 24,
      width: '22%'
    }
  },
  {
    id: 'research',
    name: 'YaskCode Research / Centro de Mentoría',
    shortName: 'YaskCode Research',
    description: 'Investigación, publicaciones y acompañamiento académico.',
    slug: 'research-centro-de-mentoria',
    category: 'academic',
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
    }
  },
  {
    id: 'laboratory',
    name: 'YaskCode Laboratory',
    shortName: 'Laboratory',
    description: 'Experimentación tecnológica, proyectos y prototipos.',
    slug: 'laboratory',
    category: 'academic',
    hotspot: { x: 61, y: 33 },
    overlay: {
      src: '/images/overlays/lab.png',
      alt: 'Edificio de YaskCode Laboratory.'
    }
  },
  {
    id: 'library',
    name: 'Library',
    shortName: 'Library',
    description: 'Recursos abiertos, documentación y materiales de estudio.',
    slug: 'library',
    category: 'academic',
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
    hotspot: { x: 59, y: 55 },
    overlay: {
      src: '/images/overlays/community.png',
      alt: 'Edificio de YaskCode Community.'
    }
  },
  {
    id: 'posgrado-luz',
    name: 'Posgrado LUZ',
    shortName: 'Posgrado LUZ',
    description: 'Espacio para formación avanzada, investigación y acompañamiento de posgrado.',
    slug: 'posgrado-luz',
    category: 'institutional',
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
    }
  },
  {
    id: 'cti-pregrado',
    name: 'CTI Pregrado',
    shortName: 'CTI Pregrado',
    description: 'Centro de trabajo e iniciativas para estudiantes de la Licenciatura en Computación.',
    slug: 'cti-pregrado',
    category: 'institutional',
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
    hotspot: { x: 39, y: 82 },
    overlay: {
      src: '/images/overlays/smart-learning.png',
      alt: 'Edificio de Smart Learning.'
    }
  },
  {
    id: 'wtm-technovation',
    name: 'WTM + Technovation',
    shortName: 'WTM + Tech',
    description: 'Iniciativas para impulsar la participación de mujeres y jóvenes en tecnología.',
    slug: 'wtm-technovation',
    category: 'community',
    hotspot: { x: 61, y: 84 },
    overlay: {
      src: '/images/overlays/wtm-technovation.png',
      alt: 'Edificio de WTM y Technovation.'
    }
  },
  {
    id: 'gdg-caracas',
    name: 'GDG Caracas',
    shortName: 'GDG Caracas',
    description: 'Conexión con la comunidad de desarrolladores y sus actividades tecnológicas.',
    slug: 'gdg-caracas',
    category: 'community',
    hotspot: { x: 83, y: 82 },
    overlay: {
      src: '/images/overlays/gdg-caracas.png',
      alt: 'Edificio de GDG Caracas.'
    }
  },
  {
    id: 'casa-yaskelly',
    name: 'Casa personal de Yaskelly',
    shortName: 'Casa de Yaskelly',
    description: 'Un espacio personal para conocer la trayectoria, visión y proyectos de Yaskelly.',
    slug: 'casa-personal-yaskelly',
    category: 'personal',
    hotspot: { x: 17, y: 79 },
    overlay: {
      src: '/images/overlays/home.yaskellyyedra.png',
      alt: 'Casa personal de Yaskelly.'
    }
  },
  {
    id: 'entrada-principal',
    name: 'Entrada principal — YaskCode',
    shortName: 'Entrada principal',
    description: 'El acceso principal al ecosistema Campus YaskCode.',
    slug: 'entrada-principal-yaskcode',
    category: 'infrastructure',
    hotspot: { x: 54, y: 66 }
  },
  {
    id: 'auditorio',
    name: 'Auditorio',
    shortName: 'Auditorio',
    description: 'Lugar para charlas, encuentros, presentaciones y actividades abiertas.',
    slug: 'auditorio',
    category: 'infrastructure',
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
    hotspot: { x: 96, y: 42 },
    overlay: {
      src: '/images/overlays/yaskcode-construccion.png',
      alt: 'Zona en construcción del Parque de Innovación y Tecnología.'
    }
  },
  {
    id: 'conexiones-profesionales',
    name: 'Conexiones profesionales — mediante la carretera',
    shortName: 'Conexiones',
    description: 'Rutas para conectar el campus con oportunidades, organizaciones y redes profesionales.',
    slug: 'conexiones-profesionales',
    category: 'community',
    hotspot: { x: 45, y: 93 }
  }
];