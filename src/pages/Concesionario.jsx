import { SITIO, waLink } from '../data/sitio.js'
import { getMoto, img } from '../data/motos.js'
import PageHero from '../components/PageHero.jsx'
import { IconPin, IconClock, IconPhone, IconWhatsApp, IconShield, IconWrench, IconCard, IconBox } from '../components/Icons.jsx'

export default function Concesionario() {
  return (
    <>
      <PageHero kicker={SITIO.empresa} title="Nuestro concesionario" crumbs={[{ label: 'Concesionario' }]} image={img(getMoto('xpulse-rally'))}>
        <p>{SITIO.nombreComercial}: el punto oficial Hero de {SITIO.ciudad}, respaldado por la experiencia de {SITIO.empresa} en el mundo de las motos.</p>
      </PageHero>

      <section className="section section--tight">
        <div className="container store">
          <div className="store__about">
            <span className="kicker kicker--red">Quiénes somos</span>
            <h2 className="display">Pasión por las motos en el corazón del Valle</h2>
            <p>
              En {SITIO.nombreComercial} te asesoramos para elegir la moto ideal para tu trabajo, tu ciudad o tu aventura.
              Encuentras en un mismo lugar venta de motos nuevas, acompañamiento en financiación, taller autorizado y repuestos originales.
            </p>
            <div className="store__services">
              {[[<IconShield />, 'Venta de motos nuevas'], [<IconCard />, 'Financiación'], [<IconWrench />, 'Taller autorizado'], [<IconBox />, 'Repuestos y accesorios']].map(([i, t]) => (
                <div key={t}>{i}<span>{t}</span></div>
              ))}
            </div>
          </div>

          <div className="store__card">
            <ul className="store__info">
              <li><IconPin /><div><small>Dirección</small><b>{SITIO.direccion}</b></div></li>
              <li><IconPhone /><div><small>Teléfono</small><a href={`tel:${SITIO.telefonoLink}`}>{SITIO.telefono}</a></div></li>
              <li><IconClock /><div><small>Horarios</small>
                {SITIO.horarios.map((h) => <span key={h.dias} className="store__hour"><em>{h.dias}</em> {h.horas}</span>)}
              </div></li>
            </ul>
            <div className="store__btns">
              <a className="btn btn--red" href={waLink('Hola, quiero información del concesionario Hero Palmira.')} target="_blank" rel="noreferrer"><IconWhatsApp /> WhatsApp</a>
              <a className="btn btn--outline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITIO.mapaQuery)}`} target="_blank" rel="noreferrer"><IconPin /> Cómo llegar</a>
            </div>
          </div>

          <div className="store__map">
            <iframe
              title="Mapa del concesionario"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITIO.mapaQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
