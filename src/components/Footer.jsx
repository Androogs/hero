import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { CATEGORIAS } from '../data/motos.js'
import { SITIO } from '../data/sitio.js'
import { IconFacebook, IconInstagram, IconTiktok, IconPin, IconPhone, IconMail } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>Concesionario autorizado Hero Motos en {SITIO.ciudad}. Venta, financiación, taller y repuestos originales.</p>
          <div className="footer__social">
            <a href={SITIO.redes.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><IconFacebook /></a>
            <a href={SITIO.redes.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram /></a>
            <a href={SITIO.redes.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><IconTiktok /></a>
          </div>
        </div>
        <div>
          <h4>Motos</h4>
          <ul>{CATEGORIAS.map((c) => <li key={c.id}><Link to={`/motos/${c.id}`}>{c.nombre}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul>
            <li><Link to="/financiacion">Financiación</Link></li>
            <li><Link to="/posventa">Taller y repuestos</Link></li>
            <li><Link to="/posventa#garantia">Garantía</Link></li>
            <li><Link to="/comparar">Comparador</Link></li>
          </ul>
        </div>
        <div>
          <h4>Visítanos</h4>
          <ul className="footer__contact">
            <li><IconPin width={16} height={16} /> {SITIO.direccion}</li>
            <li><IconPhone width={16} height={16} /> <a href={`tel:${SITIO.telefonoLink}`}>{SITIO.telefonoLink}</a></li>
            <li><IconMail width={16} height={16} /> <a href={`mailto:${SITIO.email}`}>{SITIO.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__legal container">
        <p>© {new Date().getFullYear()} {SITIO.empresa} · Todos los derechos reservados.</p>
        <p>Precios de referencia de Hero Colombia (modelos 2027), sujetos a cambios sin previo aviso. No incluyen matrícula, SOAT ni seguros. Imágenes de referencia.</p>
        <p><Link to="/contacto#datos">Política de tratamiento de datos (Ley 1581 de 2012)</Link></p>
      </div>
    </footer>
  )
}
