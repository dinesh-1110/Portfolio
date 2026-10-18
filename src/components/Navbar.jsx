import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioContent } from "../data/content";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { navigation, profile } = portfolioContent;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = navigation.map((nav) => nav.id);
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -76;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
      <header className={`navbar-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Brand Logo - Single Clean Line */}
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="navbar-brand"
            aria-label="Dinesh Kumar Lakshmanan Portfolio"
          >
            <span className="brand-star">✦</span>
            <span className="brand-name">{profile.name}</span>
          </a>

          {/* Desktop Navigation Pill Bar */}
          <nav className="navbar-nav-pill" aria-label="Main Navigation">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  <span className="nav-link-text">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="nav-active-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Contact Me & Theme Toggle */}
          <div className="navbar-actions">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="navbar-cta-btn"
            >
              <span>Contact Me</span>
              <ArrowUpRight size={15} className="cta-icon" />
            </a>

            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
