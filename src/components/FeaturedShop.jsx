import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { motion } from 'framer-motion'

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
    <section id="shop" className="py-24 border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Hand-picked essentials</h2>
            <p className="text-slate-300">Expert-approved oral care youll actually love to use.</p>
          </div>
          <a href="#" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700">Browse all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              {p.image_url && (
                <div className="relative">
                  <img src={p.image_url} alt={p.name} className="w-full h-52 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
              )}
              <div className="p-5">
                <div className="font-semibold text-lg">{p.name}</div>
                <div className="text-sm text-slate-300 line-clamp-2">{p.description}</div>
                <div className="mt-3 font-semibold">${p.price?.toFixed?.(2)}</div>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white">Add to cart</button>
                  <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">Details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
