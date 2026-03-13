'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1800))

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => setStatus('idle'), 2500)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2500)
    }
  }

  return (
    <div className="rounded-[2rem] bg-cream p-8 md:p-10 shadow-soft border border-black/5">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
          Contact Us
        </p>
        <h2 className="font-heading text-3xl text-navy mb-3">Send a Message</h2>
        <p className="text-navy/70 leading-relaxed">
          Have a question, reservation request, or special inquiry? Send us a
          message and we’ll get back to you soon.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy outline-none transition duration-300 placeholder:text-navy/40 focus:border-gold focus:ring-4 focus:ring-gold/20"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy outline-none transition duration-300 placeholder:text-navy/40 focus:border-gold focus:ring-4 focus:ring-gold/20"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy outline-none transition duration-300 placeholder:text-navy/40 focus:border-gold focus:ring-4 focus:ring-gold/20"
        />

        <textarea
          name="message"
          placeholder="Your message..."
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full resize-none rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy outline-none transition duration-300 placeholder:text-navy/40 focus:border-gold focus:ring-4 focus:ring-gold/20"
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`mt-2 flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 font-semibold uppercase tracking-[0.2em] transition duration-300 ${
            status === 'loading'
              ? 'bg-navy/80 text-cream cursor-not-allowed'
              : status === 'success'
              ? 'bg-green-600 text-white'
              : status === 'error'
              ? 'bg-red-600 text-white'
              : 'bg-navy text-cream hover:-translate-y-1 hover:bg-gold hover:text-navy'
          }`}
        >
          {status === 'loading' && (
            <span className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
          )}
          {status === 'loading'
            ? 'Sending...'
            : status === 'success'
            ? 'Message Sent'
            : status === 'error'
            ? 'Try Again'
            : 'Send Message'}
        </button>

        <div className="min-h-[24px]">
          {status === 'success' && (
            <p className="text-sm text-green-700 animate-pulse">
              Your message was sent successfully.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 animate-pulse">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}