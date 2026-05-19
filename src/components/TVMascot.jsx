import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './TVMascot.css'

export default function TVMascot() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [appearing, setAppearing] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const show = window.scrollY > 300
      setVisible(prev => {
        if (show && !prev) setAppearing(true)
        return show
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!appearing) return
    const t = setTimeout(() => setAppearing(false), 500)
    return () => clearTimeout(t)
  }, [appearing])

  const handleClick = () => {
    setClicked(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => setClicked(false), 600)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="mascot-btn"
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: [0, 1, 0, 1, 0.5, 1],
            x:       [60, 2, -7, 5, -2, 0],
          }}
          exit={{ opacity: 0, x: 60, transition: { duration: 0.2 } }}
          transition={{ duration: 0.45, times: [0, 0.15, 0.3, 0.5, 0.7, 1] }}
          title="Back to top"
        >
          {/* TV body */}
          <div className={`mascot-tv ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}>
            {/* antenna */}
            <div className="mascot-antenna">
              <div className="mascot-antenna-stick" />
              <div className="mascot-antenna-ball" />
            </div>

            {/* screen */}
            <div className="mascot-screen">
              <div className="mascot-scanlines" />

              {/* glitch-in overlays */}
              {appearing && (
                <>
                  <div className="mascot-glitch-noise" />
                  <div className="mascot-glitch-bar mascot-bar1" />
                  <div className="mascot-glitch-bar mascot-bar2" />
                  <div className="mascot-glitch-rgb" />
                </>
              )}

              {/* face */}
              <div className="mascot-face">
                {clicked ? (
                  <>
                    <div className="mascot-eyes excited">
                      <span className="eye arc-eye">^</span>
                      <span className="eye arc-eye">^</span>
                    </div>
                    <div className="mascot-mouth big-smile">▲</div>
                  </>
                ) : hovered ? (
                  <>
                    <div className="mascot-eyes">
                      <span className="eye star-eye">★</span>
                      <span className="eye star-eye">★</span>
                    </div>
                    <div className="mascot-mouth smile">‿</div>
                    <div className="mascot-blush" />
                  </>
                ) : (
                  <>
                    <div className="mascot-eyes">
                      <span className="eye dot-eye" />
                      <span className="eye dot-eye" />
                    </div>
                    <div className="mascot-mouth small-smile">‿</div>
                  </>
                )}
              </div>

              {/* up arrow hint on hover */}
              {hovered && (
                <motion.div
                  className="mascot-hint"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  ↑ TOP
                </motion.div>
              )}
            </div>

            {/* bezel bottom */}
            <div className="mascot-bezel">
              <span className="mascot-dot" />
              <span className="mascot-bezel-label">BN-01</span>
              <span className="mascot-dot" />
            </div>
          </div>

          {/* legs */}
          <div className="mascot-legs">
            <div className="mascot-leg" />
            <div className="mascot-leg" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
