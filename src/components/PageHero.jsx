import { Link } from 'react-router-dom'

/** Encabezado compacto para cada pestaña. */
export default function PageHero({ kicker, title, children, crumbs = [], image, variant = 'dark' }) {
  return (
    <section className={`phero phero--${variant}`}>
      <div className="phero__slash" aria-hidden="true" />
      <div className="container phero__inner">
        <div className="phero__text">
          {crumbs.length > 0 && (
            <nav className="crumbs" aria-label="Ruta">
              <Link to="/">Inicio</Link>
              {crumbs.map((c) => (c.to ? <Link key={c.label} to={c.to}>{c.label}</Link> : <span key={c.label}>{c.label}</span>))}
            </nav>
          )}
          {kicker && <span className="kicker">{kicker}</span>}
          <h1 className="display">{title}</h1>
          {children && <div className="phero__lead">{children}</div>}
        </div>
        {image && <img className="phero__img" src={image} alt="" />}
      </div>
    </section>
  )
}
