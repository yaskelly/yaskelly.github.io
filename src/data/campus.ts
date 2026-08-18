export type CampusArea = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  slug: string;
  category: 'academic' | 'community' | 'institutional' | 'personal' | 'infrastructure';
  status?: 'Próximamente' | 'En construcción';
};

export const campusAreas: CampusArea[] = [
  {
    id: 'academy',
    name: 'YaskCode Academy',
    shortName: 'Academy',
    description: 'Formación práctica en desarrollo de software y computación.',
    slug: 'academy',
    category: 'academic'
  },
  {
    id: 'research',
    name: 'YaskCode Research / Centro de Mentoría',
    shortName: 'Research',
    description: 'Investigación, publicaciones y acompañamiento académico.',
    slug: 'research-centro-de-mentoria',
    category: 'academic'
  },
  {
    id: 'laboratory',
    name: 'YaskCode Laboratory',
    shortName: 'Laboratory',
    description: 'Experimentación tecnológica, proyectos y prototipos.',
    slug: 'laboratory',
    category: 'academic'
  },
  {
    id: 'library',
    name: 'Library',
    shortName: 'Library',
    description: 'Recursos abiertos, documentación y materiales de estudio.',
    slug: 'library',
    category: 'academic'
  },
  {
    id: 'community',
    name: 'YaskCode Community',
    shortName: 'Community',
    description: 'Comunidades, encuentros y colaboración tecnológica.',
    slug: 'community',
    category: 'community'
  },
  {
    id: 'posgrado-luz',
    name: 'Posgrado LUZ',
    shortName: 'Posgrado LUZ',
    description: 'Espacio para formación avanzada, investigación y acompañamiento de posgrado.',
    slug: 'posgrado-luz',
    category: 'institutional'
  },
  {
    id: 'cti-pregrado',
    name: 'CTI Pregrado',
    shortName: 'CTI',
    description: 'Centro de trabajo e iniciativas para estudiantes de la Licenciatura en Computación.',
    slug: 'cti-pregrado',
    category: 'institutional'
  },
  {
    id: 'smart-learning',
    name: 'Smart Learning',
    description: 'Ecosistemas digitales de aprendizaje y plataformas LMS.',
    shortName: 'Smart Learning',
    slug: 'smart-learning',
    category: 'academic',
    status: 'Próximamente'
  },
  {
    id: 'wtm-technovation',
    name: 'WTM + Technovation',
    shortName: 'WTM + Tech',
    description: 'Iniciativas para impulsar la participación de mujeres y jóvenes en tecnología.',
    slug: 'wtm-technovation',
    category: 'community'
  },
  {
    id: 'gdg-caracas',
    name: 'GDG Caracas',
    shortName: 'GDG Caracas',
    description: 'Conexión con la comunidad de desarrolladores y sus actividades tecnológicas.',
    slug: 'gdg-caracas',
    category: 'community'
  },
  {
    id: 'casa-yaskelly',
    name: 'Casa personal de Yaskelly',
    shortName: 'Casa de Yaskelly',
    description: 'Un espacio personal para conocer la trayectoria, visión y proyectos de Yaskelly.',
    slug: 'casa-personal-yaskelly',
    category: 'personal'
  },
  {
    id: 'entrada-principal',
    name: 'Entrada principal — YaskCode',
    shortName: 'Entrada',
    description: 'El acceso principal al ecosistema Campus YaskCode.',
    slug: 'entrada-principal-yaskcode',
    category: 'infrastructure'
  },
  {
    id: 'auditorio',
    name: 'Auditorio',
    shortName: 'Auditorio',
    description: 'Lugar para charlas, encuentros, presentaciones y actividades abiertas.',
    slug: 'auditorio',
    category: 'infrastructure'
  },
  {
    id: 'parque-innovacion-tecnologia',
    name: 'Parque de Innovación y Tecnología',
    shortName: 'Parque de Innovación',
    description: 'Zona en construcción y proyectos en desarrollo.',
    slug: 'parque-innovacion-tecnologia',
    category: 'infrastructure',
    status: 'En construcción'
  },
  {
    id: 'conexiones-profesionales',
    name: 'Conexiones profesionales — mediante la carretera',
    shortName: 'Conexiones',
    description: 'Rutas para conectar el campus con oportunidades, organizaciones y redes profesionales.',
    slug: 'conexiones-profesionales',
    category: 'community'
  }
];