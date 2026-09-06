"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Bot, HeartPulse, Check, Copy, Sparkles, X, ShieldCheck, Cpu } from "lucide-react";

interface Product {
  id: number;
  name: string;
  shortName: string;
  tagline: string;
  status: string;
  version: string;
  category: "Artificial Intelligence" | "Healthcare AI";
  url: string;
  description: string;
  techStack: string[];
  features: string[];
  architecture: string;
  highlights: string[];
  icon: React.ReactNode;
}

const products: Product[] = [
  {
    id: 1,
    name: "Smith AI",
    shortName: "Smith",
    tagline: "Autonomous AI Productivity Engine",
    status: "Live Production",
    version: "v2.4",
    category: "Artificial Intelligence",
    url: "https://smith-ai-five.vercel.app/",
    description: "An AI-powered intelligent assistant engineered to supercharge productivity through natural reasoning, contextual awareness, autonomous task handling, and rapid execution.",
    techStack: ["Next.js", "FastAPI", "OpenAI / Claude API", "Vector Store", "Tailwind CSS"],
    features: [
      "Natural Language Reasoning",
      "Contextual Session Memory",
      "Automated Task Workflows",
      "Sub-100ms UI Interactivity"
    ],
    architecture: "Built on high-concurrency asynchronous endpoints with streaming token responses, secure session management, and vectorized context caching for instant recall.",
    highlights: [
      "Real-time streaming conversational interface",
      "Dynamic prompt chaining & context memory",
      "Adversarially hardened input sanitization"
    ],
    icon: <Bot className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />,
  },
  {
    id: 2,
    name: "Svanexa AI",
    shortName: "Svanexa",
    tagline: "Next-Gen AI Women's Health & Wellness Intelligence",
    status: "Live Production",
    version: "v2.1",
    category: "Healthcare AI",
    url: "https://svanexa-ai.vercel.app/",
    description: "An advanced AI-powered women's health companion delivering intelligent cycle tracking, predictive wellness insights, symptom analysis, and personalized wellness guidance with privacy-first architecture.",
    techStack: ["Next.js", "FastAPI", "PyTorch / NLP", "Encrypted Telemetry", "Tailwind CSS"],
    features: [
      "Intelligent Cycle Tracking",
      "Predictive Wellness Analytics",
      "Private AI Health Companion",
      "Symptom Trend Correlation"
    ],
    architecture: "Engineered with zero-knowledge encrypted data structures, local predictive cycle heuristics, and privacy-preserving inference pipelines ensuring complete user confidentiality.",
    highlights: [
      "Dynamic biological cycle forecasting",
      "Privacy-first encrypted health data modeling",
      "Context-aware empathetic AI dialogue"
    ],
    icon: <HeartPulse className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />,
  }
];

