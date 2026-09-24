import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CATEGORIAS, MOTOS, getCategoria, getMoto, img, precioFinal } from '../data/motos.js'
import MotoCard from '../components/MotoCard.jsx'
import PageHero from '../components/PageHero.jsx'
import { IconCompare, IconSearch, IconClose } from '../components/Icons.jsx'

const ORDEN = {
  destacado: { label: 'Destacados', fn: () => 0 },
  menor: { label: 'Menor precio', fn: (a, b) => precioFinal(a) - precioFinal(b) },
  mayor: { label: 'Mayor precio', fn: (a, b) => precioFinal(b) - precioFinal(a) },
  cc: { label: 'Mayor cilindraje', fn: (a, b) => parseFloat(b.resumen.cc.replace(',', '.')) - parseFloat(a.resumen.cc.replace(',', '.')) },
}

export default function Motos() {
  const { categoria } = useParams()
  const cat = categoria ? getCategoria(categoria) : null
  const [orden, setOrden] = useState('destacado')
  const [q, setQ] = useState('')
  const [comp, setComp] = useState([])
  const navigate = useNavigate()

  const lista = useMemo(() => {
    let l = MOTOS.filter((m) => !cat || m.categoria === cat.id)
    if (q) l = l.filter((m) => m.nombre.toLowerCase().includes(q.toLowerCase()))
    return [...l].sort(ORDEN[orden].fn)
  }, [cat, orden, q])

  const toggle = (slug) => setComp((c) => (c.includes(slug) ? c.filter((s) => s !== slug) : c.length < 3 ? [...c, slug] : c))
  const hero = cat ? getMoto(cat.destacada) : getMoto('hunk-160r-4v')

  if (categoria && !cat) return <div className="container section"><h1 className="display">Categoría no encontrada</h1><Link to="/motos">Ver todas las motos</Link></div>

  return (
    <>
      <PageHero
        kicker={cat ? 'Categoría' : 'Portafolio completo'}
        title={cat ? cat.nombre : 'Nuestras motos'}
        crumbs={cat ? [{ label: 'Motos', to: '/motos' }, { label: cat.nombre }] : [{ label: 'Motos' }]}
        image={img(hero)}
      >
        <p>{cat ? cat.descripcion : 'Todo el portafolio Hero disponible en nuestro concesionario de Palmira. Elige tu categoría, compara y cotiza.'}</p>
      </PageHero>

      <section className="section section--tight">
        <div className="container">
          <div className="toolbar">
            <div className="chips" role="tablist">
              <Link to="/motos" className={`chip ${!cat ? 'is-on' : ''}`}>Todas <small>{MOTOS.length}</small></Link>
              {CATEGORIAS.map((c) => (
                <Link key={c.id} to={`/motos/${c.id}`} className={`chip ${cat?.id === c.id ? 'is-on' : ''}`}>
                  {c.nombre} <small>{MOTOS.filter((m) => m.categoria === c.id).length}</small>
                </Link>
              ))}
            </div>
            <div className="toolbar__right">
              <label className="search">
                <IconSearch width={18} height={18} />
                <input placeholder="Buscar modelo" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Buscar modelo" />
              </label>
              <select className="select" value={orden} onChange={(e) => setOrden(e.target.value)} aria-label="Ordenar">
                {Object.entries(ORDEN).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
            </div>
          </div>

          <div className="grid">
            {lista.map((m) => <MotoCard key={m.slug} moto={m} onCompare={toggle} comparing={comp.includes(m.slug)} />)}
            {lista.length === 0 && <p className="empty">No encontramos modelos con “{q}”.</p>}
          </div>
          <p className="fineprint">* Precio de venta al público con bono vigente publicado por Hero Colombia para modelos 2027. No incluye matrícula, SOAT ni seguros. Sujeto a cambios según zona y forma de pago.</p>
        </div>
      </section>

      {comp.length > 0 && (
        <div className="compare-bar">
          <div className="container compare-bar__inner">
            <div className="compare-bar__items">
              {comp.map((s) => {
                const m = getMoto(s)
                return (
                  <span key={s} className="compare-bar__item">
                    <img src={img(m)} alt="" /> {m.nombre}
                    <button onClick={() => toggle(s)} aria-label={`Quitar ${m.nombre}`}><IconClose width={14} height={14} /></button>
                  </span>
                )
              })}
              <small>{comp.length}/3</small>
            </div>
            <button className="btn btn--red btn--sm" disabled={comp.length < 2} onClick={() => navigate(`/comparar?m=${comp.join(',')}`)}>
              <IconCompare width={18} height={18} /> Comparar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
