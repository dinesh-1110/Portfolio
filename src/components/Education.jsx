import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { portfolioContent } from "../data/content";
import "./Education.css";

export default function Education() {
  const { education } = portfolioContent;
  const { degreeCard, credentialsCard } = education;

  return (
    <section id="education" className="section-wrapper education-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{education.tag}</span>
          <h2 className="section-title">{education.title}</h2>
        </div>

        {/* 2 Cards Grid */}
        <div className="education-grid">
          {/* Card 1: Formal Education */}
          <motion.div
            className="education-card design-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="card-top-category">
              <GraduationCap size={18} className="category-icon" />
              <span>{degreeCard.category}</span>
            </div>

            <h3 className="education-degree-title">{degreeCard.degree}</h3>
            <h4 className="education-institution">
              {degreeCard.institution} | {degreeCard.period}
            </h4>

            <p className="education-desc">{degreeCard.description}</p>

            <div className="education-footer-meta">
              <span className="meta-badge">{degreeCard.gpa}</span>
              <span className="meta-badge">{degreeCard.honors}</span>
            </div>
          </motion.div>

          {/* Card 2: Industry Certifications */}
          <motion.div
            className="education-card design-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="card-top-category">
              <Award size={18} className="category-icon" />
              <span>{credentialsCard.category}</span>
            </div>

            <h3 className="education-degree-title">{credentialsCard.title}</h3>

            <div className="certifications-list">
              {credentialsCard.certifications.map((cert) => (
                <div key={cert.name} className="cert-item">
                  <CheckCircle size={16} className="cert-check-icon" />
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-code">{cert.code}</span>
                </div>
              ))}
            </div>

            <div className="education-footer-meta">
              <span className="meta-note">{credentialsCard.footerNote}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
