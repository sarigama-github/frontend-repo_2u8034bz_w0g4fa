import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Gallery3D() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),rgba(2,6,23,0))]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Interactive 3D</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Explore our cutting-edge clinic in 3D</h2>
          <p className="mt-3 text-slate-300">A welcoming, modern space designed for comfort. Interact with the 3D scene to look around.</p>
          <ul className="mt-6 grid gap-3 text-slate-300">
            <li>• Digital X-ray, intraoral cameras</li>
            <li>• Gentle treatments and sedation options</li>
            <li>• Family-friendly environment</li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 h-[420px]"
        >
          <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  )
}
