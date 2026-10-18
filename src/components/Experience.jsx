import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  Award,
  Sparkles,
  Calendar,
  Layers,
  Network,
  Cpu,
  Users,
  ShieldCheck,
  FolderGit2,
} from "lucide-react";
import { portfolioContent } from "../data/content";
import "./Experience.css";

export default function Experience() {
  const { experience } = portfolioContent;
  const { role } = experience;

  const responsibilityIcons = [Layers, Network, Cpu, Users];

  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{experience.tag}</span>
          <h2 className="section-title">{experience.title}</h2>
          <p className="section-subtitle">{experience.subtitle}</p>
        </div>

        {/* Unified Experience Showcase */}
        <div className="experience-showcase-container">
          <motion.div
            className="experience-main-card design-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65 }}
          >
            {/* Top Employment Bar */}
            <div className="exp-top-banner">
              <div className="exp-header-main">
                <div className="exp-status-row">
                  <span className="exp-status-badge">
                    <span className="exp-status-pulse" />
                    {role.status}
                  </span>
                  <span className="exp-division-tag">{role.division}</span>
                </div>

                <h3 className="exp-role-title">{role.title}</h3>

                {/* Clear Employer & Client Relationship */}
                <div className="exp-entity-chain">
                  <div className="entity-chip employer-chip">
                    <Building2 size={16} className="entity-icon" />
                    <div className="entity-texts">
                      <span className="entity-label">EMPLOYER</span>
                      <strong className="entity-name">{role.employer}</strong>
                    </div>
                  </div>

                  <span className="entity-divider">for client</span>

                  <div className="entity-chip client-chip">
                    <HeartPulse size={16} className="entity-icon client-icon" />
                    <div className="entity-texts">
                      <span className="entity-label">ENTERPRISE CLIENT</span>
                      <strong className="entity-name client-name">{role.client}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date & Duration Pill */}
              <div className="exp-date-box">
                <div className="exp-date-row">
                  <Calendar size={15} />
                  <span>{role.period}</span>
                </div>
                <span className="exp-duration-badge">{role.duration}</span>
              </div>
            </div>

            {/* Impact Metrics Row */}
            <div className="exp-metrics-strip">
              {role.impactMetrics.map((metric, idx) => (
                <div key={idx} className="exp-metric-card">
                  <div className="exp-metric-val">{metric.value}</div>
                  <div className="exp-metric-lbl">{metric.label}</div>
                  <div className="exp-metric-sub">{metric.detail}</div>
                </div>
              ))}
            </div>

            {/* Responsibilities & Engineering Pillars */}
            <div className="exp-pillars-section">
              <h4 className="exp-subsection-title">
                <ShieldCheck size={20} className="section-sub-icon" />
                <span>Core Engineering & Leadership Responsibilities</span>
              </h4>

              <div className="exp-pillars-grid">
                {role.responsibilities.map((resp, idx) => {
                  const Icon = responsibilityIcons[idx % responsibilityIcons.length];
                  return (
                    <div key={idx} className="pillar-card">
                      <div className="pillar-header">
                        <div className="pillar-icon-box">
                          <Icon size={18} />
                        </div>
                        <div className="pillar-titles">
                          <h5 className="pillar-title">{resp.title}</h5>
                          <span className="pillar-tag">{resp.tag}</span>
                        </div>
                      </div>
                      <p className="pillar-desc">{resp.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Featured Client Projects under HUMANA */}
            <div className="exp-projects-section">
              <div className="exp-projects-header">
                <FolderGit2 size={20} className="section-sub-icon" />
                <div>
                  <h4 className="exp-subsection-title">
                    Key Client Projects · HUMANA Healthcare Ecosystem
                  </h4>
                  <p className="exp-projects-subtitle">
                    High-visibility platforms automated and validated during tenure at Cognizant.
                  </p>
                </div>
              </div>

              <div className="exp-projects-grid">
                {role.clientProjects.map((project, idx) => (
                  <div key={idx} className="client-project-card">
                    <div className="project-badge-row">
                      <span className="project-badge">{project.badge}</span>
                      <span className="project-client-tag">HUMANA</span>
                    </div>

                    <h5 className="project-name">{project.name}</h5>
                    <p className="project-desc">{project.description}</p>

                    <div className="project-tech-tags">
                      {project.tech.map((tag, tIdx) => (
                        <span key={tIdx} className="tech-tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognitions & Awards at Cognizant */}
            <div className="exp-awards-section">
              <div className="awards-banner-header">
                <Award size={22} className="awards-main-icon" />
                <h4 className="awards-banner-title">
                  Professional Honors & Recognitions (Cognizant)
                </h4>
              </div>

              <div className="exp-awards-grid">
                {role.awards.map((award, idx) => (
                  <div key={idx} className="award-item-card">
                    <div className="award-item-top">
                      <Sparkles size={16} className="award-sparkle" />
                      <strong>{award.title}</strong>
                    </div>
                    <span className="award-conferred">{award.conferredBy}</span>
                    <p className="award-desc">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
