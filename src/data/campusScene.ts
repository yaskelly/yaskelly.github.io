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
    x: 14,
    y: 24,
    width: 'clamp(10.4rem, 15.2vw, 14.2rem)',
    layer: 6,
    imageSrc: '/images/overlays/academy.png',
    imageAlt: 'Edificio de YaskCode Academy.'
  },
  {
    id: 'posgrado-luz',
    kind: 'building',
    x: 30,
    y: 18,
    width: 'clamp(8.5rem, 11.8vw, 11.8rem)',
    layer: 6,
    imageSrc: '/images/overlays/posgrado-luz.png',
    imageAlt: 'Edificio de Posgrado LUZ.'
  },
  {
    id: 'cti-pregrado',
    kind: 'building',
    x: 44,
    y: 27,
    width: 'clamp(9.2rem, 13vw, 13rem)',
    layer: 5,
    imageSrc: '/images/overlays/cti-pregrado.png',
    imageAlt: 'Edificio de CTI Pregrado.'
  },
  {
    id: 'research',
    kind: 'building',
    x: 59,
    y: 20,
    width: 'clamp(9rem, 12.5vw, 12.8rem)',
    layer: 6,
    imageSrc: '/images/overlays/research.png',
    imageAlt: 'Edificio de Research.'
  },
  {
    id: 'laboratory',
    kind: 'building',
    x: 76,
    y: 27,
    width: 'clamp(9.5rem, 13.2vw, 13.3rem)',
    layer: 6,
    imageSrc: '/images/overlays/lab.png',
    imageAlt: 'Edificio de Laboratory.'
  },
  {
    id: 'library',
    kind: 'building',
    x: 21,
    y: 47,
    width: 'clamp(9rem, 12vw, 12rem)',
    layer: 5,
    imageSrc: '/images/overlays/library.png',
    imageAlt: 'Edificio de Library.'
  },
  {
    id: 'community',
    kind: 'building',
    x: 37,
    y: 50,
    width: 'clamp(8.5rem, 11.8vw, 12rem)',
    layer: 5,
    imageSrc: '/images/overlays/community.png',
    imageAlt: 'Edificio de Community.'
  },
  {
    id: 'auditorio',
    kind: 'building',
    x: 53,
    y: 48,
    width: 'clamp(9.7rem, 13.6vw, 13.9rem)',
    layer: 6,
    imageSrc: '/images/overlays/anfiteatro-moderno.png',
    imageAlt: 'Edificio del Auditorio.'
  },
  {
    id: 'parque-innovacion-tecnologia',
    kind: 'building',
    x: 70,
    y: 50,
    width: 'clamp(9.5rem, 13vw, 13.5rem)',
    layer: 5,
    imageSrc: '/images/overlays/yaskcode-construccion.png',
    imageAlt: 'Edificio de Parque Tecnologico y YaskCode Build.'
  },
  {
    id: 'gdg-caracas',
    kind: 'building',
    x: 86,
    y: 53,
    width: 'clamp(8.3rem, 11.3vw, 11.6rem)',
    layer: 4,
    imageSrc: '/images/overlays/gdg-caracas.png',
    imageAlt: 'Edificio de GDG Caracas.'
  },
  {
    id: 'wtm-technovation',
    kind: 'building',
    x: 33,
    y: 73,
    width: 'clamp(8.9rem, 12.4vw, 12.5rem)',
    layer: 5,
    imageSrc: '/images/overlays/wtm-technovation.png',
    imageAlt: 'Edificio de WTM y Technovation.'
  },
  {
    id: 'smart-learning',
    kind: 'building',
    x: 50,
    y: 74,
    width: 'clamp(8.7rem, 12vw, 12.3rem)',
    layer: 5,
    imageSrc: '/images/overlays/smart-learning.png',
    imageAlt: 'Edificio de Smart Learning.'
  },
  {
    id: 'casa-yaskelly',
    kind: 'building',
    x: 67,
    y: 74,
    width: 'clamp(9.3rem, 13vw, 13.1rem)',
    layer: 6,
    imageSrc: '/images/overlays/home.yaskellyyedra.png',
    imageAlt: 'Casa personal de Yaskelly.'
  },
  {
    id: 'entrada-principal',
    kind: 'vector',
    x: 12,
    y: 74,
    width: 'clamp(4.6rem, 6.3vw, 6.2rem)',
    layer: 4,
    vectorKind: 'gate',
    fallbackHref: '#about'
  },
  {
    id: 'conexiones-profesionales',
    kind: 'vector',
    x: 88,
    y: 74,
    width: 'clamp(4.6rem, 6.3vw, 6.2rem)',
    layer: 4,
    vectorKind: 'plaza',
    fallbackHref: '#contact'
  }
];
