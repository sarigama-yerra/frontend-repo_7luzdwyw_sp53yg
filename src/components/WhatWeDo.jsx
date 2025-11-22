import React from 'react'
import { motion } from 'framer-motion'
import { Network, Wrench, Server, FlaskConical, Atom } from 'lucide-react'

const items = [
  {
    icon: Network,
    title: 'Network Architecture',
    desc: 'Designing resilient, high-throughput networks.'
  },
  {
    icon: Wrench,
    title: 'Scalable Product Maintenance',
    desc: 'Operating and evolving products at planetary scale.'
  },
  {
    icon: Server,
    title: 'Infrastructure-as-a-Service',
    desc: 'Abstracting complexity with clean, reliable primitives.'
  },
  {
    icon: FlaskConical,
    title: 'Experimental Real-World Tech',
    desc: 'Explorations towards 2031 and beyond.'
  },
  {
    icon: Atom,
    title: 'Internal Labs & Innovation Units',
    desc: 'Focused teams exploring the edges of possibility.'
  }
]

const WhatWeDo = () => {
  return (
    <section className="relative w-full bg-black py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-light tracking-tight sm:text-3xl">What We Do</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/30 via-white/10 to-transparent ml-6" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-lg font-medium tracking-tight">{title}</h3>
              </div>
              <p className="text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -inset-16 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" style={{ background: 'radial-gradient(600px 600px at 0% 0%, rgba(34,211,238,0.35), transparent 40%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
