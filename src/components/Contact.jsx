import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { portfolioContent } from "../data/content";
import "./Contact.css";

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Contact() {
  const { contact } = portfolioContent;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = contact?.directEmail || "dineshkanappa@gmail.com";
  const phone = contact?.directPhone || "+91 9345327818";
  const linkedin = contact?.linkedin || "https://www.linkedin.com/in/dineshkumar1110/";
  const github = contact?.github || "https://github.com/dineshkumar1110";
  const location = contact?.location || "Tamil Nadu, India · Open to Hybrid & Remote";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="site-container">
        {/* Contact Showcase Card */}
        <motion.div
          className="contact-showcase-card design-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="contact-card-header">
            <span className="section-tag">{contact?.tag || "COLLABORATE"}</span>
            <h2 className="contact-main-title">
              {contact?.title || "Looking for an SDET Lead for your team?"}
            </h2>
            <p className="contact-main-subtitle">
              {contact?.subtitle ||
                "Available for senior quality engineering roles, framework architecture contracts, and technical advisory."}
            </p>
          </div>

          {/* Channels Grid (2x2) */}
          <div className="contact-channels-grid">
            {/* 1. Email Card */}
            <div className="contact-channel-card email-card">
              <div className="channel-top">
                <div className="channel-icon-bubble">
                  <Mail size={20} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="channel-copy-btn"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-green" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="channel-body">
                <span className="channel-label">DIRECT EMAIL</span>
                <a href={`mailto:${email}`} className="channel-value channel-link">
                  {email}
                </a>
              </div>
              <a href={`mailto:${email}`} className="channel-action-link">
                <span>Send Email</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* 2. Phone Card */}
            <div className="contact-channel-card">
              <div className="channel-top">
                <div className="channel-icon-bubble">
                  <Phone size={20} />
                </div>
              </div>
              <div className="channel-body">
                <span className="channel-label">DIRECT PHONE</span>
                <a href={`tel:${phone}`} className="channel-value channel-link">
                  {phone}
                </a>
              </div>
              <a href={`tel:${phone}`} className="channel-action-link">
                <span>Call Directly</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* 3. LinkedIn Card */}
            <div className="contact-channel-card">
              <div className="channel-top">
                <div className="channel-icon-bubble">
                  <LinkedinIcon size={20} />
                </div>
              </div>
              <div className="channel-body">
                <span className="channel-label">LINKEDIN PROFILE</span>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value channel-link"
                >
                  linkedin.com/in/dineshkumar1110
                </a>
              </div>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-action-link"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* 4. GitHub Card */}
            <div className="contact-channel-card">
              <div className="channel-top">
                <div className="channel-icon-bubble">
                  <GithubIcon size={20} />
                </div>
              </div>
              <div className="channel-body">
                <span className="channel-label">GITHUB REPOSITORIES</span>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value channel-link"
                >
                  github.com/dineshkumar1110
                </a>
              </div>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-action-link"
              >
                <span>Explore GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Bottom Location & Availability Footer */}
          <div className="contact-card-footer">
            <div className="location-pill">
              <MapPin size={15} className="location-pin-icon" />
              <span>{location}</span>
            </div>
            <div className="availability-indicator">
              <span className="status-dot-pulse" />
              <span>Fast response within 24 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
