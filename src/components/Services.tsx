import web from "../assets/webdesign.png";
import mobile from "../assets/mobile.png";
import uiux from "../assets/uiux.png";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-heading">
        <h2>What I Do</h2>
        <div className="services-divider" />
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <img src={web} alt="Web Applications Development" />
          </div>
          <h3>Web Applications Development</h3>
          <p>
            I build modern web applications using React, TypeScript, and
            scalable backend APIs, focusing on reliability, accessibility, and
            performance.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={mobile} alt="Mobile Applications Development" />
          </div>
          <h3>Mobile Applications Development</h3>
          <p>
            I create responsive mobile-first experiences and cross-platform apps
            with smooth interactions, fast load times, and polished UI.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={uiux} alt="UI/UX Design" />
          </div>
          <h3>UI/UX Design</h3>
          <p>
            I design intuitive, user-friendly interfaces with clear layout,
            thoughtful branding, and attention to detail for high-conversion
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;