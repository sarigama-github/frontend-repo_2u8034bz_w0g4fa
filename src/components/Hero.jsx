import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0),rgba(2,6,23,0.6))]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-28 md:py-40">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Exceptional dental care meets modern technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 text-slate-300 md:text-lg"
          >
            From first-time patients to complex treatments, manage appointments, chat with doctors, and shop recommended products — all in one place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex gap-4"
          >
            <a href="#features" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700">Explore features</a>
            <a href="#shop" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20">Shop featured</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
