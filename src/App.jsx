import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import WhatWeDo from './components/WhatWeDo'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-cyan-400/30 selection:text-white">
      {/* Subtle noise / texture layer */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background:radial-gradient(1000px_600px_at_10%_-10%,#22d3ee,transparent),radial-gradient(900px_500px_at_90%_-10%,#a78bfa,transparent)]" />

      <Hero />
      <About />
      <WhatWeDo />
      <Products />
      <Footer />
    </div>
  )
}

export default App
