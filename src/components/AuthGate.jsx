import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function AuthGate({ children, onAuthReady }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
      setLoading(false)
      onAuthReady?.(session)
    }
    init()

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      onAuthReady?.(session)
    })

    return () => listener.subscription.unsubscribe()
  }, [onAuthReady])

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-50">
        <div className="text-slate-600">Loading...</div>
      </div>
    )
  }

  return typeof children === 'function' ? children(session) : children
}
