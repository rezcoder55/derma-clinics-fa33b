"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide loading after a delay or when page is fully loaded
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for fade animation before removing from DOM
      setTimeout(() => setVisible(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        loading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Rings */}
        <div className="absolute h-32 w-32 animate-ping rounded-full border-2 border-primary/20 opacity-20"></div>
        <div className="absolute h-32 w-32 animate-pulse rounded-full border border-primary/10"></div>
        
        {/* Logo Container */}
        <div className="relative h-24 w-24 animate-bounce">
          <Image
            src="/logo.svg"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Loading Bar */}
        <div className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-full animate-progress origin-left bg-primary"></div>
        </div>
      </div>
    </div>
  );
}