const categories = ["All Systems", "Healthcare AI", "Artificial Intelligence"] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All Systems");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [inspectProduct, setInspectProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === "All Systems" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleCopyLink = async (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(product.url);
      setCopiedId(product.id);
      setTimeout(() => setCopiedId(null), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="projects" className="w-full py-24 md:py-32 relative border-t border-border/50 overflow-hidden">
      {/* High-performance zero-cost GPU glow orbs */}
      <div className="absolute left-[-5%] top-1/4 w-[700px] h-[700px] glow-orb-emerald rounded-full" />
      <div className="absolute right-[-5%] top-1/2 w-[600px] h-[600px] glow-orb-cyan rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-accent text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-fluid-h2 font-extrabold tracking-tight mb-4 text-primary">
              Products by <span className="text-primary">CipherFlux Labs</span><span className="text-accent">.</span>
            </h2>
            <div className="h-1 w-20 md:w-24 bg-accent rounded-full mb-6 opacity-80" />
            <p className="text-secondary max-w-2xl text-fluid-p leading-relaxed font-sans font-light">
              Explore our live production ecosystem. Each system is engineered with an adversarial mindset, robust security, and deep artificial intelligence.
            </p>
          </motion.div>

          {/* Category Filter Pills - Frosted Glass Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex items-center gap-2 p-1.5 glass-pill rounded-2xl shrink-0 overflow-x-auto max-w-full"
            role="tablist"
            aria-label="Filter products by category"
          >
            {categories.map((cat) => {
              const count = cat === "All Systems" ? products.length : products.filter(p => p.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected 
                      ? "text-background font-semibold" 
                      : "text-secondary hover:text-primary hover:bg-white/[0.04]"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 bg-accent rounded-xl shadow-[0_0_20px_rgba(0,255,136,0.35)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                  <span className={`relative z-10 px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                    isSelected ? "bg-background/25 text-background" : "bg-white/10 text-secondary"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Product Cards Grid - Ultra-Premium Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className="group relative flex flex-col h-full glass-card-interactive glass-sheen rounded-[2.25rem] p-7 md:p-10 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle top ambient specular shine */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-accent/60 transition-colors duration-500" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500 pointer-events-none" />
                
                {/* Header: Glass Icon, Live Status & Quick Action */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="h-16 w-16 md:h-20 md:w-20 glass-pill rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-105 group-hover:border-accent/40 transition-all duration-500 ease-out">
                    {product.icon}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="inline-flex items-center gap-2 glass-pill px-3.5 py-1.5 rounded-full">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
                      </span>
                      <span className="text-[11px] font-mono font-medium text-secondary uppercase tracking-wider">
                        {product.status}
                      </span>
                      <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                        {product.version}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleCopyLink(e, product)}
                      title="Copy live link"
                      aria-label={`Copy link for ${product.name}`}
                      className="p-2.5 rounded-xl glass-pill hover:border-accent/50 text-secondary hover:text-accent transition-all duration-200 relative"
                    >
                      {copiedId === product.id ? (
                        <Check className="w-4 h-4 text-accent" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      {copiedId === product.id && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-accent text-background text-[10px] font-mono font-bold whitespace-nowrap shadow-lg">
                          Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Body: Title, Category & Description */}
                <div className="mb-6 relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-primary group-hover:text-accent transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="glass-pill text-accent border border-accent/30 px-3 py-1 rounded-lg text-xs font-mono font-semibold">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-secondary/70 mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-secondary/90 text-sm md:text-base leading-relaxed font-sans font-light">
                    {product.description}
                  </p>
                </div>

                {/* Tech Stack Badges - Frosted Pills */}
                <div className="mb-6 relative z-10">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-secondary/60 mb-2.5">
                    Architecture Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono glass-pill text-secondary/90 px-3 py-1 rounded-lg group-hover:border-accent/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8 relative z-10">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-secondary/60 mb-2.5">
                    Core Capabilities
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-secondary text-sm font-medium">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent/50 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(0,255,136,0.8)] transition-all duration-300 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer CTA & Inspect Specs Button */}
                <div className="mt-auto pt-6 border-t border-white/10 relative z-10 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => setInspectProduct(product)}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 glass-pill hover:border-accent/40 hover:text-accent px-4 py-3.5 rounded-xl text-secondary font-mono text-xs transition-all duration-300"
                  >
                    <Cpu className="w-4 h-4 text-accent" />
                    Inspect System
                  </button>

                  <a 
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Launch ${product.name} Application`}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-400 text-background px-4 py-3.5 rounded-xl font-bold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(0,255,136,0.25)] group/btn"
                  >
                    Launch App
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* System Inspection Modal - Frosted Glass Sheen */}
      <AnimatePresence>
        {inspectProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInspectProduct(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl glass-modal rounded-3xl p-5 sm:p-9 shadow-2xl z-10 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-product-name"
            >
              <button
                onClick={() => setInspectProduct(null)}
                aria-label="Close specifications dialog"
                className="absolute top-4 right-4 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl glass-pill text-secondary hover:text-accent transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl glass-pill flex items-center justify-center shrink-0">
                  {inspectProduct.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 id="modal-product-name" className="text-2xl font-bold text-primary">
                      {inspectProduct.name}
                    </h3>
                    <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                      {inspectProduct.version}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-secondary">
                    {inspectProduct.category} • {inspectProduct.status}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-secondary/70 mb-2">Overview</h4>
                  <p className="text-secondary text-sm sm:text-base leading-relaxed">
                    {inspectProduct.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-secondary/70 mb-2">Engineering & Architecture</h4>
                  <div className="p-4 rounded-2xl glass-card text-secondary text-sm leading-relaxed font-mono">
                    {inspectProduct.architecture}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-secondary/70 mb-2">Technical Highlights</h4>
                  <div className="space-y-2.5">
                    {inspectProduct.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-secondary">
                        <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-secondary/70 mb-2">Full Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {inspectProduct.techStack.map((tech) => (
                      <span key={tech} className="px-3.5 py-1.5 glass-pill rounded-xl text-xs font-mono text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                  <span className="text-xs font-mono text-secondary/60 truncate">
                    {inspectProduct.url}
                  </span>
                  <a
                    href={inspectProduct.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-background px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-transform active:scale-95 shrink-0 shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                  >
                    Open Application
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
