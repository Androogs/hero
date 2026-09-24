import { Link } from 'react-router-dom'
import { SITIO } from '../data/sitio.js'

  // Logo del concesionario.
  //  Para usar el logo oficial Hero (suministrado por HMCL Colombia),
  // coloca el archivo en /public/brand/logo-hero.svg y cambia USAR_LOGO_OFICIAL a true.
  

export default function Logo({ onClick }) {
  return (
    <Link
      to="/"
      className="logo"
      onClick={onClick}
      aria-label={`${SITIO.nombreComercial} – inicio`}
    >
      <img
        className="logo__image"
        src="/brand/hero_logo.png"
        alt="Hero"
        height="28"
        width="auto"
        style={{
          height: '120px',
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </Link>
  )
}
