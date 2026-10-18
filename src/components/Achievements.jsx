import React from "react";
import "./Achievements.css";

export default function Achievements({ items }) {
  return (
    <ul className="achievements-list">
      {items.map((item, idx) => (
        <li key={idx} className="achievement-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
