# Campus YaskCode

**Aprende · Practica · Construye · Comparte**

Un campus digital que conecta **docencia, investigación, proyectos y comunidades tecnológicas**, creado por **Yaskelly Yedra**, profesora e investigadora en Computación de la Universidad del Zulia, Venezuela.

[Explorar el Campus](https://yaskelly.github.io/) · [Web académica de Yaskelly](https://yaskelly.github.io/yaskellyyedra/) · [English overview](#english-overview)

## Una universidad como inspiración

Campus YaskCode organiza el aprendizaje como un recorrido por espacios universitarios: aulas, laboratorios, biblioteca, centros de investigación y lugares de encuentro. Cada espacio conecta con recursos, proyectos o iniciativas del ecosistema.

Su propósito es acercar el conocimiento a estudiantes, docentes, investigadores y personas interesadas en la tecnología, y convertir el aprendizaje en práctica:

> Aprender Ingeniería de Software haciendo Ingeniería de Software.

Las áreas de interés incluyen ingeniería de software, inteligencia artificial, ciencia de datos, cloud y ecosistemas digitales de aprendizaje.

## ¿Qué encontrarás?

| Espacio | Propósito |
| --- | --- |
| **YaskCode Academy** | Rutas formativas, práctica y proyectos de software y computación. |
| **Posgrado LUZ** | Recursos, proyectos y acompañamiento académico de posgrado. |
| **CTI Pregrado** | Trabajos de grado de la Licenciatura en Computación como referencia para nuevos tesistas. |
| **YaskCode Research** | Investigación, publicaciones y perfiles académicos. |
| **YaskCode Laboratory** | Proyectos estudiantiles, documentación y buenas prácticas de ingeniería. |
| **Library** | Repositorios, documentación y recursos de estudio. |
| **Conexiones** | Perfiles y publicaciones profesionales. |
| **YaskCode Community** | Encuentros y colaboración tecnológica. |
| **Auditorio** | Clases, charlas y talleres en el canal de YouTube de YaskCode. |
| **Parque de Innovación y Tecnología** | Prototipos y proyectos de YaskCode Build. |
| **GDG Caracas** | Actividades de la comunidad de desarrolladores. |
| **WTM + Technovation** | Iniciativas para la participación de mujeres y niñas en tecnología. |
| **Smart Learning** | Ecosistemas digitales de aprendizaje y plataformas educativas. |
| **Casa de Yaskelly** | Trayectoria docente, investigación y proyectos de la creadora. |
| **Entrada principal** | Bienvenida y orientación para recorrer el Campus. |

Los espacios enlazan con plataformas externas; la disponibilidad de sus contenidos depende también del estado y los permisos de cada destino.

## Cómo recorrerlo

Visita **[yaskelly.github.io](https://yaskelly.github.io/)** y elige un edificio del mapa o una tarjeta de **Áreas del Campus**.

- **Ratón o pantalla táctil:** selecciona el espacio que deseas explorar.
- **Teclado:** utiliza **Tab** para recorrer los controles y **Enter** para activarlos.
- **Paneles de Research y Conexiones:** ofrecen enlaces adicionales; pulsa **Escape** para cerrarlos.

El sitio tiene contenido principal en español y una guía de navegación en inglés.

## Sobre este repositorio

Este repositorio contiene el código fuente del Campus, desarrollado con **Astro 5**, **TypeScript**, HTML y CSS, y publicado con **GitHub Pages**.

| Ruta | Contenido |
| --- | --- |
| `src/pages/index.astro` | Página principal, bienvenida y tarjetas del Campus. |
| `src/components/` | Componentes de la interfaz y escena interactiva. |
| `src/layouts/` | Estructura compartida de las páginas. |
| `src/data/campus.ts` | Áreas, destinos y configuración de navegación. |
| `src/data/campusScene.ts` | Configuración de los nodos de la escena. |
| `src/styles/` | Estilos del sitio. |
| `public/images/` | Imágenes y recursos visuales del Campus. |
| `.github/workflows/pages.yml` | Validación, construcción y publicación en GitHub Pages. |

La página principal actual se genera desde `src/pages/index.astro`. El archivo `index.html` de la raíz corresponde a una versión anterior y no es la entrada de la aplicación Astro.

## Desarrollo local

Utiliza **Node.js 24** y npm, en concordancia con el workflow del repositorio.

```bash
git clone https://github.com/yaskelly/yaskelly.github.io.git
cd yaskelly.github.io
npm ci
npm run dev
```

Abre la dirección local que indique Astro en la terminal.

| Comando | Función |
| --- | --- |
| `npm run dev` | Iniciar el servidor de desarrollo. |
| `npm run check` | Comprobar los archivos de Astro y TypeScript. |
| `npm run build` | Generar el sitio estático en `dist/`. |
| `npm run preview` | Revisar localmente la versión construida. |

Antes de proponer cambios, ejecuta `npm run check` y `npm run build`. Si modificas la interfaz, revisa también el resultado visual y la navegación con teclado.

### Publicación

El workflow **Campus Pages** valida y construye los pull requests dirigidos a `main`. La publicación se ejecuta manualmente desde **Actions → Campus Pages → Run workflow**, seleccionando `main`.

## Proponer mejoras

Puedes abrir un **[issue](https://github.com/yaskelly/yaskelly.github.io/issues)** para comunicar un enlace que no funciona, una dificultad de navegación o una propuesta educativa.

Describe el espacio afectado, el comportamiento observado y el resultado esperado. Para cambios visuales, añade una captura cuando sea posible.

## Autoría y contacto

**Yaskelly Yedra**  
Profesora e investigadora en Computación · Universidad del Zulia, Venezuela.

- [Web académica personal](https://yaskelly.github.io/yaskellyyedra/)
- [Perfil de GitHub](https://github.com/yaskelly)
- [Canal YaskCode en YouTube](https://www.youtube.com/@yaskcode)
- [Google Scholar](https://scholar.google.com/citations?user=zySpQB0AAAAJ)
- [ORCID](https://orcid.org/0009-0004-4290-120X)
- Contacto académico: [yyedra@fec.luz.edu.ve](mailto:yyedra@fec.luz.edu.ve)

## English overview

**Campus YaskCode** is a digital campus created by **Yaskelly Yedra**, a Computer Science professor and researcher at **Universidad del Zulia, Venezuela**.

Inspired by university spaces, it connects teaching, research, student projects, learning resources and technology communities. Its guiding principle is **learning Software Engineering by doing Software Engineering**.

Explore the interactive map or the campus cards to discover education, research, laboratories, academic work, talks and community initiatives. Use a mouse, touch or keyboard: **Tab** moves between controls, **Enter** activates them and **Escape** closes the Research and Connections panels.

The main content is in Spanish, with an English navigation guide. This repository contains the Astro source code for the website.

**[Visit Campus YaskCode](https://yaskelly.github.io/)** · **[Yaskelly's academic website](https://yaskelly.github.io/yaskellyyedra/)**
