import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu07Icon } from "@hugeicons/core-free-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <p>RM</p>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <HugeiconsIcon icon={Menu07Icon} />
      </button>

      <div className={`links ${menuOpen ? "open" : ""}`}>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#contact">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="cv">
        <button>Download CV</button>
      </div>
    </nav>
  );
};

export default Navbar;
