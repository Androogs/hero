/**
 * DATOS DEL CONCESIONARIO – EDITA AQUÍ
 * ------------------------------------------------------------------
 * información oficial de SUMOTO S.A. antes de publicar el sitio.
 */
export const SITIO = {
  empresa: 'SUMOTO S.A.',
  nombreComercial: 'Hero Palmira',
  eslogan: 'Concesionario autorizado Hero',
  ciudad: 'Palmira, Valle del Cauca',

  direccion: 'Carrera. 33A #30-27 / Palmira - Valle del Cauca',
  // Consulta que se usa en el mapa de Google:
  mapaQuery: 'Palmira, Valle del Cauca, Colombia',

  telefonoLink: '+573108438967',
  whatsapp: '573108438967', // POR CONFIRMAR (57 + número, sin + ni espacios)
  email: 'ventas@sumoto.com.co', // POR CONFIRMAR

  horarios: [
    { dias: 'Lunes a viernes', horas: '8:00 A.M. - 5:55 P.M.' },
    { dias: 'Sábados', horas: '8:00 A.M. - 2:55 P.M.' },
    { dias: 'Domingos y festivos', horas: 'Cerrado' },
  ],

  redes: {
    facebook: 'https://www.facebook.com/', // POR CONFIRMAR
    instagram: 'https://www.instagram.com/', // POR CONFIRMAR
    tiktok: 'https://www.tiktok.com/', // POR CONFIRMAR
  },

  // Información de marca (fuente: heromotos.com.co)
  garantia: '4 años o 50.000 km',
  sitioMarca: 'https://heromotos.com.co/',
  lineaMarca: '01 8000 116 044',
}

/** Crea un enlace de WhatsApp con mensaje pre-llenado. */
export const waLink = (mensaje = '') =>
  `https://wa.me/${SITIO.whatsapp}?text=${encodeURIComponent(mensaje)}`
