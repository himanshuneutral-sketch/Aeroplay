"use client";

import { motion } from "framer-motion";
import type {
  SectionContentType, TextContent, TableContent, CardGridContent,
  StatHighlightContent, ProfileCardsContent, MapContent, TimelineContent,
  ListContent, MixedContent, MatrixContent, OfficeLocation,
} from "@/types";

interface Props {
  content: SectionContentType;
  accentColor: string;
}

export default function SectionRenderer({ content, accentColor }: Props) {
  switch (content.type) {
    case "text":       return <TextRenderer content={content} accentColor={accentColor} />;
    case "table":      return <TableRenderer content={content} accentColor={accentColor} />;
    case "matrix":     return <MatrixRenderer content={content} accentColor={accentColor} />;
    case "card-grid":  return <CardGridRenderer content={content} accentColor={accentColor} />;
    case "stat-highlight": return <StatHighlightRenderer content={content} accentColor={accentColor} />;
    case "profile-cards":  return <ProfileCardsRenderer content={content} accentColor={accentColor} />;
    case "map":        return <MapRenderer content={content} accentColor={accentColor} />;
    case "timeline":   return <TimelineRenderer content={content} accentColor={accentColor} />;
    case "list":       return <ListRenderer content={content} accentColor={accentColor} />;
    case "mixed":      return <MixedRenderer content={content} accentColor={accentColor} />;
    default:           return null;
  }
}

// ── Text ──────────────────────────────────────────────────────

function TextRenderer({ content }: { content: TextContent; accentColor: string }) {
  return (
    <div className="space-y-4">
      {content.paragraphs.map((para, i) => (
        <p key={i} className="leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
          {para}
        </p>
      ))}
    </div>
  );
}

// ── Table ─────────────────────────────────────────────────────

