import React, { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import { ThemeProvider } from "./context/ThemeContext";
import { ResumeProvider, useResumeModal } from "./context/ResumeContext";
import ResumeModal from "./components/ResumeModal";

function ResumeModalRoot() {
  const { isResumeOpen, closeResumeModal } = useResumeModal();
  return <ResumeModal isOpen={isResumeOpen} onClose={closeResumeModal} />;
}

export default function App() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      window.__lenis = lenis;

      let animationFrameId;
      function raf(time) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
        window.__lenis = null;
      };
    }
  }, []);

  return (
    <ThemeProvider>
      <ResumeProvider>
        <div className="portfolio-app-root">
          <Navbar />
          <main id="main-content">
            <Hero />
            <Methodology />
            <TechStack />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
          <MobileNav />
          <ResumeModalRoot />
        </div>
      </ResumeProvider>
    </ThemeProvider>
  );
}
