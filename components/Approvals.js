const bodies = [
  { name: 'RUDA', full: 'Ravi Urban Development Authority' },
  { name: 'LDA', full: 'Lahore Development Authority' },
  { name: 'CDA', full: 'Capital Development Authority' },
  { name: 'SDA', full: 'Sialkot Development Authority' },
];

export default function Approvals() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Approvals</span>
          <h2>We only list what a <em>real authority</em> has approved.</h2>
          <p>Every society in our portfolio is cleared by one of the bodies below before it goes on our site.</p>
        </div>
        <div className="approval-strip">
          {bodies.map((b) => (
            <div className="approval-chip" key={b.name}>
              {b.name} <small>{b.full}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
