import React from "react";
import { motion } from "framer-motion";
import { Layers, Network, Cpu } from "lucide-react";
import ToolTile from "./ToolTile";
import "./TechStack.css";

const categoryIcons = {
  Layers: Layers,
  Network: Network,
  Cpu: Cpu,
};

const techData = {
  eyebrow: "TECH STACK",
  heading: "Technologies I Know",
  subtitle:
    "Battle-tested tools and frameworks scaled across enterprise healthcare production systems.",

  languages: [
    {
      name: "C#",
      sublabel: "Core Automation Language",
      logo: "csharp",
    },
    {
      name: "Java",
      sublabel: "Core Automation Language",
      logo: "java",
    },
  ],

  pairedGroups: [
    {
      badge: "01",
      iconName: "Layers",
      title: "UI Automation",
      tag: "Testing websites",
      tools: [
        {
          name: "Selenium WebDriver",
          sublabel: "Primary UI Test Harness",
          logo: "selenium",
        },
        {
          name: "NUnit",
          sublabel: "Test Runners & Assertions",
          logo: "nunit",
        },
        {
          name: "TestNG",
          sublabel: "Test Runners & Assertions",
          fallbackIcon: "CheckCircle2",
          fallbackInitial: "NG",
        },
        {
          name: "Codeium AI",
          sublabel: "30% Faster Script Generation",
          logo: "codeium",
        },
      ],
    },
    {
      badge: "02",
      iconName: "Network",
      title: "API & Backend Testing",
      tag: "Testing behind the scenes",
      tools: [
        {
          name: "RestSharp (C#)",
          sublabel: "Enterprise API Harness",
          logo: "restsharp.png",
        },
        {
          name: "Postman",
          sublabel: "Contract & Endpoint Testing",
          logo: "postman",
        },
        {
          name: "Rest Assured",
          sublabel: "Java RESTful Validation",
          logo: "restassured.png",
        },
        {
          name: "Data-Driven Suites",
          sublabel: "Negative & Edge Cases",
          logo: "excel",
        },
      ],
    },
  ],

  wideGroup: {
    badge: "03",
    iconName: "Cpu",
    title: "CI/CD & Management",
    tag: "Automation & teamwork",
    tools: [
      {
        name: "Jenkins CI/CD",
        sublabel: "Automated Build Quality Gates",
        logo: "jenkins",
      },
      {
        name: "Git",
        sublabel: "Version Control & Branching",
        logo: "git",
      },
      {
        name: "GitHub",
        sublabel: "Version Control & Branching",
        logo: "github",
      },
      {
        name: "Azure DevOps",
        sublabel: "Test Management & Defect Triaging",
        logo: "azuredevops",
      },
      {
        name: "QTest",
        sublabel: "Test Management & Defect Triaging",
        logo: "qtest",
      },
      {
        name: "VS Code",
        sublabel: "Core Engineering Platforms",
        logo: "vscode",
      },
      {
        name: "Visual Studio",
        sublabel: "Core Engineering Platforms",
        logo: "visualstudio",
      },
    ],
  },
};

export default function TechStack() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const motionProps = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: prefersReducedMotion
      ? { duration: 0.01 }
      : { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  });

  const WideIcon = categoryIcons[techData.wideGroup.iconName] || Cpu;

  return (
    <section id="technologies" className="section-wrapper tech-section">
      <div className="site-container tech-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{techData.eyebrow}</span>
          <h2 className="section-title">{techData.heading}</h2>
          <p className="section-subtitle">{techData.subtitle}</p>
        </div>

        {/* 1) LANGUAGES STRIP: Centered, Zero-Void Capsule */}
        <div className="languages-center-wrapper">
          <motion.div
            className="languages-strip design-card"
            {...motionProps(0)}
          >
            <div className="languages-strip-left">
              <h3 className="languages-strip-title">Languages</h3>
              <span className="languages-strip-caption">
                Core Automation Languages
              </span>
            </div>

            <div className="languages-strip-divider" aria-hidden="true" />

            <div className="languages-strip-tiles">
              {techData.languages.map((lang) => (
                <div key={lang.name} className="languages-tile-wrap">
                  <ToolTile tool={lang} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 2) BALANCED ROW: Cards 01 & 02 (Equal Height, Zero Gap) */}
        <div className="tech-paired-grid">
          {techData.pairedGroups.map((group, idx) => {
            const Icon = categoryIcons[group.iconName] || Layers;

            return (
              <motion.div
                key={group.title}
                className="tech-group-card design-card"
                {...motionProps(0.08 * (idx + 1))}
              >
                <div className="tech-card-topbar">
                  <span className="step-number-badge">{group.badge}</span>
                  <div className="step-icon-bubble" aria-hidden="true">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="tech-card-title">{group.title}</h3>
                <span className="tech-english-tag">{group.tag}</span>

                <div className="tech-tools-grid tech-tools-2x2">
                  {group.tools.map((tool) => (
                    <div key={tool.name} className="tool-tile-wrapper">
                      <ToolTile tool={tool} />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3) FULL-WIDTH ANCHOR CARD: Card 03 (Panoramic 7-Tool Row, Zero Gap) */}
        <motion.div
          className="tech-wide-card design-card"
          {...motionProps(0.24)}
        >
          <div className="tech-card-topbar">
            <span className="step-number-badge">
              {techData.wideGroup.badge}
            </span>
            <div className="step-icon-bubble" aria-hidden="true">
              <WideIcon size={18} />
            </div>
          </div>

          <h3 className="tech-card-title">{techData.wideGroup.title}</h3>
          <span className="tech-english-tag">{techData.wideGroup.tag}</span>

          <div className="tech-tools-panoramic-grid">
            {techData.wideGroup.tools.map((tool) => (
              <div key={tool.name} className="tool-tile-wrapper">
                <ToolTile tool={tool} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
