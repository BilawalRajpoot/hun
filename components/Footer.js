import { societies } from './data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">Smart Homes</div>
            <p style={{ fontSize: 14, maxWidth: 320, color: 'rgba(251,250,247,0.55)' }}>
              An authority-approved property consultancy across Lahore and Sialkot —
              verified societies, one advisor per file, since 2005.
            </p>
          </div>
          <div>
            <h5>Portfolio</h5>
            <div className="footer-links">
              {societies.map((s) => (
                <a href="#societies" key={s.id}>{s.name}</a>
              ))}
            </div>
          </div>
          <div>
            <h5>Contact</h5>
            <div className="footer-links">
              <a href="tel:+923000000000">+92 300 0000000</a>
              <a href="mailto:info@smarthomes.example">info@smarthomes.example</a>
              <span>Bahria Town, Lahore</span>
            </div>
          </div>
        </div>

        <p className="footer-disclosure">
          Disclosures — Token amounts are typically non-refundable after a short reservation
          window; check your specific booking form. Possession dates are developer estimates
          and may move. Smart Homes is a sales consultancy; we do not lend, build, or hold
          title to any property. Figures marked "starting" reflect the lowest available band
          at the time of publication and are subject to change.
        </p>

        <div className="footer-bottom">
          <span>© 2026 Smart Homes. All placeholder content — replace before launch.</span>
          <div className="social-row">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
