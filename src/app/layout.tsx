import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import AnimatedBackground from "@/components/landing/animated-background";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bruii - Complete Gaming Platform Management System",
  description: "Complete white-label gaming platform administration solution. Manage multiple companies, users, games, transactions, bonuses, and more from a single unified system.",
  keywords: "gaming platform, white-label gaming, gaming management system, multi-tenant gaming, game administration",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased`}
      >
        <ThemeProvider>
          <AnimatedBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
