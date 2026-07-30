const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-wrap">
        <div className="services-cards">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 4L9 15M20 4l-5.5 16-3-7-7-3L20 4z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Web Design</h3>
            <p>
              I design clean, modern interfaces with clear layout and
              thoughtful visual hierarchy.
            </p>
          </div>

          <div className="service-card service-card-offset">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 21h8M12 18v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 9l2 2-2 2M13 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>UI/UX Design</h3>
            <p>
              I craft intuitive, user-friendly interfaces focused on clarity
              and high-conversion experiences.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 4L2 12l6 8M16 4l6 8-6 8M14 3l-4 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Web Development</h3>
            <p>
              I build modern web applications using React, TypeScript, and
              scalable backend APIs.
            </p>
          </div>

          <div className="service-card service-card-offset">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.5.4.8 1 .8 1.6v.1h5.6v-.1c0-.6.3-1.2.8-1.6A6 6 0 0012 3z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Creative Design</h3>
            <p>
              I bring fresh, original ideas to branding and visual design
              with attention to every detail.
            </p>
          </div>
        </div>

        <div className="services-info">
          <p className="services-eyebrow">MY POPULAR</p>
          <h2 className="services-title">SERVICES</h2>
          <p className="services-text">
            A quick look at what I do best — from full-stack builds to
            interfaces people actually enjoy using.
          </p>
          <a href="#services" className="services-cta">
            VIEW MY WORK <span>➔</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;