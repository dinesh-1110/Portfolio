import React from "react";
import "./Section.css";

export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`content-section ${className}`}>
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
}
