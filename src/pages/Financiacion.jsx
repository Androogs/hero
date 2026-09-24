import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MOTOS, CATEGORIAS, getMoto, img, cop, precioFinal } from '../data/motos.js'
import PageHero from '../components/PageHero.jsx'
import LeadForm from '../components/LeadForm.jsx'

/**
 * NOTA: no se muestran tasas ni cuotas mensuales porque dependen de la entidad
 * financiera y del estudio de crédito. Si SUMOTO define aliados y condiciones
 * oficiales, pueden agregarse en ALIADOS y en el texto de los pasos.
 */
const ALIADOS = ['Entidad aliada 1 – POR CONFIRMAR', 'Entidad aliada 2 – POR CONFIRMAR']

const PASOS = [
  { t: 'Elige tu Hero', d: 'Escoge el modelo y color que más te guste en nuestro portafolio.' },
  { t: 'Envía tus datos', d: 'Déjanos tus datos básicos y un asesor te contacta por WhatsApp.' },
  { t: 'Estudio de crédito', d: 'Radicamos tu solicitud con la entidad aliada y te informamos la respuesta.' },
  { t: 'Estrena', d: 'Firmas, matriculamos y te entregamos tu moto en Palmira.' },
]

export default function Financiacion() {
  const [params] = useSearchParams()
  const [slug, setSlug] = useState(getMoto(params.get('moto'))?.slug || 'hunk-160r-4v')
  const [inicial, setInicial] = useState(20)
  const moto = getMoto(slug)
  const precio = precioFinal(moto)
  const cuotaIni = Math.round((precio * inicial) / 100)

  return (
    <>
      <PageHero kicker="Crédito" title="Financiación" crumbs={[{ label: 'Financiación' }]}>
        <p>Te ayudamos a estrenar tu Hero con un proceso ágil y acompañado de principio a fin.</p>
      </PageHero>

      <section className="section section--tight">
        <div className="container fin">
          <div className="fin__left">
            <ol className="steps">
              {PASOS.map((p, k) => (
                <li key={p.t}><span>0{k + 1}</span><div><h3>{p.t}</h3><p>{p.d}</p></div></li>
              ))}
            </ol>

            <div className="calc">
              <div className="calc__head">
                <h3 className="display display--sm">Calcula tu cuota inicial</h3>
                <small>Cálculo de referencia. El valor final depende del estudio de crédito.</small>
              </div>
              <div className="calc__body">
                <img src={img(moto)} alt={moto.nombre} />
                <div className="calc__controls">
                  <label className="field">
                    <span>Moto</span>
                    <select value={slug} onChange={(e) => setSlug(e.target.value)}>
                      {CATEGORIAS.map((c) => (
                        <optgroup key={c.id} label={c.nombre}>
                          {MOTOS.filter((m) => m.categoria === c.id).map((m) => <option key={m.slug} value={m.slug}>{m.nombre}</option>)}
                        </optgroup>
                      ))}
                    </select>
                  </label>
                  <label className="field">
                    <span>Cuota inicial: <b>{inicial}%</b></span>
                    <input type="range" min="0" max="70" step="5" value={inicial} onChange={(e) => setInicial(+e.target.value)} />
                  </label>
                  <div className="calc__out">
                    <div><small>Precio desde*</small><b>{cop(precio)}</b></div>
                    <div><small>Cuota inicial</small><b>{cop(cuotaIni)}</b></div>
                    <div className="is-red"><small>Monto a financiar</small><b>{cop(precio - cuotaIni)}</b></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="fin__right">
            <LeadForm
              titulo="Solicita tu estudio de crédito"
              asunto="Solicitud de crédito – Hero Palmira"
              boton="Solicitar crédito"
              initial={{ moto: moto.nombre, inicial: cop(cuotaIni) }}
              fields={[
                { name: 'nombre', label: 'Nombre completo', required: true, full: true },
                { name: 'celular', label: 'Celular', type: 'tel', required: true },
                { name: 'ciudad', label: 'Municipio', },
                { name: 'moto', label: 'Moto de interés', full: true },
                { name: 'inicial', label: 'Cuota inicial estimada' },
                { name: 'ocupacion', label: 'Actividad', type: 'select', options: ['Empleado', 'Independiente', 'Pensionado', 'Otro'] },
              ]}
            />
            <div className="aliados">
              <small>Entidades aliadas</small>
              <ul>{ALIADOS.map((a) => <li key={a}>{a}</li>)}</ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
