import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { portfolioContent } from "../data/content";
import CountUp from "./CountUp";
import { useResumeModal } from "../context/ResumeContext";
import { useTheme } from "../context/ThemeContext";
import "./Hero.css";

export default function Hero() {
  const { openResumeModal } = useResumeModal();
  const { theme } = useTheme();
  const { profile, metrics } = portfolioContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="hero-section">
      <div className="site-container">
        <div className="hero-grid">
          {/* Left Column: Copy & Actions */}
          <motion.div
            className="hero-copy-column"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Superhead Tag */}
            <motion.div variants={itemVariants} className="hero-superhead">
              <span className="hero-superhead-text">{profile.superhead}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="hero-headline">
              {profile.headline}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p variants={itemVariants} className="hero-subhead">
              {profile.subhead}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="hero-actions">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="btn-primary hero-btn"
              >
                <span>{profile.ctaPrimary}</span>
                <ArrowDown size={16} />
              </a>

              <motion.button
                type="button"
                onClick={openResumeModal}
                className="btn-secondary hero-btn-sub"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileDown size={16} />
                <span>{profile.ctaSecondary}</span>
              </motion.button>
            </motion.div>

            {/* Metrics */}
            <motion.div variants={itemVariants} className="hero-metrics">
              {metrics.map((metric, idx) => (
                <div key={idx} className="metric-item">
                  <div className="metric-value">
                    <CountUp
                      target={metric.value}
                      decimals={metric.decimals || 0}
                      suffix={metric.suffix}
                    />
                  </div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait Card with Parallax & Badge */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-card-wrapper">
              <div className="hero-image-frame">
                <img
                  key={theme}
                  src={theme === "dark" ? `${import.meta.env.BASE_URL}profile_full.jpg` : profile.avatar}
                  alt={profile.name}
                  className={`hero-portrait ${theme === "dark" ? "portrait-dark" : "portrait-light"}`}
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
