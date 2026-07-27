import { journal } from './data';

export default function Journal() {
  return (
    <section className="section" id="journal">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Investment insights</span>
          <h2>The market, <em>briefly.</em></h2>
        </div>
        <div className="journal-grid">
          {journal.map((j) => (
            <div className="journal-card" key={j.title}>
              <div className="journal-thumb">
                <span className="jt-tag">{j.tag}</span>
              </div>
              <div className="journal-body">
                <span className="journal-date">{j.date}</span>
                <h3>{j.title}</h3>
                <p>{j.excerpt}</p>
                <a href="#" className="journal-link">Read note →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
