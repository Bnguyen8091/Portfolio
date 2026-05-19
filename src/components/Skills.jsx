import { motion } from 'framer-motion'
import './Skills.css'

const groups = [
  {
    title: 'Languages',
    items: ['JavaScript / TypeScript', 'Python', 'Java', 'SQL', 'Lua'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'HTML / CSS', 'JavaScript'],
  },
  {
    title: 'Backend & Databases',
    items: ['Node.js', 'PHP', 'REST APIs', 'MySQL / MongoDB'],
  },
  {
    title: 'Tools & Analytics',
    items: ['Tableau', 'Git / GitHub', 'Docker / Apache', 'Linux (Ubuntu, CentOS)', 'VS Code / PowerShell', 'Vercel', 'ChatGPT / Claude'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="divider" />
      <div className="section-header">
        <div className="section-label">
          <span className="channel-tag">CH.04</span> Skills
        </div>
        <h2 className="section-title">Tech <span>Stack</span></h2>
      </div>

      <div className="skills-grid">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            className="skill-group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="skill-group-header">
              <span className="skill-group-num">0{i + 1}</span>
              <span className="skill-group-title">{g.title}</span>
            </div>
            <ul className="skill-list">
              {g.items.map(item => (
                <li key={item} className="skill-item">
                  <span className="skill-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
