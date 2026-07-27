const cards = [
  {
    figure: '272 sq ft',
    title: 'Marla',
    body: 'The base residential unit in Punjab. A 5-marla plot is the standard small-family size.',
  },
  {
    figure: '20 marla',
    title: 'Kanal',
    body: 'Roughly 5,445 sq ft. A 1-kanal house is upper-mid; 2-kanal is considered a premium villa plot.',
  },
  {
    figure: 'RUDA · LDA · CDA',
    title: 'Approval bodies',
    body: 'Layouts must be cleared by the relevant development authority. We only list approved societies.',
  },
  {
    figure: 'Token → Booking',
    title: 'Buying vocabulary',
    body: 'A token reserves a unit; a booking commits with a down payment, followed by scheduled instalments.',
  },
];

export default function Primer() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Property primer</span>
          <h2>The vocabulary of <em>Punjab property,</em> in four cards.</h2>
          <p>Terms buyers hear in the first ten minutes of any conversation about plots in Punjab.</p>
        </div>
        <div className="primer-grid">
          {cards.map((c) => (
            <div className="primer-card" key={c.title}>
              <span className="pc-figure">{c.figure}</span>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
