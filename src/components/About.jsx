import { motion } from 'framer-motion'
import './About.css'

const stats = [
  { num: '4+', label: 'Projects' },
  { num: '3.80', label: 'GPA' },
  { num: '4+', label: 'Years Coding' },
]

export default function About() {
  return (
    <section id="about">
      <div className="divider" />
      <div className="about-inner">
        <motion.div
          className="about-photo-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-photo-frame">
            <img src="/pfp.JPG" alt="Brian Nguyen" className="photo-img" />
            <div className="photo-glitch-a" style={{ backgroundImage: 'url(/pfp.JPG)' }} />
            <div className="photo-glitch-b" style={{ backgroundImage: 'url(/pfp.JPG)' }} />
            <div className="photo-scanline" />
            <div className="photo-noise" />
          </div>
          <div className="about-stats">
            {stats.map(({ num, label }) => (
              <div key={label} className="stat-item">
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-text-col"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-label">
            <span className="channel-tag">CH.01</span> About
          </div>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <div className="about-bio">
            <p>Hey, I'm <strong>Brian Nguyen</strong> — I recently completed my Master's in Computer Science at UNC Charlotte, and I've spent a good chunk of that time building applications that tackle real-world problems people actually run into.</p>
            <p>My work spans the full stack — Angular dashboards, Python backends, PHP ticketing systems, data analytics in Tableau, and even a <strong>simulation strategy game</strong> I built in Lua from scratch. I'm flexible and genuinely enjoy working on projects that give me something interesting to solve.</p>
            <p>Outside of work, I draw a lot of inspiration from <strong>gaming, anime, and social media</strong> — and I love finding ways to bring those ideas into what I build next. I'm looking for a team where I can keep growing and ship things that actually matter.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
