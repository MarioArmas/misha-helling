// ─────────────────────────────────────────────
//  SECCIÓN: Doma / Equitación
//  Edita aquí las fotos de la galería y el texto
// ─────────────────────────────────────────────

/**
 * Galería bento (grid de 3 columnas, columnas de igual altura).
 * - src: URL de la imagen
 * - span: 2 = celda alta (vertical), 1 = celda pequeña (cuadrada)
 *   El orden importa: la grilla se llena columna por columna, y en cada
 *   columna los "span" deben sumar 5 para que el borde inferior quede parejo.
 * - focus: opcional, posición del recorte (object-position) cuando el
 *   detalle importante de la foto no está centrado, ej. "bottom"
 * - alt: texto alternativo de accesibilidad
 */
export const equitacionPhotos = [
  // Columna 1 (2 + 2 + 1 = 5)
  {
    src: "/images/horses/horses-01.jpg",
    span: 2,
    alt: "Jinete junto a sus caballos al atardecer",
  },
  {
    src: "/images/horses/horses-05.jpg",
    span: 2,
    alt: "Doma clásica sobre caballo tordo",
  },
  {
    src: "/images/horses/horses-08.jpg",
    span: 1,
    focus: "bottom",
    alt: "Primer plano del hocico de un caballo sacando la lengua",
  },
  // Columna 2 (1 + 2 + 2 = 5)
  {
    src: "/images/horses/horses-03.jpg",
    span: 1,
    alt: "Silueta de jinete y caballo en blanco y negro",
  },
  {
    src: "/images/horses/horses-06.jpg",
    span: 2,
    alt: "Caballo blanco de cuerpo entero en el campo",
  },
  {
    src: "/images/horses/horses-02.jpg",
    span: 2,
    alt: "Retrato en blanco y negro de jinete y caballo",
  },
  // Columna 3 (2 + 1 + 2 = 5)
  {
    src: "/images/horses/horses-10.jpg",
    span: 2,
    alt: "Grupo de jinetes sobre caballos blancos",
  },
  {
    src: "/images/horses/horses-07.jpg",
    span: 1,
    alt: "Perfil de caballo blanco con crin larga",
  },
  {
    src: "/images/horses/horses-04.jpg",
    span: 2,
    alt: "Retrato con sombrero junto a un caballo",
  },
];

/** Frase que aparece al fondo de la sección */
export const equitacionQuote = "El caballo es un espejo del alma.";

/** Descripción corta que aparece en el header de la sección */
export const equitacionDescription =
  "El deporte ecuestre como forma de vida. La comunicación silenciosa entre jinete y caballo, la paciencia, la disciplina y la elegancia que solo el tiempo y la dedicación logran construir.";
