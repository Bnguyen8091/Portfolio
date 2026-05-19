import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ProjectsTV.css'

const projects = [
  {
    id: '01',
    date: 'APR 2026',
    category: 'Game Dev',
    title: 'FeatherRace',
    desc: 'A simulation-based strategy game with stat-driven mechanics and randomized race conditions. Players strategically train attributes — stamina, mood, difficulty scaling — for optimal performance. Includes persistent save/load state via JSON.',
    tags: ['Lua', 'JSON', 'Game Design'],
    img: '/featherrace.png',
    github: 'https://github.com/Bnguyen8091/FeatherRace',
  },
  {
    id: '02',
    date: 'NOV 2025',
    category: 'Full-Stack',
    title: 'MeetSync',
    desc: 'A collaborative scheduling platform that lets users create events and coordinate meeting availability, reducing scheduling conflicts for groups. Built with interactive time-slot selection and team Git workflows.',
    tags: ['Python', 'JavaScript', 'HTML / CSS', 'Git'],
    img: '/project-meetsync.png',
    github: 'https://github.com/Bnguyen8091/MeetSync-Scheduler',
  },
  {
    id: '03',
    date: 'FALL 2025',
    category: 'Full-Stack',
    title: 'Helping Hand',
    desc: 'A team-built IT support desk web app for submitting and managing tech support tickets. Features include ticket management, comments, an FAQ page, and an edit ticket flow — coordinated with version control throughout.',
    tags: ['PHP', 'SQL', 'HTML / CSS'],
    img: '/project-helpinghand.png',
    github: 'https://github.com/Bnguyen8091/Helping-Hand-Desk-Support',
  },
  {
    id: '04',
    date: 'FALL 2024',
    category: 'Full-Stack',
    title: 'UNCC News Dashboard',
    desc: 'A dynamic news dashboard providing real-time updates on university events. Built with Angular CLI on the front end and a Python-powered backend for data management — responsive, scalable, and maintainable.',
    tags: ['TypeScript', 'Angular', 'Python', 'HTML / CSS'],
    img: '/project-uncc.png',
    github: 'https://github.com/Bnguyen8091/UNCC-Student-Dashboard',
  },
]

const GLITCH_DURATION = 400

export default function ProjectsTV() {
  const [index, setIndex] = useState(0)
  const [glitching, setGlitching] = useState(false)
  const [nextIndex, setNextIndex] = useState(null)

  const switchChannel = (dir) => {
    if (glitching) return
    const next = (index + dir + projects.length) % projects.length
    setNextIndex(next)
    setGlitching(true)
    setTimeout(() => {
      setIndex(next)
      setNextIndex(null)
      setGlitching(false)
    }, GLITCH_DURATION)
  }

  const jumpTo = (i) => {
    if (glitching || i === index) return
    setNextIndex(i)
    setGlitching(true)
    setTimeout(() => {
      setIndex(i)
      setNextIndex(null)
      setGlitching(false)
    }, GLITCH_DURATION)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') switchChannel(1)
      if (e.key === 'ArrowLeft') switchChannel(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [glitching, index])

  const project = projects[index]

  return (
    <section id="projects">
      <div className="divider" />
      <div className="section-header">
        <div className="section-label">
          <span className="channel-tag">CH.02</span> Projects
        </div>
        <h2 className="section-title">What I've <span>Built</span></h2>
      </div>

      <div className="ptv-layout">
        {/* BIG TV */}
        <motion.div
          className="ptv-tv-wrap"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="ptv-body">
            <div className="ptv-screen">
              <div className="ptv-scanlines" />

              {/* glitch layers */}
              {glitching && (
                <>
                  <div className="ptv-glitch-noise" />
                  <div className="ptv-glitch-bar ptv-bar1" style={{ backgroundImage: `url(${project.img})` }} />
                  <div className="ptv-glitch-bar ptv-bar2" style={{ backgroundImage: `url(${project.img})` }} />
                  <div className="ptv-glitch-rgb" />
                </>
              )}

              {/* project image */}
              <img
                src={project.img}
                alt={project.title}
                className={`ptv-img ${glitching ? 'ptv-img-glitch' : ''}`}
              />

              {/* hover overlay → GitHub link */}
              <a href={project.github} target="_blank" rel="noreferrer" className="ptv-hover-overlay">
                <span>View on GitHub →</span>
              </a>

              {/* channel badge */}
              <div className="ptv-ch-badge">
                <span>CH.0{index + 1}</span>
              </div>
            </div>

            {/* bezel */}
            <div className="ptv-bezel">
              <span className="ptv-bezel-label">PROJECT {project.id} / 0{projects.length}</span>
              <div className="ptv-dots">
                {projects.map((_, i) => (
                  <button key={i} className={`ptv-dot ${i === index ? 'active' : ''}`} onClick={() => jumpTo(i)} />
                ))}
              </div>
              <div className="ptv-signal">
                <span className="ptv-signal-dot" />
                <span>LIVE</span>
              </div>
            </div>
          </div>

          <div className="ptv-legs">
            <div className="ptv-leg" />
            <div className="ptv-leg" />
          </div>
        </motion.div>

        {/* INFO PANEL */}
        <motion.div
          className="ptv-info-panel"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              className="ptv-info"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <div className="ptv-info-meta">
                <span className="ptv-category">{project.category}</span>
                <span className="ptv-date">{project.date}</span>
              </div>
              <h3 className="ptv-title">{project.title}</h3>
              <p className="ptv-desc">{project.desc}</p>
              <div className="ptv-tags">
                {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="ptv-controls">
            <button className="ptv-btn" onClick={() => switchChannel(-1)}>◀ CH.PREV</button>
            <span className="ptv-counter">{index + 1} / {projects.length}</span>
            <button className="ptv-btn" onClick={() => switchChannel(1)}>CH.NEXT ▶</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
