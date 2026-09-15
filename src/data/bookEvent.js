// ─────────────────────────────────────────────
//  SECCIÓN: Evento de lanzamiento — El Verano de mi Libertad
//  Edita aquí las fotos/video y las notas de prensa del evento
// ─────────────────────────────────────────────

/** Libro al que pertenece este evento (debe calzar con el "title" en libros.js) */
export const eventBookTitle = "El Verano de mi Libertad";

/** Texto corto que presenta el evento */
export const eventDescription =
  "El día de su publicación, Misha celebró el lanzamiento de su primera novela junto a lectoras, prensa y amigos: una tarde de café, postales de regalo y baile para brindar por 'El Verano de mi Libertad'.";

/**
 * Fotos y video del evento.
 * - type:  "image" | "video"
 * - src:   URL del archivo (en /public/images/books/)
 * - alt:   texto alternativo (solo imágenes)
 * - poster: miniatura mostrada antes de reproducir (solo video)
 *
 * El primer elemento ocupa la celda grande del grid; los siguientes
 * cuatro llenan las celdas restantes (ver .event-media-grid en App.css).
 */
export const eventMedia = [
  {
    type: "video",
    src: "/images/books/books-video-01.mp4",
    poster: "/images/books/books-04.jpg",
  },
  {
    type: "image",
    src: "/images/books/books-01.jpg",
    alt: "Ejemplar de 'El Verano de mi Libertad' sobre una mesa de café",
  },
  {
    type: "image",
    src: "/images/books/books-04.jpg",
    alt: "Baile en vivo durante el evento de lanzamiento",
  },
  {
    type: "image",
    src: "/images/books/books-02.jpg",
    alt: "Ejemplar del libro junto a postales de regalo para las lectoras",
  },
  {
    type: "image",
    src: "/images/books/books-03.jpg",
    alt: "Ejemplar del libro en una mesa de noche decorada con flores",
  },
];

/**
 * Cobertura de prensa sobre el lanzamiento.
 * - outlet: nombre del medio
 * - desc:   breve descripción de la nota
 * - url:    enlace a la publicación
 */
export const eventPress = [
  {
    outlet: "Quinto Poder",
    desc: "Misha Helling presenta su primera novela",
    url: "https://quintopoder.com.gt/2026/08/28/misha-helling-presenta-su-primera-novela-el-verano-de-mi-libertad/",
  },
  {
    outlet: "Ladrona de Frases",
    desc: "Reseña de 'El Verano de mi Libertad'",
    url: "https://ladronadefrases.com/libros/misha-helling-el-verano-de-mi-libertad/",
  },
  {
    outlet: "Estación Digital",
    desc: "Cobertura del lanzamiento",
    url: "https://www.estaciondigitalgt.com/index2.php?ed=56456&cv=373",
  },
  {
    outlet: "Revista Tendencias Guatemala",
    desc: "Misha Helling presenta su primera novela",
    url: "https://www.revistatendenciasguatemala.com/2026/08/misha-helling-presenta-su-primera.html?m=1",
  },
  {
    outlet: "Impulso Empresarial GT",
    desc: "Misha Helling debuta en la literatura",
    url: "https://impulsoempresarialgt.wordpress.com/2026/08/25/misha-helling-debuta-en-la-literatura-con-el-lanzamiento-de-su-primera-novela/",
  },
];

/**
 * Publicaciones del evento en redes sociales.
 * Mismo formato que eventPress.
 */
export const eventSocial = [
  {
    outlet: "Instagram",
    desc: "Misha anuncia la publicación de su primera novela",
    url: "https://www.instagram.com/p/DcgZ8I3nBpA/?igsi=dWk0dDU4OHg3c3J5",
  },
  {
    outlet: "Instagram",
    desc: "Fotos del día del lanzamiento",
    url: "https://www.instagram.com/p/DcXhLDzFlgH/?igsi=MTVmMngyam85MWcwYw%3D%3D",
  },
  {
    outlet: "Panorama Informativo GT",
    desc: "Anuncio del lanzamiento del libro",
    url: "https://www.facebook.com/story.php?story_fbid=122116382367372679&id=61591180383928&rdid=rQfLNsDgb1F6Gs39",
  },
  {
    outlet: "Explosión Guate",
    desc: "Nota sobre su debut como novelista",
    url: "https://www.facebook.com/story.php?story_fbid=1369006022015367&id=100067179451483&rdid=gseecwivGcnteqFE",
  },
  {
    outlet: "MÁS TV",
    desc: "Presentación en el segmento de cultura",
    url: "https://www.facebook.com/story.php?story_fbid=1386805943643588&id=100069425851971&rdid=VpXVgN1cSsk10VGB",
  },
  {
    outlet: "Facebook",
    desc: "Video del evento (reel)",
    url: "https://www.facebook.com/reel/1740511843763088",
  },
];
