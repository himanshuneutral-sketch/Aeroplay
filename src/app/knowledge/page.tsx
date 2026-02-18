import type { Metadata } from "next";
import KnowledgePageClient from "./KnowledgePageClient";

export const metadata: Metadata = {
  title: "Knowledge Base — Aeroplay Academy",
  description: "Deep-dive reference pages for Aeroplay's companies, clients, technology, and team.",
};

export default function KnowledgePage() {
  return <KnowledgePageClient />;
}
