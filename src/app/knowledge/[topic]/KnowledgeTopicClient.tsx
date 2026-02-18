"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MODULES } from "@/data/modules";
import SectionRenderer from "@/components/SectionRenderer";
import type { CardGridContent, MapContent } from "@/types";

interface Props { topic: string }

export default function KnowledgeTopicClient({ topic }: Props) {
  const aboutModule = MODULES.find((m) => m.id === "about")!;
  const clientsModule = MODULES.find((m) => m.id === "clients")!;
  const diffModule = MODULES.find((m) => m.id === "differentiators")!;

  const topicMap: Record<string, { title: string; icon: string; accent: string; content: React.ReactNode }> = {
    companies: {
      title: "Group Companies Directory",
      icon: "🏢",
      accent: "#f59e0b",
      content: (
        <SectionRenderer
          content={aboutModule.sections[1].content as CardGridContent}
          accentColor="#f59e0b"
        />
      ),
    },
    clients: {
      title: "Client Portfolio",
      icon: "✈️",
      accent: "#8b5cf6",
      content: (
        <div className="space-y-10">
          {clientsModule.sections.map((section) => (
            <div key={section.id}>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                {section.icon} {section.title}
              </h3>
              <SectionRenderer content={section.content} accentColor="#8b5cf6" />
            </div>
          ))}
        </div>
      ),
    },
    "ife-matrix": {
      title: "IFE Systems Compatibility Matrix",
      icon: "🖥️",
      accent: "#10b981",
      content: (
        <SectionRenderer
          content={diffModule.sections[3].content}
          accentColor="#10b981"
        />
      ),
    },
    offices: {
      title: "Global Office Locations",
      icon: "🗺️",
      accent: "#3b82f6",
      content: (
        <SectionRenderer
          content={aboutModule.sections[5].content as MapContent}
          accentColor="#3b82f6"
        />
      ),
    },
    leadership: {
      title: "Leadership & Team Profiles",
      icon: "👥",
      accent: "#ef4444",
      content: (
        <div className="space-y-10">
          {[aboutModule.sections[2], aboutModule.sections[3], aboutModule.sections[4]].map((section) => (
            <div key={section.id}>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                {section.icon} {section.title}
              </h3>
              <SectionRenderer content={section.content} accentColor="#ef4444" />
            </div>
          ))}
        </div>
      ),
    },
  };

  const page = topicMap[topic];
  if (!page) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
          <Link href="/knowledge" className="hover:text-white transition-colors">Knowledge Base</Link>
          <span>›</span>
          <span style={{ color: page.accent }}>{page.title}</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-4xl">{page.icon}</span>
          <h1 className="text-2xl font-bold text-white">{page.title}</h1>
        </div>

        {/* Content */}
        {page.content}
      </motion.div>
    </div>
  );
}
