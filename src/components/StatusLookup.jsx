import { useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'

const STEPS = ['recibido', 'diagnostico', 'reparando', 'listo', 'entregado']

const LABELS = {
  recibido: 'Recibido',
  diagnostico: 'En diagnóstico',
  reparando: 'En reparación',
  listo: 'Listo para retirar',
  entregado: 'Entregado',
}

export default function StatusLookup() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState(null)
  const [status, setStatus] = useState('idle') // idle | loading | found | not-found | error

  async function handleSearch(e) {
    e.preventDefault()
    const trimmed = code.trim().toUpperCase()
    if (!trimmed) return

    setStatus('loading')
    setResult(null)

    try {
      // Cada reparación se guarda en Firestore como un documento
      // dentro de la colección "reparaciones", con el código como ID del documento.
      const ref = doc(db, 'reparaciones', trimmed)
      const snap = await getDoc(ref)

      if (snap.exists()) {
        setResult(snap.data())
        setStatus('found')
      } else {
        setStatus('not-found')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const currentStepIndex = result ? STEPS.indexOf(result.estado) : -1

  return (
    <div className="lookup-card">
      <form onSubmit={handleSearch} className="lookup-form">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Tu código de seguimiento (ej. JT-0042)"
          aria-label="Código de seguimiento"
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Buscando…' : 'Consultar'}
        </button>
      </form>

      {status === 'not-found' && (
        <p className="lookup-msg">No encontramos ese código. Revisá que esté bien escrito, tal como te lo pasé.</p>
      )}
      {status === 'error' && (
        <p className="lookup-msg">Hubo un problema consultando el estado. Probá de nuevo en un momento.</p>
      )}

      {status === 'found' && result && (
        <div className="lookup-result">
          <p className="lookup-device">{result.equipo} · {result.cliente}</p>
          <div className="lookup-steps">
            {STEPS.map((step, i) => (
              <div key={step} className={`lookup-step ${i <= currentStepIndex ? 'done' : ''}`}>
                <span className="dot" />
                <span className="label">{LABELS[step]}</span>
              </div>
            ))}
          </div>
          {result.nota && <p className="lookup-note">{result.nota}</p>}
        </div>
      )}
    </div>
  )
}
