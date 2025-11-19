import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-28 md:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Exceptional dental care meets modern technology</h1>
          <p className="mt-6 text-slate-300 md:text-lg">From first-time patients to complex treatments, manage appointments, chat with doctors, and shop recommended products — all in one place.</p>
          <div className="mt-8 flex gap-4">
            <a href="#features" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700">Explore features</a>
            <a href="#shop" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20">Shop featured</a>
          </div>
        </div>
      </div>
    </section>
  )
}
