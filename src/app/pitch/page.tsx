import type { Metadata } from "next";
import PitchPageClient from "./PitchPageClient";

export const metadata: Metadata = {
  title: "Pitch Simulator — Aeroplay Academy",
  description: "Practice your airline sales pitch with realistic IFE scenarios.",
};

export default function PitchPage() {
  return <PitchPageClient />;
}
