import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { portfolioContent } from "../data/content.ts";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { meta, navigation } = portfolioContent;

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="header-container page-container">
          {/* Name / Brand */}
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="header-brand"
          >
            {meta.name}
          </a>

          {/* Desktop Navigation */}
          <nav className="header-nav" aria-label="Main Navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="header-nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Resume Button & Theme Toggle */}
          <div className="header-actions">
            <a
              href={meta.resumeUrl}
              download="Dinesh_Kumar_Lakshmanan_Resume.pdf"
              className="btn-primary header-resume-btn"
              title="Download official resume PDF"
            >
              <Download size={15} />
              <span>Resume</span>
            </a>

            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            <div className="page-container mobile-menu-inner">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
