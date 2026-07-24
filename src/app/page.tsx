"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { BootSequence } from "@/components/BootSequence";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

// Dynamically import below-the-fold components for code splitting & lazy loading
const About = dynamic(() => import("@/components/About").then(mod => mod.About), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills").then(mod => mod.Skills), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects").then(mod => mod.Projects), { ssr: true });
const CipherFlux = dynamic(() => import("@/components/CipherFlux").then(mod => mod.CipherFlux), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.Contact), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer), { ssr: true });

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      {!bootComplete && (
        <BootSequence onComplete={() => setBootComplete(true)} />
      )}
      
      {/* 
        We use a wrapper that changes opacity based on bootComplete 
        to create a smooth transition from the boot sequence to the site.
      */}
      <div 
        className={`transition-opacity duration-1000 w-full overflow-x-hidden ${
          bootComplete ? "opacity-100" : "opacity-0 h-screen overflow-hidden"
        }`}
      >
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CipherFlux />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
