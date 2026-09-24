import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { CATEGORIAS, getMoto, img, motosDe } from '../data/motos.js'
import { waLink } from '../data/sitio.js'
import { IconChevron, IconMenu, IconClose, IconWhatsApp, IconArrow } from './Icons.jsx'

const LINKS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/motos', label: 'Motos', mega: true },
  { to: '/comparar', label: 'Comparar' },
  { to: '/financiacion', label: 'Financiación' },
  { to: '/posventa', label: 'Posventa' },
  { to: '/concesionario', label: 'Concesionario' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false); setMega(false) }, [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__bar container">
        <Logo />

        <nav className="nav__links" aria-label="Principal">
          {LINKS.map((l) =>
            l.mega ? (
              <div key={l.to} className="nav__item" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
                <NavLink to={l.to} className={({ isActive }) => `nav__link ${isActive || pathname.startsWith('/moto') ? 'is-active' : ''}`}
                  aria-expanded={mega} onFocus={() => setMega(true)}>
                  {l.label} <IconChevron width={14} height={14} />
                </NavLink>
                <MegaMenu visible={mega} />
              </div>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <a className="btn btn--red btn--sm nav__cta" href={waLink('Hola, quiero cotizar una moto Hero en Palmira.')} target="_blank" rel="noreferrer">
          <IconWhatsApp width={18} height={18} /> Cotizar
        </a>

        <button className="nav__burger" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`drawer ${open ? 'is-open' : ''}`}>
        <nav className="drawer__inner" aria-label="Móvil">
          {LINKS.map((l, i) => (
            <div key={l.to} style={{ '--i': i }} className="drawer__row">
              <NavLink to={l.to} end={l.end} className={({ isActive }) => `drawer__link ${isActive ? 'is-active' : ''}`}>
                {l.label}
              </NavLink>
              {l.mega && (
                <div className="drawer__cats">
                  {CATEGORIAS.map((c) => (
                    <Link key={c.id} to={`/motos/${c.id}`}>{c.nombre}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a className="btn btn--red" href={waLink('Hola, quiero cotizar una moto Hero en Palmira.')} target="_blank" rel="noreferrer">
            <IconWhatsApp /> Cotizar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}

function MegaMenu({ visible }) {
  const [hover, setHover] = useState(CATEGORIAS[0].id)
  const cat = CATEGORIAS.find((c) => c.id === hover)
  const destacada = getMoto(cat.destacada)
  return (
    <div className={`mega ${visible ? 'is-visible' : ''}`}>
      <div className="mega__inner">
        <ul className="mega__cats">
          {CATEGORIAS.map((c) => (
            <li key={c.id}>
              <Link to={`/motos/${c.id}`} onMouseEnter={() => setHover(c.id)} className={hover === c.id ? 'is-on' : ''}>
                <span>{c.nombre}</span>
                <small>{motosDe(c.id).length} modelos</small>
              </Link>
            </li>
          ))}
          <li><Link to="/motos" className="mega__all">Ver todo el portafolio <IconArrow width={16} height={16} /></Link></li>
        </ul>
        <div className="mega__models">
          {motosDe(hover).map((m) => (
            <Link key={m.slug} to={`/moto/${m.slug}`} className="mega__model">
              <img src={img(m)} alt={m.nombre} loading="lazy" />
              <span>{m.nombre}</span>
            </Link>
          ))}
        </div>
        <div className="mega__feature">
          <small>Destacada {cat.nombre}</small>
          <strong>{destacada.nombre}</strong>
          <p>{cat.lema}</p>
          <img src={img(destacada)} alt="" />
        </div>
      </div>
    </div>
  )
}
