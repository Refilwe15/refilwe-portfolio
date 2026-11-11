const projects = [
  {
    name: "GVB Mobile",
    category: "AI-powered mobile app",
    description: "An AI-powered mobile project. Preview coming soon.",
    preview: "phone",
  },
  {
    name: "AI Shopping Assistant",
    category: "AI-powered shopping assistant",
    description: "An AI-powered shopping experience. Preview coming soon.",
    preview: "assistant",
  },
] as const;

const Projects = () => (
  <section className="projects-section" id="projects">
    <div className="section-heading">
      <h2>Selected Projects</h2>
      <div className="section-divider" />
    </div>
    <div className="projects-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.name}>
          <div
            className={`project-preview project-preview--${project.preview}`}
            aria-hidden="true"
          >
            {project.preview === "phone" ? (
              <div className="project-phone">
                <span className="project-phone-camera" />
                <span className="project-preview-line project-preview-line--short" />
                <span className="project-preview-block" />
                <span className="project-preview-line" />
                <span className="project-preview-line project-preview-line--muted" />
              </div>
            ) : (
              <div className="project-chat">
                <span className="project-chat-bubble">Looking for ideas?</span>
                <span className="project-chat-bubble project-chat-bubble--reply">
                  Let me help you find something.
                </span>
                <span className="project-chat-input" />
              </div>
            )}
            <span className="project-coming-soon">Preview coming soon</span>
          </div>
          <div className="project-card-content">
            <span className="project-category">{project.category}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
