import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth (don't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_35%,black,transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]" />
            <span className="text-xs tracking-widest text-cyan-200/80">FUTURE SIGNAL — ONLINE</span>
          </div>

          <h1 className="text-5xl font-light tracking-tight sm:text-6xl md:text-7xl">
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">FennecWorld</span>
          </h1>

          <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
            Building the next era of digital and physical infrastructure.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-white/5 px-5 py-2.5 text-sm text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/70 hover:bg-white/10"
            >
              <span className="relative">
                <span className="absolute -inset-3 -z-10 rounded-full bg-cyan-400/10 blur-md transition-opacity group-hover:opacity-100" />
                More coming in 2031
              </span>
              <svg className="h-4 w-4 text-cyan-300 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_20%_10%,#22d3ee_0,transparent_20%),radial-gradient(circle_at_80%_20%,#a78bfa_0,transparent_22%),radial-gradient(circle_at_50%_80%,#22d3ee_0,transparent_18%)]" />
    </section>
  )
}

export default Hero
