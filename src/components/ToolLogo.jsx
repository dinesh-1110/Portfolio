import React, { useState } from "react";
import {
  CheckCircle2,
  Braces,
  Table,
  ClipboardCheck,
  Code2,
} from "lucide-react";
import "./ToolLogo.css";

const fallbackIcons = {
  CheckCircle2: CheckCircle2,
  Braces: Braces,
  Table: Table,
  ClipboardCheck: ClipboardCheck,
  Code2: Code2,
};

/**
 * ToolLogo Component
 * Renders logo (40x40 container) inside a 56x56 rounded white tile with a thin sandalwood border.
 * If SVG fails to load or for custom tools, renders a consistent fallback line icon in accent color.
 */
export default function ToolLogo({ logo, name, fallbackIcon, fallbackInitial }) {
  const [hasError, setHasError] = useState(false);
  const basePath = import.meta.env.BASE_URL || "/";

  const hasLogo = Boolean(logo) && !hasError;
  const logoSrc = logo
    ? logo.includes(".")
      ? `${basePath}logos/${logo}`
      : `${basePath}logos/${logo}.svg`
    : null;

  const FallbackComponent = fallbackIcons[fallbackIcon] || CheckCircle2;
  const displayName = name || "Tool";

  return (
    <div className="tool-logo-box" title={displayName} aria-label={displayName}>
      {hasLogo ? (
        <img
          src={logoSrc}
          alt={`${displayName} logo`}
          className={`tool-logo-img ${logo === "github" ? "tool-logo-github" : ""}`}
          loading="lazy"
          onError={() => setHasError(true)}
        />
      ) : fallbackIcon ? (
        <FallbackComponent size={28} className="tool-fallback-icon" />
      ) : (
        <span className="tool-fallback-initial" aria-hidden="true">
          {fallbackInitial || displayName.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
}
