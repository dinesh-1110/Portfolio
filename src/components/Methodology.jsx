import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Code2,
  PlayCircle,
  BarChart3,
  CheckCircle2,
  RotateCw,
  Terminal,
} from "lucide-react";
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
  const [isRunning, setIsRunning] = useState(false);
  const [activeTestIndex, setActiveTestIndex] = useState(execution.dashboard.testCases.length);
  const [runProgress, setRunProgress] = useState(100);

  const triggerTestSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveTestIndex(0);
    setRunProgress(15);

    const interval = setInterval(() => {
      setActiveTestIndex((prev) => {
        if (prev >= execution.dashboard.testCases.length) {
          clearInterval(interval);
          setIsRunning(false);
          setRunProgress(100);
          return execution.dashboard.testCases.length;
        }
        setRunProgress(Math.round(((prev + 1) / execution.dashboard.testCases.length) * 100));
        return prev + 1;
      });
    }, 450);
  };

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

        {/* Live Test Suite Dashboard Card */}
        <motion.div
          className="dashboard-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65 }}
        >
          {/* Dashboard Header */}
          <div className="dashboard-header">
            <div className="dashboard-header-left">
              <span className="dashboard-pre-tag">
                <Terminal size={12} className="terminal-icon" />
                {execution.dashboard.tag}
              </span>
              <h3 className="dashboard-title">{execution.dashboard.title}</h3>
            </div>

            <div className="dashboard-header-right">
              <button
                onClick={triggerTestSimulation}
                disabled={isRunning}
                className="dashboard-rerun-btn"
                title="Simulate re-running regression suite"
              >
                <RotateCw size={13} className={isRunning ? "spinning" : ""} />
                <span>{isRunning ? "Running..." : "Run Suite"}</span>
              </button>

              <div className="badge-pill badge-green">
                <span className="status-dot-pulse" />
                <span>{execution.dashboard.status}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar for simulation */}
          {isRunning && (
            <div className="dashboard-progress-track">
              <div
                className="dashboard-progress-fill"
                style={{ width: `${runProgress}%` }}
              />
            </div>
          )}

          {/* 4 Stats Grid */}
          <div className="dashboard-stats-grid">
            {execution.dashboard.stats.map((stat, i) => (
              <div key={i} className="dashboard-stat-box">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-main-value">{stat.value}</span>
                <span className="stat-sub-info">{stat.sub}</span>
              </div>
            ))}
          </div>

          {/* Test Specs List */}
          <div className="dashboard-test-list">
            {execution.dashboard.testCases.map((test, idx) => {
              const isPassed = idx < activeTestIndex;
              const isCurrentlyTesting = idx === activeTestIndex && isRunning;

              return (
                <div
                  key={test.name}
                  className={`test-row-item ${isCurrentlyTesting ? "testing-active" : ""}`}
                >
                  <div className="test-name-col">
                    <CheckCircle2
                      size={16}
                      className={isPassed ? "test-icon-passed" : "test-icon-pending"}
                    />
                    <code className="test-filename">{test.name}</code>
                  </div>

                  <div className="test-assertions-col">
                    <span>{test.assertions}</span>
                  </div>

                  <div className="test-duration-col">
                    <span>{test.duration}</span>
                  </div>

                  <div className="test-status-col">
                    {isCurrentlyTesting ? (
                      <span className="status-pill-running">
                        <RotateCw size={11} className="spinning" /> RUNNING
                      </span>
                    ) : (
                      <span className={`status-pill-result ${isPassed ? "pass" : "pending"}`}>
                        {isPassed ? test.status : "QUEUED"}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
