import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIAS, MOTOS, getMoto, img, cop, precioFinal, motosDe } from '../data/motos.js'
import { SITIO, waLink } from '../data/sitio.js'
import { IconArrow, IconShield, IconCard, IconWrench, IconBox, IconWhatsApp } from '../components/Icons.jsx'
import useReveal from '../components/useReveal.js'

const BANNERS = [
  "/brand/1M-BannerWeb-Horizontal2.png",
  "/brand/Banner-Desktop_Flow-Xpulse-Pro-2.0.png",
  "/brand/llantasMichellinDektop.jpg"
];
const MS_BANNER = 4000;

export default function Inicio() {
  const [b, setB] = useState(0)
  const [pausa, setPausa] = useState(false)
  useReveal()

  useEffect(() => {
    if (pausa) return
    const t = setTimeout(() => setB((v) => (v + 1) % BANNERS.length), MS_BANNER)
    return () => clearTimeout(t)
  }, [b, pausa])

  const prev = () => setB((v) => (v - 1 + BANNERS.length) % BANNERS.length)
  const next = () => setB((v) => (v + 1) % BANNERS.length)

  return (
    <>
      <section 
        className="home-carousel" 
        onMouseEnter={() => setPausa(true)} 
        onMouseLeave={() => setPausa(false)}
        style={{ 
          position:"relative", 
          width:"100%",
          height:"calc(100vh - 72px)",
          minHeight:480,
          overflow:"hidden", 
          background:"#fff", // FIX: era #000 y por eso se veía negro
          marginLeft:"calc(50% - 50vw)",
          marginRight:"calc(50% - 50vw)",
        }}
      >
        {BANNERS.map((src, k) => (
          <img
            key={src}
            src={src}
            alt={`Banner ${k+1}`}
            loading={k === 0 ? "eager" : "lazy"}
            onError={(e) => console.error('Falta esta imagen en /public:', src)}
            style={{
              position:"absolute", inset:0,
              width:"100%", height:"100%", 
              objectFit:"cover",
              objectPosition:"center center",
              opacity: k === b ? 1 : 0,
              transition:"opacity 600ms ease",
              backgroundColor: "#fff"
            }}
          />
        ))}

        <button onClick={prev} aria-label="Anterior" style={{ position:"absolute", left:16, top:"50%", transform:"translateY(-50%)", zIndex:3, background:"rgba(0,0,0,.4)", border:0, color:"#fff", width:44, height:44, borderRadius:"50%", cursor:"pointer", fontSize:24 }}>‹</button>
        <button onClick={next} aria-label="Siguiente" style={{ position:"absolute", right:16, top:"50%", transform:"translateY(-50%)", zIndex:3, background:"rgba(0,0,0,.4)", border:0, color:"#fff", width:44, height:44, borderRadius:"50%", cursor:"pointer", fontSize:24 }}>›</button>

        <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", gap:8, zIndex:3 }}>
          {BANNERS.map((_, k) => (
            <button
              key={k}
              onClick={() => setB(k)}
              aria-label={`Ir a banner ${k+1}`}
              style={{
                width: k === b ? 28 : 8, height:8, borderRadius:99, border:0,
                background: k === b ? "#111" : "rgba(0,0,0,.3)",
                transition:"all 300ms", cursor:"pointer"
              }}
            />
          ))}
        </div>
      </section>

      {/* ... lo demás igual ... */}
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