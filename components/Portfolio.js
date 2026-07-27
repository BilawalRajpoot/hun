import { useState } from 'react';
import { societies } from './data';

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const s = societies[active];

  return (
    <section className="section" id="societies">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Portfolio</span>
          <h2>Six societies, <em>one standard.</em></h2>
          <p>Every listing below is currently open for booking and checked against its approving authority.</p>
        </div>

        <div className="portfolio-tabs">
          {societies.map((soc, i) => (
            <button
              key={soc.id}
              className={`portfolio-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {String(i + 1).padStart(2, '0')} {soc.name}
            </button>
          ))}
        </div>

        <div className="portfolio-card">
          <div className="portfolio-visual">
            <span className="badge">{s.tag}</span>
            <h3 className="pv-name">{s.name}</h3>
          </div>
          <div className="portfolio-detail">
            <div className="pd-row"><span>Location</span><span>{s.location}</span></div>
            <div className="pd-row"><span>Developer</span><span>{s.developer}</span></div>
            <div className="pd-row"><span>Approval</span><span>{s.approval}</span></div>
            <div className="pd-row"><span>Type</span><span>{s.type}</span></div>
            <p className="pd-note">Brochure and developer payment plan available on enquiry.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
