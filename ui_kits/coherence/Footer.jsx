/* Coherence UI Kit · Footer */

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-mark">
        <Logo size={40} />
        <div className="footer-mark-text">The Coherence Company</div>
      </div>
      <div className="footer-col">
        <h6>Studio</h6>
        <a href="#" onClick={(e)=>e.preventDefault()}>Work</a>
        <a href="#" onClick={(e)=>e.preventDefault()}>Journal</a>
        <a href="#" onClick={(e)=>e.preventDefault()}>About</a>
        <a href="#" onClick={(e)=>e.preventDefault()}>Contact</a>
      </div>
      <div className="footer-col">
        <h6>Elsewhere</h6>
        <a href="#" onClick={(e)=>e.preventDefault()}>Are.na</a>
        <a href="#" onClick={(e)=>e.preventDefault()}>Read.cv</a>
        <a href="#" onClick={(e)=>e.preventDefault()}>Letterboxd</a>
      </div>
    </div>
    <div className="container footer-bottom">
      <span>© 2026 · A small, deliberate studio.</span>
      <span>Stockholm · Lisbon</span>
    </div>
  </footer>
);

window.Footer = Footer;
