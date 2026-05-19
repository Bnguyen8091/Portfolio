import { motion } from 'framer-motion'
import './Visuals.css'

const visuals = [
  {
    category: 'Education Analytics',
    title: 'Student Retention & GPA Analysis',
    desc: 'Explores how academic engagement and GPA levels influence student retention at UNCC. Surfaces a 24.8% retention gap between high and low GPA students.',
    img: '/visual-retention.png',
    link: 'https://public.tableau.com/app/profile/brian.nguyen4855/viz/BrianNguyen-HowEngagementImprovesStudentRetentionWithinGPALevels/HowEngagementImprovesStudentRetentionWithinGPALevels',
  },
  {
    category: 'Environmental Analytics',
    title: 'PM2.5 Air Quality Analysis',
    desc: 'Analyzes fine particulate matter trends across Brooklyn, NY monitoring stations with time-series trends, day/hour heatmaps, and hourly frequency of extreme pollution events.',
    img: '/visual-airquality.png',
    link: 'https://public.tableau.com/app/profile/brian.nguyen4855/viz/PM2_5AirQualityAnalysisinBrooklynNY/PM2_5AirQualityAnalysisPatternsandExtremeEventsAcrossMonitoringStations',
  },
  {
    category: 'Gaming Analytics',
    title: 'Video Game Sales Dashboard',
    desc: 'Interactive analysis of global video game sales from 1980–2017 by genre and region. Action dominates globally, sales peaked in 2008, and NA consistently outperforms all other regions.',
    img: '/visual-videogames.png',
    link: 'https://public.tableau.com/app/profile/brian.nguyen4855/viz/VideoGameSalesDashboardGenreRegionTrends1980-2017_17725764686910/VideoGameSalesAnalysisDashboard',
  },
]

export default function Visuals() {
  return (
    <section id="visuals">
      <div className="divider" />
      <div className="section-header">
        <div className="section-label">
          <span className="channel-tag">CH.03</span> Visuals
        </div>
        <h2 className="section-title">Data & <span>Dashboards</span></h2>
        <p className="section-intro">A collection of interactive Tableau dashboards built to turn raw data into clear, actionable insights.</p>
      </div>

      <div className="visuals-grid">
        {visuals.map((v, i) => (
          <motion.div
            key={v.title}
            className="visual-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <a href={v.link} target="_blank" rel="noreferrer" className="card-preview">
              <img src={v.img} alt={v.title} />
              <div className="card-overlay">
                <span>View Dashboard →</span>
              </div>
            </a>
            <div className="card-body">
              <span className="card-category">{v.category}</span>
              <h3 className="card-title">{v.title}</h3>
              <p className="card-desc">{v.desc}</p>
              <a href={v.link} target="_blank" rel="noreferrer" className="card-link">
                View Dashboard →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
