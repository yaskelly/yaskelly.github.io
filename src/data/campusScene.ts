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
    x: 29.9,
    y: 18.9,
    width: 'clamp(10rem, 12.8vw, 14rem)',
    layer: 6,
    imageSrc: '/images/overlays/posgrado-luz.png',
    imageAlt: 'Edificio de Posgrado LUZ.'
  },
  {
    id: 'cti-pregrado',
    kind: 'building',
    x: 43.4,
    y: 27.9,
    width: 'clamp(10.4rem, 12.6vw, 13.7rem)',
    layer: 5,
    imageSrc: '/images/overlays/cti-pregrado.png',
    imageAlt: 'Edificio de CTI Pregrado.'
  },
  {
    id: 'research',
    kind: 'building',
    x: 59.2,
    y: 18.6,
    width: 'clamp(10.2rem, 13.4vw, 14.6rem)',
    layer: 6,
    imageSrc: '/images/overlays/research.png',
    imageAlt: 'Edificio de Research.'
  },
  {
    id: 'laboratory',
    kind: 'building',
    x: 79.5,
    y: 25,
    width: 'clamp(10.6rem, 13.6vw, 14.8rem)',
    layer: 6,
    imageSrc: '/images/overlays/lab.png',
    imageAlt: 'Edificio de Laboratory.'
  },
  {
    id: 'library',
    kind: 'building',
    x: 16.4,
    y: 49,
    width: 'clamp(10.3rem, 13.8vw, 14.8rem)',
    layer: 5,
    imageSrc: '/images/overlays/library.png',
    imageAlt: 'Edificio de Library.'
  },
  {
    id: 'community',
    kind: 'building',
    x: 35.2,
    y: 58.8,
    width: 'clamp(10rem, 12.5vw, 13.7rem)',
    layer: 5,
    imageSrc: '/images/overlays/community.png',
    imageAlt: 'Edificio de Community.'
  },
  {
    id: 'auditorio',
    kind: 'building',
    x: 53,
    y: 50.1,
    width: 'clamp(10.8rem, 13.4vw, 14.7rem)',
    layer: 6,
    imageSrc: '/images/overlays/anfiteatro-moderno.png',
    imageAlt: 'Edificio del Auditorio.'
  },
  {
    id: 'parque-innovacion-tecnologia',
    kind: 'building',
    x: 71,
    y: 57,
    width: 'clamp(10.7rem, 13.2vw, 14.5rem)',
    layer: 5,
    imageSrc: '/images/overlays/yaskcode-construccion.png',
    imageAlt: 'Edificio de Parque Tecnologico y YaskCode Build.'
  },
  {
    id: 'gdg-caracas',
    kind: 'building',
    x: 89.6,
    y: 56.9,
    width: 'clamp(9.7rem, 11.9vw, 13rem)',
    layer: 4,
    imageSrc: '/images/overlays/gdg-caracas.png',
    imageAlt: 'Edificio de GDG Caracas.'
  },
  {
    id: 'wtm-technovation',
    kind: 'building',
    x: 30.2,
    y: 77.9,
    width: 'clamp(10.3rem, 12.9vw, 14rem)',
    layer: 5,
    imageSrc: '/images/overlays/wtm-technovation.png',
    imageAlt: 'Edificio de WTM y Technovation.'
  },
  {
    id: 'smart-learning',
    kind: 'building',
    x: 48.8,
    y: 76.1,
    width: 'clamp(10.1rem, 12.6vw, 13.8rem)',
    layer: 5,
    imageSrc: '/images/overlays/smart-learning.png',
    imageAlt: 'Edificio de Smart Learning.'
  },
  {
    id: 'casa-yaskelly',
    kind: 'building',
    x: 67.4,
    y: 77.5,
    width: 'clamp(10.8rem, 13.1vw, 14.2rem)',
    layer: 6,
    imageSrc: '/images/overlays/home.yaskellyyedra.png',
    imageAlt: 'Casa personal de Yaskelly.'
  },
  {
    id: 'entrada-principal',
    kind: 'vector',
    x: 7.6,
    y: 74.3,
    width: 'clamp(4.6rem, 6.1vw, 6rem)',
    layer: 4,
    vectorKind: 'gate',
    fallbackHref: '#about'
  },
  {
    id: 'conexiones-profesionales',
    kind: 'vector',
    x: 93.4,
    y: 74.7,
    width: 'clamp(4.6rem, 6.1vw, 6rem)',
    layer: 4,
    vectorKind: 'plaza',
    fallbackHref: '#contact'
  }
];
