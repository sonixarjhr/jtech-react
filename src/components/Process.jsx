const STEPS = [
  { title: 'Diagnóstico', desc: 'Reviso el equipo y te digo qué tiene, con la mayor precisión posible antes de abrir nada.' },
  { title: 'Presupuesto', desc: 'Te paso el costo y el tiempo estimado. Si no lo aceptás, la revisión no tiene cargo.' },
  { title: 'Reparación', desc: 'Trabajo el equipo y te aviso si aparece algo nuevo antes de seguir.' },
  { title: 'Entrega', desc: 'Probamos juntos que todo funcione antes de que te lo lleves.' },
]

export default function Process() {
  return (
    <section id="proceso">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Cómo trabajo</div>
          <h2>Sin sorpresas en el presupuesto</h2>
          <p>El mismo proceso para cada equipo que entra, en este orden.</p>
        </div>
        <div className="process-list">
          {STEPS.map((step, i) => (
            <div className="process-item" key={step.title}>
              <div className="process-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
