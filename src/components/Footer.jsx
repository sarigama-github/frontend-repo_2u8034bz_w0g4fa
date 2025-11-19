import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-300">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 grid place-items-center">🦷</div>
          <div className="font-semibold text-white">Dr. Bur Dental Clinic</div>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  )
}
