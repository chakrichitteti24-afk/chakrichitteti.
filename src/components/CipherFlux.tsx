"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Shield, Activity, Lock, Search } from "lucide-react";

export function CipherFlux() {
  return (
    <section id="cipherflux" className="w-full py-24 md:py-32 bg-card/20 relative border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Logo / Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-[3rem] border border-border/80 bg-background/50 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-50" />
              
              {/* Animated abstract security rings */}
              <div className="absolute w-3/4 h-3/4 rounded-full border border-accent/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-1/2 h-1/2 rounded-full border border-accent/40 animate-[spin_20s_linear_infinite_reverse]" />
              
              <div className="relative z-10 bg-background border border-border p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4 group-hover:border-accent/50 transition-colors duration-500">
                <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary group-hover:text-accent transition-colors duration-500" aria-hidden="true" />
                <span className="font-mono font-bold text-lg md:text-xl text-primary tracking-widest text-center">
                  CIPHERFLUX LABS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="w-full lg:w-7/12 space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-fluid-h2 font-extrabold tracking-tight mb-4 md:mb-6">
                Redefining Security <br className="hidden md:block"/>
                with <span className="text-accent">Artificial Intelligence.</span>
              </h2>
              <div className="h-1 w-20 md:w-24 bg-accent rounded-full mb-6 md:mb-8 opacity-80" />
              <p className="text-fluid-p text-secondary leading-relaxed font-sans font-light">
                As the CEO and Founder of CipherFlux Labs, I am building the infrastructure to protect tomorrow's digital ecosystem. We specialize in developing AI-driven cybersecurity tools and intelligent applications that proactively defend against evolving threats.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-xl bg-background border border-border/80 shrink-0">
                  <Activity className="w-4 h-4 md:w-5 md:h-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-sm md:text-base">Real-time Analysis</h4>
                  <p className="text-xs md:text-sm text-secondary/80 leading-relaxed">Continuous threat monitoring powered by machine learning algorithms.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-xl bg-background border border-border/80 shrink-0">
                  <Search className="w-4 h-4 md:w-5 md:h-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-sm md:text-base">Vulnerability Discovery</h4>
                  <p className="text-xs md:text-sm text-secondary/80 leading-relaxed">Automated penetration testing and attack surface mapping.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="pt-6 md:pt-8"
            >
              <a 
                href="https://cipherflux-labs.vercel.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit CipherFlux Labs Official Website"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 px-8 py-4 rounded-xl text-background font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,136,0.2)] group"
              >
                Visit CipherFlux Labs
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
