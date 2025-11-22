import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_2px_rgba(232,121,249,0.6)]" />
            <span className="text-xs tracking-widest text-fuchsia-200/80">ABOUT</span>
          </div>
          <p className="text-pretty text-lg leading-relaxed text-white/80">
            We build modern internet infrastructure, maintain a wide ecosystem of products, and research emerging real-world technologies. Our mission is to redefine how companies connect, operate, and innovate.
          </p>
          <p className="mt-4 text-sm text-white/60">
            Public details are intentionally limited. More information will be revealed in 2031.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
