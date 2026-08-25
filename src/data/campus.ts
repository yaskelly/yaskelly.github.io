export type CampusArea = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  category: 'academic' | 'community' | 'institutional' | 'personal' | 'infrastructure';
  status?: 'Próximamente' | 'En construcción';
  /** Orden oficial de lectura y navegación por teclado del Campus. */
  navOrder: number;
  /** Polígono y ancla de etiqueta en el canvas maestro de 1672 × 941. */
  interaction: { points: string; labelX: number; labelY: number };
  /** URL ya existente. Si falta, el mapa enlaza a la ficha local del destino. */
  interactionUrl?: string;
};

export const campusAreas: CampusArea[] = [
  {
    id: 'academy', name: 'YaskCode Academy', shortName: 'YaskCode Academy',
    description: 'Formación práctica en desarrollo de software y computación.', category: 'academic', navOrder: 1,
    interaction: { points: '96,365 122,340 211,318 333,329 424,363 462,405 454,469 423,513 333,538 220,529 129,500 94,451', labelX: 104, labelY: 304 },
    interactionUrl: 'https://github.com/YaskCode'
  },
  {
    id: 'posgrado-luz', name: 'Posgrado LUZ', shortName: 'Posgrado LUZ',
    description: 'Formación avanzada, investigación y acompañamiento de posgrado.', category: 'institutional', navOrder: 2,
    interaction: { points: '286,213 478,201 500,225 500,364 456,385 311,353 286,323', labelX: 284, labelY: 174 },
    interactionUrl: 'https://github.com/maestriaentic-luz'
  },
  {
    id: 'cti-pregrado', name: 'CTI Pregrado', shortName: 'CTI Pregrado',
    description: 'Iniciativas para estudiantes de la Licenciatura en Computación.', category: 'institutional', navOrder: 3,
    interaction: { points: '501,286 649,277 659,304 657,404 622,424 532,412 499,379', labelX: 491, labelY: 250 },
    interactionUrl: 'https://github.com/LUZ-Computing-Research'
  },
  {
    id: 'research', name: 'YaskCode Research', shortName: 'YaskCode Research',
    description: 'Investigación, publicaciones y acompañamiento académico.', category: 'academic', navOrder: 4,
    interaction: { points: '660,222 848,218 870,240 870,369 837,392 699,385 665,355', labelX: 659, labelY: 184 },
    interactionUrl: 'https://github.com/YaskCode-research'
  },
  {
    id: 'laboratory', name: 'YaskCode Laboratory', shortName: 'Laboratory',
    description: 'Experimentación tecnológica, proyectos y prototipos.', category: 'academic', navOrder: 5,
    interaction: { points: '916,258 1014,237 1169,264 1211,301 1203,425 1155,466 1016,450 920,409', labelX: 943, labelY: 208 },
    interactionUrl: 'https://github.com/YaskCode-laboratory'
  },
  {
    id: 'library', name: 'Library', shortName: 'Library',
    description: 'Recursos abiertos, documentación y materiales de estudio.', category: 'academic', navOrder: 6,
    interaction: { points: '718,347 766,322 886,330 943,365 945,477 912,515 793,519 732,486 711,412', labelX: 734, labelY: 306 }
  },
  {
    id: 'community', name: 'YaskCode Community', shortName: 'Community',
    description: 'Comunidades, encuentros y colaboración tecnológica.', category: 'community', navOrder: 7,
    interaction: { points: '982,501 1047,480 1106,495 1122,532 1108,579 1036,590 981,567', labelX: 970, labelY: 463 },
    interactionUrl: 'https://github.com/YaskCode-community'
  },
  {
    id: 'auditorio', name: 'Auditorio', shortName: 'Auditorio',
    description: 'Charlas, encuentros, presentaciones y actividades abiertas.', category: 'infrastructure', navOrder: 8,
    interaction: { points: '1147,395 1229,366 1368,382 1430,424 1427,512 1378,567 1242,552 1151,498', labelX: 1150, labelY: 349 }
  },
  {
    id: 'yaskcode-build', name: 'Parque Tecnológico / YaskCode Build', shortName: 'Parque Tecnológico',
    description: 'Zona en construcción y proyectos en desarrollo.', category: 'infrastructure', status: 'En construcción', navOrder: 9,
    interaction: { points: '1392,352 1570,339 1641,387 1642,603 1593,641 1420,606 1368,546', labelX: 1322, labelY: 305 }
  },
  {
    id: 'gdg-caracas', name: 'GDG Caracas', shortName: 'GDG Caracas',
    description: 'Conexión con la comunidad de desarrolladores y sus actividades.', category: 'community', navOrder: 10,
    interaction: { points: '1264,671 1301,644 1518,665 1579,707 1573,844 1519,884 1335,863 1262,820', labelX: 1253, labelY: 626 },
    interactionUrl: 'https://github.com/gdg-caracas'
  },
  {
    id: 'wtm-technovation', name: 'WTM + Technovation', shortName: 'WTM + Technovation',
    description: 'Participación de mujeres y jóvenes en tecnología.', category: 'community', navOrder: 11,
    interaction: { points: '901,688 956,655 1102,661 1209,719 1215,849 1171,910 957,904 885,846', labelX: 883, labelY: 632 }
  },
  {
    id: 'smart-learning', name: 'Smart Learning', shortName: 'Smart Learning',
    description: 'Ecosistemas digitales de aprendizaje y plataformas LMS.', category: 'academic', status: 'Próximamente', navOrder: 12,
    interaction: { points: '407,670 464,638 627,645 691,682 686,825 645,867 475,861 408,817', labelX: 400, labelY: 625 },
    interactionUrl: 'https://github.com/YaskCode-smart-learning'
  },
  {
    id: 'casa-yaskelly', name: 'Casa personal de Yaskelly', shortName: 'Casa de Yaskelly',
    description: 'Trayectoria, visión y proyectos personales de Yaskelly.', category: 'personal', navOrder: 13,
    interaction: { points: '75,645 151,607 276,624 335,681 328,805 275,848 108,832 62,770', labelX: 70, labelY: 594 },
    interactionUrl: 'https://www.yaskellyyedra.com/'
  },
  {
    id: 'entrada-principal', name: 'Entrada principal — YaskCode', shortName: 'Entrada principal',
    description: 'Acceso principal al ecosistema Campus YaskCode.', category: 'infrastructure', navOrder: 14,
    interaction: { points: '779,563 941,561 963,589 960,661 931,679 796,672 772,646', labelX: 752, labelY: 527 }
  },
  {
    id: 'conexiones-profesionales', name: 'Conexiones profesionales — carretera', shortName: 'Conexiones profesionales',
    description: 'Rutas hacia oportunidades, organizaciones y redes profesionales.', category: 'community', navOrder: 15,
    interaction: { points: '614,690 734,667 855,688 916,742 862,803 774,867 714,938 602,938 650,850 725,783 658,742', labelX: 596, labelY: 652 }
  }
];
