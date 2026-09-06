"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] right-4 sm:right-6 z-40 p-3.5 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full glass-pill text-secondary hover:text-accent hover:border-accent/50 shadow-2xl hover:shadow-[0_0_25px_rgba(0,255,136,0.3)] transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 text-accent" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
