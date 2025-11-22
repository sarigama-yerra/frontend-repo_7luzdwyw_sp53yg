import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Network, Cpu } from 'lucide-react'

const NavItem = ({ to, children }) => {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
          isActive || active ? 'text-white' : 'text-white/70 hover:text-white'
        }`
      }
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute inset-0 rounded-full transition-opacity duration-300 bg-white/5 backdrop-blur-sm border border-white/10 ${
          active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      />
    </NavLink>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
          <Link to="/" className="group inline-flex items-center gap-2 px-3 py-2">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-xl group-hover:bg-fuchsia-400/20 transition-colors" />
              <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500" />
            </div>
            <span className="text-sm tracking-widest text-white/90">FENNECWORLD</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/network">Network</NavItem>
            <NavItem to="/technology">Technology</NavItem>
          </nav>
          <button className="md:hidden inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/80">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
