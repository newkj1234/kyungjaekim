import { useState } from "react";
import MenuOverlay from "./MenuOverlay.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          KYUNGJAE KIM
        </a>
        <button
          className={`menu-button${open ? " open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
        </button>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
