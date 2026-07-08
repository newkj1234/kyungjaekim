export default function MenuOverlay({ open, onClose }) {
  return (
    <div className={`menu-overlay ${open ? "open" : ""}`}>
      <nav className="menu-nav">
        <a href="#" onClick={onClose}>
          WORKS
        </a>
        <a href="#" onClick={onClose}>
          PUBLICATIONS
        </a>
        <a href="#" onClick={onClose}>
          CV
        </a>
        <a href="#" onClick={onClose}>
          CONTACT
        </a>
      </nav>
    </div>
  );
}
