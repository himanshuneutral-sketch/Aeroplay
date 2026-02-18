import type { Metadata } from "next";
import SpeedRoundPageClient from "./SpeedRoundPageClient";

export const metadata: Metadata = {
  title: "Speed Round — Aeroplay Academy",
  description: "10 questions, 15 seconds each. How fast can you answer?",
};

export default function SpeedRoundPage() {
  return <SpeedRoundPageClient />;
}
