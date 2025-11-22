import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Globe2, Shield, Zap, Layers, Link2 } from 'lucide-react'

const items = [
  {
    title: 'Global Presence',
    desc: 'Nodes distributed across key hubs for resilience and ultra-low latency.',
    icon: Globe2,
  },
  {
    title: 'Interoperability',
    desc: 'Bridges and connectors that speak the language of tomorrow.',
    icon: Link2,
  },
  {
    title: 'Security First',
    desc: 'Multi-layer cryptography and continuous attestation.',
    icon: Shield,
  },
  {
    title: 'Throughput',
    desc: 'Optimized lanes for high-frequency, high-volume applications.',
    icon: Zap,
  },
  {
    title: 'Composable Layers',
    desc: 'Microservices and protocols designed for modular growth.',
    icon: Layers,
  },
]

export default function Network() {
  return (
    <main className="min-h-screen bg-black text-white pt-28">
      <section className="mx-auto max-w-6xl px-4">
        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-light tracking-tight">
          Fennec Network
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 max-w-2xl text-white/70">
          A quietly powerful fabric that links experiences, data, and value — built for the edge and beyond.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" />
                <div className="relative">
                  <Icon className="h-6 w-6 text-cyan-400" />
                  <h3 className="mt-4 text-lg font-medium">{it.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{it.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 mt-16">
        <h2 className="text-xl font-light text-white/80">What FennecWorld built</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Edge Mesh', 'Quantum-Safe Vault', 'HoloID', 'Arc Bridges', 'Nova Streams', 'Atlas Index'].map((name, i) => (
            <div key={name} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-cyan-400">
                  <CheckCircle2 size={16} />
                  <span className="text-xs uppercase tracking-widest">Live</span>
                </div>
                <h3 className="mt-2 text-lg">{name}</h3>
                <p className="text-sm text-white/70">Operational within the Fennec fabric with progressive rollout.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-24" />
    </main>
  )
}
