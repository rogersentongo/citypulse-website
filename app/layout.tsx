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
  title: "CityPulse | AI-Powered Video Discovery for Your City",
  description: "Search, share, and discover hyperlocal city moments through video. AI-powered video search, citywide Pulse feed, Friends feed, and social features. Record, upload, explore.",
  keywords: ["video discovery", "AI video search", "hyperlocal video", "city videos", "video platform", "Pulse feed", "Ask the City", "Contrivance Inc"],
  authors: [{ name: "Contrivance Inc." }],
  verification: {
    google: "BenvD9oQdAs16kaquDSLGG1zOAjwCtd9iX360jjphwA",
  },
  openGraph: {
    title: "CityPulse | AI-Powered Video Discovery Platform",
    description: "Discover your city through AI-powered video. Search hyperlocal moments, explore the Pulse feed, share with friends. A video-only platform for the city around you.",
    url: "https://www.pulse-nyc.com",
    siteName: "CityPulse",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CityPulse | Video Discovery Platform",
    description: "AI-powered video search and discovery for hyperlocal city moments. Record, upload, explore.",
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
