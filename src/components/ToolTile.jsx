import React from "react";
import ToolLogo from "./ToolLogo";
import "./ToolTile.css";

/**
 * ToolTile Component
 * Renders a single tool in vertical orientation:
 * - 56x56 logo tile on top
 * - Tool name (14px sans, centered)
 * - Sub-label (11px mono, muted, max 2 lines, centered)
 */
export default function ToolTile({ tool, isSpecialSpan = false }) {
  const { name, sublabel, logo, fallbackIcon, fallbackInitial } = tool;

  return (
    <div
      className={`tool-tile ${isSpecialSpan ? "tool-tile-span" : ""}`}
      tabIndex={0}
      role="article"
      aria-label={`${name}: ${sublabel}`}
    >
      <ToolLogo
        logo={logo}
        name={name}
        fallbackIcon={fallbackIcon}
        fallbackInitial={fallbackInitial}
      />
      <h4 className="tool-tile-name">{name}</h4>
      <p className="tool-tile-sub">{sublabel}</p>
    </div>
  );
}
