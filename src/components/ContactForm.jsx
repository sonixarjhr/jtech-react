import { useState } from 'react'
import emailjs from '@emailjs/browser'

// Estos 3 valores salen de tu cuenta gratuita en emailjs.com
// (Email Services > tu servicio, Email Templates > tu template, Account > Public Key)
const SERVICE_ID = 'TU_SERVICE_ID'
const TEMPLATE_ID = 'TU_TEMPLATE_ID'
const PUBLIC_KEY = 'TU_PUBLIC_KEY'

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', contacto: '', mensaje: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      setStatus('sent')
      setForm({ nombre: '', contacto: '', mensaje: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return <p className="form-msg">Listo, me llegó tu mensaje. Te respondo a la brevedad.</p>
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Tu nombre"
        required
      />
      <input
        name="contacto"
        value={form.contacto}
        onChange={handleChange}
        placeholder="WhatsApp o email para responderte"
        required
      />
      <textarea
        name="mensaje"
        value={form.mensaje}
        onChange={handleChange}
        placeholder="Contame qué le pasa a tu equipo"
        rows={4}
        required
      />
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>
      {status === 'error' && (
        <p className="form-msg error">No se pudo enviar. Probá de nuevo o escribime directo por WhatsApp.</p>
      )}
    </form>
  )
}
