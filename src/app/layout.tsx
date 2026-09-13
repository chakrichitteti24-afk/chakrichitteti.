import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cipherflux-labs.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chakri Chitteti | CEO & Founder at CipherFlux Labs",
    template: "%s | Chakri Chitteti",
  },
  description:
    "Building secure AI systems, next-generation cybersecurity architectures, and autonomous AI agents. AI Engineer, Cybersecurity Specialist, and Founder of CipherFlux Labs. Creator of Smith AI and Svanexa AI.",
  keywords: [
    "Chakri Chitteti",
    "CipherFlux Labs",
    "Chakri Chitteti Portfolio",
    "CEO & Founder CipherFlux Labs",
    "AI Engineer",
    "Cybersecurity Specialist",
    "Offensive Security",
    "Future OSCP Professional",
    "Smith AI",
    "Svanexa AI",
    "Secure AI Systems",
    "AI Architecture",
    "Penetration Testing",
    "Ethical Hacking",
    "Next.js Developer",
    "FastAPI Python AI",
    "Healthcare AI",
    "Autonomous AI Agents",
  ],
  authors: [{ name: "Chakri Chitteti", url: siteUrl }],
  creator: "Chakri Chitteti",
  publisher: "CipherFlux Labs",
  applicationName: "Chakri Chitteti Portfolio",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Chakri Chitteti | CEO & Founder at CipherFlux Labs",
    description:
      "AI Engineer, Cybersecurity Enthusiast, and Founder of CipherFlux Labs. Discover production AI systems including Smith AI and Svanexa AI.",
    siteName: "Chakri Chitteti Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chakri Chitteti - CEO & Founder at CipherFlux Labs | AI Engineer & Cybersecurity Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chakri Chitteti | CEO & Founder at CipherFlux Labs",
    description:
      "AI Engineer & Cybersecurity Specialist building secure intelligence and autonomous agents at CipherFlux Labs.",
    creator: "@chakrichitteti",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090A",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-background`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
