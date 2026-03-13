'use client'

import { useState } from 'react'

export default function ReservationForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1800))
      setStatus('success')
      setTimeout(() => setStatus('idle'), 2500)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2500)
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-cream p-8 shadow-soft md:p-10">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative z-10">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
          Reserve Your Table
        </p>
        <h2 className="mb-3 font-heading text-3xl text-navy">
          Make a Reservation
        </h2>
        <p className="mb-8 leading-relaxed text-navy/70">
          Book your dining experience with us and enjoy an elegant atmosphere,
          refined flavors, and attentive service.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy outline-none transition duration-300 placeholder:text-navy/40 focus:border-gold focus:ring-4 focus:ring-gold/20"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy outline-none transition duration-300 placeholder:text-navy/40 focus:border-gold focus:ring-4 focus:ring-gold/20"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="date"
              required
              className="w-full rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy outline-none transition duration-300 focus:border-gold focus:ring-4 focus:ring-gold/20"
            />
            <input
              type="time"
              required
              className="w-full rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy outline-none transition duration-300 focus:border-gold focus:ring-4 focus:ring-gold/20"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="number"
              placeholder="Guests"
              min="1"
              required
              className="w-full rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy outline-none transition duration-300 placeholder:text-navy/40 focus:border-gold focus:ring-4 focus:ring-gold/20"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy outline-none transition duration-300 placeholder:text-navy/40 focus:border-gold focus:ring-4 focus:ring-gold/20"
            />
          </div>

          <textarea
            placeholder="Special requests..."
            rows="4"
            className="w-full resize-none rounded-2xl border border-navy/10 bg-white px-5 py-4 text-navy outline-none transition duration-300 placeholder:text-navy/40 focus:border-gold focus:ring-4 focus:ring-gold/20"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`mt-2 flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 font-semibold uppercase tracking-[0.2em] transition duration-300 ${
              status === 'loading'
                ? 'cursor-not-allowed bg-navy/80 text-cream'
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
              ? 'Confirming...'
              : status === 'success'
              ? 'Reservation Sent'
              : status === 'error'
              ? 'Try Again'
              : 'Confirm Reservation'}
          </button>

          <div className="min-h-[24px]">
            {status === 'success' && (
              <p className="text-sm text-green-700 animate-pulse">
                Your reservation request has been sent successfully.
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
    </div>
  )
}