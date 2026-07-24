"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootSequenceProps {
  onComplete: () => void;
}

const sequenceLogs = [
  "Initializing Secure Environment...",
  "Loading AI Engine...",
  "Loading Security Modules...",
  "Establishing Encrypted Connection...",
  "Verifying Digital Identity...",
  "Authentication Successful.",
  "Access Granted."
];

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [skip, setSkip] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showReveal, setShowReveal] = useState(false);

  useEffect(() => {
    // Check if user has already seen the boot sequence in this session
    const hasBooted = sessionStorage.getItem("bootComplete");
    if (hasBooted) {
      setSkip(true);
      onComplete();
      return;
    }

    // Fast terminal log sequence (approx 1.5 seconds total for logs)
    if (currentLineIndex < sequenceLogs.length) {
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
      }, 150); // fast log reveal
      return () => clearTimeout(timer);
    } else if (!showReveal) {
      // Small pause before revealing the final card
      const timer = setTimeout(() => setShowReveal(true), 200);
      return () => clearTimeout(timer);
    } else {
      // Hold the final reveal for 1.5 seconds, then complete
      const timer = setTimeout(() => {
        sessionStorage.setItem("bootComplete", "true");
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, showReveal, onComplete]);

  if (skip) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-primary font-mono overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!showReveal ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl px-6 md:px-12 flex flex-col justify-end min-h-[300px]"
          >
            {sequenceLogs.slice(0, currentLineIndex).map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
                className="text-secondary/80 md:text-lg mb-2 flex items-start gap-2"
              >
                <span className="text-accent shrink-0">{">"}</span>
                <span className={log === "Access Granted." || log === "Authentication Successful." ? "text-accent font-medium" : ""}>
                  {log}
                </span>
              </motion.div>
            ))}
            
            {/* Blinking Cursor on active line */}
            {currentLineIndex < sequenceLogs.length && (
              <div className="text-secondary/80 md:text-lg mb-2 flex items-start gap-2">
                <span className="text-accent shrink-0">{">"}</span>
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="w-3 h-5 bg-accent"
                />
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center px-6"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-primary">
              Chakri Chitteti<span className="text-accent">.</span>
            </h1>
            
            <div className="space-y-2 mb-8">
              <p className="text-xl md:text-2xl text-secondary font-sans font-light tracking-wide">
                CEO & Founder <span className="text-primary font-medium">CipherFlux Labs</span>
              </p>
              <p className="text-xs md:text-sm text-secondary/70 tracking-widest uppercase">
                AI Engineer • Cybersecurity Enthusiast • Future OSCP Professional
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-accent/20 bg-accent/5 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-mono text-sm font-semibold tracking-wide uppercase">
                Building Secure Intelligence.
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
