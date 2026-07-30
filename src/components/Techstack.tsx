const techItems = [
  {
    label: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="3.5"
          ry="8"
          transform="rotate(90 12 12)"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9.5 8.5h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9.5 12h4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9.5 15.5h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7h3v10H7z" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 7h2.5c1 0 1.5.5 1.5 1.5v0c0 1-.5 1.5-1.5 1.5-1 0-1.5-.5-1.5-1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M15.5 7h2.5c1 0 1.5.5 1.5 1.5v0c0 1-.5 1.5-1.5 1.5s-1.5-.5-1.5-1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 4l7 4v8l-7 4-7-4V8l7-4z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M10 8.5v7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 18V6h4l4 6-4 6H6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 13s4-3 8-1 8-2 8-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M4 17s4-3 8-1 8-2 8-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 4s-5 3.5-5 9.5c0 5.5 5 6.5 5 6.5s5-1 5-6.5C17 7.5 12 4 12 4z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 4s-2 2-2 4 2 4 2 4 2-2 2-4-2-4-2-4z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 4s3 0 5 3c2 3 5 3 5 6s-3 6-5 6c-2 0-5-1-5-1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11 7s-1 4 1 5 3 0 3 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Git",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8.7 8.7L15.3 11.3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9 17V9.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Figma",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 10.5h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9 17.5h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const TechStack = () => {
  return (
    <section className="tech-section" id="tech">
      <div className="section-heading">
        <h2>Tech I Work With</h2>
        <div className="section-divider" />
      </div>

      <div className="tech-grid">
        {techItems.map((tech) => (
          <div className="tech-pill" key={tech.label}>
            <span className="tech-icon">{tech.icon}</span>
            <span>{tech.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
