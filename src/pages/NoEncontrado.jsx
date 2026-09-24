import { Link } from 'react-router-dom'

export default function NoEncontrado() {
  return (
    <section className="nf">
      <div className="container">
        <span className="nf__code">404</span>
        <h1 className="display">Te saliste de la vía</h1>
        <p>La página que buscas no existe o cambió de dirección.</p>
        <Link to="/" className="btn btn--red">Volver al inicio</Link>
      </div>
    </section>
  )
}
