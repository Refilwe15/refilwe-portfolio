import { HugeiconsIcon } from "@hugeicons/react";
import {
  GraduationCapIcon,
  LaptopProgrammingIcon,
} from "@hugeicons/core-free-icons";

export default function Body() {
  return (
    <div className="body-container">
      <section className="body-section">
        <p className="section-title">Experience & Education</p>

        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-icon-wrap">
              <HugeiconsIcon
                icon={GraduationCapIcon}
                size={24}
                color="#f14f21"
              />
            </div>
            <div className="experience-content">
              <div className="experience-badge">2022 - 2025</div>
              <h3>Tshwane University of Technology (TUT)</h3>
              <p>Diploma in Computer Science</p>
              <p>Completed my studies and graduated this year.</p>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-icon-wrap">
              <HugeiconsIcon
                icon={LaptopProgrammingIcon}
                size={24}
                color="#f14f21"
              />
            </div>
            <div className="experience-content">
              <div className="experience-badge">Jul 2025 - Mar 2026</div>
              <h3>CodeTribe Academy</h3>
              <p>Training and development program</p>
              <p>Built my skills in software development during this period.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
