const steps = [
  { mark: '/01', title: 'Discover', when: 'Day 0', body: 'An advisor learns your goals, budget and city, and sends a short-list that fits both.' },
  { mark: '/02', title: 'Site visit', when: 'Day 1–3', body: 'We arrange a visit to the plot and the developer office — same week wherever possible.' },
  { mark: '/03', title: 'Reserve', when: 'Day 3–7', body: 'Token payment and booking form, with every legal document explained before signing.' },
  { mark: '/04', title: 'Sign', when: 'Week 1–2', body: 'Payment plan finalised and registered with the developer, with a copy of every receipt.' },
  { mark: '/05', title: 'Handover', when: 'Month 1–12', body: 'Possession, transfer support, and a named advisor you can still call after the sale closes.' },
];

export default function Process() {
  return (
    <section className="section on-dark" id="process">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" style={{ color: 'var(--brass-soft)' }}>The process</span>
          <h2>From first call to <em style={{ color: 'var(--brass-soft)' }}>keys in hand.</em></h2>
          <p>Five stages, roughly a year end to end — most of the waiting happens in the last one.</p>
        </div>
        <div className="process-list">
          {steps.map((s) => (
            <div className="process-item" key={s.mark}>
              <span className="p-mark">{s.mark}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
              <span className="p-when">{s.when}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
