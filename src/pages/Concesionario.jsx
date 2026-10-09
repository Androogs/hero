import { SITIO, waLink, waClickHandler } from '../data/sitio.js'
import PageHero from '../components/PageHero.jsx'
import { IconPin, IconClock, IconPhone, IconWhatsApp, IconShield, IconWrench, IconCard, IconBox } from '../components/Icons.jsx'
import { useSede } from '../components/SedeProvider.jsx'

export default function Concesionario() {
  const { sede, abrirSelector } = useSede()
  const mensajeVentas = `Hola, quiero información de ${sede.nombre}.`
  const mensajeTaller = `Hola, quiero información del taller de ${sede.nombre}.`
  const mensajeRepuestos = `Hola, quiero información sobre repuestos en ${sede.nombre}.`
  return (
    <>
      <PageHero kicker={SITIO.empresa} title={sede.nombre} crumbs={[{ label: 'Concesionario' }]}>
        <p>El punto oficial Hero de {sede.ciudad}, respaldado por la experiencia de {SITIO.empresa} en el mundo de las motos.</p>
      </PageHero>

      <section className="section section--tight">
        <div className="container store">
          <div className="store__about">
            <span className="kicker kicker--red">Quiénes somos</span>
            <h2 className="display">Pasión por las motos en el corazón del Valle</h2>
            <p>
              En {sede.nombre} te asesoramos para elegir la moto ideal para tu trabajo, tu ciudad o tu aventura.
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
              <li><IconPin /><div><small>Dirección</small><b>{sede.direccion}</b></div></li>
              <li><IconPhone /><div><small>Asesores de ventas</small>
                {sede.asesores.map((asesor) => <a key={asesor.wa} className="store__hour" href={`tel:${asesor.link}`}>{asesor.label}</a>)}
              </div></li>
              <li><IconWhatsApp /><div><small>Taller y repuestos</small>
                <a className="store__hour" href={waLink(mensajeTaller, sede.taller.wa)} onClick={waClickHandler(mensajeTaller, 'taller')} target="_blank" rel="noreferrer">Taller: {sede.taller.label}</a>
                <a className="store__hour" href={waLink(mensajeRepuestos, sede.repuestos.wa)} onClick={waClickHandler(mensajeRepuestos, 'repuestos')} target="_blank" rel="noreferrer">Repuestos: {sede.repuestos.label}</a>
              </div></li>
              <li><IconClock /><div><small>Horarios</small>
                {SITIO.horarios.map((h) => <span key={h.dias} className="store__hour"><em>{h.dias}</em> {h.horas}</span>)}
              </div></li>
            </ul>
            <div className="store__btns">
              <a className="btn btn--red" href={waLink(mensajeVentas)} onClick={waClickHandler(mensajeVentas)} target="_blank" rel="noreferrer"><IconWhatsApp /> Asesor de ventas</a>
              <a className="btn btn--outline" href={sede.mapaUrl} target="_blank" rel="noreferrer"><IconPin /> Cómo llegar</a>
              <button className="btn btn--outline" type="button" onClick={abrirSelector}>Cambiar sede</button>
            </div>
          </div>

          <div className="store__map">
            <iframe
              title="Mapa del concesionario"
              src={`https://www.google.com/maps?q=${encodeURIComponent(sede.mapaQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
