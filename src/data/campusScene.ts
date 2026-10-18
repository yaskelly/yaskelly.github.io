export type CampusSceneNode = {
  id: string;
  kind: 'building' | 'vector';
  x: number;
  y: number;
  width: string;
  layer: number;
  imageSrc?: string;
  imageAlt?: string;
  vectorKind?: 'gate' | 'plaza';
  fallbackHref?: string;
};

export const campusSceneNodes: CampusSceneNode[] = [
  {
    id: 'contacto-correo', kind: 'building', x: 15.5, y: 87.5,
    width: 'clamp(6rem, 8vw, 8.5rem)', layer: 7,
    imageSrc: '/images/overlays/camion-contacto-yaskcode-v3.png',
    imageAlt: 'Camión magenta y crema de correo, orientado hacia la esquina superior derecha, con el texto Contáctame.',
    fallbackHref: 'mailto:yyedra@fec.luz.edu.ve'
  },
  {
    id: 'cafecito', kind: 'vector', x: 93.2, y: 17.5,
    width: 'clamp(5.29rem, 7.015vw, 6.9rem)', layer: 7,
    imageSrc: '/images/overlays/cafecito-yaskcode-v1.png',
    imageAlt: 'Taza magenta de café con símbolo de código: aportes voluntarios a YaskCode.',
    vectorKind: 'plaza'
  },
  {
    id: 'academy',
    kind: 'building',
    x: 12.7,
    y: 19.4,
    width: 'clamp(12.096rem, 14.796vw, 16.092rem)',
    layer: 6,
    imageSrc: '/images/overlays/academy.png',
    imageAlt: 'Edificio de YaskCode Academy.'
  },
  {
    id: 'posgrado-luz',
    kind: 'building',
    x: 30.9,
    y: 15.4,
    width: 'clamp(10rem, 12.8vw, 14rem)',
    layer: 6,
    imageSrc: '/images/overlays/posgrado-luz.png',
    imageAlt: 'Edificio de Posgrado LUZ.'
  },
  {
    id: 'cti-pregrado',
    kind: 'building',
    x: 44.4,
    y: 22.9,
    width: 'clamp(10.4rem, 12.6vw, 13.7rem)',
    layer: 5,
    imageSrc: '/images/overlays/cti-pregrado.png',
    imageAlt: 'Edificio de CTI Pregrado.'
  },
  {
    id: 'research',
    kind: 'building',
    x: 60.5,
    y: 15.0,
    width: 'clamp(10.2rem, 13.4vw, 14.6rem)',
    layer: 6,
    imageSrc: '/images/overlays/research.png',
    imageAlt: 'Edificio de Research.'
  },
  {
    id: 'laboratory',
    kind: 'building',
    x: 80.5,
    y: 23,
    width: 'clamp(10.6rem, 13.6vw, 14.8rem)',
    layer: 6,
    imageSrc: '/images/overlays/lab.png',
    imageAlt: 'Edificio de Laboratory.'
  },
  {
    id: 'library',
    kind: 'building',
    x: 16.9,
    y: 45.5,
    width: 'clamp(10.3rem, 13.8vw, 14.8rem)',
    layer: 5,
    imageSrc: '/images/overlays/library.png',
    imageAlt: 'Edificio de Library.'
  },
  {
    id: 'community',
    kind: 'building',
    x: 35.2,
    y: 53.8,
    width: 'clamp(10.8rem, 13.5vw, 14.796rem)',
    layer: 5,
    imageSrc: '/images/overlays/community.png',
    imageAlt: 'Edificio de Community.'
  },
  {
    id: 'auditorio',
    kind: 'building',
    x: 53.8,
    y: 45.1,
    width: 'clamp(11.448rem, 14.204vw, 15.582rem)',
    layer: 6,
    imageSrc: '/images/overlays/anfiteatro-moderno.png',
    imageAlt: 'Edificio del Auditorio.'
  },
  {
    id: 'parque-innovacion-tecnologia',
    kind: 'building',
    x: 72,
    y: 45,
    width: 'clamp(10.7rem, 13.2vw, 14.5rem)',
    layer: 5,
    imageSrc: '/images/overlays/yaskcode-construccion.png',
    imageAlt: 'Edificio de Parque Tecnologico y YaskCode Build.'
  },
  {
    id: 'gdg-caracas',
    kind: 'building',
    x: 87.9,
    y: 54.9,
    width: 'clamp(9.7rem, 11.9vw, 13rem)',
    layer: 4,
    imageSrc: '/images/overlays/gdg-caracas.png',
    imageAlt: 'Edificio de GDG Caracas.'
  },
  {
    id: 'wtm-technovation',
    kind: 'building',
    x: 31.0,
    y: 74.4,
    width: 'clamp(10.3rem, 12.9vw, 14rem)',
    layer: 5,
    imageSrc: '/images/overlays/wtm-technovation.png',
    imageAlt: 'Edificio de WTM y Technovation.'
  },
  {
    id: 'smart-learning',
    kind: 'building',
    x: 49.3,
    y: 74.6,
    width: 'clamp(10.1rem, 12.6vw, 13.8rem)',
    layer: 5,
    imageSrc: '/images/overlays/smart-learning.png',
    imageAlt: 'Edificio de Smart Learning.'
  },
  {
    id: 'casa-yaskelly',
    kind: 'building',
    x: 69.0,
    y: 77.5,
    width: 'clamp(10.8rem, 13.1vw, 14.2rem)',
    layer: 6,
    imageSrc: '/images/overlays/home.yaskellyyedra.png',
    imageAlt: 'Casa personal de Yaskelly.'
  },
  {
    id: 'entrada-principal',
    kind: 'vector',
    x: 8.6,
    y: 74.3,
    width: 'clamp(5.29rem, 7.015vw, 6.9rem)',
    layer: 4,
    imageSrc: '/images/overlays/buzon-yaskcode-v1.png',
    imageAlt: 'Buzón magenta de suscripción a YaskCode.',
    vectorKind: 'gate',
    fallbackHref: '#suscripcion'
  },
  {
    id: 'conexiones-profesionales',
    kind: 'vector',
    x: 33.6,
    y: 35.5,
    width: 'clamp(5.29rem, 7.015vw, 6.9rem)',
    layer: 4,
    imageSrc: '/images/overlays/conexiones-yaskcode-v1.png',
    imageAlt: 'Escultura de conexiones de YaskCode: libro, código y birrete.',
    vectorKind: 'plaza',
    fallbackHref: '#contact'
  }
];
