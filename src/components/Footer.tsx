"use client";

import { Terminal, ArrowUp } from "lucide-react";

interface FooterProps {
  onReplayBoot?: () => void;
}

export function Footer({ onReplayBoot }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/80 bg-background/90 py-14 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center justify-center space-y-6 text-center relative z-10">
        
        <a href="#home" className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1">
          <Terminal className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
          <span className="font-mono font-bold tracking-tighter text-xl text-primary">
            CipherFlux Labs<span className="text-accent">.</span>
          </span>
        </a>

        <p className="text-secondary font-mono text-xs sm:text-sm max-w-md leading-relaxed">
          Building Secure Intelligence. <br/> Engineering the future of AI & Offensive Security.
        </p>

        {/* Quick Footer Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {onReplayBoot && (
            <button
              onClick={onReplayBoot}
              className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-accent border border-border/80 hover:border-accent/40 bg-card/40 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
              title="Re-run terminal boot sequence"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Replay Boot Sequence</span>
            </button>
          )}

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-secondary hover:text-accent border border-border/80 hover:border-accent/40 bg-card/40 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

        <div className="text-secondary/50 text-xs font-mono pt-6 border-t border-border/50 w-full max-w-md flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {currentYear} Chakri Chitteti. All rights reserved.</span>
          <span className="text-accent/60">Encrypted & Hardened</span>
        </div>

      </div>
    </footer>
  );
}
