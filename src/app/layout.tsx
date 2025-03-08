import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import "@fontsource/rammetto-one";
import '@fontsource/luckiest-guy';

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
  title: "Omar Hernández",
  description: "Omar Hernández",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true" cz-shortcut-listen="true">
      <body
       cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
