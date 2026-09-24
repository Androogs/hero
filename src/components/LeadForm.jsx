import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { waLink } from '../data/sitio.js'
import { IconWhatsApp, IconCheck } from './Icons.jsx'

/**
 * Formulario genérico que arma un mensaje y lo abre en WhatsApp.
 * Si más adelante se conecta un CRM o API, reemplazar `enviar()`.
 *
 * fields: [{ name, label, type: 'text'|'tel'|'email'|'select'|'textarea'|'date', options?, required?, full? }]
 */
export default function LeadForm({ titulo, fields, asunto, boton = 'Enviar por WhatsApp', initial = {} }) {
  const [data, setData] = useState(initial)
  const [acepta, setAcepta] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const initKey = JSON.stringify(initial)
  useEffect(() => { setData((d) => ({ ...d, ...initial })) }, [initKey]) // eslint-disable-line react-hooks/exhaustive-deps
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }))

  const enviar = (e) => {
    e.preventDefault()
    const lineas = fields.map((f) => `• ${f.label}: ${data[f.name] || '—'}`).join('\n')
    window.open(waLink(`*${asunto}*\n${lineas}`), '_blank', 'noopener')
    setEnviado(true)
  }

  return (
    <form className="form" onSubmit={enviar}>
      {titulo && <h3 className="form__title">{titulo}</h3>}
      <div className="form__grid">
        {fields.map((f) => (
          <label key={f.name} className={`field ${f.full ? 'field--full' : ''}`}>
            <span>{f.label}{f.required && ' *'}</span>
            {f.type === 'select' ? (
              <select required={f.required} value={data[f.name] || ''} onChange={(e) => set(f.name, e.target.value)}>
                <option value="" disabled>Selecciona…</option>
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : f.type === 'textarea' ? (
              <textarea rows={3} required={f.required} value={data[f.name] || ''} onChange={(e) => set(f.name, e.target.value)} />
            ) : (
              <input type={f.type || 'text'} required={f.required} value={data[f.name] || ''} onChange={(e) => set(f.name, e.target.value)} />
            )}
          </label>
        ))}
      </div>
      <label className="consent">
        <input type="checkbox" checked={acepta} onChange={(e) => setAcepta(e.target.checked)} required />
        <span>Autorizo el tratamiento de mis datos personales conforme a la <Link to="/contacto#datos">política de datos</Link> de SUMOTO S.A.</span>
      </label>
      <button className="btn btn--red btn--block" type="submit">
        {enviado ? <><IconCheck /> ¡Listo! Reenviar</> : <><IconWhatsApp /> {boton}</>}
      </button>
    </form>
  )
}
