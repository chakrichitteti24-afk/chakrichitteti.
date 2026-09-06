"use client";

import { motion } from "framer-motion";
import { Cpu, Lock, Terminal, Zap } from "lucide-react";

const features = [
  {
    icon: <Cpu className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "Artificial Intelligence",
    description: "Architecting intelligent systems and optimizing ML models for real-world applications.",
  },
  {
    icon: <Lock className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "Offensive Security",
    description: "Proactively identifying vulnerabilities and securing infrastructure against modern threats.",
  },
  {
    icon: <Terminal className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "Secure Software Engineering",
    description: "Building robust, scalable applications with security integrated into the CI/CD pipeline.",
  },
  {
    icon: <Zap className="h-6 w-6 text-accent" aria-hidden="true" />,
    title: "Innovation & Leadership",
    description: "Leading technical teams to solve complex problems and deliver cutting-edge products.",
  },
];

export function About() {
  return (
    <section id="about" className="w-full py-24 md:py-32 relative border-t border-border/50 overflow-hidden">
      {/* Zero-cost GPU glow orb */}
      <div className="absolute right-[-10%] top-1/3 w-[600px] h-[600px] glow-orb-emerald rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 md:space-y-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-fluid-h2 font-extrabold tracking-tight mb-4 md:mb-6 text-primary">
                About Me<span className="text-accent">.</span>
              </h2>
              <div className="h-1 w-20 md:w-24 bg-accent rounded-full opacity-80" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="space-y-6 md:space-y-8 text-fluid-p text-secondary leading-relaxed font-sans font-light"
            >
              <p>
                I am a founder and engineer driven by a singular mission: to forge the next generation of secure, AI-powered solutions. At the helm of <span className="text-primary font-medium">CipherFlux Labs</span>, I lead the development of products that seamlessly blend offensive security principles with artificial intelligence.
              </p>
              <p>
                My expertise lies in navigating the complex intersection of these domains. Whether it&apos;s architecting a robust infrastructure resistant to modern cyber threats or designing an intelligent system capable of autonomous problem-solving, I approach every challenge with an engineer&apos;s precision and an entrepreneur&apos;s vision.
              </p>
              <p>
                As a future OSCP professional, I understand that true innovation requires not just building, but understanding how systems break. This adversarial mindset fuels my passion for secure software engineering, automation, and continuous learning in an ever-evolving tech landscape.
              </p>
            </motion.div>
          </div>

          {/* Grid Features - Frosted Glass Panels */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full mt-8 lg:mt-0">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 + (0.1 * idx), ease: "easeOut" }}
                className="glass-card-interactive glass-sheen p-6 md:p-8 rounded-3xl group"
              >
                <div className="mb-5 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl glass-pill group-hover:scale-105 group-hover:border-accent/40 transition-all duration-300 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-secondary/80 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
