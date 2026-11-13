import { useState } from "react";

const bugs = ["one", "two", "three"] as const;

const Hero = () => {
  const [squashedBugs, setSquashedBugs] = useState<string[]>([]);
  const [removedBugs, setRemovedBugs] = useState<string[]>([]);
  const [squashedCount, setSquashedCount] = useState(0);
  const [squashMessage, setSquashMessage] = useState("");

  return (
    <section className="hero-section">
      <div className="hero-bugs" role="group" aria-label="Squash the runaway bugs">
        {bugs.filter((bug) => !removedBugs.includes(bug)).map((bug) => (
          <button
            key={bug}
            className={`hero-bug hero-bug--${bug}${squashedBugs.includes(bug) ? " is-squashed" : ""}`}
            type="button"
            aria-label="Squash crawling bug"
            disabled={squashedBugs.includes(bug)}
            onClick={() => {
              setSquashedBugs((current) => [...current, bug]);
              setSquashedCount((count) => count + 1);
              setSquashMessage("Nice catch!");
            }}
            onAnimationEnd={(event) => {
              if (event.animationName === "bug-squash") {
                setRemovedBugs((current) => [...current, bug]);
              }
            }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            >
              <circle cx="16" cy="8" r="3" />
              <path d="m14 5-2-3m6 3 2-3" />
              <ellipse cx="16" cy="19" rx="7" ry="9" />
              <path d="M9 14 4 11m5 8H3m7 4-5 3m17-12 5-3m-5 8h6m-7 4 5 3" />
              <path d="M13 16h-1v6h1m5-6h1v6h-1" />
            </svg>
          </button>
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          FULL-STACK DEVELOPER <span className="hero-eyebrow-separator">•</span>{" "}
          COMPUTER SCIENCE GRADUATE
        </div>

        <h1 className="hero-title">
          Coffee in,
          <br />
          <span>code out.</span>
        </h1>

        <p className="hero-description">
          I&apos;m a Computer Science graduate currently growing as a developer.
          Through my experience at mLab, I&apos;ve had the opportunity to work on
          projects, support other developers and continue improving my
          technical skills.
        </p>

        <div className="hero-actions">
          <a className="btn-contact" href="mailto:mrefilwe880@gmail.com">
            Let&apos;s build something cool <span>›</span>
          </a>
          <a className="btn-work" href="#projects">
            View my work
          </a>
        </div>
      </div>

      <div className="hero-bug-hud">
        <span className="hero-bug-hint">Bugs are loose on the page. Squash them.</span>
        <span className="hero-bug-feedback" role="status" aria-live="polite">
          {squashMessage}
        </span>
        <span className="hero-bug-counter" aria-live="polite">
          
          Bugs squashed: {squashedCount}
        </span>
      </div>
    </section>
  );
};

export default Hero;