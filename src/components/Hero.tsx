"use client";

import { motion } from "framer-motion";
import { Shield, ArrowUpRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full flex min-h-[100svh] items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none opacity-50" />
      
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-5 py-2 text-xs md:text-sm text-secondary backdrop-blur-md font-mono shadow-sm"
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

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-6 text-sm md:text-base font-mono text-secondary/80 w-full"
          >
            <span className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-accent/70 shrink-0" />
              AI Engineer
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent/70 shrink-0" />
              Cybersecurity Enthusiast
            </span>
            <span className="hidden md:inline text-border">•</span>
            <span className="flex items-center gap-2">
              <span className="text-accent/70 font-bold">{"</>"}</span>
              Future OSCP Professional
            </span>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 pt-8 md:pt-12 w-full sm:w-auto"
          >
            <a
              href="https://cipherflux-labs.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit CipherFlux Labs Official Website"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-accent px-8 md:px-10 font-medium text-background transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,136,0.2)]"
            >
              Visit CipherFlux Labs
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              aria-label="Contact Chakri Chitteti"
              className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-border bg-card/40 backdrop-blur-sm px-8 md:px-10 font-medium text-primary transition-colors hover:bg-card hover:border-accent/50"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
