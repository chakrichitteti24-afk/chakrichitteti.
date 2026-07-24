"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Send } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const socialLinks = [
  { name: "LinkedIn", icon: <LinkedinIcon className="w-5 h-5" />, href: "#" },
  { name: "Email", icon: <Mail className="w-5 h-5" aria-hidden="true" />, href: "mailto:contact@cipherflux.com" },
  { name: "Website", icon: <Globe className="w-5 h-5" aria-hidden="true" />, href: "https://cipherflux-labs.vercel.app/" },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-card/20 relative border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12 space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-fluid-h2 font-extrabold tracking-tight mb-4 md:mb-6">
                Let's Connect<span className="text-accent">.</span>
              </h2>
              <div className="h-1 w-20 md:w-24 bg-accent rounded-full mb-6 md:mb-8 opacity-80" />
              <p className="text-secondary text-fluid-p font-sans font-light leading-relaxed">
                Whether you have a question, a project idea, or want to discuss the future of AI and security, my inbox is open.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col sm:flex-row lg:flex-col gap-4"
            >
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Connect via ${link.name}`}
                  className="flex flex-1 lg:flex-none items-center gap-4 text-secondary hover:text-accent transition-colors p-4 md:p-5 rounded-2xl border border-transparent hover:border-border hover:bg-card/50 group"
                >
                  <div className="bg-background/80 p-3 rounded-xl border border-border/50 group-hover:bg-accent/10 transition-colors shadow-sm shrink-0">
                    {link.icon}
                  </div>
                  <span className="font-mono text-sm font-semibold tracking-wide">{link.name}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-card/40 backdrop-blur-2xl border border-border rounded-3xl p-6 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2 md:space-y-3">
                    <label htmlFor="name" className="text-xs md:text-sm font-bold text-secondary font-mono tracking-wide uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background/50 border border-border/80 rounded-xl px-4 md:px-5 py-3 md:py-4 text-primary font-sans focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label htmlFor="email" className="text-xs md:text-sm font-bold text-secondary font-mono tracking-wide uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background/50 border border-border/80 rounded-xl px-4 md:px-5 py-3 md:py-4 text-primary font-sans focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  <label htmlFor="message" className="text-xs md:text-sm font-bold text-secondary font-mono tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background/50 border border-border/80 rounded-xl px-4 md:px-5 py-3 md:py-4 text-primary font-sans focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="How can we collaborate?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Send secure message"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-accent px-8 md:px-10 py-3 md:py-4 font-bold text-background transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                >
                  {isSubmitting ? "Initiating Handshake..." : "Send Secure Message"}
                  {!isSubmitting && <Send className="w-5 h-5 shrink-0" aria-hidden="true" />}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
