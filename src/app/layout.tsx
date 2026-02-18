import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Confetti from "@/components/Confetti";
import BadgeUnlockModal from "@/components/BadgeUnlockModal";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aeroplay Academy — Master the Art of In-Flight Entertainment",
  description:
    "Gamified interactive learning platform for Aeroplay Entertainment. Train your sales team, earn XP, unlock badges, and master IFE industry knowledge.",
  keywords: ["Aeroplay", "IFE", "In-Flight Entertainment", "gamified learning", "sales training"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceMono.variable}`}>
      <body className="antialiased" style={{ fontFamily: "var(--font-outfit)" }}>
        <Nav />
        {/* Desktop: pt-16 for fixed nav; Mobile: pt-10 pb-16 for top banner + bottom tabs */}
        <main className="pt-16 md:pt-16 pb-16 md:pb-0 min-h-screen">
          {children}
        </main>
        <Confetti />
        <BadgeUnlockModal />
      </body>
    </html>
  );
}
