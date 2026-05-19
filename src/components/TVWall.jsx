import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './TVWall.css'

const channels = [
  { id: 'CH.01', label: 'ABOUT',    href: '#about',    color: '#F97316', icon: '01' },
  { id: 'CH.02', label: 'PROJECTS', href: '#projects', color: '#FB923C', icon: '02' },
  { id: 'CH.03', label: 'VISUALS',  href: '#visuals',  color: '#F97316', icon: '03' },
  { id: 'CH.04', label: 'SKILLS',   href: '#skills',   color: '#FB923C', icon: '04' },
  { id: 'CH.05', label: 'CONTACT',  href: '#contact',  color: '#F97316', icon: '05' },
  { id: 'BN.',   label: 'HOME',     href: '#hero',     color: '#fff',    icon: 'BN.' },
]

export default function TVWall({ onStaticFlash }) {
  const [active, setActive] = useState(null)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const sections = channels.filter(c => c.href !== '#hero').map(c => ({
      id: c.id,
      el: document.querySelector(c.href),
    }))
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2
      let found = null
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el && sections[i].el.offsetTop <= mid) {
          found = sections[i].id
          break
        }
      }
      setActive(found)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, ch) => {
    e.preventDefault()
    onStaticFlash()
    setTimeout(() => {
      document.querySelector(ch.href)?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  }

  return (
    <div className="tv-wall">
      {channels.map((ch, i) => {
        const isActive = active === ch.id
        const isHovered = hovered === ch.id
        const isBrand = ch.id === 'BN.'
        return (
          <motion.a
            key={ch.id}
            href={ch.href}
            className={`crt-tv ${isActive ? 'active' : ''} ${isBrand ? 'brand' : ''}`}
            onClick={(e) => handleClick(e, ch)}
            onMouseEnter={() => setHovered(ch.id)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 + i * 0.08, duration: 0.4, ease: 'backOut' }}
            style={{ '--ch-color': ch.color }}
          >
            {/* TV body */}
            <div className="tv-body">
              {/* screen */}
              <div className="tv-screen">
                {/* scanlines */}
                <div className="tv-scanlines" />
                {/* noise */}
                <div className="tv-noise" />
                {/* screen content */}
                <div className="tv-content">
                  {(isActive || isHovered) ? (
                    <span className="tv-label-big">{ch.label}</span>
                  ) : (
                    <span className="tv-ch-num">{ch.icon}</span>
                  )}
                </div>
                {/* active glow overlay */}
                {isActive && <div className="tv-active-overlay" />}
                {/* static flicker on brand TV */}
                {isBrand && <div className="tv-static-idle" />}
              </div>
              {/* bottom bezel strip */}
              <div className="tv-bezel-strip">
                <span className="tv-bezel-label">{ch.label}</span>
                <span className={`tv-signal-dot ${isActive ? 'on' : ''}`} />
              </div>
            </div>
            {/* TV legs */}
            <div className="tv-legs">
              <div className="tv-leg" />
              <div className="tv-leg" />
            </div>
          </motion.a>
        )
      })}
    </div>
  )
}
