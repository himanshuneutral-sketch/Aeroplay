import type { BadgeDefinition, GameState } from "@/types";

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  // ── Per-Module: Master (100%) ──
  {
    id: "about-master",
    name: "About Master",
    description: "Score 100% on the About Aeroplay Group quiz",
    icon: "🏆",
    rarity: "epic",
    accentColor: "#f59e0b",
    condition: (s: GameState) => {
      const score = s.scores["about"];
      return score !== null && score !== undefined && score.percentage === 100;
    },
  },
  {
    id: "clients-master",
    name: "Clients Master",
    description: "Score 100% on the Clients & Achievements quiz",
    icon: "🏆",
    rarity: "epic",
    accentColor: "#8b5cf6",
    condition: (s: GameState) => {
      const score = s.scores["clients"];
      return score !== null && score !== undefined && score.percentage === 100;
    },
  },
  {
    id: "differentiators-master",
    name: "Differentiators Master",
    description: "Score 100% on the Key Differentiators quiz",
    icon: "🏆",
    rarity: "epic",
    accentColor: "#10b981",
    condition: (s: GameState) => {
      const score = s.scores["differentiators"];
      return score !== null && score !== undefined && score.percentage === 100;
    },
  },
  {
    id: "marketing-master",
    name: "Marketing Master",
    description: "Score 100% on the Marketing Services quiz",
    icon: "🏆",
    rarity: "epic",
    accentColor: "#ef4444",
    condition: (s: GameState) => {
      const score = s.scores["marketing"];
      return score !== null && score !== undefined && score.percentage === 100;
    },
  },
  {
    id: "tech-master",
    name: "Tech Master",
    description: "Score 100% on the Technology & Innovation quiz",
    icon: "🏆",
    rarity: "epic",
    accentColor: "#3b82f6",
    condition: (s: GameState) => {
      const score = s.scores["tech"];
      return score !== null && score !== undefined && score.percentage === 100;
    },
  },

  // ── Per-Module: Pro (≥80%) ──
  {
    id: "about-pro",
    name: "About Pro",
    description: "Score ≥80% on the About Aeroplay Group quiz",
    icon: "⭐",
    rarity: "rare",
    accentColor: "#f59e0b",
    condition: (s: GameState) => {
      const score = s.scores["about"];
      return score !== null && score !== undefined && score.percentage >= 80;
    },
  },
  {
    id: "clients-pro",
    name: "Clients Pro",
    description: "Score ≥80% on the Clients & Achievements quiz",
    icon: "⭐",
    rarity: "rare",
    accentColor: "#8b5cf6",
    condition: (s: GameState) => {
      const score = s.scores["clients"];
      return score !== null && score !== undefined && score.percentage >= 80;
    },
  },
  {
    id: "differentiators-pro",
    name: "Differentiators Pro",
    description: "Score ≥80% on the Key Differentiators quiz",
    icon: "⭐",
    rarity: "rare",
    accentColor: "#10b981",
    condition: (s: GameState) => {
      const score = s.scores["differentiators"];
      return score !== null && score !== undefined && score.percentage >= 80;
    },
  },
  {
    id: "marketing-pro",
    name: "Marketing Pro",
    description: "Score ≥80% on the Marketing Services quiz",
    icon: "⭐",
    rarity: "rare",
    accentColor: "#ef4444",
    condition: (s: GameState) => {
      const score = s.scores["marketing"];
      return score !== null && score !== undefined && score.percentage >= 80;
    },
  },
  {
    id: "tech-pro",
    name: "Tech Pro",
    description: "Score ≥80% on the Technology & Innovation quiz",
    icon: "⭐",
    rarity: "rare",
    accentColor: "#3b82f6",
    condition: (s: GameState) => {
      const score = s.scores["tech"];
      return score !== null && score !== undefined && score.percentage >= 80;
    },
  },

  // ── Milestone Badges ──
  {
    id: "graduate",
    name: "Aeroplay Graduate",
    description: "Complete all 5 learning modules",
    icon: "🎓",
    rarity: "legendary",
    accentColor: "#f59e0b",
    condition: (s: GameState) =>
      ["about", "clients", "differentiators", "marketing", "tech"].every(
        (id) => s.scores[id] !== null && s.scores[id] !== undefined
      ),
  },
  {
    id: "sales-star",
    name: "Sales Star",
    description: "Score ≥80% on any Pitch Simulator scenario",
    icon: "🌟",
    rarity: "rare",
    accentColor: "#f59e0b",
    condition: (s: GameState) =>
      Object.values(s.pitchScores).some((score) => score >= 80),
  },
  {
    id: "pitch-expert",
    name: "Pitch Expert",
    description: "Score ≥80% on all 3 Pitch Simulator scenarios",
    icon: "💼",
    rarity: "legendary",
    accentColor: "#8b5cf6",
    condition: (s: GameState) =>
      ["budget-africa", "premium-middle-east", "asian-fsc"].every(
        (id) => (s.pitchScores[id] ?? 0) >= 80
      ),
  },
  {
    id: "on-fire",
    name: "On Fire",
    description: "Get 10 consecutive correct answers",
    icon: "🔥",
    rarity: "epic",
    accentColor: "#ef4444",
    condition: (s: GameState) => s.maxStreak >= 10,
  },
  {
    id: "memory-master",
    name: "Memory Master",
    description: "Review all flashcards",
    icon: "🧠",
    rarity: "rare",
    accentColor: "#10b981",
    condition: (s: GameState) => s.flashcardsReviewed.length >= 15,
  },
  {
    id: "first-step",
    name: "First Step",
    description: "Open your first learning module",
    icon: "🚀",
    rarity: "common",
    accentColor: "#3b82f6",
    condition: (s: GameState) => s.openedModules.length >= 1,
  },
  {
    id: "century",
    name: "Century Club",
    description: "Earn 100 XP",
    icon: "💯",
    rarity: "common",
    accentColor: "#f59e0b",
    condition: (s: GameState) => s.xp >= 100,
  },
];

// Helper to get a badge by ID
export function getBadgeById(id: string): BadgeDefinition | undefined {
  return BADGE_DEFINITIONS.find((b) => b.id === id);
}
