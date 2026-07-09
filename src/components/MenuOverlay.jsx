import { useEffect } from "react";

export default function MenuOverlay({ open, onClose }) {

  useEffect(() => {

    const handleKeyDown = (e) => {

      if (e.key === "Escape") {

        onClose();

      }

    };

    if (open) {

      window.addEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "hidden";

    }

    return () => {

      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";

    };

  }, [open, onClose]);

  return (

    <div

      className={`menu-overlay ${open ? "open" : ""}`}

      onClick={onClose}

    >

      <nav

        className="menu-nav"

        onClick={(e) => e.stopPropagation()}

      >

        <a href="#works" onClick={onClose}>

          WORKS

        </a>

        <a href="#publications" onClick={onClose}>

          PUBLICATIONS

        </a>

        <a href="#cv" onClick={onClose}>

          CV

        </a>

        <a href="#contact" onClick={onClose}>

          CONTACT

        </a>

      </nav>

    </div>

  );

}
