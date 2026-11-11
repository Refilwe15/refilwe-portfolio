import { useState } from "react";
import Profile from "./Profile";

const bugs = ["one", "two", "three", "four"] as const;

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
              setSquashMessage(
                `Bug squashed! ${bugs.length - squashedCount - 1} left.`,
              );
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
      <span className="visually-hidden" aria-live="polite">
        {squashMessage}
      </span>
      <div className="hero-bug-hud">
        <span className="hero-bug-hint">Bugs are loose on the page. Squash them.</span>
        <span className="hero-bug-counter" aria-live="polite">
          Bugs squashed: {squashedCount}
        </span>
      </div>

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
        Coffee in, code out.
      </h1>

      <p className="hero-description">
        Full-stack developer. I build things, break things, and fix them.
      </p>

      <div className="hero-actions">
        <button className="btn-contact">
          Let's build something cool <span>›</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;