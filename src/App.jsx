import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFab from './components/WhatsAppFab.jsx'
import Inicio from './pages/Inicio.jsx'
import Motos from './pages/Motos.jsx'
import MotoDetalle from './pages/MotoDetalle.jsx'
import Comparar from './pages/Comparar.jsx'
import Financiacion from './pages/Financiacion.jsx'
import Posventa from './pages/Posventa.jsx'
import Concesionario from './pages/Concesionario.jsx'
import Contacto from './pages/Contacto.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])

  return (
    <>
      <Navbar />
      <main key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/motos" element={<Motos />} />
          <Route path="/motos/:categoria" element={<Motos />} />
          <Route path="/moto/:slug" element={<MotoDetalle />} />
          <Route path="/comparar" element={<Comparar />} />
          <Route path="/financiacion" element={<Financiacion />} />
          <Route path="/posventa" element={<Posventa />} />
          <Route path="/concesionario" element={<Concesionario />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
