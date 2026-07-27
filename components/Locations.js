import { offices } from './data';

export default function Locations() {
  return (
    <section className="section on-dark">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" style={{ color: 'var(--brass-soft)' }}>Locations</span>
          <h2>Where to <em style={{ color: 'var(--brass-soft)' }}>find us.</em></h2>
        </div>
        <div className="loc-grid">
          <div>
            {offices.map((o) => (
              <div className="loc-item" key={o.name}>
                <div>
                  <div className="loc-name">{o.name}</div>
                  <div className="loc-sub">{o.sub}</div>
                </div>
                <a
                  className="loc-link"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.sub)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions →
                </a>
              </div>
            ))}
          </div>
          <div className="loc-stats">
            <div className="loc-stat">
              <div className="ls-num">5</div>
              <div className="ls-label">Offices across Punjab</div>
            </div>
            <div className="loc-stat">
              <div className="ls-num">2</div>
              <div className="ls-label">Cities served directly</div>
            </div>
            <div className="loc-stat">
              <div className="ls-num">10+</div>
              <div className="ls-label">Senior advisors on staff</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
