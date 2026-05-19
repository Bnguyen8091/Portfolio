import { motion } from 'framer-motion'
import './Projects.css'

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

export default function Projects() {
  return (
    <section id="projects">
      <div className="divider" />
      <div className="section-header">
        <div className="section-label">
          <span className="channel-tag">CH.02</span> Projects
        </div>
        <h2 className="section-title">What I've <span>Built</span></h2>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="project-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <a href={p.github} target="_blank" rel="noreferrer" className="card-preview">
              <img src={p.img} alt={p.title} />
              <div className="card-overlay">
                <span>GitHub →</span>
              </div>
            </a>
            <div className="card-body">
              <div className="card-meta">
                <span className="card-id">{p.id} · {p.date}</span>
                <span className="card-category">{p.category}</span>
              </div>
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>
              <div className="card-tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <a href={p.github} target="_blank" rel="noreferrer" className="card-link">
                GitHub →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
