import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { supabase } from '../lib/supabase'

export default function MedicalHistoryModal({ session }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    allergies: '', medications: '', previous_treatments: '', pain_level: 'None', chronic_illnesses: '',
    smoking_alcohol: '', emergency_contact: '', notes: ''
  })

  const userId = session?.user?.id

  useEffect(() => {
    const fetchStatus = async () => {
      if (!userId) return
      const { data, error } = await supabase.from('medical_history').select('*').eq('user_id', userId).maybeSingle()
      if (error) console.error(error)
      setOpen(!data)
      setLoading(false)
    }
    fetchStatus()
  }, [userId])

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const onSave = async () => {
    setSaving(true)
    const payload = { user_id: userId, ...form }
    const { error } = await supabase.from('medical_history').insert(payload)
    setSaving(false)
    if (error) return alert(error.message)
    setOpen(false)
  }

  if (loading) return null

  return (
    <Modal open={open} onClose={() => {}} disableClose title="Complete your medical history" wide>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <textarea name="allergies" value={form.allergies} onChange={onChange} placeholder="Allergies" className="px-4 py-3 rounded-xl border min-h-[80px]" />
        <textarea name="medications" value={form.medications} onChange={onChange} placeholder="Medications" className="px-4 py-3 rounded-xl border min-h-[80px]" />
        <textarea name="previous_treatments" value={form.previous_treatments} onChange={onChange} placeholder="Previous dental treatments" className="px-4 py-3 rounded-xl border min-h-[80px]" />
        <select name="pain_level" value={form.pain_level} onChange={onChange} className="px-4 py-3 rounded-xl border"><option>None</option><option>Mild</option><option>Moderate</option><option>Severe</option></select>
        <textarea name="chronic_illnesses" value={form.chronic_illnesses} onChange={onChange} placeholder="Chronic illnesses" className="px-4 py-3 rounded-xl border min-h-[80px]" />
        <textarea name="smoking_alcohol" value={form.smoking_alcohol} onChange={onChange} placeholder="Smoking/alcohol" className="px-4 py-3 rounded-xl border min-h-[80px]" />
        <input name="emergency_contact" value={form.emergency_contact} onChange={onChange} placeholder="Emergency contact" className="px-4 py-3 rounded-xl border" />
        <textarea name="notes" value={form.notes} onChange={onChange} placeholder="Any notes" className="px-4 py-3 rounded-xl border min-h-[80px] md:col-span-2" />
      </div>
      <div className="mt-6 flex justify-end">
        <button onClick={onSave} disabled={saving} className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">{saving ? 'Saving...' : 'Save and continue'}</button>
      </div>
    </Modal>
  )
}
