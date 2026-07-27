import { useState } from 'react';
import { testimonials } from './data';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Word of mouth</span>
          <h2>What our <em>clients</em> say.</h2>
        </div>
        <div className="testi-wrap">
          <div className="testi-card">
            <p className="quote">"{t.quote}"</p>
            <cite style={{ fontSize: 14, color: 'rgba(18,24,27,0.6)' }}>{t.name} · {t.detail}</cite>
            <div className="testi-controls">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`testi-dot ${idx === i ? 'active' : ''}`}
                  aria-label={`Show testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
