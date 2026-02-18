import { notFound } from "next/navigation";
import { MODULES, getModuleById } from "@/data/modules";
import ModulePageClient from "./ModulePageClient";

export async function generateStaticParams() {
  return MODULES.map((m) => ({ moduleId: m.id }));
}

interface Props {
  params: Promise<{ moduleId: string }>;
}

export default async function ModulePage({ params }: Props) {
  const { moduleId } = await params;
  const module = getModuleById(moduleId);
  if (!module) notFound();
  return <ModulePageClient module={module} />;
}

export async function generateMetadata({ params }: Props) {
  const { moduleId } = await params;
  const module = getModuleById(moduleId);
  return {
    title: module ? `${module.title} — Aeroplay Academy` : "Module Not Found",
  };
}
