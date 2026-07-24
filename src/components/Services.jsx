const SERVICES = [
  {
    title: 'Pantallas',
    desc: 'Cambio de módulo o vidrio según el daño. Te muestro la pieza original antes de instalarla.',
    price: 'según modelo',
  },
  {
    title: 'Baterías',
    desc: 'Diagnóstico de descarga y cambio de batería cuando ya no sostiene carga o se hincha.',
    price: 'medido con multímetro',
  },
  {
    title: 'Puerto de carga',
    desc: 'Limpieza o cambio de pin de carga cuando el cable ya no hace buen contacto.',
    price: 'revisión sin cargo',
  },
]

export default function Services() {
  return (
    <section id="servicios">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Servicios</div>
          <h2>Lo que reparo</h2>
          <p>Trabajo con las fallas más comunes, con repuestos que te muestro antes de instalar y garantía sobre la reparación.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-price">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
