import React, { useState } from 'react'
import Modal from './Modal'
import { supabase } from '../lib/supabase'

export function AuthButtons({ onOpen }) {
  return (
    <div className="flex gap-3">
      <button onClick={() => onOpen('login')} className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">Log in</button>
      <button onClick={() => onOpen('signup')} className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">Sign up</button>
    </div>
  )
}

export default function AuthModals({ mode, setMode, onAuthed }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const close = () => { if (!loading) setMode(null) }

  const handleLogin = async () => {
    setLoading(true); setError('')
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) return setError(error.message)
    onAuthed?.(data.session)
    setMode(null)
  }

  const handleSignup = async () => {
    setLoading(true); setError('')
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name, role: 'patient' }, emailRedirectTo: window.location.origin }
    })
    setLoading(false)
    if (error) return setError(error.message)
    onAuthed?.(data.session)
    alert('Check your email to confirm your account before logging in.')
    setMode(null)
  }

  return (
    <>
      <Modal open={mode==='login'} onClose={close} title="Welcome back" wide>
        <div className="grid gap-4">
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="px-4 py-3 rounded-xl border" />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="px-4 py-3 rounded-xl border" />
          <button onClick={handleLogin} disabled={loading} className="px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">{loading?'Logging in...':'Log in'}</button>
        </div>
      </Modal>

      <Modal open={mode==='signup'} onClose={close} title="Create your account" wide>
        <div className="grid gap-4">
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" className="px-4 py-3 rounded-xl border" />
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="px-4 py-3 rounded-xl border" />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="px-4 py-3 rounded-xl border" />
          <button onClick={handleSignup} disabled={loading} className="px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">{loading?'Creating...':'Sign up'}</button>
          <p className="text-sm text-slate-600">We’ll send a confirmation link to your email.</p>
        </div>
      </Modal>
    </>
  )
}
