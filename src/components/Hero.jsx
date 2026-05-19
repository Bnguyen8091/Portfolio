import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TVWall from './TVWall'
import './Hero.css'

export default function Hero() {
  const [staticOn, setStaticOn] = useState(false)

  const triggerStatic = () => {
    setStaticOn(true)
    setTimeout(() => setStaticOn(false), 380)
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-noise" />

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

      <div className="hero-layout">
        {/* LEFT — intro text */}
        <div className="hero-content">
          <motion.div
            className="hero-channel"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.4 }}
          >
            <span className="channel-num">CH.00</span>
            <span className="channel-label">SIGNAL FOUND</span>
          </motion.div>

          <div className="hero-name-wrap">
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              BRIAN
            </motion.h1>
            <motion.div
              className="hero-name-glitch-wrap"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.85, duration: 0.5 }}
            >
              <span className="hero-name orange" aria-hidden="true">NGUYEN.</span>
              <span className="hero-name orange glitch-layer1" aria-hidden="true">NGUYEN.</span>
              <span className="hero-name orange glitch-layer2" aria-hidden="true">NGUYEN.</span>
            </motion.div>
          </div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.4 }}
          >
            Every project is a new arc. I just get better and better.
          </motion.p>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.4 }}
          >
            Software Engineer · MS Graduate · Charlotte, NC
          </motion.p>

        </div>

        {/* RIGHT — TV Wall */}
        <motion.div
          className="hero-tv-wall"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          <TVWall onStaticFlash={triggerStatic} />
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="scroll-line" />
        <span className="scroll-label">SCROLL</span>
      </motion.div>
    </section>
  )
}
