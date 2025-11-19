import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function FeaturedShop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase.from('products').select('*').eq('featured', true).limit(6)
      if (!error) setProducts(data || [])
    }
    load()
  }, [])

  return (
    <section id="shop" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Featured products</h2>
            <p className="text-slate-300">Sign in to browse and purchase the full catalog.</p>
          </div>
          <a href="#" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700">Log in to view all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              {p.image_url && <img src={p.image_url} alt={p.name} className="w-full h-48 object-cover" />}
              <div className="p-5">
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-slate-300 line-clamp-2">{p.description}</div>
                <div className="mt-3 font-semibold">${p.price?.toFixed?.(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
