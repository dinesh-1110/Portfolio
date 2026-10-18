import React, { useState, useEffect } from "react";
import { User, Cpu, Briefcase, Workflow } from "lucide-react";
import "./MobileNav.css";

const TABS = [
  { id: "about", label: "Overview", icon: User },
  { id: "execution", label: "Framework", icon: Workflow },
  { id: "technologies", label: "Tech Stack", icon: Cpu },
  { id: "experience", label: "Experience", icon: Briefcase },
];

export default function MobileNav() {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = TABS.length - 1; i >= 0; i--) {
        const el = document.getElementById(TABS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(TABS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="mobile-bottom-bar" aria-label="Mobile Navigation">
      <div className="mobile-bar-inner">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={(e) => handleTabClick(e, tab.id)}
              className={`mobile-tab-btn ${isActive ? "active" : ""}`}
            >
              <Icon size={18} className="tab-icon" />
              <span className="tab-label">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
