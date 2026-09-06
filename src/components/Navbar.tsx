"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "CipherFlux Labs", href: "#cipherflux", id: "cipherflux" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 40;
      setIsScrolled((prev) => (prev !== shouldBeScrolled ? shouldBeScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // High-performance IntersectionObserver: 0 layout thrashing, 0 forced reflows
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled 
            ? "glass-nav" 
            : "bg-background/20 backdrop-blur-md border-b border-transparent"
        }`}
        aria-label="Main Navigation"
      >
        {/* GPU-Accelerated Scroll Progress Bar (Runs completely off-thread without React re-renders) */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden pointer-events-none">
          <motion.div 
            className="h-full bg-gradient-to-r from-accent via-accent to-emerald-400 shadow-[0_0_10px_rgba(0,255,136,0.8)]"
            style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
          />
        </div>

        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <a 
            href="#home" 
            className="text-xl font-black tracking-tighter text-primary z-50 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm group flex items-center gap-1.5" 
            aria-label="Chakri Chitteti Homepage"
          >
            <span>CC</span>
            <span className="text-accent group-hover:scale-125 transition-transform">.</span>
          </a>

          {/* Desktop Nav - Frosted Glass Capsule */}
          <div className="hidden md:flex items-center gap-1.5 glass-pill px-3 py-1.5 rounded-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-medium rounded-full transition-colors duration-200 outline-none focus-visible:text-accent ${
                    isActive 
                      ? "text-accent font-semibold" 
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-accent/15 border border-accent/30 rounded-full shadow-[0_0_12px_rgba(0,255,136,0.15)]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://cipherflux-labs.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-primary hover:text-accent glass-pill hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]"
            >
              <span>CipherFlux Labs</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary z-50 p-2.5 -mr-2 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl glass-pill"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 glass-modal md:hidden pt-24 px-6 border-b border-border w-full h-[100svh] overflow-y-auto flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-3 w-full mt-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-bold py-4 px-5 rounded-2xl transition-all flex items-center justify-between border ${
                      isActive 
                        ? "text-accent bg-accent/10 border-accent/30 shadow-[0_0_20px_rgba(0,255,136,0.1)]" 
                        : "text-secondary hover:text-primary border-white/5 hover:border-white/15 bg-white/[0.02]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">Active</span>
                    )}
                  </a>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href="https://cipherflux-labs.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-accent text-background font-bold text-sm shadow-[0_0_20px_rgba(0,255,136,0.3)]"
              >
                Visit CipherFlux Labs
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
