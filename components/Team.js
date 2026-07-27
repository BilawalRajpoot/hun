import { team } from './data';

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Leadership</span>
          <h2>Names you can <em>call.</em></h2>
        </div>
        <div className="team-grid">
          {team.map((t) => (
            <div className="team-card" key={t.name}>
              <div className="team-photo">{t.name.split(' ').map((n) => n[0]).join('')}</div>
              <h3>{t.name}</h3>
              <div className="team-role">{t.role}</div>
              <p className="team-focus">{t.bio}</p>
              <div className="team-tenure">{t.tenure} · {t.focus}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
