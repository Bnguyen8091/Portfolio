import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TVBoot() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#080808',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            transformOrigin: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, times: [0, 0.2, 0.8, 1] }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '3rem',
              letterSpacing: '0.2em',
              color: '#F97316',
            }}
          >
            BN.
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{
              height: 2,
              background: 'linear-gradient(90deg, #C2410C, #F97316)',
              boxShadow: '0 0 12px rgba(249,115,22,0.5)',
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: '#5A5A5A',
            }}
          >
            SIGNAL FOUND...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
