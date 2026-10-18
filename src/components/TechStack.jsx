import React from "react";
import { motion } from "framer-motion";
import { Layers, Network, Cpu } from "lucide-react";
import { portfolioContent } from "../data/content";
import "./TechStack.css";

const categoryIcons = {
  Layers: Layers,
  Network: Network,
  Cpu: Cpu,
};

export default function TechStack() {
  const { technologies } = portfolioContent;

  return (
    <section id="technologies" className="section-wrapper tech-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{technologies.tag}</span>
          <h2 className="section-title">{technologies.title}</h2>
          <p className="section-subtitle">{technologies.subtitle}</p>
        </div>

        {/* 3 Category Cards */}
        <div className="tech-grid">
          {technologies.categories.map((cat, idx) => {
            const Icon = categoryIcons[cat.iconName] || Layers;

            return (
              <motion.div
                key={cat.title}
                className="tech-card design-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.14 }}
              >
                <div className="tech-card-header">
                  <div className="tech-icon-bubble">
                    <Icon size={20} />
                  </div>
                  <h3 className="tech-category-title">{cat.title}</h3>
                </div>

                <p className="tech-category-desc">{cat.description}</p>

                {/* Skills list with detail tags */}
                <div className="tech-skills-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="tech-skill-pill">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-detail">{skill.detail}</span>
                    </div>
                  ))}
                </div>

                {/* Footer link */}
                <div className="tech-card-footer">
                  <a href="#execution" className="tech-footer-link">
                    <span>{cat.footerLink}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
