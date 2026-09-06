"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cybersecurity",
    skills: ["Linux", "Kali Linux", "Burp Suite", "Wireshark", "Nmap", "OWASP"],
  },
  {
    title: "Development",
    skills: ["Python", "Java", "JavaScript", "React", "Next.js", "FastAPI", "Tailwind"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "API Development"],
  },
  {
    title: "Artificial Intelligence",
    skills: ["Generative AI", "Prompt Engineering", "LLMs", "RAG"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-24 md:py-32 relative overflow-hidden border-t border-border/50">
      {/* Zero-cost GPU glow orbs */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-orb-emerald rounded-full" />
      <div className="absolute left-[-10%] bottom-0 w-[500px] h-[500px] glow-orb-cyan rounded-full" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-fluid-h2 font-extrabold tracking-tight mb-4 md:mb-6 text-primary">
            Technical Arsenal<span className="text-accent">.</span>
          </h2>
          <div className="h-1 w-20 md:w-24 bg-accent rounded-full mx-auto mb-6 md:mb-8 opacity-80" />
          <p className="text-secondary text-fluid-p max-w-2xl mx-auto font-sans font-light">
            A comprehensive toolkit designed for building secure and intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              className="relative group h-full"
            >
              <div className="h-full glass-card-interactive glass-sheen p-6 md:p-8 rounded-3xl relative z-10 shadow-2xl">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-6 md:mb-8 flex items-center gap-3">
                  <span className="text-accent text-xs font-mono glass-pill px-2.5 py-1 rounded-lg border border-accent/20">{`0${idx + 1}`}</span>
                  <span>{category.title}</span>
                </h3>
                <ul className="space-y-3.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-secondary/90 group-hover:text-primary transition-colors duration-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent/40 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(0,255,136,0.8)] transition-all duration-300 shrink-0" />
                      <span className="font-mono text-sm tracking-wide break-words">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
