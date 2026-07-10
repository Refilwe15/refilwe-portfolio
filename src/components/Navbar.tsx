const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <p>fifi</p>
      </div>
      <div className="links">
        <a href="">Services</a>
        <a href="">Experience</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
      </div>
      <div className="cv">
        <button>Download CV</button>
      </div>
    </nav>
  );
};

export default Navbar;
