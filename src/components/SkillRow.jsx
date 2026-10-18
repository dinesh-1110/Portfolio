import React from "react";
import "./SkillRow.css";

export default function SkillRow({ category, skills }) {
  return (
    <div className="skill-row">
      <span className="skill-category">{category}</span>
      <span className="skill-values">{skills}</span>
    </div>
  );
}
