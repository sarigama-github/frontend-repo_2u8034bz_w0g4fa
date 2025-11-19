import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Amina K.',
    role: 'Patient',
    quote: 'The best dental experience I have ever had. Booking and chatting with my doctor was effortless!'
  },
  {
    name: 'Daniel R.',
    role: 'Patient',
    quote: 'Beautiful clinic and even better tech. I loved completing my medical history securely online.'
  },
  {
    name: 'Dr. Sara B.',
    role: 'Doctor',
    quote: 'The dashboard and real-time chat make coordinating care simple and fast.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">What people say</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Smiles weve transformed</h2>
          <p className="mt-2 text-slate-300">Real stories from patients and our care team.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="text-lg leading-relaxed">“{t.quote}”</div>
              <div className="mt-6 text-sm text-slate-300">{t.name} • {t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
