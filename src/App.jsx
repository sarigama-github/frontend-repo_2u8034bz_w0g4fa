import React, { useCallback } from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Gallery3D from './components/Gallery3D'
import FeaturedShop from './components/FeaturedShop'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import AuthGate from './components/AuthGate'
import MedicalHistoryModal from './components/MedicalHistoryModal'

function App() {
  const handleAuthed = useCallback(() => {
    // no-op for now
  }, [])

  return (
    <AuthGate>
      {(session) => (
        <Layout onAuthed={handleAuthed}>
          {session && <MedicalHistoryModal session={session} />}
          <Hero />
          <section id="features" className="py-20">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
              {[{
                title: 'Appointments', desc: 'Book, manage, and get real-time updates on your visits.'
              },{
                title: 'Chat', desc: 'Talk to your doctor in real time with read receipts.'
              },{
                title: 'Patient Profiles', desc: 'Securely manage medical history and preferences.'
              }].map((f,i)=> (
                <div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/5">
                  <div className="text-blue-400">●</div>
                  <div className="mt-3 font-semibold">{f.title}</div>
                  <div className="text-slate-300">{f.desc}</div>
                </div>
              ))}
            </div>
          </section>
          <Gallery3D />
          <FeaturedShop />
          <Testimonials />
          <CTA />
        </Layout>
      )}
    </AuthGate>
  )
}

export default App
