"use client";

import { motion } from "framer-motion";
import { Shield, ArrowUpRight, Terminal, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full flex min-h-[100svh] items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* High-performance zero-cost GPU glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] max-w-[800px] max-h-[800px] glow-orb-emerald rounded-full" />
      <div className="absolute top-1/4 right-[15%] w-[450px] h-[450px] glow-orb-cyan rounded-full" />
      
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
          
          {/* Badge - Frosted Glass Sheen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 rounded-full glass-pill px-5 py-2.5 text-xs md:text-sm text-secondary font-mono shadow-lg hover:border-accent/40 transition-colors"
          >
            <Shield className="h-4 w-4 text-accent shrink-0" />
            <span className="text-primary/90">Secure AI Systems & Cybersecurity Solutions</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="space-y-4 md:space-y-6 w-full"
          >
            <h1 className="text-fluid-h1 font-black tracking-tighter text-primary break-words">
              Chakri Chitteti<span className="text-accent">.</span>
            </h1>
            <p className="text-fluid-p text-secondary max-w-3xl mx-auto font-sans font-light tracking-wide">
              CEO & Founder <span className="text-primary font-medium">@CipherFlux Labs</span>
            </p>
          </motion.div>

          {/* Roles - Glass Pill Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-6 text-sm md:text-base font-mono text-secondary/90 glass-pill px-6 py-3.5 rounded-2xl"
          >
            <span className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-accent shrink-0" />
              AI Engineer
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent shrink-0" />
              Cybersecurity Enthusiast
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="flex items-center gap-2">
              <span className="text-accent font-bold">{"</>"}</span>
              Future OSCP Professional
            </span>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 pt-6 md:pt-8 w-full sm:w-auto"
          >
            <a
              href="#projects"
              aria-label="Explore Live Production Systems"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-accent hover:bg-emerald-400 px-8 md:px-10 font-bold text-background transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(0,255,136,0.3)] cursor-pointer"
            >
              Explore Products
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://cipherflux-labs.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit CipherFlux Labs Official Website"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl glass-pill hover:border-accent/40 px-8 md:px-10 font-medium text-primary transition-all duration-300 hover:text-accent hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]"
            >
              CipherFlux Labs
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle Glass Scroll Cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-secondary/60 hover:text-accent transition-colors glass-pill px-3 py-1.5 rounded-full"
        aria-label="Scroll down to explore"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-accent" />
        </motion.div>
      </motion.a>
    </section>
  );
}
