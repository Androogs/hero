import { waLink } from '../data/sitio.js'
import { IconWhatsApp } from './Icons.jsx'

export default function WhatsAppFab() {
  return (
    <a className="fab" href={waLink('Hola, vengo de la página web de Hero Palmira.')} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp">
      <IconWhatsApp width={28} height={28} />
    </a>
  )
}
