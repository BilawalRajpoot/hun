import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          Smart<span className="mark">Homes</span>
        </a>
        <nav className="nav-links">
          <a href="#societies">Societies</a>
          <a href="#process">Process</a>
          <a href="#team">Team</a>
          <a href="#journal">Journal</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="#enquiry" className="nav-cta">Book a visit</a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="container" style={{ paddingBottom: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15 }}>
            <a href="#societies" onClick={() => setOpen(false)}>Societies</a>
            <a href="#process" onClick={() => setOpen(false)}>Process</a>
            <a href="#team" onClick={() => setOpen(false)}>Team</a>
            <a href="#journal" onClick={() => setOpen(false)}>Journal</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          </div>
        </div>
      )}
    </header>
  );
}
