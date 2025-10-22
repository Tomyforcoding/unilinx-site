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
  title: "unilinx",
  description: "~~~~~",
   icons: [{ rel: "icon", url: "/favicon.ico?v=4" }], 
};

import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Tally Form Script */}
        <Script async src="https://tally.so/widgets/embed.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}