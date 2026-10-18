import React from "react";
import { ArrowUp } from "lucide-react";
import { portfolioContent } from "../data/content";
import { useResumeModal } from "../context/ResumeContext";
import "./Footer.css";

export default function Footer() {
  const { openResumeModal } = useResumeModal();
  const { footer } = portfolioContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="site-container footer-container">
        <div className="footer-left">
          <p className="footer-copyright">{footer.copyright}</p>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            {footer.links.map((link) => {
              if (link.label === "Resume") {
                return (
                  <button
                    key={link.label}
                    onClick={openResumeModal}
                    className="footer-link-item footer-btn-link"
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={link.href.startsWith("http") ? "noreferrer" : ""}
                  className="footer-link-item"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
