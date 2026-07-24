"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootSequenceProps {
  onComplete: () => void;
}

const bootMessages = [
  "Initializing Secure Environment...",
  "Loading AI Engine...",
  "Loading Security Modules...",
  "Verifying Identity...",
  "Welcome, Chakri Chitteti",
  "CEO & Founder, CipherFlux Labs",
  "Access Granted.",
];

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentMessageIndex < bootMessages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex((prev) => prev + 1);
      }, Math.random() * 400 + 400); // Random delay between 400ms and 800ms
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 800); // Wait for exit animation
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-start justify-end bg-background p-6 font-mono text-sm sm:text-base md:p-12"
        >
          <div className="w-full max-w-3xl space-y-2">
            {bootMessages.slice(0, currentMessageIndex + 1).map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={
                  idx >= bootMessages.length - 3
                    ? "text-accent font-bold mt-4"
                    : "text-secondary"
                }
              >
                {idx === bootMessages.length - 1 ? (
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    {msg}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span className="text-primary">{">"}</span> {msg}
                  </span>
                )}
              </motion.div>
            ))}
            {/* Blinking cursor at the end */}
            {currentMessageIndex < bootMessages.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="mt-2 h-4 w-2 bg-accent"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
