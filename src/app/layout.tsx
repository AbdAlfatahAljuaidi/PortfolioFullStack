import type { Metadata } from "next";
import Nav from '@/app/nav/page' 
import Link from 'next/link';
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
  title: "Portfolio",
  description: "Full Stack Developer ",
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
        <div className="grid grid-cols-12 min-h-screen">
        <div className="md:col-span-2">
        <Nav />

        
        </div>

        <div className=" col-span-12 md:col-span-10">
        {children}

        </div>
        </div>
       
      </body>
    </html>
  );
}
