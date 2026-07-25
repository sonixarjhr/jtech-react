export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: 'none' }}>
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Corrientes, Argentina</div>
          <h1>Tu celular vuelve a funcionar, sin vueltas.</h1>
          <p className="sub">
            Reparación de pantallas, baterías y puertos de carga. Te explico qué tiene,
            cuánto sale y cuánto tarda antes de tocar nada.
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" href="#contacto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M17.6 6.3A8.8 8.8 0 0 0 4 17.3L3 21l3.8-1a8.8 8.8 0 0 0 12.8-13.7z" stroke="#04140C" strokeWidth="1.6" />
              </svg>
              Escribime por WhatsApp
            </a>
            <a className="btn-secondary" href="#seguimiento">Consultar mi reparación</a>
          </div>
        </div>
      </div>
    </section>
  )
}
