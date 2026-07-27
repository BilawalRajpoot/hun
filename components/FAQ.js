import { useState } from 'react';
import { faqs } from './data';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, <em>answered.</em></h2>
          <p>Most of what buyers want to know in the first ten minutes. Anything else, your advisor covers on the call.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={f.q}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  <span className="plus">+</span>
                </button>
                {isOpen && <p className="faq-a">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
