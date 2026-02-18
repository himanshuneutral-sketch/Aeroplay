// ─────────────────────────────────────────────
// GAME STATE
// ─────────────────────────────────────────────

export interface QuizScore {
  correct: number;
  total: number;
  percentage: number;
  grade: string;
  gradeColor: string;
}

export interface GameState {
  xp: number;
  level: number;
  streak: number;
  maxStreak: number;
  badges: string[];
  scores: Record<string, QuizScore | null>;
  pitchScores: Record<string, number>;
  flashcardsReviewed: string[];
  completedSections: Record<string, boolean>;
  openedModules: string[];
  showConfetti: boolean;
  pendingBadge: string | null;
  userName: string;
  avatar: string;
}

export interface GameActions {
  addXP: (amount: number, label?: string) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  recordQuizScore: (moduleId: string, correct: number, total: number) => void;
  recordPitchScore: (scenarioId: string, score: number) => void;
  reviewFlashcard: (cardId: string) => void;
  unlockBadge: (badgeId: string) => void;
  markSectionComplete: (sectionId: string) => void;
  openModule: (moduleId: string) => void;
  triggerConfetti: () => void;
  dismissConfetti: () => void;
  dismissBadge: () => void;
  resetProgress: () => void;
  setUserName: (name: string) => void;
  setAvatar: (avatar: string) => void;
}

// ─────────────────────────────────────────────
// MODULE & CONTENT
// ─────────────────────────────────────────────

export type SectionContentType =
  | TextContent
  | TableContent
  | CardGridContent
  | StatHighlightContent
  | ProfileCardsContent
  | MapContent
  | MixedContent
  | TimelineContent
  | MatrixContent
  | ListContent;

export interface TextContent {
  type: "text";
  paragraphs: string[];
  highlights?: { text: string; note: string }[];
}

export interface TableContent {
  type: "table";
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface MatrixContent {
  type: "matrix";
  groups: MatrixGroup[];
  columns: string[];
}

export interface MatrixGroup {
  oemName: string;
  systems: MatrixRow[];
}

export interface MatrixRow {
  system: string;
  clients: string[];
  notes?: string;
}

export interface CompanyCard {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  specialties: string[];
  website?: string;
}

export interface CardGridContent {
  type: "card-grid";
  cards: CompanyCard[];
}

export interface StatItem {
  label: string;
  value: string;
  icon?: string;
  note?: string;
  accent?: string;
}

export interface StatHighlightContent {
  type: "stat-highlight";
  stats: StatItem[];
  headline?: string;
}

export interface Person {
  id: string;
  name: string;
  title: string;
  location?: string;
  bio?: string;
  photo?: string;
  linkedin?: string;
}

export interface ProfileCardsContent {
  type: "profile-cards";
  profiles: Person[];
  layout?: "grid" | "carousel";
}

export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  type: "hq" | "content" | "sales";
  address?: string;
  phone?: string;
  email?: string;
  x: number; // SVG map X percentage (0-100)
  y: number; // SVG map Y percentage (0-100)
}

export interface MapContent {
  type: "map";
  locations: OfficeLocation[];
}

export interface TimelineItem {
  year: string;
  items: string[];
}

export interface TimelineContent {
  type: "timeline";
  items: TimelineItem[];
}

export interface ListContent {
  type: "list";
  items: ListItem[];
  style?: "bullet" | "numbered" | "check";
}

export interface ListItem {
  title?: string;
  description: string;
  icon?: string;
  accent?: string;
}

export interface MixedContent {
  type: "mixed";
  blocks: SectionContentType[];
}

export interface Section {
  id: string;
  title: string;
  icon?: string;
  content: SectionContentType;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  accentColor: string;
  glowColor: string;
  bgColor: string;
  sections: Section[];
  quiz: QuizQuestion[];
}

// ─────────────────────────────────────────────
// PITCH SIMULATOR
// ─────────────────────────────────────────────

export interface PitchPoint {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface PitchScenario {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  airline: string;
  region: string;
  customerStatement: string;
  context: string;
  points: PitchPoint[];
  badgeId?: string;
}

// ─────────────────────────────────────────────
// FLASHCARDS
// ─────────────────────────────────────────────

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category?: string;
  moduleId?: string;
}

// ─────────────────────────────────────────────
// BADGES
// ─────────────────────────────────────────────

export interface BadgeDefinition {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  accentColor: string;
  condition: (state: GameState) => boolean;
}

// ─────────────────────────────────────────────
// SCORING UTILS
// ─────────────────────────────────────────────

export interface GradeResult {
  grade: string;
  color: string;
  label: string;
}

export interface PitchResult {
  score: number;
  correctSelected: string[];
  wrongSelected: string[];
  missedCorrect: string[];
  passed: boolean;
}

export interface XPEvent {
  amount: number;
  label: string;
  timestamp: number;
}
