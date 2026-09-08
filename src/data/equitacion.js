// ─────────────────────────────────────────────
//  SECCIÓN: Doma / Equitación
//  Edita aquí las fotos de la galería y el texto
// ─────────────────────────────────────────────

/**
 * Galería bento con formas dibujadas a mano (grid-template-areas), no un
 * patrón repetitivo. Cada foto ocupa un "area" con una forma distinta
 * (hero grande, verticales de 2 o 3 filas, cuadrados chicos, banners
 * horizontales anchos). El layout desktop/tablet vive en .eq-masonry en
 * App.css: dos grillas distintas (una por breakpoint), cada una diseñada
 * a mano para que el borde inferior quede parejo. En móvil se apilan en
 * una sola columna en el orden de este array.
 * - src: URL de la imagen
 * - area: nombre usado como grid-area (debe coincidir con los nombres
 *   usados en los grid-template-areas de .eq-masonry en App.css)
 * - compact: true = en móvil se muestra cuadrada (1:1) en vez de 4:5;
 *   úsalo en fotos que ya son un detalle/recorte cerrado
 * - focus: opcional, posición del recorte (object-position) cuando el
 *   detalle importante de la foto no está centrado, ej. "bottom"
 * - alt: texto alternativo de accesibilidad
 */
export const equitacionPhotos = [
  {
    src: "/images/horses/horses-05.jpg",
    area: "rider",
    alt: "Doma clásica sobre caballo tordo",
  },
  {
    src: "/images/horses/horses-06.jpg",
    area: "elegant",
    alt: "Caballo blanco de cuerpo entero en el campo",
  },
  {
    src: "/images/horses/horses-10.jpg",
    area: "trio",
    alt: "Grupo de jinetes sobre caballos blancos",
  },
  {
    src: "/images/horses/horses-12.jpg",
    area: "halter",
    alt: "Primer plano de caballo con cabestro rojo",
  },
  {
    src: "/images/horses/horses-09.jpg",
    area: "peek",
    alt: "Caballo asomado a la puerta del establo",
  },
  {
    src: "/images/horses/horses-03.jpg",
    area: "shadow",
    compact: true,
    alt: "Silueta de jinete y caballo en blanco y negro",
  },
  {
    src: "/images/horses/horses-04.jpg",
    area: "ears",
    alt: "Primer plano de las orejas y crin de un caballo",
  },
  {
    src: "/images/horses/horses-07.jpg",
    area: "profile",
    alt: "Retrato en blanco y negro de jinete y caballo",
  },
  {
    src: "/images/horses/horses-08.jpg",
    area: "tongue",
    compact: true,
    focus: "bottom",
    alt: "Primer plano del hocico de un caballo sacando la lengua",
  },
  {
    src: "/images/horses/horses-11.jpg",
    area: "stable",
    alt: "Caballo blanco de cuerpo entero en el establo",
  },
  {
    src: "/images/horses/horses-02.jpg",
    area: "amargada",
    alt: "Perfil de caballo blanco con crin larga",
  },
];

/** Frase que aparece al fondo de la sección */
export const equitacionQuote = "El caballo es un espejo del alma.";

/** Descripción corta que aparece en el header de la sección */
export const equitacionDescription =
  "El deporte ecuestre como forma de vida. La comunicación silenciosa entre jinete y caballo, la paciencia, la disciplina y la elegancia que solo el tiempo y la dedicación logran construir.";
