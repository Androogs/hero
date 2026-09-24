import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIAS, MOTOS, getMoto, img, cop, precioFinal, motosDe } from '../data/motos.js'
import { SITIO, waLink } from '../data/sitio.js'
import { IconArrow, IconShield, IconCard, IconWrench, IconBox, IconWhatsApp } from '../components/Icons.jsx'
import useReveal from '../components/useReveal.js'

const SLIDES = CATEGORIAS.map((c) => ({ cat: c, moto: getMoto(c.destacada) }))
const DURACION = 6500

export default function Inicio() {
  const [i, setI] = useState(0)
  const [pausa, setPausa] = useState(false)
  useReveal()

  useEffect(() => {
    if (pausa) return
    const t = setTimeout(() => setI((i + 1) % SLIDES.length), DURACION)
    return () => clearTimeout(t)
  }, [i, pausa])

  const { cat, moto } = SLIDES[i]

  return (
    <>
      {/* ───── HERO SLIDER ───── */}
      <section className="hero" onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)}>
        <div className="hero__bg" aria-hidden="true">
          <span className="hero__ghost" key={moto.slug}>{moto.nombre.split(' ')[0]}</span>
        </div>
        <div className="container hero__inner">
          <div className="hero__copy" key={`c-${i}`}>
            <span className="kicker">{cat.nombre} · {SITIO.ciudad}</span>
            <h1 className="display display--xl">{moto.nombre}</h1>
            <p className="hero__lema">{moto.lema}</p>
            <div className="hero__specs">
              <div><b>{moto.resumen.cc}</b><small>cc</small></div>
              <div><b>{moto.resumen.hp}</b><small>hp</small></div>
              <div><b>{moto.resumen.nm}</b><small>Nm</small></div>
            </div>
            <div className="hero__price">
              <small>Desde</small>
              <strong>{cop(precioFinal(moto))}*</strong>
            </div>
            <div className="hero__ctas">
              <Link to={`/moto/${moto.slug}`} className="btn btn--red">Conoce la {moto.nombre} <IconArrow /></Link>
              <Link to={`/motos/${cat.id}`} className="btn btn--ghost">Ver {cat.nombre.toLowerCase()}</Link>
            </div>
          </div>
          <div className="hero__media" key={`m-${i}`}>
            <div className="hero__disc" aria-hidden="true" />
            <img src={img(moto)} alt={moto.nombre} />
          </div>
        </div>

        <div className="container hero__tabs" role="tablist" aria-label="Categorías destacadas">
          {SLIDES.map((s, k) => (
            <button key={s.cat.id} role="tab" aria-selected={k === i} className={`hero__tab ${k === i ? 'is-on' : ''}`} onClick={() => setI(k)}>
              <span className="hero__tabnum">0{k + 1}</span>
              <span className="hero__tablabel">{s.cat.nombre}</span>
              <span className="hero__bar"><span style={{ animationDuration: `${DURACION}ms`, animationPlayState: pausa ? 'paused' : 'running' }} /></span>
            </button>
          ))}
        </div>
      </section>

      {/* ───── CATEGORÍAS ───── */}
      <section className="section">
        <div className="container">
          <div className="section__head reveal">
            <div>
              <span className="kicker kicker--red">Portafolio Hero</span>
              <h2 className="display">Encuentra tu Hero</h2>
            </div>
            <Link to="/motos" className="link-arrow">Ver las {MOTOS.length} motos <IconArrow width={18} /></Link>
          </div>
          <div className="cats">
            {CATEGORIAS.map((c, k) => {
              const m = getMoto(c.destacada)
              const desde = Math.min(...motosDe(c.id).map(precioFinal))
              return (
                <Link key={c.id} to={`/motos/${c.id}`} className="cat reveal" style={{ '--d': `${k * 80}ms` }}>
                  <span className="cat__num">0{k + 1}</span>
                  <h3>{c.nombre}</h3>
                  <p>{c.lema}</p>
                  <img src={img(m)} alt="" loading="lazy" />
                  <span className="cat__foot">
                    <span>Desde <b>{cop(desde)}*</b></span>
                    <span className="cat__go"><IconArrow /></span>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── BENEFICIOS ───── */}
      <section className="perks">
        <div className="container perks__grid">
          <div className="perks__intro reveal">
            <span className="kicker">¿Por qué Hero Palmira?</span>
            <h2 className="display">Tu moto, tu taller y tus repuestos en un solo lugar</h2>
            <a className="btn btn--red" href={waLink('Hola, quiero agendar una visita al concesionario Hero Palmira.')} target="_blank" rel="noreferrer">
              <IconWhatsApp /> Agenda tu visita
            </a>
          </div>
          {[
            { i: <IconShield />, t: `Garantía ${SITIO.garantia}`, d: 'La garantía de fábrica de Hero Colombia, respaldada por nuestro taller.', to: '/posventa#garantia' },
            { i: <IconCard />, t: 'Financiación a tu medida', d: 'Te acompañamos en el estudio de crédito para que estrenes pronto.', to: '/financiacion' },
            { i: <IconWrench />, t: 'Taller autorizado', d: 'Técnicos capacitados y mantenimiento según el plan oficial Hero.', to: '/posventa' },
            { i: <IconBox />, t: 'Repuestos originales', d: 'Repuestos y accesorios genuinos para cuidar tu inversión.', to: '/posventa#repuestos' },
          ].map((p, k) => (
            <Link key={p.t} to={p.to} className="perk reveal" style={{ '--d': `${k * 80}ms` }}>
              <span className="perk__icon">{p.i}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
