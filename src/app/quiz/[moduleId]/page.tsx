import { notFound } from "next/navigation";
import { MODULES, getModuleById } from "@/data/modules";
import QuizPageClient from "./QuizPageClient";

export async function generateStaticParams() {
  return MODULES.map((m) => ({ moduleId: m.id }));
}

interface Props {
  params: Promise<{ moduleId: string }>;
}

export default async function QuizPage({ params }: Props) {
  const { moduleId } = await params;
  const module = getModuleById(moduleId);
  if (!module) notFound();
  return <QuizPageClient module={module} />;
}

export async function generateMetadata({ params }: Props) {
  const { moduleId } = await params;
  const module = getModuleById(moduleId);
  return {
    title: module ? `${module.title} Quiz — Aeroplay Academy` : "Quiz Not Found",
  };
}
