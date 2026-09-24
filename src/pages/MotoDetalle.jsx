import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMoto, getCategoria, img, cop, precioFinal, motosDe } from '../data/motos.js'
import { SITIO, waLink } from '../data/sitio.js'
import MotoCard from '../components/MotoCard.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { IconWhatsApp, IconCard, IconCompare, IconCheck, IconEngine, IconBolt, IconGauge, IconDrop, IconShield } from '../components/Icons.jsx'
import NoEncontrado from './NoEncontrado.jsx'

export default function MotoDetalle() {
  const { slug } = useParams()
  const moto = getMoto(slug)
  const [color, setColor] = useState(moto?.colores[0].id)
  const [tab, setTab] = useState('Motor')
  if (!moto) return <NoEncontrado />

  const cat = getCategoria(moto.categoria)
  const colorObj = moto.colores.find((c) => c.id === color) || moto.colores[0]
  const otras = motosDe(moto.categoria).filter((m) => m.slug !== moto.slug).slice(0, 3)
  const msg = `Hola, quiero cotizar la ${moto.nombre} en color ${colorObj.nombre}.`

  return (
    <>
      <section className="pdp">
        <div className="pdp__ghost" aria-hidden="true">{moto.nombre}</div>
        <div className="container pdp__grid">
          <div className="pdp__visual">
            <nav className="crumbs crumbs--light" aria-label="Ruta">
              <Link to="/">Inicio</Link><Link to={`/motos/${cat.id}`}>{cat.nombre}</Link><span>{moto.nombre}</span>
            </nav>
            <div className="pdp__stage">
              <div className="pdp__floor" aria-hidden="true" />
              <img key={color} src={img(moto, color)} alt={`${moto.nombre} ${colorObj.nombre}`} />
            </div>
            <div className="pdp__colors">
              <span>Color: <b>{colorObj.nombre}</b></span>
              <div className="pdp__swatches">
                {moto.colores.map((c) => (
                  <button key={c.id} title={c.nombre} aria-label={c.nombre} aria-pressed={c.id === color}
                    className={`swatch swatch--lg ${c.id === color ? 'is-on' : ''}`} style={{ background: c.swatch }} onClick={() => setColor(c.id)} />
                ))}
              </div>
            </div>
          </div>

          <aside className="pdp__info">
            <span className="kicker kicker--red">{cat.nombre}</span>
            <h1 className="display display--lg">{moto.nombre}</h1>
            <p className="pdp__lema">{moto.lema}</p>

            <div className="pdp__kpis">
              <div><IconEngine /><b>{moto.resumen.cc}</b><small>cc</small></div>
              <div><IconBolt /><b>{moto.resumen.hp}</b><small>hp</small></div>
              <div><IconGauge /><b>{moto.resumen.nm}</b><small>Nm</small></div>
              <div><IconDrop /><b>{moto.resumen.tanque}</b><small>litros</small></div>
            </div>

            <div className="price-box">
              {moto.bono > 0 ? (
                <>
                  <div className="price-box__row"><span>Precio de lista</span><s>{cop(moto.precio)}</s></div>
                  <div className="price-box__row price-box__row--bono"><span>Bono Hero</span><b>− {cop(moto.bono)}</b></div>
                </>
              ) : null}
              <div className="price-box__total"><span>Precio desde</span><strong>{cop(precioFinal(moto))}*</strong></div>
              <small>* Modelo 2027. No incluye matrícula, SOAT ni seguros. Precio y bono sujetos a cambio según zona y forma de pago.{moto.nota ? ` ${moto.nota}` : ''}</small>
            </div>

            <div className="pdp__ctas">
              <a className="btn btn--red btn--block" href={waLink(msg)} target="_blank" rel="noreferrer"><IconWhatsApp /> Cotizar por WhatsApp</a>
              <div className="pdp__ctas2">
                <Link className="btn btn--outline" to={`/financiacion?moto=${moto.slug}`}><IconCard /> Financiar</Link>
                <Link className="btn btn--outline" to={`/comparar?m=${moto.slug}`}><IconCompare /> Comparar</Link>
              </div>
            </div>
            <p className="pdp__warranty"><IconShield width={18} /> Garantía de fábrica {SITIO.garantia}</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container pdp__detail">
          <div>
            <span className="kicker kicker--red">Lo que la hace especial</span>
            <h2 className="display">Destacados</h2>
            <ul className="features">
              {moto.destacados.map((d) => <li key={d}><IconCheck /> {d}</li>)}
            </ul>
          </div>
          <div>
            <span className="kicker kicker--red">Ficha técnica</span>
            <h2 className="display">Especificaciones</h2>
            <div className="tabs" role="tablist">
              {Object.keys(moto.specs).map((k) => (
                <button key={k} role="tab" aria-selected={tab === k} className={`tabs__btn ${tab === k ? 'is-on' : ''}`} onClick={() => setTab(k)}>{k}</button>
              ))}
            </div>
            <dl className="specs" key={tab}>
              {Object.entries(moto.specs[tab]).map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <p className="fineprint">Fuente: ficha técnica publicada por Hero Colombia. Especificaciones sujetas a cambio por parte del fabricante.</p>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container pdp__bottom">
          <div className="pdp__testride">
            <span className="kicker kicker--red">Pruébala en Palmira</span>
            <h2 className="display">Agenda tu prueba de manejo</h2>
            <p>Ven al concesionario, conoce la {moto.nombre} en persona y resuelve todas tus dudas con un asesor.</p>
            <LeadForm
              asunto={`Prueba de manejo – ${moto.nombre}`}
              initial={{ moto: `${moto.nombre} (${colorObj.nombre})` }}
              boton="Agendar prueba"
              fields={[
                { name: 'nombre', label: 'Nombre completo', required: true },
                { name: 'celular', label: 'Celular', type: 'tel', required: true },
                { name: 'fecha', label: 'Fecha preferida', type: 'date' },
                { name: 'moto', label: 'Moto de interés' },
              ]}
            />
          </div>
          {otras.length > 0 && (
            <div className="pdp__related">
              <h3 className="display display--sm">Más {cat.nombre.toLowerCase()}</h3>
              <div className="grid grid--related">
                {otras.map((m) => <MotoCard key={m.slug} moto={m} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
