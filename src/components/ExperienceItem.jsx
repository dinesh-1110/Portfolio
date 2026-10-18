import React from "react";
import "./ExperienceItem.css";

export default function ExperienceItem({ role }) {
  return (
    <div className="experience-entry">
      <div className="experience-header">
        <h3 className="experience-role-title">
          {role.title}, <span className="experience-company">{role.company}</span>
        </h3>
        <p className="experience-meta">
          <span className="experience-client">Client: {role.client}</span>
          <span className="meta-sep">|</span>
          <span className="experience-period">{role.period}</span>
        </p>
      </div>

      <ul className="experience-bullets">
        {role.bullets.map((bullet, idx) => (
          <li key={idx} className="experience-bullet-point">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
