import { useState } from 'react';

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section on-dark" id="enquiry">
      <div className="container">
        <div className="enquiry">
          <div>
            <span className="eyebrow" style={{ color: 'var(--brass-soft)' }}>Talk to an advisor</span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', margin: '12px 0 16px', lineHeight: 1.15 }}>
              A few details, and we'll call you back within the hour.
            </h2>
            <p style={{ color: 'rgba(251,250,247,0.68)', marginBottom: 32, maxWidth: 420 }}>
              Confidential, no-obligation consultations. Site visits can usually be arranged the
              same week in Lahore and Sialkot.
            </p>

            <div className="contact-cards">
              <a className="contact-card" href="tel:+923000000000">
                <div>
                  <div className="cc-title">Call the office</div>
                  <div className="cc-value">+92 300 0000000</div>
                </div>
                <span>→</span>
              </a>
              <a className="contact-card" href="https://wa.me/923000000000" target="_blank" rel="noreferrer">
                <div>
                  <div className="cc-title">WhatsApp</div>
                  <div className="cc-value">Message a senior advisor</div>
                </div>
                <span>→</span>
              </a>
              <div className="contact-card">
                <div>
                  <div className="cc-title">Head office</div>
                  <div className="cc-value">Bahria Town, Lahore</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div style={{ border: '1px solid rgba(251,250,247,0.2)', padding: 40 }}>
                <h3 style={{ color: 'var(--paper)', marginBottom: 10 }}>Thanks — that's in.</h3>
                <p style={{ color: 'rgba(251,250,247,0.7)', fontSize: 14 }}>
                  A senior advisor will reach out shortly. In the meantime feel free to browse
                  open societies below.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Full name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="+92 3XX XXXXXXX" required />
                  </div>
                  <div className="field">
                    <label htmlFor="city">City</label>
                    <input id="city" name="city" type="text" placeholder="Lahore, Sialkot, ..." />
                  </div>
                  <div className="field">
                    <label htmlFor="budget">Investment range</label>
                    <select id="budget" name="budget" defaultValue="">
                      <option value="" disabled>PKR range</option>
                      <option>Under 25 Lakh</option>
                      <option>25 Lakh – 50 Lakh</option>
                      <option>50 Lakh – 1 Crore</option>
                      <option>1 Crore – 5 Crore</option>
                      <option>Above 5 Crore</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="society">Society of interest</label>
                  <select id="society" name="society" defaultValue="">
                    <option value="" disabled>Choose a society</option>
                    <option>Willow Greens</option>
                    <option>Serene Enclave</option>
                    <option>Northgate Business District</option>
                    <option>Riverside Meadows</option>
                    <option>Falcon Heights</option>
                    <option>Emerald Bay Commercial</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Anything else? (optional)</label>
                  <textarea id="message" name="message" rows={3} placeholder="Tell us about your interest" />
                </div>
                <button type="submit" className="btn-primary" style={{ border: 'none', marginTop: 6 }}>
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
