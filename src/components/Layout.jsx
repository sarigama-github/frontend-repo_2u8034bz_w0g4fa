import React, { useState } from 'react'
import { AuthButtons } from './AuthModals'
import AuthModals from './AuthModals'
import { supabase } from '../lib/supabase'

export default function Layout({ children, onAuthed }) {
  const [mode, setMode] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 grid place-items-center">🦷</div>
            <div className="font-semibold">Dr. Bur Dental Clinic</div>
          </div>
          <div className="flex items-center gap-3">
            <AuthButtons onOpen={setMode} />
          </div>
        </div>
      </header>
      <main>{children}</main>
      <AuthModals mode={mode} setMode={setMode} onAuthed={onAuthed} />
    </div>
  )
}
