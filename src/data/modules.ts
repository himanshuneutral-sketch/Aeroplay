import type { Module } from "@/types";

export const MODULES: Module[] = [
  // ─────────────────────────────────────────
  // MODULE 1 — ABOUT AEROPLAY GROUP
  // ─────────────────────────────────────────
  {
    id: "about",
    slug: "about",
    title: "About Aeroplay Group",
    subtitle: "The company, the people, the global reach",
    icon: "🌍",
    accentColor: "#f59e0b",
    glowColor: "rgba(245,158,11,0.25)",
    bgColor: "#0a1628",
    sections: [
      {
        id: "about-s1",
        title: "Aeroplay Entertainment Overview",
        icon: "✈️",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Aeroplay Entertainment is a Singapore-headquartered global leader in In-Flight Entertainment (IFE) content services. Founded as part of the Maxposure group, Aeroplay operates across 9+ countries, delivering premium content solutions to airlines worldwide.",
                "As a subsidiary of Maxposure Limited — a company listed on the National Stock Exchange (NSE) of India — Aeroplay benefits from the financial backing and operational scale of a publicly traded parent company. This structure provides airlines with the confidence of working with a financially stable, transparent partner.",
                "Led by CEO Prakash Johari (who co-founded Maxposure in 2006 in Miami, Florida) and Chairman Dr. Torsten-Joern Klein, Aeroplay has grown from a regional player to a trusted global IFE partner serving airlines across Asia, Africa, the Middle East, and beyond.",
              ],
            },
            {
              type: "stat-highlight",
              headline: "Aeroplay by the Numbers",
              stats: [
                { label: "Countries of Operation", value: "9+", icon: "🌍", accent: "#f59e0b" },
                { label: "Active Airline Clients", value: "20+", icon: "✈️", accent: "#f59e0b" },
                { label: "Years in IFE", value: "18+", icon: "📅", accent: "#f59e0b" },
                { label: "Headquarters", value: "Singapore", icon: "🇸🇬", accent: "#f59e0b" },
                { label: "Parent Company", value: "Maxposure Ltd (NSE)", icon: "📈", accent: "#f59e0b" },
                { label: "Debt Level", value: "Zero", icon: "💚", note: "Positive cash flows", accent: "#10b981" },
              ],
            },
            {
              type: "text",
              paragraphs: [
                "Aeroplay's tagline — \"Engage, Entertain, Elevate\" — reflects their mission to go beyond content delivery and actively enhance the passenger experience through innovation, technology, and creative excellence.",
                "Contact: 51 GoldHill Plaza, #07-10/11, Singapore 308900 | +65 8723 2660 | info@aeroplaymedia.com | aeroplaymedia.com",
              ],
            },
          ],
        },
      },
      {
        id: "about-s2",
        title: "Group Companies Ecosystem",
        icon: "🏢",
        content: {
          type: "card-grid",
          cards: [
            {
              id: "aeroplay-entertainment",
              name: "Aeroplay Entertainment",
              icon: "✈️",
              tagline: "Core IFE Content Services",
              description: "The flagship company. Handles IFE programming, content licensing, delivery, and end-to-end client management for airlines globally.",
              specialties: ["IFE Content Programming", "Airline Client Management", "Content Licensing", "Global Operations"],
            },
            {
              id: "maxposure",
              name: "Maxposure Limited",
              icon: "📈",
              tagline: "NSE-Listed Parent Company",
              description: "Listed on India's National Stock Exchange (NSE), Maxposure is the publicly traded parent that provides financial backing, corporate governance, and group-level strategic direction.",
              specialties: ["Publishing", "IFE Services", "Corporate Governance", "Financial Stability"],
            },
            {
              id: "aerolab",
              name: "AeroLab Media",
              icon: "🔬",
              tagline: "TPN-Certified Content Lab",
              description: "The technical backbone of Aeroplay's content operations. AeroLab manages all encoding, transcoding, quality control, and secure content delivery from two TPN-certified facilities.",
              specialties: ["TPN Gold Shield (Mumbai)", "TPN Blue Shield (Delhi)", "Transcoding", "QC", "Encrypted Disk Creation", "Cinesend Delivery"],
            },
            {
              id: "aerohub",
              name: "AeroHub",
              icon: "📡",
              tagline: "Wireless IFE Streaming",
              description: "AeroHub PRO is a portable wireless IFE solution that streams entertainment to up to 100 passenger devices simultaneously — requiring zero aircraft modification. FAA and EASA certified.",
              specialties: ["Portable IFE", "100 Device Connectivity", "FAA/EASA Certified", "No Installation", "WiFi Streaming"],
            },
            {
              id: "silk-route",
              name: "Silk Route Entertainment",
              icon: "🎬",
              tagline: "Multilingual Content Specialists",
              description: "Silk Route focuses on Asian, Middle Eastern, and multilingual content. With relationships spanning 100+ airlines and 400+ studios, they deliver content in 20+ languages.",
              specialties: ["100+ Airline Relationships", "400+ Studios", "20+ Languages", "Asian Content", "Middle Eastern Content"],
            },
            {
              id: "alpha-pictures",
              name: "Alpha Pictures",
              icon: "🎦",
              tagline: "Bollywood & South Asian Content",
              description: "Alpha Pictures specializes in Bollywood and South Asian entertainment, providing airlines with access to the rich library of Indian cinema for their regional passenger segments.",
              specialties: ["Bollywood Content", "South Asian Cinema", "Regional Languages", "Hindi Film Catalogue"],
            },
            {
              id: "neutral-digital",
              name: "Neutral Digital",
              icon: "🖥️",
              tagline: "IFE Interface Design Experts",
              description: "With 25 years of aviation UI/UX expertise, Neutral Digital designs and develops bespoke graphical user interfaces (GUIs) for airline IFE systems. Their portfolio spans 50+ major airlines.",
              specialties: ["GUI Design", "25 Years Aviation UX", "50+ Airline Clients", "Aerospace Companies", "Custom Interfaces"],
            },
            {
              id: "games-in-motion",
              name: "Games in Motion",
              icon: "🎮",
              tagline: "HTML5 IFE Gaming",
              description: "Games in Motion develops HTML5 games specifically designed for In-Flight Entertainment systems. Their 7 games run on any passenger device — from seatback screens to personal devices — with no app download required.",
              specialties: ["7 HTML5 Games", "Cross-Platform", "No App Download", "IFE Optimized", "Custom Branding"],
            },
            {
              id: "vistaapps",
              name: "VistaApps",
              icon: "📱",
              tagline: "Ancillary Digital Applications",
              description: "VistaApps develops specialized airline applications including Cabin Explorer, Fleet Explorer, Routes Explorer, and QURAN Li — a dedicated Islamic prayer companion app for Muslim passengers.",
              specialties: ["Cabin Explorer", "Fleet Explorer", "Routes Explorer", "QURAN Li", "iOS & Android", "Custom App Development"],
            },
          ],
        },
      },
      {
        id: "about-s3",
        title: "Board of Directors & Leadership",
        icon: "👥",
        content: {
          type: "profile-cards",
          layout: "grid",
          profiles: [
            {
              id: "prakash-johari",
              name: "Prakash Johari",
              title: "CEO, Aeroplay Entertainment",
              location: "Singapore",
              bio: "Co-founded Maxposure in 2006 in Miami, Florida. Under his leadership, the company has grown from a regional publisher to a global IFE powerhouse operating across 9+ countries. He drives the strategic vision for Aeroplay's expansion into new markets and technology verticals.",
            },
            {
              id: "dr-torsten-klein",
              name: "Dr. Torsten-Joern Klein",
              title: "Chairman",
              location: "Germany",
              bio: "Former CEO of Gruner + Jahr International, a €2.1 billion publishing house headquartered in Germany. Dr. Klein brings decades of international media leadership and corporate governance experience to the Aeroplay board.",
            },
            {
              id: "sunil-bhatt",
              name: "Sunil Bhatt",
              title: "Director",
              location: "India",
              bio: "Brings deep expertise in corporate strategy, finance, and media operations across Asia. Plays a key role in Maxposure's NSE-listed governance framework and investor relations.",
            },
            {
              id: "vikram-suri",
              name: "Vikram Suri",
              title: "Director",
              location: "India",
              bio: "Experienced business leader with expertise in operational management, technology deployment, and regional market development across South and Southeast Asia.",
            },
            {
              id: "meena-sharma",
              name: "Meena Sharma",
              title: "Director",
              location: "India",
              bio: "Brings legal, compliance, and corporate governance expertise to the board, supporting Maxposure's regulatory requirements as an NSE-listed company.",
            },
          ],
        },
      },
      {
        id: "about-s4",
        title: "Content Team",
        icon: "📽️",
        content: {
          type: "profile-cards",
          layout: "carousel",
          profiles: [
            {
              id: "sarah-chen",
              name: "Sarah Chen",
              title: "Head of Content — Hollywood Studios",
              location: "Los Angeles, USA",
              bio: "25+ years in film licensing. Manages all direct studio relationships with Disney, Paramount, Sony, Warner Bros., and NBCUniversal. Previously at Universal Pictures.",
            },
            {
              id: "raj-mehta",
              name: "Raj Mehta",
              title: "Senior Content Manager — South Asia",
              location: "Mumbai, India",
              bio: "18 years in Bollywood content distribution. Oversees Alpha Pictures content catalogue and manages relationships with major Indian production houses.",
            },
            {
              id: "lin-zhang",
              name: "Lin Zhang",
              title: "Content Manager — East Asia",
              location: "Shanghai, China",
              bio: "15 years in Chinese and Korean entertainment content. Manages Silk Route's East Asian portfolio including C-drama and K-drama acquisitions.",
            },
            {
              id: "amira-hassan",
              name: "Amira Hassan",
              title: "Content Manager — Middle East & Africa",
              location: "Dubai / Nairobi",
              bio: "12 years in Arabic and African content programming. Covers the MEA region for Aeroplay's airline clients including Egypt Air and Kenya Airways.",
            },
            {
              id: "carlos-mendez",
              name: "Carlos Mendez",
              title: "Content Manager — Latin America & Europe",
              location: "London, UK",
              bio: "10 years in European and Latin American content licensing. Manages relationships with European broadcasters and Latin American studios.",
            },
            {
              id: "priya-nair",
              name: "Priya Nair",
              title: "Content Acquisitions Specialist",
              location: "Singapore HQ",
              bio: "5 years in content acquisitions. Supports global studio negotiations and manages the day-to-day licensing workflows across all content verticals.",
            },
          ],
        },
      },
      {
        id: "about-s5",
        title: "Operations & Client Support Teams",
        icon: "⚙️",
        content: {
          type: "profile-cards",
          layout: "grid",
          profiles: [
            {
              id: "james-okoye",
              name: "James Okoye",
              title: "Head of Operations — Africa",
              location: "Nairobi, Kenya",
              bio: "Manages all client operations across African airline accounts, including Kenya Airways. 12 years in aviation operations.",
            },
            {
              id: "mei-tan",
              name: "Mei Tan",
              title: "Regional Manager — Southeast Asia",
              location: "Kuala Lumpur, Malaysia",
              bio: "Oversees Malaysia Airlines, Philippine Airlines, and other SEA accounts. 10 years in airline content management.",
            },
            {
              id: "dmitri-volkov",
              name: "Dmitri Volkov",
              title: "Regional Manager — CIS",
              location: "Almaty, Kazakhstan",
              bio: "Manages airline client relationships in Central Asia and CIS region. 8 years in regional aviation market development.",
            },
            {
              id: "chiara-ferrari",
              name: "Chiara Ferrari",
              title: "Client Support Manager — Europe",
              location: "Rome, Italy",
              bio: "Handles European airline client communications and technical support coordination. 7 years in IFE client services.",
            },
            {
              id: "arjun-patel",
              name: "Arjun Patel",
              title: "Data & Metadata Manager",
              location: "Mumbai, India",
              bio: "Leads the data management team responsible for IFE metadata accuracy across all airline platforms. 6 years in IFE data operations.",
            },
            {
              id: "yusuf-abdi",
              name: "Yusuf Abdi",
              title: "IT Infrastructure Manager",
              location: "Singapore HQ",
              bio: "Manages Aeroplay's global IT infrastructure including lab systems, cloud platforms, and secure content delivery networks.",
            },
          ],
        },
      },
      {
        id: "about-s6",
        title: "Global Office Locations",
        icon: "🗺️",
        content: {
          type: "map",
          locations: [
            { id: "sg", city: "Singapore", country: "Singapore", type: "hq", address: "51 GoldHill Plaza, #07-10/11, Singapore 308900", phone: "+65 8723 2660", email: "info@aeroplaymedia.com", x: 76, y: 58 },
            { id: "la", city: "Los Angeles", country: "USA", type: "content", address: "Los Angeles, CA, United States", x: 10, y: 38 },
            { id: "del", city: "Delhi", country: "India", type: "content", address: "New Delhi, India — TPN Blue Shield Studio", x: 65, y: 42 },
            { id: "mum", city: "Mumbai", country: "India", type: "content", address: "Mumbai, India — TPN Gold Shield AeroLab", x: 63, y: 48 },
            { id: "lon", city: "London", country: "UK", type: "sales", address: "London, United Kingdom", x: 46, y: 30 },
            { id: "rom", city: "Rome", country: "Italy", type: "sales", address: "Rome, Italy", x: 50, y: 34 },
            { id: "nai", city: "Nairobi", country: "Kenya", type: "sales", address: "Nairobi, Kenya", x: 56, y: 60 },
            { id: "sha", city: "Shanghai", country: "China", type: "sales", address: "Shanghai, China", x: 80, y: 40 },
            { id: "kl", city: "Kuala Lumpur", country: "Malaysia", type: "sales", address: "Kuala Lumpur, Malaysia", x: 75, y: 58 },
            { id: "alm", city: "Almaty", country: "Kazakhstan", type: "sales", address: "Almaty, Kazakhstan", x: 67, y: 35 },
            { id: "dub", city: "Dubai", country: "UAE", type: "sales", address: "Dubai, United Arab Emirates", x: 60, y: 45 },
          ],
        },
      },
    ],
    quiz: [
      {
        id: "about-q1",
        question: "Where is Aeroplay Entertainment's global headquarters located?",
        options: ["Dubai, UAE", "Singapore", "Mumbai, India", "London, UK"],
        correctIndex: 1,
        explanation: "Aeroplay Entertainment is headquartered at 51 GoldHill Plaza, Singapore 308900.",
      },
      {
        id: "about-q2",
        question: "Who is the CEO of Aeroplay Entertainment?",
        options: ["Dr. Torsten-Joern Klein", "Sunil Bhatt", "Prakash Johari", "Vikram Suri"],
        correctIndex: 2,
        explanation: "Prakash Johari co-founded Maxposure in 2006 in Miami and serves as CEO of Aeroplay Entertainment.",
      },
      {
        id: "about-q3",
        question: "Which stock exchange is Aeroplay's parent company, Maxposure Limited, listed on?",
        options: ["BSE (Bombay Stock Exchange)", "SGX (Singapore Exchange)", "NSE (National Stock Exchange of India)", "LSE (London Stock Exchange)"],
        correctIndex: 2,
        explanation: "Maxposure Limited is listed on India's National Stock Exchange (NSE).",
      },
      {
        id: "about-q4",
        question: "How many countries does Aeroplay operate in?",
        options: ["5+", "7+", "9+", "12+"],
        correctIndex: 2,
        explanation: "Aeroplay Entertainment operates across 9+ countries with offices in Singapore, USA, India, UK, Italy, Kenya, China, Malaysia, Kazakhstan, and UAE.",
      },
      {
        id: "about-q5",
        question: "What is Aeroplay Entertainment's official tagline?",
        options: ["Connect, Inspire, Deliver", "Engage, Entertain, Elevate", "Fly, Play, Discover", "Stream, Share, Soar"],
        correctIndex: 1,
        explanation: "Aeroplay's tagline is \"Engage, Entertain, Elevate\" — reflecting their mission to enhance the full passenger experience.",
      },
      {
        id: "about-q6",
        question: "Which group company specialises in multilingual content with 400+ studio relationships?",
        options: ["Alpha Pictures", "Games in Motion", "Silk Route Entertainment", "AeroLab Media"],
        correctIndex: 2,
        explanation: "Silk Route Entertainment has relationships spanning 100+ airlines and 400+ studios across 20+ languages.",
      },
      {
        id: "about-q7",
        question: "Who is the Chairman of Aeroplay's parent group, and what was his previous role?",
        options: ["Sunil Bhatt, former CFO of NDTV", "Dr. Torsten-Joern Klein, former CEO of Gruner + Jahr International", "Vikram Suri, former MD of HT Media", "Meena Sharma, former Director of SEBI"],
        correctIndex: 1,
        explanation: "Dr. Torsten-Joern Klein is the Chairman — he was formerly CEO of Gruner + Jahr International, a €2.1 billion publishing house.",
      },
      {
        id: "about-q8",
        question: "What is Aeroplay's debt level?",
        options: ["Moderate — typical for the IFE industry", "High — due to content licensing costs", "Zero debt, with positive cash flows", "Low — with a small working capital facility"],
        correctIndex: 2,
        explanation: "Aeroplay operates with zero debt and maintains positive cash flows — a key differentiator for long-term airline partnerships.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // MODULE 2 — CLIENTS & ACHIEVEMENTS
  // ─────────────────────────────────────────
  {
    id: "clients",
    slug: "clients",
    title: "Clients & Achievements",
    subtitle: "The airlines we serve and the awards we've earned",
    icon: "🏆",
    accentColor: "#8b5cf6",
    glowColor: "rgba(139,92,246,0.25)",
    bgColor: "#1a0a2e",
    sections: [
      {
        id: "clients-s1",
        title: "Current Airline Clients",
        icon: "✈️",
        content: {
          type: "list",
          style: "bullet",
          items: [
            { title: "Malaysia Airlines ★★★★", description: "Full-service Malaysian flag carrier, 4-star Skytrax rated. One of Aeroplay's flagship clients with comprehensive IFE content services.", accent: "#8b5cf6" },
            { title: "Philippine Airlines ★★★★", description: "4-star Skytrax carrier and flag carrier of the Philippines. Aeroplay manages their IFE programming, mobile app (PAL app), and digital marketing.", accent: "#8b5cf6" },
            { title: "Egypt Air ★★★", description: "Flag carrier of Egypt, 3-star Skytrax rated. Aeroplay handles IFE content programming and Arabic-language content curation.", accent: "#8b5cf6" },
            { title: "Kenya Airways ★★★", description: "The Pride of Africa — 3-star Skytrax rated. Aeroplay manages content and IFE services for routes across Africa and internationally.", accent: "#8b5cf6" },
            { title: "Air Arabia", description: "Leading low-cost carrier in the Middle East and North Africa. Aeroplay provides IFE content services for their growing route network.", accent: "#8b5cf6" },
            { title: "Air Asia X", description: "AirAsia's long-haul affiliate. Aeroplay delivers IFE content for their wide-body fleet serving long-haul leisure routes.", accent: "#8b5cf6" },
            { title: "Batik Air", description: "Full-service airline operating under the Lion Air Group. Aeroplay manages their IFE content programming across domestic and international routes.", accent: "#8b5cf6" },
            { title: "Citilink", description: "Indonesian low-cost carrier, Garuda Indonesia subsidiary. Aeroplay provides content services for their domestic and regional network.", accent: "#8b5cf6" },
            { title: "Royal Brunei Airlines", description: "Flag carrier of Brunei Darussalam. Aeroplay handles IFE content with a focus on family-friendly and culturally appropriate programming.", accent: "#8b5cf6" },
            { title: "Air Mauritius", description: "Flag carrier of Mauritius. Aeroplay delivers IFE content for routes connecting Africa, Asia, and Europe.", accent: "#8b5cf6" },
            { title: "Badr Airlines", description: "Sudanese carrier served by Aeroplay's Middle East and Africa content operations.", accent: "#8b5cf6" },
            { title: "Air India Express", description: "Air India's low-cost subsidiary. Aeroplay provides IFE content leveraging their deep Thales integration expertise for Air India group aircraft.", accent: "#8b5cf6" },
            { title: "IndiGo", description: "India's largest airline by market share. Aeroplay supports IFE content for select fleet segments.", accent: "#8b5cf6" },
            { title: "Firefly Airlines", description: "Malaysian regional carrier, subsidiary of Malaysia Airlines. Aeroplay extends their Malaysia Airlines relationship to regional operations.", accent: "#8b5cf6" },
            { title: "Malindo Air", description: "Malaysian full-service carrier (now rebranded as Batik Air Malaysia). Aeroplay has managed their IFE content programming.", accent: "#8b5cf6" },
            { title: "Saudia Cargo", description: "The cargo division of Saudi Arabian Airlines. Aeroplay handles in-flight entertainment for crew entertainment on cargo operations.", accent: "#8b5cf6" },
          ],
        },
      },
      {
        id: "clients-s2",
        title: "Past Clients",
        icon: "📋",
        content: {
          type: "list",
          style: "bullet",
          items: [
            { title: "Garuda Indonesia ★★★★★", description: "5-star Skytrax rated Indonesian flag carrier — the highest Skytrax rating of any Aeroplay client. Garuda won the World's Best Cabin Crew award during their Aeroplay partnership.", accent: "#f59e0b" },
            { title: "Silk Air", description: "Singapore Airlines' regional subsidiary (now merged into Singapore Airlines). Aeroplay managed IFE content for their regional Southeast Asian network.", accent: "#8b5cf6" },
            { title: "Tigerair", description: "Budget carrier (now merged into Scoot/Singapore Airlines group). Aeroplay provided content services during their independent operation.", accent: "#8b5cf6" },
            { title: "Mandala Airlines", description: "Indonesian carrier for whom Aeroplay provided IFE content services.", accent: "#8b5cf6" },
            { title: "Jetstar Asia", description: "Singapore-based Jetstar affiliate. Aeroplay managed IFE content for their low-cost long-haul routes.", accent: "#8b5cf6" },
          ],
        },
      },
      {
        id: "clients-s3",
        title: "Group Clients — Neutral Digital",
        icon: "🖥️",
        content: {
          type: "text",
          paragraphs: [
            "Neutral Digital, Aeroplay's GUI design subsidiary, works with an extensive client base of 50+ major airlines and aerospace companies — many of which are not in Aeroplay's direct content client portfolio. This demonstrates the broader reach of the Aeroplay Group.",
            "Neutral Digital's 50+ airline GUI clients include some of the world's largest and most prestigious carriers: Singapore Airlines, Emirates, Etihad, Qatar Airways, Lufthansa, British Airways, Air France, KLM, Cathay Pacific, Korean Air, Japan Airlines, ANA, Turkish Airlines, and many others. Their 25 years of aviation interface expertise makes them a trusted partner for carriers that demand best-in-class passenger-facing technology.",
          ],
        },
      },
      {
        id: "clients-s4",
        title: "Group Clients — Maxposure Limited",
        icon: "📰",
        content: {
          type: "list",
          style: "bullet",
          items: [
            { title: "Air India", description: "Flagship Indian carrier — Maxposure manages inflight magazine and content services.", accent: "#8b5cf6" },
            { title: "IndiGo", description: "India's largest carrier by market share.", accent: "#8b5cf6" },
            { title: "SpiceJet", description: "Indian low-cost carrier.", accent: "#8b5cf6" },
            { title: "Go First (GoAir)", description: "Indian low-cost carrier.", accent: "#8b5cf6" },
            { title: "Vistara", description: "Tata-Singapore Airlines joint venture (now merged with Air India).", accent: "#8b5cf6" },
            { title: "Air India Express", description: "Air India's budget subsidiary.", accent: "#8b5cf6" },
            { title: "Star Air", description: "Indian regional carrier.", accent: "#8b5cf6" },
            { title: "Blue Dart Aviation", description: "Cargo carrier.", accent: "#8b5cf6" },
            { title: "Akasa Air", description: "India's newest major carrier.", accent: "#8b5cf6" },
            { title: "TruJet", description: "Indian regional airline.", accent: "#8b5cf6" },
            { title: "Zoom Air", description: "Indian carrier.", accent: "#8b5cf6" },
            { title: "Air Odisha", description: "Regional connectivity airline.", accent: "#8b5cf6" },
          ],
        },
      },
      {
        id: "clients-s5",
        title: "Client Awards & Achievements",
        icon: "🥇",
        content: {
          type: "timeline",
          items: [
            {
              year: "2020",
              items: [
                "Kenya Airways recognized with Best Economy Class IFE in Africa award",
                "Egypt Air wins Best IFE in North Africa category at Apex Awards",
              ],
            },
            {
              year: "2021",
              items: [
                "Malaysia Airlines wins Skytrax World's Best Airline Staff Service in Southeast Asia",
                "Philippine Airlines earns Skytrax 4-Star Airline certification",
                "Garuda Indonesia named World's Best Cabin Crew (during Aeroplay partnership period)",
              ],
            },
            {
              year: "2022",
              items: [
                "Malaysia Airlines retains 4-Star Skytrax certification",
                "Egypt Air IFE upgrade project completed — new Thales system with Aeroplay content",
                "Kenya Airways expands IFE content offering with Aeroplay — adds African originals",
              ],
            },
            {
              year: "2023",
              items: [
                "Philippine Airlines PAL App nominated for Best Airline App at Passenger Experience Awards",
                "Aeroplay group wins Best IFE Content Provider — Asia at APEX Expo",
                "Air Arabia expands to 5 new routes with Aeroplay IFE support",
              ],
            },
            {
              year: "2024",
              items: [
                "Malaysia Airlines wins World's Best Airline for Southeast Asia Premium Economy",
                "AeroLab TPN Gold Shield status renewed through December 2027",
                "Aeroplay expands Africa presence — adds Badr Airlines and expands Kenya Airways contract",
              ],
            },
            {
              year: "2025",
              items: [
                "Aeroplay Group reaches 20+ active airline clients milestone",
                "Neutral Digital reaches 50+ airline GUI client milestone",
                "Silk Route Entertainment expands to 400+ studio relationships across 20+ languages",
              ],
            },
          ],
        },
      },
    ],
    quiz: [
      {
        id: "clients-q1",
        question: "Which airline holds the highest Skytrax rating of any Aeroplay client?",
        options: ["Malaysia Airlines (4-star)", "Philippine Airlines (4-star)", "Garuda Indonesia (5-star)", "Egypt Air (3-star)"],
        correctIndex: 2,
        explanation: "Garuda Indonesia holds a 5-star Skytrax rating — the highest of any Aeroplay client. They are listed as a past client.",
      },
      {
        id: "clients-q2",
        question: "Which award did Garuda Indonesia win during their Aeroplay partnership period?",
        options: ["Best IFE in Asia", "World's Best Cabin Crew", "Best Economy Class Entertainment", "Skytrax Airline of the Year"],
        correctIndex: 1,
        explanation: "Garuda Indonesia won the World's Best Cabin Crew award at the Skytrax World Airline Awards during their partnership with Aeroplay.",
      },
      {
        id: "clients-q3",
        question: "How many active airline clients does Aeroplay currently serve?",
        options: ["8+", "12+", "16+", "20+"],
        correctIndex: 3,
        explanation: "Aeroplay currently serves 20+ active airline clients across Asia, Africa, the Middle East, and beyond.",
      },
      {
        id: "clients-q4",
        question: "Which Aeroplay group company works with 50+ major airlines on GUI design?",
        options: ["AeroLab Media", "Silk Route Entertainment", "Neutral Digital", "Games in Motion"],
        correctIndex: 2,
        explanation: "Neutral Digital, Aeroplay's GUI design subsidiary, has a client base of 50+ major airlines including Singapore Airlines, Emirates, and Lufthansa.",
      },
      {
        id: "clients-q5",
        question: "What is the Skytrax rating of Malaysia Airlines?",
        options: ["3-star", "4-star", "5-star", "Unrated"],
        correctIndex: 1,
        explanation: "Malaysia Airlines holds a 4-star Skytrax rating and is one of Aeroplay's flagship current clients.",
      },
      {
        id: "clients-q6",
        question: "Which airline is described as 'The Pride of Africa' in Aeroplay's portfolio?",
        options: ["Air Mauritius", "Egypt Air", "Badr Airlines", "Kenya Airways"],
        correctIndex: 3,
        explanation: "Kenya Airways is known as 'The Pride of Africa' — a 3-star Skytrax carrier and key Aeroplay client for African routes.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // MODULE 3 — KEY DIFFERENTIATORS
  // ─────────────────────────────────────────
  {
    id: "differentiators",
    slug: "differentiators",
    title: "Key Differentiators",
    subtitle: "Why airlines choose Aeroplay over competitors",
    icon: "⚡",
    accentColor: "#10b981",
    glowColor: "rgba(16,185,129,0.25)",
    bgColor: "#0a2818",
    sections: [
      {
        id: "diff-s1",
        title: "Direct Hollywood Studio Relationships",
        icon: "🎬",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Aeroplay is one of the few IFE content service providers with direct licensing agreements with all five major Hollywood studios. This is a critical competitive differentiator — most CSPs access content through aggregators or sub-licensors, which adds cost, complexity, and delay.",
                "Direct relationships mean Aeroplay can offer airlines first-run titles at the same time they become available for inflight distribution — within weeks of theatrical release. There are no middlemen, no sub-licensing markups, and no delays caused by third-party negotiations.",
              ],
            },
            {
              type: "stat-highlight",
              stats: [
                { label: "Disney", value: "Direct", icon: "🏰", note: "Marvel, Pixar, Star Wars, Disney classics", accent: "#10b981" },
                { label: "Paramount", value: "Direct", icon: "⛰️", note: "Mission Impossible, Transformers, Top Gun", accent: "#10b981" },
                { label: "Sony Pictures", value: "Direct", icon: "🎭", note: "Spider-Man, James Bond, Jumanji", accent: "#10b981" },
                { label: "Warner Bros.", value: "Direct", icon: "🛡️", note: "DC Universe, Harry Potter, Game of Thrones", accent: "#10b981" },
                { label: "NBCUniversal", value: "Direct", icon: "🦚", note: "Fast & Furious, Jurassic World, The Office", accent: "#10b981" },
              ],
            },
            {
              type: "text",
              paragraphs: [
                "Additionally, Aeroplay holds deep catalogs from all five studios — not just new releases. This means airlines can offer passengers a rich mix of recent blockbusters alongside beloved classics, all from one trusted partner.",
              ],
            },
          ],
        },
      },
      {
        id: "diff-s2",
        title: "TPN Certified Lab — Mumbai & Delhi",
        icon: "🔒",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Trusted Partner Network (TPN) certification is a film and television industry standard developed by the Motion Picture Association (MPA). It is required by major Hollywood studios before they will release premium, first-run content to any facility.",
                "Aeroplay's AeroLab operates two TPN-certified facilities:",
              ],
            },
            {
              type: "stat-highlight",
              stats: [
                { label: "Mumbai Lab", value: "Gold Shield", icon: "🥇", note: "TPN Gold Shield Status — valid through December 2027. Highest level of TPN certification.", accent: "#f59e0b" },
                { label: "Delhi Studio", value: "Blue Shield", icon: "🔵", note: "TPN Blue Shield Status. Covers physical, IT, content handling, and personnel security.", accent: "#3b82f6" },
              ],
            },
            {
              type: "text",
              paragraphs: [
                "TPN certification covers four critical areas: Physical Security (facility access controls, cameras, locks), IT Security (network segmentation, encryption, cyber protocols), Content Handling (secure ingest, processing, and watermarking), and Personnel Security (background checks, NDA protocols, access logging).",
                "For airlines: TPN certification means the content on your IFE system has been handled with the highest level of security. It protects the airline from liability and ensures they always have access to the latest Hollywood titles — because the studios trust AeroLab with their most valuable assets.",
              ],
            },
          ],
        },
      },
      {
        id: "diff-s3",
        title: "Thales Integration Experience",
        icon: "🛩️",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Thales (now Thales Avionics, formerly Thales In-Flight Systems) is one of the most widely deployed IFE hardware OEMs in the world, with their systems installed on hundreds of aircraft operated by premium carriers globally.",
                "Aeroplay has one of the deepest Thales integration track records of any CSP — demonstrated through their work with Air India across multiple Thales system generations.",
              ],
            },
            {
              type: "stat-highlight",
              stats: [
                { label: "Thales i4000", value: "Integrated", icon: "✅", accent: "#10b981" },
                { label: "Thales i5000", value: "Integrated", icon: "✅", accent: "#10b981" },
                { label: "Thales i8000", value: "Integrated", icon: "✅", accent: "#10b981" },
                { label: "Thales Avant", value: "Integrated", icon: "✅", accent: "#10b981" },
                { label: "Encrypted Disk Creation", value: "In-House", icon: "💾", note: "No outsourcing — faster, more secure", accent: "#f59e0b" },
                { label: "Same Timezone", value: "Advantage", icon: "🕐", note: "India-based team for India-region airlines", accent: "#f59e0b" },
              ],
            },
            {
              type: "text",
              paragraphs: [
                "Critically, Aeroplay performs encrypted disk creation in-house — a process that many CSPs outsource. This gives Aeroplay faster turnaround times, tighter security, and more control over the end-to-end content delivery chain for Thales system carriers.",
              ],
            },
          ],
        },
      },
      {
        id: "diff-s4",
        title: "Comprehensive IFE Systems Experience",
        icon: "🖥️",
        content: {
          type: "matrix",
          columns: ["System", "Clients Served"],
          groups: [
            {
              oemName: "Panasonic",
              systems: [
                { system: "eX1", clients: ["Malaysia Airlines", "Philippine Airlines"] },
                { system: "eX2", clients: ["Air Arabia", "Royal Brunei"] },
                { system: "eX3", clients: ["Kenya Airways", "Egypt Air"] },
                { system: "X Series (legacy)", clients: ["Garuda Indonesia", "Silk Air"] },
              ],
            },
            {
              oemName: "Thales",
              systems: [
                { system: "i4000", clients: ["Air India", "Air India Express"] },
                { system: "i5000", clients: ["Air India"] },
                { system: "i6000", clients: ["Egypt Air"] },
                { system: "i8000", clients: ["Air India", "IndiGo"] },
                { system: "Avant", clients: ["Air India", "Batik Air"] },
              ],
            },
            {
              oemName: "Safran",
              systems: [
                { system: "RAVE (Lumexis)", clients: ["Citilink", "Air Mauritius"] },
              ],
            },
            {
              oemName: "Bluebox",
              systems: [
                { system: "Bluebox Wow (Portable)", clients: ["Air Arabia", "Badr Airlines"] },
              ],
            },
            {
              oemName: "AeroHub",
              systems: [
                { system: "AeroHub PRO", clients: ["Multiple budget carriers"] },
              ],
            },
            {
              oemName: "Other / Legacy",
              systems: [
                { system: "Zodiac ISIS", clients: ["Multiple carriers"] },
                { system: "Rockwell Collins", clients: ["Air Mauritius"] },
                { system: "DivX / SITA", clients: ["Legacy clients"] },
              ],
            },
          ],
        },
      },
      {
        id: "diff-s5",
        title: "Onboard Apps, Games, Safety Videos & Boarding",
        icon: "📱",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Beyond traditional IFE content, Aeroplay offers a comprehensive suite of ancillary digital products that enhance the passenger experience and open new revenue streams for airlines.",
              ],
            },
            {
              type: "list",
              style: "bullet",
              items: [
                { title: "VistaApps", description: "In-house designed and developed apps: Cabin Explorer (3D cabin walkthrough), Fleet Explorer (aircraft information), Routes Explorer (interactive route maps), QURAN Li (Islamic prayer companion for Muslim passengers). All apps are maintained on iOS and Android.", icon: "📱", accent: "#10b981" },
                { title: "Games in Motion", description: "7 HTML5 games designed specifically for IFE systems. Works on seatback screens and personal devices. No app download required. Games are customizable with airline branding.", icon: "🎮", accent: "#10b981" },
                { title: "Safety Videos", description: "In-house production of customized safety videos for airlines. Produced to airline brand standards with full crew guidance and regulatory compliance.", icon: "🎥", accent: "#10b981" },
                { title: "Boarding Music", description: "Curated boarding music playlists and custom compositions that reflect the airline's brand identity and home region.", icon: "🎵", accent: "#10b981" },
                { title: "AeroHub Wireless", description: "Portable AeroHub PRO system for airlines without seatback IFE — streams all content wirelessly to 100 passenger devices.", icon: "📡", accent: "#10b981" },
              ],
            },
          ],
        },
      },
      {
        id: "diff-s6",
        title: "Advertising Capabilities & Financial Stability",
        icon: "💰",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "stat-highlight",
              stats: [
                { label: "Years in Inflight Advertising", value: "18+", icon: "📅", accent: "#10b981" },
                { label: "Unique Monthly Advertisers", value: "250+", icon: "🏢", accent: "#10b981" },
                { label: "Major Ad Agency Relationships", value: "All", icon: "🤝", accent: "#10b981" },
                { label: "Debt Level", value: "Zero", icon: "💚", accent: "#10b981" },
                { label: "Cash Flow", value: "Positive", icon: "📈", accent: "#10b981" },
              ],
            },
            {
              type: "text",
              paragraphs: [
                "Aeroplay has been placing advertising on IFE systems for 18+ years — longer than most of their competitors have existed. This experience translates into proven revenue for airlines through advertising inventory monetization.",
                "Brands that have advertised through Aeroplay's IFE network include Samsung, Intel, Rolex, Audi, Unilever, and many more global names. Relationships with all major advertising agencies mean Aeroplay can fill ad inventory efficiently and command competitive rates.",
                "Financial stability: Aeroplay operates with zero debt and maintains positive cash flows. For airlines, this means a content partner that will be there for the long term — no risk of a CSP going under mid-contract.",
              ],
            },
          ],
        },
      },
    ],
    quiz: [
      {
        id: "diff-q1",
        question: "How many major Hollywood studios does Aeroplay have direct licensing relationships with?",
        options: ["2 studios", "3 studios", "5 studios", "7 studios"],
        correctIndex: 2,
        explanation: "Aeroplay has direct licensing with all 5 major Hollywood studios: Disney, Paramount, Sony Pictures, Warner Bros., and NBCUniversal.",
      },
      {
        id: "diff-q2",
        question: "What is the status of Aeroplay's Mumbai AeroLab TPN certification?",
        options: ["TPN Silver Shield", "TPN Blue Shield", "TPN Gold Shield (valid through Dec 2027)", "TPN Provisional"],
        correctIndex: 2,
        explanation: "Aeroplay's Mumbai Lab holds TPN Gold Shield Status — the highest level — valid through December 2027.",
      },
      {
        id: "diff-q3",
        question: "Which airline did Aeroplay integrate Thales i4000, i5000, i8000, and Avant systems for?",
        options: ["Malaysia Airlines", "Philippine Airlines", "Air India", "Egypt Air"],
        correctIndex: 2,
        explanation: "Aeroplay directly integrated all four Thales system generations (i4000, i5000, i8000, and Avant) for Air India.",
      },
      {
        id: "diff-q4",
        question: "What does TPN stand for in the context of content security?",
        options: ["Technical Protocol Network", "Trusted Partner Network", "Tracked Performance Node", "Transmission Protection Network"],
        correctIndex: 1,
        explanation: "TPN stands for Trusted Partner Network — a film and TV industry security standard developed by the Motion Picture Association (MPA).",
      },
      {
        id: "diff-q5",
        question: "How many passenger devices can AeroHub PRO connect to simultaneously?",
        options: ["20 devices", "50 devices", "75 devices", "100 devices"],
        correctIndex: 3,
        explanation: "AeroHub PRO can connect up to 100 passenger devices simultaneously via WiFi, with no aircraft modification required.",
      },
      {
        id: "diff-q6",
        question: "For how many years has Aeroplay been placing advertising on IFE systems?",
        options: ["5+ years", "10+ years", "18+ years", "25+ years"],
        correctIndex: 2,
        explanation: "Aeroplay has 18+ years of inflight advertising experience, working with 250+ unique monthly advertisers and all major advertising agencies.",
      },
      {
        id: "diff-q7",
        question: "What is the key advantage of Aeroplay performing encrypted disk creation in-house for Thales systems?",
        options: ["It reduces content licensing costs", "It enables faster turnaround, tighter security, and more control", "It allows AeroHub to be used instead", "It eliminates the need for TPN certification"],
        correctIndex: 1,
        explanation: "In-house encrypted disk creation gives Aeroplay faster turnaround times, tighter security, and end-to-end control — many CSPs outsource this step.",
      },
      {
        id: "diff-q8",
        question: "How many HTML5 games does Games in Motion offer for IFE systems?",
        options: ["3 games", "5 games", "7 games", "10 games"],
        correctIndex: 2,
        explanation: "Games in Motion offers 7 HTML5 games designed specifically for IFE systems — playable on seatback screens and personal devices with no app download.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // MODULE 4 — MARKETING SERVICES
  // ─────────────────────────────────────────
  {
    id: "marketing",
    slug: "marketing",
    title: "Marketing Services",
    subtitle: "Digital, print, and in-flight marketing solutions",
    icon: "📣",
    accentColor: "#ef4444",
    glowColor: "rgba(239,68,68,0.25)",
    bgColor: "#2a0a0a",
    sections: [
      {
        id: "mkt-s1",
        title: "Microsites",
        icon: "🌐",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Aeroplay designs and manages customized IFE microsites for airline clients — interactive digital sections within the IFE system that showcase entertainment content in an engaging, branded way.",
                "IFE microsites cover three primary content categories: Movies (upcoming releases, now playing, behind-the-scenes), TV Series (current episodes, series guides, binge recommendations), and Audio (music albums, podcasts, audiobooks). Each microsite is refreshed with every IFE programming cycle — typically monthly.",
                "Microsites are designed to increase passenger discovery of content, drive engagement, and create a premium feel that differentiates the airline's IFE from competitors. They are customized to the airline's brand guidelines including color, typography, and tone of voice.",
              ],
            },
          ],
        },
      },
      {
        id: "mkt-s2",
        title: "Mobile Apps",
        icon: "📱",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Aeroplay develops and maintains custom mobile applications for airlines through their VistaApps subsidiary. Mobile app development covers the full lifecycle: design, development, testing, App Store/Play Store submission, and ongoing maintenance and updates.",
                "A flagship example is the Philippine Airlines (PAL) mobile app — developed and maintained by Aeroplay. The app provides passengers with flight information, entertainment previews, loyalty program integration, and in-app ancillary purchases.",
              ],
            },
            {
              type: "list",
              style: "bullet",
              items: [
                { title: "In-House Development", description: "Full design and development capability — no outsourcing. iOS and Android native apps, or cross-platform React Native builds.", icon: "💻", accent: "#ef4444" },
                { title: "Entertainment Preview Integration", description: "App surfaces IFE content previews, allowing passengers to browse movies and music before boarding.", icon: "🎬", accent: "#ef4444" },
                { title: "Maintenance & Updates", description: "Aeroplay handles all ongoing app updates, OS compatibility maintenance, and feature additions.", icon: "🔧", accent: "#ef4444" },
                { title: "Custom Branded Experience", description: "Apps are fully branded to the airline's visual identity — no generic templates.", icon: "🎨", accent: "#ef4444" },
              ],
            },
          ],
        },
      },
      {
        id: "mkt-s3",
        title: "Magazines & IFE Guides",
        icon: "📰",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Aeroplay produces inflight magazines and IFE content guides for airline clients. These publications are available both in print (onboard) and as digital editions accessible through the IFE system.",
                "Inflight magazines feature travel destination content, lifestyle features, airline news, and curated entertainment recommendations — all customized to the airline's brand, routes, and passenger demographics.",
                "IFE Guides are cycle-specific publications (refreshed every IFE programming cycle) that preview the new content available each month — helping passengers quickly discover what's new in movies, TV, and audio.",
              ],
            },
            {
              type: "stat-highlight",
              stats: [
                { label: "Refresh Cycle", value: "Monthly", icon: "🔄", note: "IFE Guides updated with every programming cycle", accent: "#ef4444" },
                { label: "Format", value: "Print + Digital", icon: "📱", note: "Both onboard print editions and IFE-embedded digital versions", accent: "#ef4444" },
                { label: "Content", value: "Fully Custom", icon: "✏️", note: "Written and designed to each airline's brand standards", accent: "#ef4444" },
              ],
            },
          ],
        },
      },
      {
        id: "mkt-s4",
        title: "Social Media, EDM & Promo Videos",
        icon: "📲",
        content: {
          type: "list",
          style: "bullet",
          items: [
            { title: "Social Media Campaigns", description: "Aeroplay manages IFE-focused social media content for airline clients on Facebook, Instagram, and Twitter/X. Campaigns promote new content additions, studio partnerships, and seasonal entertainment highlights.", icon: "📱", accent: "#ef4444" },
            { title: "Email Direct Marketing (EDM)", description: "Cycle-specific emailers sent to the airline's passenger mailing list. Each EDM previews the new IFE content lineup — movies, TV shows, audio — with direct links to booking and entertainment information.", icon: "✉️", accent: "#ef4444" },
            { title: "Promotional Teaser Videos", description: "Short-form video content (30-60 seconds) produced for social media and onboard pre-IFE display. Teaser videos showcase the new content lineup in a cinematic, engaging format that builds excitement.", icon: "🎥", accent: "#ef4444" },
            { title: "Studio Partnership Co-Marketing", description: "Aeroplay leverages its direct studio relationships to secure co-marketing assets — exclusive stills, trailers, and behind-the-scenes content that airlines can use across their own channels.", icon: "🤝", accent: "#ef4444" },
          ],
        },
      },
    ],
    quiz: [
      {
        id: "mkt-q1",
        question: "What are the three main content categories covered in Aeroplay's IFE microsites?",
        options: ["Movies, Games, Sports", "Movies, TV Series, Audio", "News, Movies, Documentaries", "Audio, Games, Travel Guides"],
        correctIndex: 1,
        explanation: "Aeroplay's IFE microsites cover three categories: Movies, TV Series, and Audio — each refreshed every programming cycle.",
      },
      {
        id: "mkt-q2",
        question: "Which airline's mobile app is cited as a flagship example of Aeroplay's app development work?",
        options: ["Malaysia Airlines", "Kenya Airways", "Philippine Airlines", "Egypt Air"],
        correctIndex: 2,
        explanation: "The Philippine Airlines (PAL) app is the flagship example — developed and maintained by Aeroplay through their VistaApps subsidiary.",
      },
      {
        id: "mkt-q3",
        question: "How frequently are Aeroplay's IFE Guides refreshed?",
        options: ["Every 2 weeks", "Monthly", "Every quarter", "Every 6 months"],
        correctIndex: 1,
        explanation: "IFE Guides are refreshed monthly — every programming cycle — to preview the new content lineup for passengers.",
      },
      {
        id: "mkt-q4",
        question: "Which social media platforms does Aeroplay manage IFE campaigns on for airline clients?",
        options: ["Only Instagram and TikTok", "Facebook, Instagram, and Twitter/X", "LinkedIn, Facebook, and YouTube", "Instagram, YouTube, and Snapchat"],
        correctIndex: 1,
        explanation: "Aeroplay manages IFE-focused campaigns on Facebook, Instagram, and Twitter/X for airline clients.",
      },
      {
        id: "mkt-q5",
        question: "What is the length of promotional teaser videos that Aeroplay produces for IFE content launches?",
        options: ["5-10 seconds", "15-20 seconds", "30-60 seconds", "2-3 minutes"],
        correctIndex: 2,
        explanation: "Aeroplay produces short-form promotional teaser videos of 30-60 seconds for social media and onboard pre-IFE display.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // MODULE 5 — TECHNOLOGY & INNOVATION
  // ─────────────────────────────────────────
  {
    id: "tech",
    slug: "tech",
    title: "Technology & Innovation",
    subtitle: "The platforms, tools, and R&D powering Aeroplay",
    icon: "🚀",
    accentColor: "#3b82f6",
    glowColor: "rgba(59,130,246,0.25)",
    bgColor: "#0a1a2a",
    sections: [
      {
        id: "tech-s1",
        title: "CMS Workflow Automation Suite",
        icon: "⚙️",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Aeroplay has built a proprietary Content Management System (CMS) workflow automation suite that manages the end-to-end lifecycle of IFE content — from acquisition through delivery. This suite comprises four interconnected platforms.",
              ],
            },
            {
              type: "stat-highlight",
              stats: [
                { label: "Nucleus", value: "Cloud Media Center", icon: "☁️", note: "Programming tool — manages titles, proposals, bookings, POs, and load sheets", accent: "#3b82f6" },
                { label: "AeroLab", value: "TPN-Certified Lab", icon: "🔬", note: "Physical encoding and QC facility — Mumbai (Gold) and Delhi (Blue)", accent: "#3b82f6" },
                { label: "EnRoute", value: "Cloud Delivery (Dev)", icon: "🚛", note: "Cloud-based content delivery system — currently under development", accent: "#3b82f6" },
                { label: "Skyview", value: "Analytics Platform", icon: "📊", note: "Unified reporting and analytics for all airline clients", accent: "#3b82f6" },
              ],
            },
          ],
        },
      },
      {
        id: "tech-s2",
        title: "Nucleus Programming Tool",
        icon: "☁️",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Nucleus is Aeroplay's cloud-based IFE programming management platform. It serves as the central hub for all content scheduling, licensing, and delivery workflow management — replacing manual spreadsheet-based processes that still plague the IFE industry.",
              ],
            },
            {
              type: "list",
              style: "numbered",
              items: [
                { title: "Title Management", description: "Centralized database of all licensed titles across all studios. Tracks availability windows, territory rights, language versions, and technical specifications for every piece of content.", icon: "📚", accent: "#3b82f6" },
                { title: "Content Proposal", description: "Generate airline-specific content proposals based on their IFE system, passenger demographics, and licensing availability. Proposals are generated in minutes, not days.", icon: "📋", accent: "#3b82f6" },
                { title: "Booking Sheet", description: "Digital content scheduling tool. Creates and manages the IFE programming schedule for each airline cycle — organizing content across all channels (movies, TV, audio, games, etc.).", icon: "📅", accent: "#3b82f6" },
                { title: "Purchase Order", description: "Automated PO generation and tracking for content licensing. Integrates with studio billing systems to streamline financial reconciliation.", icon: "🧾", accent: "#3b82f6" },
                { title: "Load Sheet", description: "Final technical delivery specification document. Defines exactly what content, in what format, at what quality, goes onto each airline's IFE system for each cycle.", icon: "📝", accent: "#3b82f6" },
              ],
            },
          ],
        },
      },
      {
        id: "tech-s3",
        title: "Skyview Analytics Platform",
        icon: "📊",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Skyview is Aeroplay's unified analytics platform for airline IFE performance reporting. In an industry where most airlines receive their IFE analytics as manual Excel files months after the fact, Skyview provides real-time, actionable insights.",
              ],
            },
            {
              type: "list",
              style: "bullet",
              items: [
                { title: "Unified Multi-Airline Reporting", description: "A single dashboard interface that can show analytics across multiple airline clients simultaneously — valuable for Aeroplay's team and for airline group clients.", icon: "📈", accent: "#3b82f6" },
                { title: "User Statistics", description: "Detailed passenger usage data: sessions per flight, content interaction rates, completion rates, demographic breakdowns by route and aircraft type.", icon: "👥", accent: "#3b82f6" },
                { title: "Content Playback Metrics", description: "Track how each title performs — number of plays, average watch time, completion rate, rating by route. Identifies underperforming content before the cycle ends.", icon: "▶️", accent: "#3b82f6" },
                { title: "Top 10 Rankings", description: "Automated top 10 content ranking lists by category (movies, TV, audio) — updated in near real-time from IFE system data.", icon: "🏆", accent: "#3b82f6" },
                { title: "Dark & Light Mode", description: "Skyview offers both dark and light interface modes — a detail that reflects Aeroplay's commitment to building tools their clients actually want to use.", icon: "🌙", accent: "#3b82f6" },
              ],
            },
          ],
        },
      },
      {
        id: "tech-s4",
        title: "Cloud Automation, GUI Design & AI Dubbing",
        icon: "🤖",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Aeroplay's technology pipeline combines cloud automation, best-in-class GUI design, and cutting-edge AI capabilities to deliver a complete, end-to-end IFE technology solution.",
              ],
            },
            {
              type: "list",
              style: "numbered",
              items: [
                { title: "Final Programming (Nucleus)", description: "Content schedule finalized in Nucleus — all titles, versions, territories confirmed.", icon: "☁️", accent: "#3b82f6" },
                { title: "Transcoding via Castlabs", description: "Content transcoded through Castlabs — an industry-leading transcoding and DRM platform used by major streaming services and IFE companies worldwide.", icon: "🔄", accent: "#3b82f6" },
                { title: "Quality Control (AeroLab)", description: "All transcoded content passes through TPN-certified AeroLab QC — frame-accurate checks, audio sync verification, subtitle accuracy, and DRM validation.", icon: "✅", accent: "#3b82f6" },
                { title: "Content Delivery via Cinesend", description: "Approved content delivered to airlines via Cinesend — a specialized cloud delivery platform for the entertainment industry with airline-specific delivery workflows.", icon: "🚀", accent: "#3b82f6" },
              ],
            },
            {
              type: "stat-highlight",
              stats: [
                { label: "GUI Design", value: "Neutral Digital", icon: "🖥️", note: "25 years of aviation UX — 50+ airline clients", accent: "#3b82f6" },
                { label: "AI Dubbing", value: "Generative AI", icon: "🎙️", note: "Multilingual AI dubs for Indian, SEA, and Middle Eastern languages", accent: "#3b82f6" },
              ],
            },
          ],
        },
      },
      {
        id: "tech-s5",
        title: "Immersive Solutions, R&D, Cabinly & PRAMs",
        icon: "🥽",
        content: {
          type: "mixed",
          blocks: [
            {
              type: "text",
              paragraphs: [
                "Aeroplay's R&D division explores the frontier of passenger experience technology — from immersive VR experiences to gesture-controlled IFE and AI-powered passenger assistance.",
              ],
            },
            {
              type: "list",
              style: "bullet",
              items: [
                { title: "Qatar Airways QVerse", description: "Immersive metaverse experience developed in partnership with Qatar Airways — allows passengers to explore virtual environments and engage with content in entirely new ways.", icon: "🌐", accent: "#3b82f6" },
                { title: "Cathay Pacific A350 VR", description: "Virtual Reality experience for Cathay Pacific's A350 — passengers can explore destinations and premium cabin features before the flight.", icon: "🥽", accent: "#3b82f6" },
                { title: "British Airways Club World VR", description: "VR experience for British Airways' Club World business class — destination preview experiences for long-haul premium passengers.", icon: "🥽", accent: "#3b82f6" },
                { title: "Air Canada Dreamliner VR", description: "VR content developed for Air Canada's Boeing 787 Dreamliner cabin — showcasing the aircraft's panoramic windows and premium amenities.", icon: "🥽", accent: "#3b82f6" },
                { title: "NOD Ring Gesture Control", description: "Partnership with Panasonic — NOD ring technology enables gesture-based IFE navigation. Passengers control the IFE system without touching the screen using subtle finger gestures.", icon: "💍", accent: "#3b82f6" },
                { title: "Cabinly Seat Viewer", description: "Interactive 3D seat viewer that allows passengers to explore cabin interiors, choose optimal seats, and unlock ancillary revenue for airlines through targeted upselling.", icon: "💺", accent: "#3b82f6" },
                { title: "VPAs / PRAMs (25+ Languages)", description: "Virtual Passenger Assistants (VPAs) and Pre-Recorded Announcement Modules (PRAMs) available in 25+ languages — covering Indian, Southeast Asian, Middle Eastern, European, and African languages.", icon: "🗣️", accent: "#3b82f6" },
              ],
            },
          ],
        },
      },
    ],
    quiz: [
      {
        id: "tech-q1",
        question: "What are the four platforms in Aeroplay's CMS Workflow Automation Suite?",
        options: [
          "Nucleus, SkyDash, AeroCloud, DataVault",
          "Nucleus, AeroLab, EnRoute, Skyview",
          "Skyview, Cinesend, AeroHub, Nucleus",
          "AeroLab, Castlabs, LoadPlanner, Skyview",
        ],
        correctIndex: 1,
        explanation: "The four platforms are: Nucleus (programming), AeroLab (TPN lab), EnRoute (cloud delivery, under dev), and Skyview (analytics).",
      },
      {
        id: "tech-q2",
        question: "What are the 5 features of Nucleus, Aeroplay's programming tool?",
        options: [
          "Title Library, Studio Portal, Cycle Planner, Invoice Manager, QC Dashboard",
          "Title Management, Content Proposal, Booking Sheet, Purchase Order, Load Sheet",
          "Content Ingest, Transcoding, QC, Delivery, Analytics",
          "Rights Management, Scheduling, Encoding, Distribution, Reporting",
        ],
        correctIndex: 1,
        explanation: "Nucleus has 5 features: Title Management, Content Proposal, Booking Sheet, Purchase Order, and Load Sheet.",
      },
      {
        id: "tech-q3",
        question: "Which platform is used for transcoding content in Aeroplay's delivery pipeline?",
        options: ["Cinesend", "AeroLab", "Castlabs", "EnRoute"],
        correctIndex: 2,
        explanation: "Castlabs is used for transcoding — it's an industry-leading transcoding and DRM platform. Content then goes through AeroLab QC before Cinesend delivery.",
      },
      {
        id: "tech-q4",
        question: "Which company provides GUI design for Aeroplay, and how many years of aviation UI experience do they have?",
        options: ["VistaApps — 10 years", "Neutral Digital — 25 years", "AeroLab — 18 years", "Games in Motion — 12 years"],
        correctIndex: 1,
        explanation: "Neutral Digital provides GUI design with 25 years of aviation interface expertise and a portfolio spanning 50+ major airline clients.",
      },
      {
        id: "tech-q5",
        question: "In how many languages are Aeroplay's VPAs/PRAMs available?",
        options: ["10+ languages", "15+ languages", "20+ languages", "25+ languages"],
        correctIndex: 3,
        explanation: "VPAs (Virtual Passenger Assistants) and PRAMs (Pre-Recorded Announcement Modules) are available in 25+ languages.",
      },
      {
        id: "tech-q6",
        question: "What is Cabinly?",
        options: [
          "A portable AeroHub WiFi streaming device",
          "An interactive 3D seat viewer for ancillary revenue",
          "A TPN-certified lab in Mumbai",
          "An AI dubbing platform for multilingual content",
        ],
        correctIndex: 1,
        explanation: "Cabinly is an interactive 3D seat viewer that allows passengers to explore cabin interiors and enables ancillary revenue through targeted upselling.",
      },
      {
        id: "tech-q7",
        question: "Which airline partnered with Aeroplay for QVerse, an immersive metaverse IFE experience?",
        options: ["Emirates", "Singapore Airlines", "Qatar Airways", "Cathay Pacific"],
        correctIndex: 2,
        explanation: "Qatar Airways partnered with Aeroplay for QVerse — an immersive metaverse experience allowing passengers to explore virtual environments.",
      },
      {
        id: "tech-q8",
        question: "What innovative gesture control technology did Aeroplay develop in partnership with Panasonic?",
        options: ["Eye-tracking navigation", "Voice control assistant", "NOD ring gesture control", "Touchless proximity sensor"],
        correctIndex: 2,
        explanation: "Aeroplay partnered with Panasonic to develop NOD ring gesture control — allowing passengers to navigate IFE using subtle finger gestures without touching the screen.",
      },
    ],
  },
];

// Helper functions
export function getModuleById(id: string): Module | undefined {
  return MODULES.find((m) => m.id === id);
}

export function getAllModuleIds(): string[] {
  return MODULES.map((m) => m.id);
}
