import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu07Icon } from "@hugeicons/core-free-icons";
import cv from "../assets/RefilweMokoena-cv.pdf.pdf";

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
        <a href={cv} download="RefilweMokoena-CV.pdf">
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
