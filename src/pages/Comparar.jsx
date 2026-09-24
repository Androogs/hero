import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { MOTOS, CATEGORIAS, getMoto, img, cop, precioFinal } from '../data/motos.js'
import { waLink } from '../data/sitio.js'
import PageHero from '../components/PageHero.jsx'
import { IconWhatsApp, IconClose } from '../components/Icons.jsx'

const FILAS = [
  ['Categoría', (m) => CATEGORIAS.find((c) => c.id === m.categoria).nombre],
  ['Precio desde*', (m) => cop(precioFinal(m))],
  ['Cilindraje', (m) => `${m.resumen.cc} cc`],
  ['Potencia', (m) => `${m.resumen.hp} hp`],
  ['Torque', (m) => `${m.resumen.nm} Nm`],
  ['Tanque', (m) => `${m.resumen.tanque} L`],
  ['Transmisión', (m) => m.specs.Motor['Transmisión'] || '—'],
  ['Arranque', (m) => m.specs.Motor.Arranque || '—'],
  ['Freno delantero', (m) => m.specs.Chasis['Freno delantero'] || m.specs.Chasis.Frenos || '—'],
  ['Suspensión trasera', (m) => m.specs.Chasis['Suspensión trasera'] || '—'],
  ['Peso', (m) => m.specs.Dimensiones.Peso || '—'],
  ['Altura del asiento', (m) => m.specs.Dimensiones['Altura del asiento'] || '—'],
  ['Colores', (m) => m.colores.map((c) => c.nombre).join(', ')],
]

export default function Comparar() {
  const [params, setParams] = useSearchParams()
  const sel = useMemo(() => (params.get('m') || '').split(',').filter((s) => getMoto(s)).slice(0, 3), [params])
  const slots = [0, 1, 2]

  const setSlot = (k, slug) => {
    const next = [...sel]
    if (slug) next[k] = slug; else next.splice(k, 1)
    setParams({ m: next.filter(Boolean).join(',') })
  }
  const motos = sel.map(getMoto)

  return (
    <>
      <PageHero kicker="Herramienta" title="Compara modelos" crumbs={[{ label: 'Comparar' }]}>
        <p>Elige hasta tres motos Hero y compáralas lado a lado.</p>
      </PageHero>
      <section className="section section--tight">
        <div className="container">
          <div className="cmp">
            <div className="cmp__head">
              <div className="cmp__label" />
              {slots.map((k) => {
                const m = motos[k]
                return (
                  <div key={k} className={`cmp__slot ${m ? '' : 'is-empty'}`}>
                    {m ? (
                      <>
                        <button className="cmp__x" onClick={() => setSlot(k, null)} aria-label="Quitar"><IconClose width={16} /></button>
                        <img src={img(m)} alt={m.nombre} />
                        <Link to={`/moto/${m.slug}`} className="cmp__name">{m.nombre}</Link>
                      </>
                    ) : (
                      <span className="cmp__plus">+</span>
                    )}
                    <select className="select" value={m?.slug || ''} onChange={(e) => setSlot(k, e.target.value)} disabled={!m && k > sel.length} aria-label={`Moto ${k + 1}`}>
                      <option value="">{m ? 'Cambiar moto' : 'Agregar moto'}</option>
                      {CATEGORIAS.map((c) => (
                        <optgroup key={c.id} label={c.nombre}>
                          {MOTOS.filter((x) => x.categoria === c.id && (!sel.includes(x.slug) || x.slug === m?.slug)).map((x) => <option key={x.slug} value={x.slug}>{x.nombre}</option>)}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                )
              })}
            </div>
            {motos.length > 0 && FILAS.map(([label, fn]) => (
              <div key={label} className="cmp__row">
                <div className="cmp__label">{label}</div>
                {slots.map((k) => <div key={k} className="cmp__cell">{motos[k] ? fn(motos[k]) : ''}</div>)}
              </div>
            ))}
            {motos.length > 0 && (
              <div className="cmp__row cmp__row--cta">
                <div className="cmp__label" />
                {slots.map((k) => (
                  <div key={k} className="cmp__cell">
                    {motos[k] && <a className="btn btn--red btn--sm" href={waLink(`Hola, quiero cotizar la ${motos[k].nombre}.`)} target="_blank" rel="noreferrer"><IconWhatsApp width={16} /> Cotizar</a>}
                  </div>
                ))}
              </div>
            )}
          </div>
          {motos.length === 0 && <p className="empty">Agrega una moto para empezar la comparación.</p>}
          <p className="fineprint">* Precio con bono vigente publicado por Hero Colombia (modelos 2027). No incluye matrícula, SOAT ni seguros.</p>
        </div>
      </section>
    </>
  )
}
