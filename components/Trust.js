const values = [
  {
    n: '01',
    title: 'Verified approvals only',
    body: 'Every society is checked against RUDA, LDA, CDA or district authority records before it is listed.',
  },
  {
    n: '02',
    title: 'One advisor, start to finish',
    body: 'A named senior advisor handles your file end to end — no handoffs, no re-explaining your situation.',
  },
  {
    n: '03',
    title: 'Paperwork explained upfront',
    body: 'We walk through the token, booking form and payment schedule before you sign anything.',
  },
  {
    n: '04',
    title: 'Support past the booking',
    body: 'Instalment reminders, registry updates and transfer support continue after the sale closes.',
  },
];

export default function Trust() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Smart Homes</span>
          <h2>Property advice that holds up <em>after</em> the booking.</h2>
          <p>Four commitments we hold ourselves to on every file, from the first call to the final transfer.</p>
        </div>
        <div className="value-grid">
          {values.map((v) => (
            <div className="value-card" key={v.n}>
              <span className="vc-num">{v.n}</span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
