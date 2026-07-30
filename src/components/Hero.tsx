import Profile from "./Profile";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-visual">
        <Profile />
      </div>

      <div className="hero-badge">
        <span className="hero-badge-tag">Hey!</span>
        <span>
          I'm <b>Refilwe Mokoena</b>
        </span>
      </div>

      <h1 className="hero-title">
        I build <span className="hero-title-light">full-stack</span> stuff
        that actually works!
      </h1>

      <p className="hero-description">
        Code, bugs, and late-night coffee keep it all running. I turn complex
        problems into clean, working solutions.
      </p>

      <div className="hero-actions">
        <button className="btn-contact">
          Contact me <span>›</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;