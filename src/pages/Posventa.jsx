import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MOTOS } from '../data/motos.js'
import { SITIO } from '../data/sitio.js'
import PageHero from '../components/PageHero.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { IconWrench, IconBox, IconShield, IconCalendar, IconCheck } from '../components/Icons.jsx'

const SECCIONES = {
  taller: {
    icon: <IconWrench />, titulo: 'Taller autorizado',
    texto: 'Nuestro taller realiza los mantenimientos de tu Hero siguiendo el plan de mantenimiento oficial de la marca, con herramienta especializada y personal capacitado.',
    items: ['Mantenimientos preventivos del plan oficial Hero', 'Diagnóstico y reparaciones', 'Revisiones de garantía', 'Alistamiento y entrega de motos nuevas'],
  },
  repuestos: {
    icon: <IconBox />, titulo: 'Repuestos y accesorios',
    texto: 'Usa repuestos originales Hero para conservar el desempeño, la seguridad y la garantía de tu moto. Consulta disponibilidad con nuestro asesor.',
    items: ['Repuestos originales', 'Lubricantes y consumibles', 'Accesorios y equipamiento', 'Pedidos especiales bajo consulta'],
  },
  garantia: {
    icon: <IconShield />, titulo: `Garantía ${SITIO.garantia}`,
    texto: `Las motos Hero cuentan con garantía de fábrica de ${SITIO.garantia} (lo que ocurra primero), sujeta al cumplimiento del plan de mantenimiento y a las políticas de garantía de Hero Colombia.`,
    items: ['Cumple los mantenimientos en el kilometraje indicado', 'Conserva tu manual y carné de mantenimiento', 'Usa repuestos y lubricantes recomendados', 'Consulta las políticas completas en el sitio de la marca'],
  },
}

export default function Posventa() {
  const { hash } = useLocation()
  const [tab, setTab] = useState('taller')
  useEffect(() => { const h = hash.replace('#', ''); if (SECCIONES[h]) setTab(h) }, [hash])
  const s = SECCIONES[tab]

  return (
    <>
      <PageHero kicker="Servicio" title="Posventa" crumbs={[{ label: 'Posventa' }]}>
        <p>Taller, repuestos y garantía para que tu Hero siempre esté lista.</p>
      </PageHero>

      <section className="section section--tight" id={tab}>
        <div className="container pv">
          <div className="pv__main">
            <div className="seg" role="tablist">
              {Object.entries(SECCIONES).map(([k, v]) => (
                <button key={k} role="tab" aria-selected={tab === k} className={`seg__btn ${tab === k ? 'is-on' : ''}`} onClick={() => setTab(k)}>
                  {v.icon} <span>{v.titulo.split(' ')[0]}</span>
                </button>
              ))}
            </div>
            <div className="pv__panel" key={tab}>
              <span className="pv__icon">{s.icon}</span>
              <h2 className="display">{s.titulo}</h2>
              <p>{s.texto}</p>
              <ul className="features">{s.items.map((i) => <li key={i}><IconCheck /> {i}</li>)}</ul>
              <a className="link-arrow" href={SITIO.sitioMarca} target="_blank" rel="noreferrer">Plan de mantenimiento y políticas oficiales en heromotos.com.co →</a>
            </div>
          </div>
          <aside className="pv__side">
            <div className="pv__sidehead"><IconCalendar /> <span>Agenda tu cita de taller</span></div>
            <LeadForm
              asunto="Cita de taller – Hero Palmira"
              boton="Agendar cita"
              fields={[
                { name: 'nombre', label: 'Nombre', required: true, full: true },
                { name: 'celular', label: 'Celular', type: 'tel', required: true },
                { name: 'placa', label: 'Placa' },
                { name: 'moto', label: 'Modelo', type: 'select', options: MOTOS.map((m) => m.nombre).concat('Otro') },
                { name: 'km', label: 'Kilometraje' },
                { name: 'servicio', label: 'Servicio', type: 'select', options: ['Mantenimiento preventivo', 'Revisión de garantía', 'Reparación', 'Cotizar repuesto', 'Otro'], full: true },
                { name: 'fecha', label: 'Fecha preferida', type: 'date', full: true },
              ]}
            />
          </aside>
        </div>
      </section>
    </>
  )
}
