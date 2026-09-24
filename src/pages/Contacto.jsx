import { SITIO, waLink } from '../data/sitio.js'
import { MOTOS } from '../data/motos.js'
import PageHero from '../components/PageHero.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { IconWhatsApp, IconPhone, IconMail, IconPin } from '../components/Icons.jsx'

export default function Contacto() {
  const canales = [
    { i: <IconWhatsApp />, t: 'WhatsApp', v: 'Escríbenos ahora', href: waLink('Hola, necesito información.') },
    { i: <IconPhone />, t: 'Teléfono', v: SITIO.telefono, href: `tel:${SITIO.telefonoLink}` },
    { i: <IconMail />, t: 'Correo', v: SITIO.email, href: `mailto:${SITIO.email}` },
    { i: <IconPin />, t: 'Visítanos', v: SITIO.ciudad, href: '/concesionario' },
  ]
  return (
    <>
      <PageHero kicker="Hablemos" title="Contacto" crumbs={[{ label: 'Contacto' }]}>
        <p>¿Tienes dudas sobre un modelo, tu crédito o tu mantenimiento? Estamos para ayudarte.</p>
      </PageHero>
      <section className="section section--tight">
        <div className="container contact">
          <div className="contact__channels">
            {canales.map((c) => (
              <a key={c.t} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="channel">
                <span className="channel__icon">{c.i}</span>
                <span><small>{c.t}</small><b>{c.v}</b></span>
              </a>
            ))}
          </div>
          <div className="contact__form">
            <LeadForm
              titulo="Envíanos tu mensaje"
              asunto="Contacto web – Hero Palmira"
              fields={[
                { name: 'nombre', label: 'Nombre completo', required: true },
                { name: 'celular', label: 'Celular', type: 'tel', required: true },
                { name: 'email', label: 'Correo', type: 'email' },
                { name: 'interes', label: 'Me interesa', type: 'select', options: ['Comprar una moto', 'Financiación', 'Taller / mantenimiento', 'Repuestos', 'Otro'] },
                { name: 'moto', label: 'Modelo', type: 'select', options: MOTOS.map((m) => m.nombre).concat('Aún no sé'), full: true },
                { name: 'mensaje', label: 'Mensaje', type: 'textarea', full: true },
              ]}
            />
          </div>
        </div>

        <div className="container" id="datos">
          <details className="legal">
            <summary>Política de tratamiento de datos personales</summary>
            <p>
              {SITIO.empresa} trata los datos personales suministrados en este sitio con la finalidad de atender solicitudes de cotización,
              financiación, servicio posventa y contacto comercial, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.
              El titular puede conocer, actualizar, rectificar y suprimir sus datos, o revocar la autorización, escribiendo a {SITIO.email}.
            </p>
            <p><b>Texto de referencia: reemplazar por la política oficial vigente de SUMOTO S.A.</b></p>
          </details>
        </div>
      </section>
    </>
  )
}
