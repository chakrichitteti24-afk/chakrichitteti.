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
  const [displayedText, setDisplayedText] = useState("");
  const [showReveal, setShowReveal] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Check if user has already seen the boot sequence in this session
    const hasBooted = sessionStorage.getItem("bootComplete");
    if (hasBooted) {
      setSkip(true);
      onComplete();
      return;
    }

    if (currentLineIndex < sequenceLogs.length) {
      const targetText = sequenceLogs[currentLineIndex];
      
      if (displayedText.length < targetText.length) {
        // Typing effect: add character every ~15ms
        setIsTyping(true);
        const timer = setTimeout(() => {
          setDisplayedText(targetText.slice(0, displayedText.length + 1));
        }, 15);
        return () => clearTimeout(timer);
      } else {
        // Line finished typing. Pause before next line.
        setIsTyping(false);
        const timer = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setDisplayedText("");
        }, 350); // 350ms pause after each line
        return () => clearTimeout(timer);
      }
    } else if (!showReveal) {
      // All lines typed ("Access Granted" shown). Pause 800ms before reveal.
      const timer = setTimeout(() => {
        setShowReveal(true);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      // Show the Chakri Chitteti reveal card for 1.8 seconds, then finish
      const timer = setTimeout(() => {
        sessionStorage.setItem("bootComplete", "true");
        onComplete();
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, displayedText, showReveal, onComplete]);

  if (skip) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-primary font-mono overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!showReveal ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full max-w-3xl px-6 md:px-12 flex flex-col justify-end min-h-[350px]"
          >
            {/* Completed Lines (Dimmed) */}
            {sequenceLogs.slice(0, currentLineIndex).map((log, i) => (
              <div key={i} className="mb-2 flex items-start gap-2">
                <span className="text-accent/50 shrink-0">{">"}</span>
                <span className={log === "Access Granted." || log === "Authentication Successful." ? "text-accent/80 font-medium" : "text-secondary/50"}>
                  {log}
                </span>
              </div>
            ))}
            
            {/* Current Typing Line */}
            {currentLineIndex < sequenceLogs.length && (
              <div className="md:text-lg mb-2 flex items-start gap-2">
                <span className="text-accent shrink-0">{">"}</span>
                <span className={sequenceLogs[currentLineIndex] === "Access Granted." || sequenceLogs[currentLineIndex] === "Authentication Successful." ? "text-accent font-medium shadow-[0_0_10px_rgba(0,255,136,0.5)]" : "text-primary"}>
                  {displayedText}
                </span>
                
                {/* Blinking Cursor */}
                <motion.div
                  animate={{ opacity: isTyping ? 1 : [1, 0] }}
                  transition={{ repeat: isTyping ? 0 : Infinity, duration: 0.8, ease: "linear" }}
                  className="w-3 h-5 md:h-6 bg-accent ml-1 translate-y-[2px]"
                />
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
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
