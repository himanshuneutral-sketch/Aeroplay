import type { Metadata } from "next";
import FlashcardsPageClient from "./FlashcardsPageClient";

export const metadata: Metadata = {
  title: "Flashcards — Aeroplay Academy",
  description: "Review key Aeroplay facts with interactive flashcards.",
};

export default function FlashcardsPage() {
  return <FlashcardsPageClient />;
}