function TableRenderer({ content, accentColor }: { content: TableContent; accentColor: string }) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      <table className="w-full text-sm min-w-[500px]">
        <thead>
          <tr style={{ background: `${accentColor}15` }}>
            {content.headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-bold" style={{ color: accentColor }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, ri) => (
            <tr key={ri} className="transition-colors hover:bg-white/3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3" style={{ color: ci === 0 ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Matrix ────────────────────────────────────────────────────

function MatrixRenderer({ content, accentColor }: { content: MatrixContent; accentColor: string }) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      <table className="w-full text-sm min-w-[500px]">
        <thead>
          <tr style={{ background: `${accentColor}15` }}>
            <th className="px-4 py-3 text-left font-bold" style={{ color: accentColor }}>OEM / System</th>
            <th className="px-4 py-3 text-left font-bold" style={{ color: accentColor }}>Clients Served</th>
          </tr>
        </thead>
        <tbody>
          {content.groups.map((group) => (
            <>
              <tr key={`hdr-${group.oemName}`} style={{ background: "rgba(255,255,255,0.04)", borderTop: "2px solid rgba(255,255,255,0.06)" }}>
                <td colSpan={2} className="px-4 py-2 text-xs font-bold uppercase" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", fontFamily: "var(--font-space-mono)" }}>
                  {group.oemName}
                </td>
              </tr>
              {group.systems.map((sys, si) => (
                <tr key={`${group.oemName}-${si}`} className="transition-colors hover:bg-white/3" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                  <td className="px-4 pl-8 py-3 font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {sys.system}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1.5">
                      {sys.clients.map((c) => (
                        <span key={c} className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${accentColor}15`, color: accentColor }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Card Grid ─────────────────────────────────────────────────

function CardGridRenderer({ content, accentColor }: { content: CardGridContent; accentColor: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {content.cards.map((card, i) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07 }}
          className="p-5 rounded-xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{card.icon}</span>
            <div>
              <h4 className="font-bold text-white text-sm">{card.name}</h4>
              <p className="text-xs" style={{ color: accentColor }}>{card.tagline}</p>
            </div>
          </div>
          <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>{card.description}</p>
          <div className="flex flex-wrap gap-1">
            {card.specialties.slice(0, 4).map((sp) => (
              <span key={sp} className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)" }}>
                {sp}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Stat Highlight ────────────────────────────────────────────

function StatHighlightRenderer({ content, accentColor }: { content: StatHighlightContent; accentColor: string }) {
  return (
    <div className="space-y-4">
      {content.headline && (
        <h3 className="text-lg font-bold text-white">{content.headline}</h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {content.stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="p-4 rounded-xl text-center"
            style={{
              background: `${stat.accent || accentColor}10`,
              border: `1px solid ${stat.accent || accentColor}25`,
            }}
          >
            {stat.icon && <div className="text-2xl mb-2">{stat.icon}</div>}
            <div className="text-xl font-bold mb-0.5" style={{ color: stat.accent || accentColor, fontFamily: "var(--font-space-mono)" }}>
              {stat.value}
            </div>
            <div className="text-xs font-medium text-white">{stat.label}</div>
            {stat.note && <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.note}</div>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Profile Cards ─────────────────────────────────────────────

function ProfileCardsRenderer({ content, accentColor }: { content: ProfileCardsContent; accentColor: string }) {
  return (
    <div className={`grid gap-4 ${content.layout === "carousel" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
      {content.profiles.map((person, i) => (
        <motion.div
          key={person.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07 }}
          className="p-5 rounded-xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
              style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}30` }}
            >
              👤
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">{person.name}</h4>
              <p className="text-xs" style={{ color: accentColor }}>{person.title}</p>
              {person.location && (
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>📍 {person.location}</p>
              )}
            </div>
          </div>
          {person.bio && (
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{person.bio}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// ── World Map ─────────────────────────────────────────────────

function MapRenderer({ content, accentColor }: { content: MapContent; accentColor: string }) {
  const typeColors: Record<string, string> = {
    hq: "#f59e0b",
    content: "#10b981",
    sales: "#3b82f6",
  };

  return (
    <div className="space-y-6">
      {/* Simple SVG world map placeholder with dots */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", paddingTop: "50%" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full" style={{ background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Crect fill='%230a1628' width='1000' height='500'/%3E%3Ctext fill='rgba(255,255,255,0.1)' font-size='12' x='500' y='250' text-anchor='middle'%3EWorld Map%3C/text%3E%3C/svg%3E\") center/cover" }}>
            {content.locations.map((loc, i) => (
              <motion.div
                key={loc.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="absolute group cursor-pointer"
                style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)" }}
                title={`${loc.city}, ${loc.country}`}
              >
                {loc.type === "hq" && (
                  <div className="absolute inset-0 rounded-full animate-ping" style={{ background: typeColors.hq, opacity: 0.3, width: 16, height: 16, margin: -4 }} />
                )}
                <div
                  className="w-3 h-3 rounded-full border-2 border-black"
                  style={{ background: typeColors[loc.type] }}
                />
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ border: `1px solid ${typeColors[loc.type]}40` }}>
                  <div className="font-bold">{loc.city}</div>
                  <div style={{ color: typeColors[loc.type], fontSize: "10px" }}>{loc.type.toUpperCase()}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 flex-wrap">
        {[["hq", "HQ"], ["content", "Content Services"], ["sales", "Sales Office"]].map(([type, label]) => (
          <div key={type} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <div className="w-3 h-3 rounded-full" style={{ background: typeColors[type] }} />
            {label}
          </div>
        ))}
      </div>

      {/* Location list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {content.locations.map((loc) => (
          <div key={loc.id} className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full" style={{ background: typeColors[loc.type] }} />
              <span className="font-medium text-sm text-white">{loc.city}, {loc.country}</span>
            </div>
            <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: `${typeColors[loc.type]}15`, color: typeColors[loc.type] }}>
              {loc.type === "hq" ? "Headquarters" : loc.type === "content" ? "Content Services" : "Sales Office"}
            </span>
            {loc.address && <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>{loc.address}</p>}
            {loc.phone && <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{loc.phone}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Timeline ──────────────────────────────────────────────────

function TimelineRenderer({ content, accentColor }: { content: TimelineContent; accentColor: string }) {
  return (
    <div className="space-y-6">
      {content.items.map((item, i) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex gap-4"
        >
          <div className="flex flex-col items-center">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
              style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}30`, color: accentColor, fontFamily: "var(--font-space-mono)" }}
            >
              {item.year}
            </div>
            {i < content.items.length - 1 && (
              <div className="w-px flex-1 my-2" style={{ background: "rgba(255,255,255,0.06)" }} />
            )}
          </div>
          <div className="pb-6 flex-1">
            <ul className="space-y-2">
              {item.items.map((bullet, bi) => (
                <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: accentColor, marginTop: 2 }}>•</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── List ──────────────────────────────────────────────────────

function ListRenderer({ content, accentColor }: { content: ListContent; accentColor: string }) {
  return (
    <div className="space-y-3">
      {content.items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="flex gap-3 p-4 rounded-xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="shrink-0 mt-0.5">
            {item.icon ? (
              <span className="text-xl">{item.icon}</span>
            ) : (
              <div className="w-2 h-2 rounded-full mt-1.5" style={{ background: item.accent || accentColor }} />
            )}
          </div>
          <div>
            {item.title && (
              <h4 className="font-bold text-sm mb-1" style={{ color: item.accent || accentColor }}>{item.title}</h4>
            )}
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Mixed ─────────────────────────────────────────────────────

function MixedRenderer({ content, accentColor }: { content: MixedContent; accentColor: string }) {
  return (
    <div className="space-y-8">
      {content.blocks.map((block, i) => (
        <SectionRenderer key={i} content={block} accentColor={accentColor} />
      ))}
    </div>
  );
}
