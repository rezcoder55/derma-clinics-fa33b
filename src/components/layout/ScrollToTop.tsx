"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      setScrollProgress(scrolled);

      if (winScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-8 left-8 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF9F6] text-primary shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-border/50"
        aria-label="العودة للأعلى"
      >
        {/* SVG Progress Ring */}
        <svg
          className="absolute inset-0 h-14 w-14 -rotate-90 transform"
          viewBox="0 0 50 50"
        >
          {/* Background Ring */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted/10"
          />
          {/* Progress Ring */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-foreground transition-all duration-150 ease-out"
          />
        </svg>

        {/* Arrow Icon */}
        <ArrowUp className="h-6 w-6 text-primary group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
}
