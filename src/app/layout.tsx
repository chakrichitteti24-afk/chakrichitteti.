import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Chakri Chitteti | CEO & Founder at CipherFlux Labs",
  description: "Building secure AI systems and next-generation cybersecurity solutions. AI Engineer, Cybersecurity Enthusiast, Future OSCP Professional.",
  keywords: ["Chakri Chitteti", "CipherFlux Labs", "AI Engineer", "Cybersecurity", "OSCP", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${firaCode.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-background`}>
        {children}
      </body>
    </html>
  );
}
