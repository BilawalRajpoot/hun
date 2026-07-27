import { societies } from './data';

export default function PaymentPlans() {
  const featured = societies.slice(0, 3);
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Payment plans, <em>at a glance.</em></h2>
          <p>Developer-issued schedules — token, booking, instalments and possession. Full brochures are shared on request.</p>
        </div>
        <div className="plan-grid">
          {featured.map((s) => (
            <div className="plan-card" key={s.id}>
              <span className="pc-society">{s.developer}</span>
              <h3>{s.name}</h3>
              <div className="plan-mini"><span>Token</span><span>On booking</span></div>
              <div className="plan-mini"><span>Down payment</span><span>20–30%</span></div>
              <div className="plan-mini"><span>Instalments</span><span>24–48 months</span></div>
              <a href="#enquiry" className="plan-link">Request full plan →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
