import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CityPulse NYC | AI-Powered Fashion, Sightseeing & News Discovery",
  description: "Discover NYC through multimodal AI. Track street fashion trends, explore iconic landmarks, stay ahead of news and events—all personalized to your taste. By Contrivance Inc.",
  keywords: ["NYC discovery", "AI fashion trends", "New York sightseeing", "NYC news", "street style", "multimodal AI", "CityPulse", "Contrivance Inc"],
  authors: [{ name: "Contrivance Inc." }],
  openGraph: {
    title: "CityPulse NYC | AI-Powered Discovery for Fashion, Landmarks & Culture",
    description: "Experience NYC through multimodal AI that understands fashion, architecture, and culture—not just keywords.",
    url: "https://www.citypulsenyc.com",
    siteName: "CityPulse NYC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CityPulse NYC | AI-Powered NYC Discovery",
    description: "Discover fashion trends, iconic landmarks, and breaking news through multimodal AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
