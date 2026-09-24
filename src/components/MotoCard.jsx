import { useState } from 'react'
import { Link } from 'react-router-dom'
import { img, cop, precioFinal, getCategoria } from '../data/motos.js'
import { IconArrow } from './Icons.jsx'

export default function MotoCard({ moto, onCompare, comparing }) {
  const [color, setColor] = useState(moto.colores[0].id)
  const cat = getCategoria(moto.categoria)
  return (
    <article className="card">
      <div className="card__top">
        <span className="tag">{cat.nombre}</span>
        {moto.bono > 0 && <span className="tag tag--red">Bono {cop(moto.bono)}</span>}
      </div>
      <Link to={`/moto/${moto.slug}`} className="card__media" aria-label={`Ver ${moto.nombre}`}>
        <span className="card__cc">{moto.resumen.cc.split(',')[0]}<small>cc</small></span>
        <img key={color} src={img(moto, color)} alt={`${moto.nombre} color ${color}`} loading="lazy" />
      </Link>
      <div className="card__swatches" role="radiogroup" aria-label="Colores">
        {moto.colores.map((c) => (
          <button key={c.id} role="radio" aria-checked={c.id === color} title={c.nombre}
            className={`swatch ${c.id === color ? 'is-on' : ''}`} style={{ background: c.swatch }}
            onClick={() => setColor(c.id)} />
        ))}
      </div>
      <div className="card__body">
        <h3>{moto.nombre}</h3>
        <p className="card__lema">{moto.lema}</p>
        <div className="card__stats">
          <span><b>{moto.resumen.hp}</b> hp</span>
          <span><b>{moto.resumen.nm}</b> Nm</span>
          <span><b>{moto.resumen.tanque}</b> L</span>
        </div>
        <div className="card__price">
          <small>Desde</small>
          <strong>{cop(precioFinal(moto))}*</strong>
          {moto.bono > 0 && <s>{cop(moto.precio)}</s>}
        </div>
      </div>
      <div className="card__actions">
        <Link to={`/moto/${moto.slug}`} className="btn btn--dark btn--sm">Conoce más <IconArrow width={16} height={16} /></Link>
        {onCompare && (
          <label className={`chk ${comparing ? 'is-on' : ''}`}>
            <input type="checkbox" checked={comparing} onChange={() => onCompare(moto.slug)} /> Comparar
          </label>
        )}
      </div>
    </article>
  )
}
