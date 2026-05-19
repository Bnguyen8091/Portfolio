import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="footer-inner">
        <span className="footer-logo">BN<span>.</span></span>
        <p>Designed &amp; built by <span>Brian Nguyen</span> · 2025</p>
        <span className="footer-signal">SIGNAL CLEAR<span className="blink"> _</span></span>
      </div>
    </footer>
  )
}
