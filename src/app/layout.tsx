import type { Metadata, Viewport } from "next";
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
  authors: [{ name: "Chakri Chitteti", url: "https://cipherflux-labs.vercel.app/" }],
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
      <body className={`${inter.variable} ${firaCode.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-background`}>
        {children}
      </body>
    </html>
  );
}
