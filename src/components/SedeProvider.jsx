import { createContext, useContext, useState } from 'react'
import { getSavedSedeId, getSede, saveSedeId, SEDES } from '../data/sitio.js'

const SedeContext = createContext(null)

export function SedeProvider({ children }) {
  const [sedeId, setSedeId] = useState(getSavedSedeId)
  const [selectorAbierto, setSelectorAbierto] = useState(!sedeId)
  const [seleccionTemporal, setSeleccionTemporal] = useState(sedeId || '')
  const sede = getSede(sedeId || 'palmira')

  const abrirSelector = () => {
    setSeleccionTemporal(sedeId || '')
    setSelectorAbierto(true)
  }

  const confirmarSede = (event) => {
    event.preventDefault()
    if (!SEDES[seleccionTemporal]) return
    saveSedeId(seleccionTemporal)
    setSedeId(seleccionTemporal)
    setSelectorAbierto(false)
  }

  return (
    <SedeContext.Provider value={{ sede, sedeId, abrirSelector }}>
      {children}
      {selectorAbierto && (
        <div className="sede-overlay">
          <section className="sede-dialog" role="dialog" aria-modal="true" aria-labelledby="sede-title">
            <span className="kicker kicker--red">Hero · SUMOTO</span>
            <h2 className="display" id="sede-title">¿Qué sede está más cerca de tu ubicación?</h2>
            <p>Te mostraremos sus datos de contacto, servicios y ubicación.</p>
            <form onSubmit={confirmarSede}>
              <label className="field" htmlFor="sede-select">
                <span>Selecciona una sede</span>
                <select
                  id="sede-select"
                  required
                  value={seleccionTemporal}
                  onChange={(event) => setSeleccionTemporal(event.target.value)}
                >
                  <option value="" disabled>Elige una sede</option>
                  {Object.values(SEDES).map((opcion) => (
                    <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                  ))}
                </select>
              </label>
              <button className="btn btn--red btn--block" type="submit">Ver esta sede</button>
              {sedeId && (
                <button className="sede-dialog__cancel" type="button" onClick={() => setSelectorAbierto(false)}>
                  Conservar {sede.nombre}
                </button>
              )}
            </form>
          </section>
        </div>
      )}
    </SedeContext.Provider>
  )
}

export const useSede = () => {
  const context = useContext(SedeContext)
  if (!context) throw new Error('useSede debe utilizarse dentro de SedeProvider.')
  return context
}
