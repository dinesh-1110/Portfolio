import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Copy,
  Check,
  X,
  Eye,
  FileText,
  Sparkles,
  Download,
  Award,
  FileCheck,
} from "lucide-react";
import "./ResumeModal.css";

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("preview"); // "preview" | "highlights" | "ats"
  const [pdfZoom, setPdfZoom] = useState("page-width"); // "page-width" | "100" | "125" | "150"
  const [downloaded, setDownloaded] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const scrollPosRef = useRef(0);

  const resumeUrl = `${import.meta.env.BASE_URL || "/"}Dinesh_Kumar_Lakshmanan_Resume.pdf`;
  const resumeFileName = "Dinesh_Kumar_Lakshmanan_Resume.pdf";

  // Lock background scroll strictly (bulletproof fixed positioning + Lenis stop)
  useEffect(() => {
    if (isOpen) {
      scrollPosRef.current = window.scrollY;

      // Stop smooth scroll library
      if (window.__lenis) {
        window.__lenis.stop();
      }

      // Freeze body position to prevent any background scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        const scrollY = scrollPosRef.current;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";

        if (window.__lenis) {
          window.__lenis.start();
        }
        window.scrollTo(0, scrollY);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);


  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      throw new Error("Clipboard API unavailable");
    } catch {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const success = document.execCommand("copy");
        document.body.removeChild(textArea);
        return success;
      } catch {
        return false;
      }
    }
  };

  const handleCopyLink = async () => {
    const fullUrl = new URL(resumeUrl, window.location.href).href;
    await copyToClipboard(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyAtsText = async () => {
    const atsText = getAtsPlainText();
    await copyToClipboard(atsText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const handleDownloadTxt = () => {
    const atsText = getAtsPlainText();
    const blob = new Blob([atsText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Dinesh_Kumar_Lakshmanan_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getAtsPlainText = () => {
    return `DINESH KUMAR LAKSHMANAN
SDET | Senior Quality Engineer
Phone: +91 9345327818 | Email: dineshkanappa@gmail.com | LinkedIn: linkedin.com/in/dineshkumar1110

PROFESSIONAL SUMMARY
SDET with 4 years of experience in designing and executing automation frameworks focused on UI and API testing using Selenium WebDriver and RestSharp (C#/Java). Proven ability to lead testing efforts during critical deliveries, contribute across multiple Agile scrums, and deliver high-quality outcomes for enterprise healthcare clients. Automated 100+ test cases, reducing regression testing time by 75%. Strong exposure to Codeium AI for script generation and CI/CD-integrated test execution.

SKILLS
- UI Automation: Selenium WebDriver, C#, NUnit, Java, TestNG
- Frameworks: POM (Page Object Model), Data-Driven, Hybrid
- Build/CI Tools: Git, Jenkins
- API Testing: Postman, RestSharp, Rest Assured
- Test Management: Azure DevOps, QTest
- Platforms & Tools: Visual Studio, VS Code, Eclipse, Codeium AI

WORK EXPERIENCE
Cognizant Technology Solutions
Sr. Quality Engineer | 2022 May – Present
Client: HUMANA Healthcare Insurance

UI Automation:
• Designed and maintained end-to-end UI automation suites for major regression cycles across HUMANA's healthcare insurance platform.
• Automated critical workflows across multiple browsers ensuring cross-browser compatibility and consistent UI behavior.
• Integrated Codeium AI for automation script generation, reducing development time by 30%.
• Utilized Git for version control and integrated automation scripts with CI/CD pipelines (Jenkins) for seamless continuous testing.

API Automation (C#):
• Built and maintained API automation frameworks using RestSharp (C#) to validate RESTful services supporting HUMANA's insurance workflows.
• Designed data-driven API test suites covering functional, regression, and negative scenarios for critical backend services.
• Validated request/response payloads, status codes, headers, and schema integrity using automated assertions.
• Tested end-to-end API integrations across multiple services and consumers, ensuring seamless cross-system communication.
• Integrated API test suites into CI/CD pipelines via Jenkins ensuring continuous backend validation with every build.

Leadership & Collaboration:
• Led testing efforts during critical emergency production fixes, ensuring rapid test coverage, minimal downtime, and on-time delivery.
• Contributed across multiple Agile scrums covering Functionality, Stability, API, Security, and AI Modernization work streams.
• Collaborated with cross-functional teams (developers, BAs, DevOps) for requirement analysis, test strategy definition, and defect triaging.
• Mentored junior SDETs on automation frameworks, test case design, and UI/API testing best practices.

KEY PROJECTS – HUMANA:
• RxManagement API Enhancements (Greendale Phase 1): Validated newly developed APIs and endpoints covering positive, negative, and edge case flows with seamless E2E integration.
• RxManagement API Enhancements (Greendale Phase 2): Automated internal business processes triggered via API calls, significantly reducing manual intervention and operational costs.
• Centerwell Specialty (DTC/DTE Volume Expansion): Validated enhancements to existing endpoints to accommodate high-volume data ingestion requirements driven by increased business scale.
• Centerwell Specialty (P3 Integration): Enterprise integration initiative consolidating multiple systems under a unified P3 platform.

AWARDS & RECOGNITIONS:
• "ABOVE & BEYOND" Award: Conferred at the QEA SBU Townhall by SBU Head-QEA for exceptional performance, leadership, and crisis management.
• "Automation Enabler" Award: Recognized for authoring and delivering over 39 automation scripts in a single release cycle.`;
  };

  const getPdfSrc = () => {
    if (pdfZoom === "page-width") {
      return `${resumeUrl}#view=FitH&zoom=page-width&toolbar=1&navpanes=0`;
    }
    return `${resumeUrl}#zoom=${pdfZoom}&toolbar=1&navpanes=0`;
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="resume-modal-overlay"
          onClick={onClose}
          data-lenis-prevent="true"
        >
          <motion.div
            className="resume-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            className="resume-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
          >
            {/* Modal Header */}
            <header className="resume-modal-header">
              <div className="resume-header-info">
                <div className="resume-header-badge">
                  <Sparkles size={14} className="sparkle-icon" />
                  <span>OFFICIAL CURRICULUM VITAE</span>
                </div>
                <h3 className="resume-modal-title">
                  Dinesh Kumar Lakshmanan
                </h3>
                <p className="resume-modal-meta">
                  Senior Quality Engineer & SDET Lead · Verified PDF (237 KB)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="resume-header-actions">
                <a
                  href={resumeUrl}
                  download={resumeFileName}
                  className="btn-primary resume-download-btn"
                  title="Download PDF directly to your device"
                  onClick={() => {
                    setDownloaded(true);
                    setTimeout(() => setDownloaded(false), 3500);
                  }}
                >
                  {downloaded ? (
                    <>
                      <Check size={16} />
                      <span>Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      <span>Download PDF</span>
                    </>
                  )}
                </a>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-icon-btn"
                  title="Open PDF in new tab"
                  aria-label="Open PDF in new tab"
                >
                  <ExternalLink size={17} />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="resume-icon-btn resume-copy-link-btn"
                  title="Copy direct share link"
                  aria-label="Copy direct share link"
                >
                  {copiedLink ? <Check size={17} className="text-green" /> : <Copy size={17} />}
                </button>

                <button
                  onClick={onClose}
                  className="resume-icon-btn resume-close-btn"
                  title="Close preview (ESC)"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </header>

            {/* View Mode Tabs */}
            <nav className="resume-tabs-bar" aria-label="Resume View Modes">
              <div className="resume-tabs-group">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={`resume-tab-btn ${activeTab === "preview" ? "active" : ""}`}
                >
                  <Eye size={17} />
                  <span>PDF Document</span>
                </button>

                <button
                  onClick={() => setActiveTab("highlights")}
                  className={`resume-tab-btn ${activeTab === "highlights" ? "active" : ""}`}
                >
                  <Award size={17} />
                  <span>Executive Summary</span>
                </button>

                <button
                  onClick={() => setActiveTab("ats")}
                  className={`resume-tab-btn ${activeTab === "ats" ? "active" : ""}`}
                >
                  <FileText size={17} />
                  <span>ATS Text Copy</span>
                </button>
              </div>

              {/* PDF Zoom Controls (Desktop only) */}
              {activeTab === "preview" && (
                <div className="resume-pdf-zoom-bar">
                  <span className="zoom-label">Zoom:</span>
                  <button
                    onClick={() => setPdfZoom("page-width")}
                    className={`zoom-btn ${pdfZoom === "page-width" ? "active" : ""}`}
                    title="Fit to Width"
                  >
                    Fit Width
                  </button>
                  <button
                    onClick={() => setPdfZoom("100")}
                    className={`zoom-btn ${pdfZoom === "100" ? "active" : ""}`}
                  >
                    100%
                  </button>
                  <button
                    onClick={() => setPdfZoom("125")}
                    className={`zoom-btn ${pdfZoom === "125" ? "active" : ""}`}
                  >
                    125%
                  </button>
                  <button
                    onClick={() => setPdfZoom("150")}
                    className={`zoom-btn ${pdfZoom === "150" ? "active" : ""}`}
                  >
                    150%
                  </button>
                </div>
              )}
            </nav>

            {/* Modal Body - Single Scroll Container */}
            <div
              className="resume-modal-body"
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
            >
              {/* TAB 1: PDF Viewer */}
              {activeTab === "preview" && (
                <div className="resume-pdf-view-container">
                  {/* Mobile-Optimized Action Hub (Visible on mobile/tablets) */}
                  <div className="resume-mobile-hub">
                    <div className="mobile-hub-card">
                      <div className="hub-badge">
                        <Sparkles size={14} />
                        <span>OFFICIAL RESUME</span>
                      </div>
                      <h4 className="hub-title">Dinesh Kumar Lakshmanan</h4>
                      <p className="hub-subtitle">
                        Senior Quality Engineer & SDET Lead · Cognizant / HUMANA (237 KB PDF)
                      </p>

                      <div className="mobile-hub-buttons">
                        <a
                          href={resumeUrl}
                          download={resumeFileName}
                          className="btn-primary mobile-hub-action-btn"
                        >
                          <Download size={18} />
                          <span>Download PDF Resume</span>
                        </a>

                        <a
                          href={resumeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary mobile-hub-action-btn"
                        >
                          <ExternalLink size={18} />
                          <span>Open Fullscreen in Browser</span>
                        </a>
                      </div>
                    </div>

                    {/* Mobile Quick Overview Cards */}
                    <div className="mobile-quick-summary">
                      <h5 className="quick-summary-title">Quick Profile Highlights</h5>
                      <div className="quick-summary-grid">
                        <div className="quick-card">
                          <span className="qc-label">Experience</span>
                          <strong className="qc-value">4+ Years</strong>
                          <span className="qc-desc">Enterprise SDET & Automation Lead</span>
                        </div>
                        <div className="quick-card">
                          <span className="qc-label">Impact</span>
                          <strong className="qc-value">75% Faster</strong>
                          <span className="qc-desc">Regression test cycle reduction</span>
                        </div>
                        <div className="quick-card">
                          <span className="qc-label">Frameworks</span>
                          <strong className="qc-value">Selenium + C#</strong>
                          <span className="qc-desc">RestSharp, POM, NUnit & Jenkins CI</span>
                        </div>
                        <div className="quick-card">
                          <span className="qc-label">AI Automation</span>
                          <strong className="qc-value">Codeium AI</strong>
                          <span className="qc-desc">30% faster script development</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Embedded PDF Viewer with Active Zoom Control */}
                  <div className="resume-pdf-frame-wrapper">
                    <iframe
                      key={pdfZoom}
                      src={getPdfSrc()}
                      title="Dinesh Kumar Lakshmanan Official Resume PDF"
                      className="resume-pdf-object"
                      style={{
                        width: pdfZoom === "page-width" || pdfZoom === "100" ? "100%" : `${pdfZoom}%`,
                        minWidth: "100%",
                        height: "100%",
                        minHeight: "calc(94vh - 150px)",
                        border: "none",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: Executive Summary */}
              {activeTab === "highlights" && (
                <div className="resume-highlights-container">
                  <div className="highlights-hero-card">
                    <div className="hl-hero-left">
                      <span className="hl-role-badge">ENTERPRISE SDET LEAD</span>
                      <h3 className="hl-hero-title">Senior Quality Engineer</h3>
                      <p className="hl-hero-subtitle">
                        Cognizant Technology Solutions · Client: HUMANA Healthcare Insurance
                      </p>
                    </div>
                    <div className="hl-hero-right">
                      <a href={resumeUrl} download={resumeFileName} className="btn-primary hl-cta-btn">
                        <Download size={16} />
                        <span>Download Resume PDF</span>
                      </a>
                    </div>
                  </div>

                  <div className="highlights-grid">
                    <div className="highlight-card">
                      <span className="hl-label">TOTAL EXPERIENCE</span>
                      <h4 className="hl-value">4+ Years</h4>
                      <p className="hl-desc">
                        Designing, architecting, and executing enterprise test automation frameworks with Selenium WebDriver & RestSharp (C# / Java).
                      </p>
                    </div>

                    <div className="highlight-card">
                      <span className="hl-label">BUSINESS IMPACT</span>
                      <h4 className="hl-value">75% Reduction</h4>
                      <p className="hl-desc">
                        Automated 100+ critical regression test cases, slashing overall test execution cycles by 75% across Humana insurance workflows.
                      </p>
                    </div>

                    <div className="highlight-card">
                      <span className="hl-label">AI MODERNIZATION</span>
                      <h4 className="hl-value">Codeium AI</h4>
                      <p className="hl-desc">
                        Pioneered AI-assisted script authoring across multiple agile scrums, accelerating automation delivery speed by 30%.
                      </p>
                    </div>

                    <div className="highlight-card">
                      <span className="hl-label">CI/CD INTEGRATION</span>
                      <h4 className="hl-value">Jenkins + Git</h4>
                      <p className="hl-desc">
                        Integrated end-to-end regression validation into continuous deployment pipelines for uninterrupted release confidence.
                      </p>
                    </div>
                  </div>

                  {/* Awards Card */}
                  <div className="highlights-awards-card">
                    <div className="awards-header">
                      <Award size={24} className="award-icon" />
                      <h4>Key Professional Recognitions & Awards</h4>
                    </div>
                    <ul className="awards-list">
                      <li>
                        <strong>"ABOVE & BEYOND" Award:</strong> Conferred at the QEA SBU Townhall by SBU Head-QEA for exceptional contributions, composure, and leadership during critical emergency production deliveries.
                      </li>
                      <li>
                        <strong>"Automation Enabler" Award:</strong> Recognized for authoring and delivering over 39 end-to-end automation scripts in a single release cycle.
                      </li>
                      <li>
                        <strong>RxManagement Greendale Phases 1 & 2:</strong> Validated newly developed healthcare APIs covering positive, negative, and edge case flows with automated process execution.
                      </li>
                      <li>
                        <strong>Centerwell Specialty (DTC/DTE & P3 Integration):</strong> Validated high-volume data ingestion endpoints and consolidated distributed systems under a unified platform.
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 3: ATS Text Copy */}
              {activeTab === "ats" && (
                <div className="resume-ats-container">
                  <div className="ats-toolbar">
                    <div className="ats-info">
                      <FileCheck size={20} className="ats-icon" />
                      <div>
                        <strong>ATS-Optimized Plain Text</strong>
                        <p className="ats-hint">
                          Clean text formatted specifically for Applicant Tracking Systems and effortless recruiter copying.
                        </p>
                      </div>
                    </div>
                    <div className="ats-actions">
                      <button onClick={handleCopyAtsText} className="btn-primary ats-action-btn">
                        {copiedText ? (
                          <>
                            <Check size={16} />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            <span>Copy Plain Text</span>
                          </>
                        )}
                      </button>
                      <button onClick={handleDownloadTxt} className="btn-secondary ats-action-btn">
                        <Download size={16} />
                        <span>Download .TXT</span>
                      </button>
                    </div>
                  </div>

                  <div className="ats-text-wrapper">
                    <pre className="ats-text-block">
                      {getAtsPlainText()}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
