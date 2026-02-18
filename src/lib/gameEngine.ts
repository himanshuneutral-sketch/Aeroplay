import type { GradeResult, GameState, PitchScenario, PitchResult, BadgeDefinition } from "@/types";

// ── XP & Leveling ──────────────────────────────────────────────

export const XP_REWARDS = {
  openModule: 5,
  completeSection: 5,
  navigateNext: 3,
  correctAnswer: 15,
  perfectQuizBonus: 50,
  passQuizBonus: 20, // ≥80%
  pitchPass: 30,     // ≥80%
  reviewFlashcard: 2,
  speedRoundCorrect: 10,
} as const;

export function calculateLevel(xp: number): number {
  return Math.floor(xp / 100) + 1;
}

export function calculateXPInLevel(xp: number): number {
  return xp % 100;
}

export function calculateXPToNextLevel(xp: number): number {
  return 100 - (xp % 100);
}

export function calculateLevelProgress(xp: number): number {
  return (xp % 100) / 100;
}

// ── Grading ────────────────────────────────────────────────────

export function calculateGrade(correct: number, total: number): GradeResult {
  const pct = total > 0 ? (correct / total) * 100 : 0;
  if (pct >= 90) return { grade: "A+", color: "#10b981", label: "Outstanding" };
  if (pct >= 80) return { grade: "A",  color: "#10b981", label: "Excellent" };
  if (pct >= 70) return { grade: "B",  color: "#f59e0b", label: "Good" };
  if (pct >= 60) return { grade: "C",  color: "#f59e0b", label: "Average" };
  if (pct >= 50) return { grade: "D",  color: "#ef4444", label: "Below Average" };
  return           { grade: "F",  color: "#ef4444", label: "Needs Improvement" };
}

export function calculatePercentage(correct: number, total: number): number {
  return total > 0 ? Math.round((correct / total) * 100) : 0;
}

// ── Pitch Simulator ────────────────────────────────────────────

export function calculatePitchResult(
  selectedIds: string[],
  scenario: PitchScenario
): PitchResult {
  const correctPoints = scenario.points.filter((p) => p.isCorrect);
  const wrongPoints   = scenario.points.filter((p) => !p.isCorrect);

  const correctSelected = selectedIds.filter((id) =>
    correctPoints.some((p) => p.id === id)
  );
  const wrongSelected = selectedIds.filter((id) =>
    wrongPoints.some((p) => p.id === id)
  );
  const missedCorrect = correctPoints
    .filter((p) => !selectedIds.includes(p.id))
    .map((p) => p.id);

  const raw =
    (correctSelected.length / correctPoints.length) * 100 -
    wrongSelected.length * 15;

  const score = Math.max(0, Math.min(100, Math.round(raw)));

  return {
    score,
    correctSelected,
    wrongSelected,
    missedCorrect,
    passed: score >= 80,
  };
}

// ── Badge Checks ────────────────────────────────────────────────

export function checkBadgeUnlocks(
  state: GameState,
  badgeDefs: BadgeDefinition[]
): string[] {
  return badgeDefs
    .filter(
      (b) => !state.badges.includes(b.id) && b.condition(state)
    )
    .map((b) => b.id);
}

// ── Speed Round ─────────────────────────────────────────────────

export function fisherYatesShuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Overall Report Score ─────────────────────────────────────────

export function calculateOverallScore(
  scores: Record<string, { correct: number; total: number; percentage: number } | null>
): { percentage: number; completed: number; total: number } {
  const entries = Object.values(scores).filter((s) => s !== null) as { correct: number; total: number; percentage: number }[];
  if (entries.length === 0) return { percentage: 0, completed: 0, total: 5 };
  const avg = entries.reduce((sum, s) => sum + s.percentage, 0) / entries.length;
  return { percentage: Math.round(avg), completed: entries.length, total: 5 };
}

// ── Confetti Colors ─────────────────────────────────────────────

export const CONFETTI_COLORS = [
  "#f59e0b", "#8b5cf6", "#10b981",
  "#3b82f6", "#ef4444", "#ffffff",
  "#fbbf24", "#a78bfa",
];
