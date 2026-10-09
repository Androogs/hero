import { waLink, waClickHandler } from '../data/sitio.js'
import { IconWhatsApp } from './Icons.jsx'
import { useSede } from './SedeProvider.jsx'

export default function WhatsAppFab() {
  const { sede } = useSede()
  const mensaje = `Hola, vengo de la página web de ${sede.nombre}.`
  return (
    <a className="fab" href={waLink(mensaje)} onClick={waClickHandler(mensaje)} target="_blank" rel="noreferrer" aria-label={`Escríbenos por WhatsApp a ${sede.nombre}`}>
      <IconWhatsApp width={28} height={28} />
    </a>
  )
}
