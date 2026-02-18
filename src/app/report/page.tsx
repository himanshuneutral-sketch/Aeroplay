import type { Metadata } from "next";
import ReportPageClient from "./ReportPageClient";

export const metadata: Metadata = {
  title: "Report Card — Aeroplay Academy",
  description: "Your Aeroplay Academy progress report — XP, scores, and badges.",
};

export default function ReportPage() {
  return <ReportPageClient />;
}
