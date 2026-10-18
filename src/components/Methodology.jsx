import React from "react";
import { motion } from "framer-motion";
import { Search, Code2, PlayCircle, BarChart3 } from "lucide-react";
import { portfolioContent } from "../data/content";
import "./Methodology.css";

const stepIcons = {
  Search: Search,
  Code2: Code2,
  PlayCircle: PlayCircle,
  BarChart3: BarChart3,
};

export default function Methodology() {
  const { execution } = portfolioContent;

  return (
    <section id="execution" className="section-wrapper methodology-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{execution.tag}</span>
          <h2 className="section-title">{execution.title}</h2>
          <p className="section-subtitle">{execution.subtitle}</p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="steps-container">
          {/* Animated Connecting Line */}
          <div className="steps-connector-line" />

          <div className="steps-grid">
            {execution.steps.map((step, index) => {
              const IconComponent = stepIcons[step.iconName] || Search;
              return (
                <motion.div
                  key={step.step}
                  className="step-card design-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <div className="step-card-header">
                    <span className="step-number-badge">Step {step.step}</span>
                    <div className="step-icon-bubble">
                      <IconComponent size={18} />
                    </div>
                  </div>

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>

                  <div className="step-footer">
                    <span className="step-tools-tag">{step.tools}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

