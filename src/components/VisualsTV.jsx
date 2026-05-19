import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './VisualsTV.css'

const dashboards = [
  {
    category: 'Education Analytics',
    title: 'Student Retention & GPA Analysis',
    desc: 'Explores how academic engagement and GPA levels influence student retention at UNCC. Surfaces a 24.8% retention gap between high and low GPA students across demographic groups.',
    img: '/visual-retention.png',
    link: 'https://public.tableau.com/app/profile/brian.nguyen4855/viz/BrianNguyen-HowEngagementImprovesStudentRetentionWithinGPALevels/HowEngagementImprovesStudentRetentionWithinGPALevels',
    ch: 'CH.03-A',
  },
  {
    category: 'Environmental Analytics',
    title: 'PM2.5 Air Quality Analysis',
    desc: 'Analyzes fine particulate matter trends across Brooklyn, NY monitoring stations with time-series trends, day/hour heatmaps, and hourly frequency of extreme pollution events.',
    img: '/visual-airquality.png',
    link: 'https://public.tableau.com/app/profile/brian.nguyen4855/viz/PM2_5AirQualityAnalysisinBrooklynNY/PM2_5AirQualityAnalysisPatternsandExtremeEventsAcrossMonitoringStations',
    ch: 'CH.03-B',
  },
  {
    category: 'Gaming Analytics',
    title: 'Video Game Sales Dashboard',
    desc: 'Interactive analysis of global video game sales from 1980–2017 by genre and region. Action dominates globally, sales peaked in 2008, and NA consistently outperforms all other regions.',
    img: '/visual-videogames.png',
    link: 'https://public.tableau.com/app/profile/brian.nguyen4855/viz/VideoGameSalesDashboardGenreRegionTrends1980-2017_17725764686910/VideoGameSalesAnalysisDashboard',
    ch: 'CH.03-C',
  },
]

const INTERVAL = 4000
const GLITCH_DURATION = 400

export default function VisualsTV() {
  const [index, setIndex] = useState(0)
  const [glitching, setGlitching] = useState(false)
  const timerRef = useRef(null)

  const cycle = () => {
    setGlitching(true)
    setTimeout(() => {
      setIndex(i => (i + 1) % dashboards.length)
      setGlitching(false)
    }, GLITCH_DURATION)
  }

  useEffect(() => {
    timerRef.current = setInterval(cycle, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [])

  const dash = dashboards[index]

  return (
    <section id="visuals">
      <div className="divider" />
      <div className="section-header">
        <div className="section-label">
          <span className="channel-tag">CH.03</span> Visuals
        </div>
        <h2 className="section-title">Data &amp; <span>Dashboards</span></h2>
      </div>

      <div className="vtv-layout">
        {/* BIG TV */}
        <motion.div
          className="vtv-tv-wrap"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="vtv-now-broadcasting">
            <span className="vtv-nb-dot" />
            NOW BROADCASTING
          </div>

          <div className="vtv-body">
            <div className="vtv-screen">
              <div className="vtv-scanlines" />
              <div className="vtv-noise" />

              {/* glitch layers — always rendered, animated via CSS class */}
              {glitching && (
                <>
                  <div className="vtv-glitch-noise" />
                  <div className="vtv-glitch-bar vtv-bar1" style={{ backgroundImage: `url(${dash.img})` }} />
                  <div className="vtv-glitch-bar vtv-bar2" style={{ backgroundImage: `url(${dash.img})` }} />
                  <div className="vtv-glitch-rgb" />
                </>
              )}

              {/* dashboard image */}
              <img
                key={dash.ch}
                src={dash.img}
                alt={dash.title}
                className={`vtv-img ${glitching ? 'vtv-img-glitch' : ''}`}
              />

              {/* channel badge */}
              <div className="vtv-badge">
                <span className="vtv-live">● LIVE</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dash.ch}
                    className="vtv-ch"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dash.ch}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* click to view overlay */}
              <a href={dash.link} target="_blank" rel="noreferrer" className="vtv-overlay">
                <span>View Dashboard →</span>
              </a>
            </div>

            {/* bezel */}
            <div className="vtv-bezel">
              <div className="vtv-bezel-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dash.ch + '-cat'}
                    className="vtv-bezel-cat"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dash.category}
                  </motion.span>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dash.ch + '-title'}
                    className="vtv-bezel-title"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  >
                    {dash.title}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* dot indicators */}
              <div className="vtv-dots">
                {dashboards.map((_, i) => (
                  <span key={i} className={`vtv-dot ${i === index ? 'active' : ''}`} />
                ))}
              </div>

              <span className="vtv-signal-dot" />
            </div>
          </div>

          <div className="vtv-legs">
            <div className="vtv-leg" />
            <div className="vtv-leg" />
          </div>
        </motion.div>

        {/* INFO PANEL */}
        <motion.div
          className="vtv-info"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={dash.ch}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="vtv-info-inner"
            >
              <span className="vtv-info-cat">{dash.category}</span>
              <h3 className="vtv-info-title">{dash.title}</h3>
              <p className="vtv-info-desc">{dash.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="vtv-auto-hint">
            <span className="vtv-auto-dot" />
            Auto-switching channels every {INTERVAL / 1000}s
          </div>
        </motion.div>
      </div>
    </section>
  )
}
