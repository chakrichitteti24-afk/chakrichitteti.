"use client";

import { Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  // Fixed year for the requirements: 2026

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center justify-center space-y-6 text-center">
        
        <a href="#home" className="flex items-center gap-2 group">
          <Terminal className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
          <span className="font-mono font-bold tracking-tighter text-xl">
            CipherFlux Labs<span className="text-accent">.</span>
          </span>
        </a>

        <p className="text-secondary font-mono text-sm max-w-md">
          Building Secure Intelligence. <br/> Engineering the future of AI & Security.
        </p>

        <div className="text-secondary/50 text-xs font-mono pt-4 border-t border-border/50 w-full max-w-sm">
          © 2026 Chakri Chitteti. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
