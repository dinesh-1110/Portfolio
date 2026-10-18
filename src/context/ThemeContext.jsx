import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Clean up old automatic key if it exists
    try {
      localStorage.removeItem("portfolio_theme");
    } catch {
      // ignore
    }

    // Only load saved theme if the user manually toggled it
    try {
      const saved = localStorage.getItem("portfolio_user_theme");
      if (saved === "dark" || saved === "light") {
        return saved;
      }
    } catch {
      // ignore
    }

    // Default theme is ALWAYS light
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (e) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("portfolio_user_theme", nextTheme);
    } catch {
      // ignore
    }

    // Add smooth CSS transition class
    document.documentElement.classList.add("theme-transitioning");
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 1150);

    // If browser supports View Transitions API and motion is not reduced
    if (
      typeof document.startViewTransition === "function" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const x = e?.clientX ?? window.innerWidth - 60;
      const y = e?.clientY ?? 34;
      const right = window.innerWidth - x;
      const bottom = window.innerHeight - y;
      const maxRadius = Math.hypot(Math.max(x, right), Math.max(y, bottom));

      const transition = document.startViewTransition(() => {
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 1050,
            easing: "cubic-bezier(0.25, 1, 0.35, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    } else {
      setTheme(nextTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
