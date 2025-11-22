import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Beaker, ShieldCheck } from 'lucide-react'

export default function Technology() {
  return (
    <main className="min-h-screen bg-black text-white pt-28">
      <section className="mx-auto max-w-5xl px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-light tracking-tight">
          Technology
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-white/70 max-w-2xl mx-auto">
          We are engineering quietly. The reveal is scheduled.
        </motion.p>

        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
          <Cpu className="h-4 w-4 text-cyan-400" />
          <span className="text-sm tracking-widest uppercase text-white/80">Coming in 2031</span>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Beaker, title: 'R&D', desc: 'Prototyping beyond current constraints.' },
            { icon: ShieldCheck, title: 'Assurance', desc: 'Built for adversarial environments.' },
            { icon: Cpu, title: 'Acceleration', desc: 'Hardware-aware from day zero.' },
          ].map((it, i) => {
            const Icon = it.icon
            return (
              <motion.div key={it.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i, duration: 0.5 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
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

      <div className="h-24" />
    </main>
  )
}
