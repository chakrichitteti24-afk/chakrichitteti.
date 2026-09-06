"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Globe, Send, Check, Copy, CheckCircle2, X } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const socialLinks = [
  { 
    name: "LinkedIn", 
    icon: <LinkedinIcon className="w-5 h-5" />, 
    href: "https://www.linkedin.com/in/chakrichitteti", 
    label: "Chakri Chitteti" 
  },
  { 
    name: "Email", 
    icon: <Mail className="w-5 h-5" aria-hidden="true" />, 
    href: "mailto:chakrichitteti.dev@gmail.com", 
    label: "chakrichitteti.dev@gmail.com",
    copyable: true,
    copyValue: "chakrichitteti.dev@gmail.com" 
  },
  { 
    name: "Website", 
    icon: <Globe className="w-5 h-5" aria-hidden="true" />, 
    href: "https://cipherflux-labs.vercel.app/", 
    label: "cipherflux-labs.vercel.app" 
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate secure network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage("Secure handshake established. Message dispatched to chakrichitteti.dev@gmail.com.");
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-dismiss toast after 5s
      setTimeout(() => {
        setToastMessage(null);
      }, 5000);
    }, 1200);
  };

  const handleCopyEmail = async (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="w-full py-20 sm:py-24 md:py-32 relative border-t border-border/50 overflow-hidden">
      {/* Zero-cost GPU glow orbs */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[700px] h-[700px] glow-orb-emerald rounded-full" />
      <div className="absolute left-[-10%] top-1/4 w-[500px] h-[500px] glow-orb-cyan rounded-full" />

      {/* Floating In-App Toast Notification - Responsive and Touch-safe */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 right-4 sm:right-6 z-50 max-w-md w-[calc(100vw-2rem)] sm:w-auto p-4 sm:p-5 rounded-2xl glass-modal border-accent/40 shadow-2xl flex items-start gap-3.5"
            role="status"
            aria-live="polite"
          >
            <div className="p-2 rounded-xl glass-pill text-accent shrink-0 mt-0.5 border-accent/30">
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-mono font-bold text-accent uppercase tracking-wider mb-1">
                Transmission Successful
              </p>
              <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed break-words">
                {toastMessage}
              </p>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-secondary/60 hover:text-primary transition-colors p-1.5 shrink-0"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12 space-y-6 sm:space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-fluid-h2 font-extrabold tracking-tight mb-4 md:mb-6 text-primary">
                Let&apos;s Connect<span className="text-accent">.</span>
              </h2>
              <div className="h-1 w-20 md:w-24 bg-accent rounded-full mb-6 md:mb-8 opacity-80" />
              <p className="text-secondary text-fluid-p font-sans font-light leading-relaxed">
                Whether you have an engineering proposal, an inquiry regarding CipherFlux Labs, or wish to collaborate on cutting-edge AI systems, my inbox is open.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col gap-3.5 sm:gap-4"
            >
              {socialLinks.map(link => (
                <div
                  key={link.name}
                  className="flex items-center justify-between p-3.5 sm:p-4 md:p-5 rounded-2xl glass-card-interactive glass-sheen group gap-3"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Connect via ${link.name}: ${link.label}`}
                    className="flex items-center gap-3.5 sm:gap-4 text-secondary hover:text-accent transition-colors flex-1 min-w-0"
                  >
                    <div className="glass-pill p-2.5 sm:p-3 rounded-xl group-hover:border-accent/40 text-accent transition-colors shadow-sm shrink-0">
                      {link.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[11px] sm:text-xs text-secondary/60 block uppercase tracking-wider">
                        {link.name}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-primary group-hover:text-accent transition-colors truncate block">
                        {link.label}
                      </span>
                    </div>
                  </a>

                  {link.copyable && (
                    <button
                      onClick={(e) => handleCopyEmail(e, link.copyValue!)}
                      aria-label="Copy email address to clipboard"
                      title="Copy email to clipboard"
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl glass-pill hover:border-accent/40 text-secondary hover:text-accent transition-all duration-200 shrink-0"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-accent" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Contact Form - Responsive and Touch-Friendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-7/12"
          >
            <div className="glass-card glass-sheen rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs md:text-sm font-bold text-secondary font-mono tracking-wide uppercase flex items-center justify-between">
                      <span>Name</span>
                      <span className="text-accent/80 text-[11px]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full glass-input rounded-xl px-4 py-3.5 sm:py-4 text-primary text-base font-sans focus:outline-none transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs md:text-sm font-bold text-secondary font-mono tracking-wide uppercase flex items-center justify-between">
                      <span>Email</span>
                      <span className="text-accent/80 text-[11px]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full glass-input rounded-xl px-4 py-3.5 sm:py-4 text-primary text-base font-sans focus:outline-none transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs md:text-sm font-bold text-secondary font-mono tracking-wide uppercase flex items-center justify-between">
                    <span>Message</span>
                    <span className="text-accent/80 text-[11px]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full glass-input rounded-xl px-4 py-3.5 sm:py-4 text-primary text-base font-sans focus:outline-none transition-all duration-200 resize-none"
                    placeholder="Describe your inquiry, project scope, or collaboration..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Send secure message"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 rounded-xl bg-accent hover:bg-emerald-400 px-8 py-3.5 sm:py-4 font-bold text-background transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 shadow-[0_0_25px_rgba(0,255,136,0.25)] cursor-pointer text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-background border-t-transparent animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Secure Message</span>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
