import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/20 rounded-full blur-3xl" />
          <div className="relative p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">Ready for your next appointment?</h3>
              <p className="mt-3 text-blue-50/90">Create an account to book visits, chat with your dentist, and manage your smile plan.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="#" className="px-5 py-3 rounded-xl bg-white text-blue-600 font-medium hover:bg-blue-50">Create account</a>
              <a href="#" className="px-5 py-3 rounded-xl bg-black/20 text-white font-medium hover:bg-black/30">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
