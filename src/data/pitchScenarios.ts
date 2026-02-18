import type { PitchScenario } from "@/types";

export const PITCH_SCENARIOS: PitchScenario[] = [
  {
    id: "budget-africa",
    title: "Budget Carrier in Africa",
    difficulty: "Beginner",
    airline: "AfriLink Express",
    region: "Sub-Saharan Africa",
    context:
      "You are pitching to the CEO of a fast-growing low-cost carrier in East Africa. They have 12 Boeing 737s with no seatback IFE. Their main concern is cost and complexity. They want to offer some form of passenger entertainment without a multi-million dollar installation.",
    customerStatement:
      "We can't afford seatback screens or a complex IFE installation. But we lose passengers to competitors who offer entertainment. We need something simple, affordable, and that actually works on our aircraft.",
    points: [
      {
        id: "ba-1",
        text: "AeroHub PRO — a portable wireless IFE system requiring zero aircraft modification",
        isCorrect: true,
        explanation: "Perfect for a budget carrier — no installation cost, no structural changes needed.",
      },
      {
        id: "ba-2",
        text: "Connects up to 100 passenger devices simultaneously via WiFi",
        isCorrect: true,
        explanation: "Covers a typical 737 cabin — passengers stream to their own phones and tablets.",
      },
      {
        id: "ba-3",
        text: "FAA and EASA certified — fully compliant for commercial aviation use",
        isCorrect: true,
        explanation: "Regulatory compliance removes a major barrier for the airline.",
      },
      {
        id: "ba-4",
        text: "Games in Motion HTML5 games — no app download required for passengers",
        isCorrect: true,
        explanation: "Browser-based games work on any passenger device with no friction.",
      },
      {
        id: "ba-5",
        text: "Zero upfront hardware cost with flexible revenue-share model available",
        isCorrect: true,
        explanation: "Directly addresses their budget constraint — aligns cost with revenue.",
      },
      {
        id: "ba-6",
        text: "Neutral Digital GUI design with 25 years of aviation interface expertise",
        isCorrect: false,
        explanation: "While true, this is more relevant to premium carriers investing in bespoke interfaces — a budget carrier needs basics first.",
      },
      {
        id: "ba-7",
        text: "Thales i8000 integration — our team has done direct in-house encrypted disk creation",
        isCorrect: false,
        explanation: "Completely irrelevant — this airline has no Thales seatback system. This would confuse the prospect.",
      },
      {
        id: "ba-8",
        text: "Skyview Analytics with multi-airline reporting and dark/light mode dashboards",
        isCorrect: false,
        explanation: "Analytics are a nice-to-have but not the priority for a carrier focused on basic cost-effective IFE.",
      },
      {
        id: "ba-9",
        text: "Direct licensing with all 5 major Hollywood studios including Disney and Warner Bros.",
        isCorrect: false,
        explanation: "Licensing costs for premium Hollywood content would concern a budget carrier focused on cost efficiency.",
      },
      {
        id: "ba-10",
        text: "TPN Gold Shield certified Mumbai Lab for content security",
        isCorrect: false,
        explanation: "Content security certification is important but not the primary pitch point for a startup budget carrier.",
      },
    ],
    badgeId: "sales-star",
  },

  {
    id: "premium-middle-east",
    title: "Premium Middle Eastern Carrier",
    difficulty: "Intermediate",
    airline: "Raha Airways",
    region: "Middle East",
    context:
      "You are meeting with the VP of Product & Innovation at a prestigious 5-star rated Gulf carrier. They are renewing their IFE content contract. Their passengers expect the latest Hollywood blockbusters at the same time they release in cinemas. They also care deeply about data analytics and bespoke brand experience.",
    customerStatement:
      "Our passengers expect to watch the latest films — not titles that are 6 months old. Our previous CSP kept giving us content late and our Skytrax scores suffered. We also need better passenger data. What can you do for us?",
    points: [
      {
        id: "pm-1",
        text: "Direct licensing with all 5 major Hollywood studios — Disney, Paramount, Sony, Warner Bros., NBCUniversal — gives us first-run access",
        isCorrect: true,
        explanation: "Direct studio relationships mean no middleman delays — they get first-run content at the same time as theatrical release.",
      },
      {
        id: "pm-2",
        text: "TPN Gold Shield certified Mumbai Lab (valid through Dec 2027) ensures top-tier content security — a studio requirement for premium titles",
        isCorrect: true,
        explanation: "Studios require TPN certification to release first-run content. This differentiator directly enables timely delivery.",
      },
      {
        id: "pm-3",
        text: "Neutral Digital GUI design expertise — 25 years of aviation interface design for premium passenger experience",
        isCorrect: true,
        explanation: "A 5-star carrier demands a bespoke, premium interface. Neutral Digital's expertise directly addresses this need.",
      },
      {
        id: "pm-4",
        text: "Skyview Analytics — multi-airline analytics, content playback metrics, top 10 rankings, passenger behaviour insights",
        isCorrect: true,
        explanation: "Directly addresses their request for better passenger data. Skyview gives them actionable IFE performance metrics.",
      },
      {
        id: "pm-5",
        text: "Thales i4000, i5000, i8000 and Avant integration experience — in-house encrypted disk creation capability",
        isCorrect: true,
        explanation: "Many Gulf carriers fly Airbus A350/A380 with Thales systems. Demonstrating deep integration expertise is critical.",
      },
      {
        id: "pm-6",
        text: "AeroHub PRO portable wireless system — connects 100 devices with no aircraft modification",
        isCorrect: false,
        explanation: "Completely wrong fit — a premium carrier has seatback IFE on every flight. AeroHub is for budget/no-IFE operators.",
      },
      {
        id: "pm-7",
        text: "Advertising capabilities — 250+ monthly advertisers including Samsung, Rolex, Audi",
        isCorrect: false,
        explanation: "Advertising revenue is relevant but not what this prospect asked about. Introducing it now risks distracting from their core pain point.",
      },
      {
        id: "pm-8",
        text: "Games in Motion HTML5 games — no app download required",
        isCorrect: false,
        explanation: "HTML5 games are for budget/wireless IFE. A premium carrier typically has proprietary game platforms already.",
      },
      {
        id: "pm-9",
        text: "Zero debt and positive cash flows — financial stability as a partner",
        isCorrect: false,
        explanation: "Important for contract confidence but not the right opening pitch to an innovation-focused VP. Lead with solutions, not balance sheets.",
      },
    ],
    badgeId: "sales-star",
  },

  {
    id: "asian-fsc",
    title: "Asian Full-Service Carrier",
    difficulty: "Advanced",
    airline: "Lumina Air",
    region: "Southeast Asia",
    context:
      "You are pitching to the Head of Inflight Product at a large Southeast Asian full-service carrier. They fly routes across Asia, the Middle East, and to Europe. Their passenger base is diverse — Indian, Chinese, Malay, Filipino, and international travellers. They struggle with multilingual content, announcements, and connecting with regional entertainment tastes.",
    customerStatement:
      "Our passengers come from 15 different countries. We can't give them all a Western-only entertainment menu. We need regional content that actually resonates — Bollywood, Chinese drama, Korean content — and announcements in their languages. Our current CSP only handles English and Malay.",
    points: [
      {
        id: "af-1",
        text: "Silk Route Entertainment — relationships with 100+ airlines, 400+ studios, content in 20+ languages including Asian and Middle Eastern",
        isCorrect: true,
        explanation: "Directly addresses the multilingual and regional content gap. Silk Route specializes exactly in this.",
      },
      {
        id: "af-2",
        text: "Alpha Pictures — specialized Bollywood and South Asian content access",
        isCorrect: true,
        explanation: "For a carrier with large Indian passenger segments, dedicated Bollywood content access is a strong differentiator.",
      },
      {
        id: "af-3",
        text: "AI Generative Dubbing — AI dubs multilingual content across Indian, Southeast Asian, and Middle Eastern languages",
        isCorrect: true,
        explanation: "AI dubbing makes content accessible in regional languages cost-effectively — exactly what this airline needs.",
      },
      {
        id: "af-4",
        text: "VPAs/PRAMs — Virtual Passenger Assistants and Pre-Recorded Announcement Modules in 25+ languages",
        isCorrect: true,
        explanation: "25+ languages directly solves their announcement problem across their diverse passenger base.",
      },
      {
        id: "af-5",
        text: "AeroLab TPN-certified lab capabilities — encoding and QC for diverse content formats",
        isCorrect: true,
        explanation: "Regional content (Bollywood, K-drama, Chinese series) comes in varied formats. AeroLab's TPN facility handles all formats.",
      },
      {
        id: "af-6",
        text: "Direct Hollywood studio relationships with first-run access",
        isCorrect: false,
        explanation: "While useful, this is not the priority pitch for a carrier whose primary pain point is regional/multilingual content — not Hollywood timing.",
      },
      {
        id: "af-7",
        text: "Cabinly 3D seat viewer for ancillary revenue and upselling",
        isCorrect: false,
        explanation: "Cabinly is an upsell tool. Not the right focus when the airline is specifically asking about content diversity and language coverage.",
      },
      {
        id: "af-8",
        text: "AeroHub PRO for wireless IFE — no aircraft modification needed",
        isCorrect: false,
        explanation: "A full-service carrier has seatback IFE. AeroHub is the wrong product for this audience.",
      },
      {
        id: "af-9",
        text: "Advertising revenue capabilities — 250+ monthly advertisers, brands like Samsung and Intel",
        isCorrect: false,
        explanation: "Advertising is secondary to their content and language problem. Opening with advertising seems tone-deaf to their stated need.",
      },
      {
        id: "af-10",
        text: "QVerse immersive metaverse experience — Aeroplay's R&D innovation showcase",
        isCorrect: false,
        explanation: "QVerse is an impressive capability, but it's not addressing the immediate multilingual content problem this airline faces.",
      },
    ],
    badgeId: "sales-star",
  },
];
