import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="divider" />
      <div className="section-header">
        <div className="section-label">
          <span className="channel-tag">CH.05</span> Contact
        </div>
        <h2 className="section-title">Let's <span>Talk</span></h2>
      </div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="contact-intro">
            I'm actively looking for full-time software engineering and IT roles. If you have an opportunity or just want to connect, feel free to reach out.
          </p>
          <div className="contact-links">
            <a href="mailto:nguyenbrian562@gmail.com" className="contact-row">
              <span className="contact-key">Email</span>
              <span className="contact-val">nguyenbrian562@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/briannguyenlinked/" target="_blank" rel="noreferrer" className="contact-row">
              <span className="contact-key">LinkedIn</span>
              <span className="contact-val">linkedin.com/in/briannguyenlinked</span>
            </a>
            <a href="https://github.com/Bnguyen8091" target="_blank" rel="noreferrer" className="contact-row">
              <span className="contact-key">GitHub</span>
              <span className="contact-val">github.com/Bnguyen8091</span>
            </a>
            <a href="/resume/Brian_Nguyen_Resume.docx" download className="contact-row">
              <span className="contact-key">Resume</span>
              <span className="contact-val">Download my CV</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          action="https://formspree.io/f/mrbawrpj"
          method="POST"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-input" placeholder="John Smith" required />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-input" placeholder="john@company.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea name="message" className="form-textarea" placeholder="Tell me about the opportunity..." required />
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </motion.form>
      </div>
    </section>
  )
}
