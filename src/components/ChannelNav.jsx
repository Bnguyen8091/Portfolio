import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ChannelNav.css'

const channels = [
  { id: 'CH.00', label: 'HERO',     href: '#hero' },
  { id: 'CH.01', label: 'ABOUT',    href: '#about' },
  { id: 'CH.02', label: 'PROJECTS', href: '#projects' },
  { id: 'CH.03', label: 'VISUALS',  href: '#visuals' },
  { id: 'CH.04', label: 'SKILLS',   href: '#skills' },
  { id: 'CH.05', label: 'CONTACT',  href: '#contact' },
]

export default function ChannelNav() {
  const [active, setActive] = useState('CH.00')
  const [staticOn, setStaticOn] = useState(false)

  // track active channel on scroll
  useEffect(() => {
    const sections = channels.map(c => ({
      id: c.id,
      el: document.querySelector(c.href),
    }))
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el && sections[i].el.offsetTop <= mid) {
          setActive(sections[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href, id) => {
    e.preventDefault()
    setStaticOn(true)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setActive(id)
    }, 120)
    setTimeout(() => setStaticOn(false), 380)
  }

  return (
    <>
      {/* TV static flash */}
      <AnimatePresence>
        {staticOn && (
          <motion.div
            className="tv-static-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.6, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, times: [0, 0.1, 0.5, 1] }}
          />
        )}
      </AnimatePresence>

      <motion.nav
        className="channel-nav"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <div className="channel-nav-inner">
          {channels.map((c) => {
            const isActive = active === c.id
            return (
              <a
                key={c.id}
                href={c.href}
                className={`channel-tile ${isActive ? 'active' : ''}`}
                onClick={(e) => handleClick(e, c.href, c.id)}
              >
                <div className="channel-screen">
                  <div className="channel-scanlines" />
                  <span className="channel-num">{c.id}</span>
                  {isActive && <div className="channel-active-dot" />}
                </div>
                <span className="channel-label">{c.label}</span>
              </a>
            )
          })}
        </div>
      </motion.nav>
    </>
  )
}
