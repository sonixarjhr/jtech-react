import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contacto">
      <div className="wrap">
        <div className="contact-box">
          <div>
            <h2>Contame qué le pasa a tu equipo</h2>
            <p className="contact-intro">
              Respondo por WhatsApp, Instagram o el formulario. Contame el modelo y la falla y te digo cómo seguimos.
            </p>
            <div className="contact-links">
              <a className="contact-link" href="https://wa.me/5491178312277" target="_blank" rel="noopener noreferrer">
                <svg className="ico" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M17.6 6.3A8.8 8.8 0 0 0 4 17.3L3 21l3.8-1a8.8 8.8 0 0 0 12.8-13.7z" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                WhatsApp
              </a>
              <a className="contact-link" href="https://instagram.com/jtechig" target="_blank" rel="noopener noreferrer">
                <svg className="ico" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                </svg>
                @jtechig
              </a>
              <a className="contact-link" href="#">
                <svg className="ico" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                Santa Rosa, Corrientes
              </a>
              <a className="contact-link" href="#">
                <svg className="ico" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                San Miguel, Corrientes
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
