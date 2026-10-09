/**
 * DATOS DEL CONCESIONARIO – Edita aquí la información de cada sede.
 */
export const SITIO = {
  empresa: 'SUMOTO S.A.',
  eslogan: 'Concesionario autorizado Hero',
  email: 'comercial2@sumoto.com.co',
  horarios: [
    { dias: 'Lunes a viernes', horas: '8:00 A.M. - 5:55 P.M.' },
    { dias: 'Sábados', horas: '8:00 A.M. - 2:55 P.M.' },
    { dias: 'Domingos y festivos', horas: 'Cerrado' },
  ],
  redes: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/',
  },
  garantia: '4 años o 50.000 km',
  sitioMarca: 'https://heromotos.com.co/',
  lineaMarca: '01 8000 116 044',
}

export const SEDES = {
  palmira: {
    id: 'palmira',
    nombre: 'Hero Palmira',
    ciudad: 'Palmira, Valle del Cauca',
    direccion: 'Carrera 33A #30-27, Palmira, Valle del Cauca',
    mapaUrl: 'https://www.google.com/maps/place/Cra.+33a+%23+30-27,+Palmira,+Valle+del+Cauca/data=!4m2!3m1!1s0x8e3a04e5421e73b1:0x9d9894274c20930?sa=X&ved=1t:242&ictx=111',
    mapaQuery: 'Carrera 33A #30-27, Palmira, Valle del Cauca',
    asesores: [
      { label: '310 843 8967', link: '+573108438967', wa: '573108438967' },
      { label: '314 435 2451', link: '+573144352451', wa: '573144352451' },
    ],
    taller: { label: '323 308 9852', link: '+573233089852', wa: '573233089852' },
    repuestos: { label: '323 308 9852', link: '+573233089852', wa: '573233089852' },
  },
  cali: {
    id: 'cali',
    nombre: 'Hero Cali',
    ciudad: 'Cali, Valle del Cauca',
    direccion: 'Carrera 46 #45-44, Cali, Valle del Cauca',
    mapaUrl: 'https://www.google.com/maps/place/Cra.+46+%2345-44,+Mariano+Ramos,+Cali,+Valle+del+Cauca/@3.4033547,-76.5125424,17z/data=!3m1!4b1!4m6!3m5!1s0x8e30a12d3847d16f:0xbf1f4367787b6400!8m2!3d3.4033547!4d-76.5125424!16s%2Fg%2F11vjm1z552?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D',
    mapaQuery: 'Carrera 46 #45-44, Cali, Valle del Cauca',
    asesores: [
      { label: '315 344 8039', link: '+573153448039', wa: '573153448039' },
      { label: '310 531 3486', link: '+573105313486', wa: '573105313486' },
    ],
    taller: { label: '312 809 6848', link: '+573128096848', wa: '573128096848' },
    repuestos: { label: '312 809 6848', link: '+573128096848', wa: '573128096848' },
  },
  florida: {
    id: 'florida',
    nombre: 'Hero Florida',
    ciudad: 'Florida, Valle del Cauca',
    direccion: 'Calle 9 #18-90, Florida, Valle del Cauca',
    mapaUrl: 'https://www.google.com/maps/place/Cl.+9+%2318-90,+Florida,+Valle+del+Cauca/@3.3249816,-76.2356229,18.97z/data=!4m13!1m7!3m6!1s0x8e3a12d2a0b4a58f:0xa7415b6232888074!2sCl.+9+%2318-90,+Florida,+Valle+del+Cauca!3b1!8m2!3d3.3248778!4d-76.2356229!3m4!1s0x8e3a12d2a0b4a58f:0xa7415b6232888074!8m2!3d3.3248778!4d-76.2356229?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D',
    mapaQuery: 'Calle 9 #18-90, Florida, Valle del Cauca',
    asesores: [
      { label: '310 231 5654', link: '+573102315654', wa: '573102315654' },
    ],
    taller: { label: '310 231 5654', link: '+573102315654', wa: '573102315654' },
    repuestos: { label: '310 231 5654', link: '+573102315654', wa: '573102315654' },
  },
}

const SEDE_STORAGE_KEY = 'hero-sede-seleccionada'
let activeSedeId = 'palmira'
const advisorIndexes = {}

export const getSavedSedeId = () => {
  try {
    const savedId = window.localStorage.getItem(SEDE_STORAGE_KEY)
    if (savedId && SEDES[savedId]) {
      activeSedeId = savedId
      return savedId
    }
    return null
  } catch (error) {
    console.error('No se pudo leer la sede guardada en este navegador.', error)
    return null
  }
}

export const saveSedeId = (sedeId) => {
  if (!SEDES[sedeId]) throw new Error(`La sede "${sedeId}" no está configurada.`)
  activeSedeId = sedeId
  try {
    window.localStorage.setItem(SEDE_STORAGE_KEY, sedeId)
  } catch (error) {
    console.error('No se pudo guardar la sede seleccionada en este navegador.', error)
  }
}

export const getSede = (sedeId = activeSedeId) => SEDES[sedeId] || SEDES.palmira

/** Crea un enlace de WhatsApp con mensaje pre-llenado. */
export const waLink = (mensaje = '', numero = getSede().asesores[0].wa) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

/** Selecciona el siguiente asesor de ventas de la sede actual. */
export const nextWhatsappNumber = (tipo = 'asesor') => {
  const sede = getSede()
  if (tipo === 'taller' || tipo === 'repuestos') return sede[tipo].wa

  const asesores = sede.asesores
  const key = `hero-whatsapp-next-advisor-${sede.id}`
  let index = advisorIndexes[sede.id] || 0
  try {
    const guardado = window.localStorage.getItem(key)
    if (guardado !== null) {
      const parsed = Number(guardado)
      if (Number.isInteger(parsed) && parsed >= 0 && parsed < asesores.length) index = parsed
    }
  } catch (error) {
    console.error('No se pudo guardar el turno del asesor de WhatsApp en este navegador.', error)
  }
  const siguiente = (index + 1) % asesores.length
  advisorIndexes[sede.id] = siguiente
  try {
    window.localStorage.setItem(key, String(siguiente))
  } catch (error) {
    console.error('No se pudo guardar el turno del asesor de WhatsApp en este navegador.', error)
  }
  return asesores[index].wa
}

/** Cambia el destino al hacer clic, según el tipo de solicitud. */
export const waClickHandler = (mensaje = '', tipo = 'asesor') => (event) => {
  event.currentTarget.href = waLink(mensaje, nextWhatsappNumber(tipo))
}

/** Helper para llamar */
export const telLink = (numero = getSede().asesores[0].link) => `tel:${numero}`
