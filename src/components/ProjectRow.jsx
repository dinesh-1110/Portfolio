import React from "react";
import "./ProjectRow.css";

export default function ProjectRow({ title, description }) {
  return (
    <div className="project-row">
      <h3 className="project-row-title">{title}</h3>
      <p className="project-row-desc">{description}</p>
    </div>
  );
}
