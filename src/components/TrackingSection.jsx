import StatusLookup from './StatusLookup'

export default function TrackingSection() {
  return (
    <section id="seguimiento">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Seguimiento</div>
          <h2>Consultá el estado de tu reparación</h2>
          <p>Te paso un código de seguimiento cuando dejás el equipo. Ingresalo acá para ver en qué paso está.</p>
        </div>
        <StatusLookup />
      </div>
    </section>
  )
}
