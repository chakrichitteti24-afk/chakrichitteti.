"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, HeartPulse } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Smith AI",
    status: "Live",
    category: "Artificial Intelligence",
    url: "https://smith-ai-five.vercel.app/",
    description: "An AI-powered intelligent assistant designed to enhance productivity through natural conversations, task assistance, and intelligent automation.",
    features: [
      "AI Assistant",
      "Intelligent Conversations",
      "Fast Performance",
      "Modern User Interface"
    ],
    icon: <Bot className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} aria-hidden="true" />,
  },
  {
    id: 2,
    name: "HerSync AI",
    status: "Live",
    category: "Healthcare AI",
    url: "https://hersync-ai.vercel.app/",
    description: "An AI-powered women's health companion for cycle tracking, wellness insights, symptom analysis, and personalized health guidance.",
    features: [
      "Cycle Tracking",
      "AI Companion",
      "Wellness Insights",
      "Health Analytics"
    ],
    icon: <HeartPulse className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} aria-hidden="true" />,
  }
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-24 md:py-32 bg-background relative border-t border-border/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-1/3 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-fluid-h2 font-extrabold tracking-tight mb-4 md:mb-6">
              Products by <span className="text-primary">CipherFlux Labs</span><span className="text-accent">.</span>
            </h2>
            <div className="h-1 w-20 md:w-24 bg-accent rounded-full mb-6 md:mb-8 opacity-80" />
            <p className="text-secondary max-w-2xl text-fluid-p leading-relaxed font-sans font-light">
              Discover our portfolio of live, production-ready systems. Built from the ground up to solve complex problems with an adversarial mindset.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col h-full bg-card/20 backdrop-blur-3xl border border-border/80 rounded-[2rem] p-6 md:p-10 hover:border-accent/30 transition-colors duration-500 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Header: Icon & Status */}
              <div className="flex items-start justify-between mb-8 md:mb-10 relative z-10">
                <div className="h-16 w-16 md:h-20 md:w-20 bg-background border border-border/80 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500 ease-out">
                  {product.icon}
                </div>
                <div className="inline-flex items-center gap-2 bg-background/50 border border-border/80 px-3 md:px-4 py-1 md:py-1.5 rounded-full backdrop-blur-md">
                  <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-accent"></span>
                  </span>
                  <span className="text-[10px] md:text-xs font-mono font-medium text-secondary uppercase tracking-widest">{product.status}</span>
                </div>
              </div>

              {/* Body: Title, Category, Description */}
              <div className="mb-6 md:mb-8 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  <span className="self-start sm:self-auto bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-lg text-xs font-mono font-semibold tracking-wide">
                    {product.category}
                  </span>
                </div>
                <p className="text-secondary/90 text-sm md:text-lg leading-relaxed font-sans font-light">
                  {product.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8 md:mb-10 relative z-10">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-secondary text-sm font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-300 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="mt-auto pt-6 border-t border-border/50 relative z-10">
                <a 
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${product.name} Website`}
                  className="w-full inline-flex items-center justify-center gap-3 bg-background border border-border hover:border-accent hover:bg-accent/5 px-6 py-4 rounded-xl text-primary font-medium transition-colors group/btn"
                >
                  Visit Product
                  <ArrowUpRight className="w-5 h-5 text-secondary group-hover/btn:text-accent transition-colors" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
