export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cipherflux-labs.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Chakri Chitteti",
        jobTitle: "CEO & Founder, AI Engineer",
        description:
          "Founder of CipherFlux Labs, building secure AI systems, autonomous agents, and next-generation cybersecurity architectures.",
        url: siteUrl,
        sameAs: [
          "https://www.linkedin.com/in/chakrichitteti",
          "https://github.com/chakrichitteti24-afk",
          "https://cipherflux-labs.vercel.app/",
        ],
        worksFor: {
          "@id": `${siteUrl}/#organization`,
        },
        knowsAbout: [
          "Artificial Intelligence",
          "Cybersecurity",
          "Offensive Security",
          "Machine Learning",
          "OSCP",
          "FastAPI",
          "Next.js",
          "Python",
          "Large Language Models",
          "Agentic Workflows",
          "Penetration Testing",
          "Secure Software Architecture",
        ],
        email: "chakrichitteti.dev@gmail.com",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "CipherFlux Labs",
        url: "https://cipherflux-labs.vercel.app/",
        logo: `${siteUrl}/favicon.ico`,
        founder: {
          "@id": `${siteUrl}/#person`,
        },
        description:
          "Engineering secure AI intelligence, defensive & offensive cyber solutions, and scalable web platforms.",
        sameAs: ["https://cipherflux-labs.vercel.app/"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Chakri Chitteti | CEO & Founder at CipherFlux Labs",
        description:
          "Official portfolio of Chakri Chitteti. AI Engineer, Cybersecurity Specialist, and Founder of CipherFlux Labs.",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        author: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://smith-ai-five.vercel.app/#app",
        name: "Smith AI",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://smith-ai-five.vercel.app/",
        author: {
          "@id": `${siteUrl}/#person`,
        },
        creator: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "Autonomous AI Productivity Engine engineered for rapid reasoning, contextual awareness, automated workflows, and sub-100ms UI responsiveness.",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://svanexa-ai.vercel.app/#app",
        name: "Svanexa AI",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        url: "https://svanexa-ai.vercel.app/",
        author: {
          "@id": `${siteUrl}/#person`,
        },
        creator: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "Next-Gen AI Women's Health & Wellness Intelligence companion with intelligent cycle tracking, predictive wellness insights, and privacy-first architecture.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
