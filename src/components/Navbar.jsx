import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <a href="#hero" className="nav-logo">BN<span>.</span></a>
      <a href="/resume/Brian_Nguyen_Resume.docx" download className="nav-resume">Resume</a>
    </motion.nav>
  )
}
