import { notFound } from "next/navigation";
import KnowledgeTopicClient from "./KnowledgeTopicClient";

const VALID_TOPICS = ["companies", "clients", "ife-matrix", "offices", "leadership"];

export async function generateStaticParams() {
  return VALID_TOPICS.map((topic) => ({ topic }));
}

interface Props {
  params: Promise<{ topic: string }>;
}

export default async function KnowledgeTopicPage({ params }: Props) {
  const { topic } = await params;
  if (!VALID_TOPICS.includes(topic)) notFound();
  return <KnowledgeTopicClient topic={topic} />;
}

export async function generateMetadata({ params }: Props) {
  const { topic } = await params;
  const titles: Record<string, string> = {
    companies: "Group Companies Directory",
    clients: "Client Portfolio",
    "ife-matrix": "IFE Systems Matrix",
    offices: "Global Office Locations",
    leadership: "Leadership Profiles",
  };
  return {
    title: `${titles[topic] ?? "Knowledge"} — Aeroplay Academy`,
  };
}
