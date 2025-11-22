import React from 'react'
import { motion } from 'framer-motion'

const products = [
  { name: 'Internal Systems', tag: 'Details coming in 2031' },
  { name: 'Digital Tools', tag: 'Details coming in 2031' },
  { name: 'Prototype Hardware', tag: 'Details coming in 2031' },
  { name: 'Next-gen Network Solutions', tag: 'Details coming in 2031' },
]

const Products = () => {
  return (
    <section className="relative w-full bg-black py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-light tracking-tight sm:text-3xl">Products</h2>
          <div className="ml-6 h-px flex-1 bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-1 text-sm tracking-wide text-white/60">{p.tag}</div>
              <div className="text-lg font-medium tracking-tight">{p.name}</div>
              <div className="pointer-events-none absolute -inset-16 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" style={{ background: 'radial-gradient(600px 600px at 100% 0%, rgba(168,85,247,0.35), transparent 40%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
