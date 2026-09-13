"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FastForward } from "lucide-react";

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
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const isTyping = currentLineIndex < sequenceLogs.length && 
    displayedText.length < sequenceLogs[currentLineIndex].length;

  const handleSkip = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    sessionStorage.setItem("bootComplete", "true");
    setSkip(true);
    onComplete();
  }, [onComplete]);

  // Keyboard listener for Escape & Space keys to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        e.preventDefault();
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSkip]);

  useEffect(() => {
    // Check if user has already seen the boot sequence in this session
    const hasBooted = typeof window !== "undefined" && sessionStorage.getItem("bootComplete");
    if (hasBooted) {
      const skipTimer = setTimeout(() => {
        setSkip(true);
        onComplete();
      }, 0);
      return () => clearTimeout(skipTimer);
    }

    if (currentLineIndex < sequenceLogs.length) {
      const targetText = sequenceLogs[currentLineIndex];
      
      if (displayedText.length < targetText.length) {
        // Typing effect: add character every ~14ms
        timerRef.current = setTimeout(() => {
          setDisplayedText(targetText.slice(0, displayedText.length + 1));
        }, 14);
        return () => {
          if (timerRef.current) clearTimeout(timerRef.current);
        };
      } else {
        // Line finished typing. Pause before next line.
        timerRef.current = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setDisplayedText("");
        }, 320);
        return () => {
          if (timerRef.current) clearTimeout(timerRef.current);
        };
      }
    } else if (!showReveal) {
      // All lines typed ("Access Granted" shown). Pause 700ms before reveal.
      timerRef.current = setTimeout(() => {
        setShowReveal(true);
      }, 700);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    } else {
      // Show the Chakri Chitteti reveal card for 1.6 seconds, then finish
      timerRef.current = setTimeout(() => {
        sessionStorage.setItem("bootComplete", "true");
        onComplete();
      }, 1600);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [currentLineIndex, displayedText, showReveal, onComplete]);

  if (skip) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-primary font-mono overflow-hidden select-none px-4"
    >
      {/* Skip Button - Touch Friendly & Safe-Area Aware */}
      <button
        onClick={handleSkip}
        aria-label="Skip initialization sequence"
        className="absolute top-[calc(env(safe-area-inset-top)+1.25rem)] right-4 sm:right-6 z-50 min-h-[44px] flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill text-secondary hover:text-accent font-mono text-xs cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="text-[11px] uppercase tracking-wider font-semibold">Skip Intro</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-background/80 border border-border text-[10px] text-secondary group-hover:text-accent">
          ESC
        </kbd>
        <FastForward className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-accent" />
      </button>

      <AnimatePresence mode="wait">
        {!showReveal ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full max-w-3xl px-2 sm:px-6 md:px-12 flex flex-col justify-end min-h-[280px] sm:min-h-[350px]"
          >
            {/* Completed Lines (Dimmed) */}
            {sequenceLogs.slice(0, currentLineIndex).map((log, i) => (
              <div key={i} className="mb-2 flex items-start gap-2 text-xs sm:text-sm md:text-base">
                <span className="text-accent/50 shrink-0">{">"}</span>
                <span className={log === "Access Granted." || log === "Authentication Successful." ? "text-accent/90 font-medium" : "text-secondary/50"}>
                  {log}
                </span>
              </div>
            ))}
            
            {/* Current Typing Line */}
            {currentLineIndex < sequenceLogs.length && (
              <div className="text-xs sm:text-sm md:text-lg mb-2 flex items-start gap-2">
                <span className="text-accent shrink-0">{">"}</span>
                <span className={sequenceLogs[currentLineIndex] === "Access Granted." || sequenceLogs[currentLineIndex] === "Authentication Successful." ? "text-accent font-medium shadow-[0_0_10px_rgba(0,255,136,0.5)]" : "text-primary"}>
                  {displayedText}
                </span>
                
                {/* Blinking Cursor */}
                <motion.div
                  animate={{ opacity: isTyping ? 1 : [1, 0] }}
                  transition={{ repeat: isTyping ? 0 : Infinity, duration: 0.8, ease: "linear" }}
                  className="w-2.5 h-4 sm:w-3 sm:h-5 md:h-6 bg-accent ml-1 translate-y-[2px]"
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
            className="text-center px-4 sm:px-6"
          >
            <div role="presentation" className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 text-primary">
              Chakri Chitteti<span className="text-accent">.</span>
            </div>
            
            <div className="space-y-2 mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-secondary font-sans font-light tracking-wide">
                CEO & Founder <span className="text-primary font-medium">CipherFlux Labs</span>
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm text-secondary/70 tracking-widest uppercase">
                AI Engineer • Cybersecurity Enthusiast • Future OSCP Professional
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-accent/20 bg-accent/5 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-mono text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Building Secure Intelligence.
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
