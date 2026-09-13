import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chakri Chitteti | CEO & Founder at CipherFlux Labs",
    short_name: "Chakri Chitteti",
    description:
      "Official portfolio of Chakri Chitteti. AI Engineer, Cybersecurity Specialist, and Founder of CipherFlux Labs.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090A",
    theme_color: "#08090A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
