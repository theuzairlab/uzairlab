export type ProjectStatus = "LIVE" | "IN DEV" | "DELIVERED" | "MAINTAINENCE";

export interface Project {
  id: string;
  status: ProjectStatus;
  title: string;
  tagline: string;
  problem: string;
  built: string;
  stack: string[];
  proof: string;
  badge?: string;
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "clipsgen",
    status: "IN DEV",
    title: "ClipsGen AI",
    tagline: "AI video editor that turns long-form content into viral clips",
    problem:
      "Content creators waste hours manually cutting and captioning videos.",
    built:
      "Dual AI pipeline: YouTube caption fast-path for speed, AssemblyAI for word-level timestamps. Celery workers for async processing, smart cropping, auto-publish.",
    stack: [
      "Next.js 15",
      "FastAPI",
      "AssemblyAI",
      "Celery",
      "PostgreSQL",
      "Cloudflare R2",
      "Hetzner VPS",
    ],
    proof: "Building from scratch. I own infra, CI/CD, and roadmap.",
    links: {
      github: "https://github.com/theuzairlab/ClipsGen-AI",
    },
    featured: true,
    image: "/clipsgenai.png",
  },
  {
    id: "techtivai",
    status: "IN DEV",
    title: "TechTivAI",
    tagline: "AI-native automation platform that replaces entire ops workflows",
    problem:
      "Businesses spend thousands monthly on disconnected SaaS tools. They need AI agents that orchestrate work across systems — not just chatbots.",
    built:
      "LangGraph multi-agent system with Vapi voice interface and n8n workflow automation. Better Auth, Neon PostgreSQL, Cloudflare R2. Architected and built solo at NXTechnova.",
    stack: [
      "Next.js 15",
      "LangGraph",
      "Vapi",
      "n8n",
      "Better Auth",
      "Neon",
      "OpenAI API",
      "PostgreSQL",
      "Prisma",
      "Cloudflare R2",
      "Hetzner VPS",
    ],
    proof: "Solo architecture + development. Active build at NXTechnova.",
    links: {},
    featured: true,
    image: "/techtive.png",
  },
  {
    id: "wrenchex",
    status: "MAINTAINENCE",
    title: "WrenchEx",
    tagline: "Marketplace for auto parts, sellers, buyers, and workshops",
    problem:
      "No unified platform for Pakistan's fragmented auto parts market.",
    built:
      "Multi-role marketplace: sellers list parts, buyers search and order, workshops offer services. Full auth, listings, search, booking.",
    stack: [
      "Next.js App Router",
      "PostgreSQL",
      "Prisma",
      "Express.js",
      "TypeScript",
      "ImageKit",
      "Resend",
      "Vercel",
      "OTP Verification",
      "Multy Agent System",
      "CMS Dashboard",
      "Web Socket",
    ],
    proof: "Production-grade system with multi-role auth and real business logic.",
    links: {
      demo: "https://wrenchex.vercel.app/",
      github: "https://github.com/theuzairlab/wrenchex_frontend",
    },
    featured: true,
    image: "/wrenchex-img.png",
  },
  {
    id: "nxtflight",
    status: "LIVE",
    title: "NxtFlight",
    tagline: "Corporate flight booking, clean enough for enterprise clients",
    problem:
      "Corporate clients needed a branded flight booking experience — no third-party redirects, no six-month GDS build.",
    built:
      "btres.com white-label engine fully skinned to brand. Custom search UI, Framer Motion transitions, mobile-responsive. Delivered with full client handoff documentation.",
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Cloudinary",
      "Resend",
      "Vercel",
      "AI Chatbot",
      "CMS Dashboard",
    ],
    proof: "Delivered to client at NXTechnova. Design-to-handoff solo.",
    links: {
      demo: "https://nxtflight.com/",
    },
    featured: true,
    image: "/nxtfllight.png",
  },
  {
    id: "nxtechnova",
    status: "LIVE",
    title: "NXTechnova",
    tagline: "The company where I own the entire engineering layer — not just a dev seat",
    problem:
      "A growing digital agency needed one engineer to own everything: client delivery, infrastructure, DNS, SSL, CI/CD — all at once.",
    built:
      "Sole engineer across all technical surfaces. Hetzner VPS, Nginx, Cloudflare DNS/SSL, GitHub CI/CD, Vercel deployments. Client products delivered, TechTivAI architected in parallel. Every config, every deploy, every incident — mine.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Hetzner VPS",
      "ImageKit",
      "Resend",
      "Vercel",
      "AI Chatbot",
      "CMS Dashboard",
    ],
    proof: "Not a portfolio project. This is my day job — I'm the only engineer.",
    links: {
      demo: "https://nxtechnova.com",
    },
    featured: true,
    image: "/nxtech.png",
  },
  {
    id: "sweet-schaffhausen",
    status: "DELIVERED",
    title: "Sweet Schaffhausen",
    tagline: "Shopify mobile app with a loyalty engine that actually retains customers",
    problem:
      "A Swiss brand needed a mobile app with a real loyalty program — not a plugin, a custom Buy 9 Get 1 Free engine tied to actual Shopify orders.",
    built:
      "React Native (Expo) + Node.js/Express backend. Webhook-driven loyalty engine: orders/paid → HMAC verify → counter increments → at 9, Shopify Admin API auto-generates a real discount code. JWT auth, referral system, EN/DE i18n.",
    stack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Shopify API",
      "TypeScript",
    ],
    proof: "Full loyalty + referral engine. Shopify webhook-driven. Multilingual (EN/DE).",
    links: {},
    featured: true,
    image: "/sweet.png",
  },
  {
    id: "neuronest",
    status: "DELIVERED",
    title: "NeuroNest AI",
    tagline: "10 AI medical specialists in one platform — built and placed in a hackathon",
    problem:
      "In Pakistan, medical guidance is expensive and slow. People need specialist-level answers immediately — not a generic chatbot.",
    built:
      "10 dedicated AI agent personas (Symptom Checker, Mental Health, Emergency Triage, Diet Coach, Medicine Reminder, and more). Auto-routes queries to the right specialist. Emergency flow triggers real-time WhatsApp alerts. Ideation to deployed product in one hackathon sprint.",
    stack: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "WhatsApp API",
      "Vercel",
    ],
    proof: "Built under hackathon conditions. Won 3rd place.",
    badge: "🏆 Hackathon — 3rd Place",
    links: {
      demo: "https://neuronestai.vercel.app",
    },
    featured: true,
    image: "/neuronest.png",
  },
  {
    id: "andazenu",
    status: "DELIVERED",
    title: "AndazeNu",
    tagline: "Premium apparel e-commerce — from storefront to checkout, fully custom",
    problem:
      "A clothing brand in Islamabad was running on Instagram DMs. They needed a real storefront that matched their premium product.",
    built:
      "Full e-commerce build: collections, filtering, cart, wishlist, checkout, free shipping threshold logic, newsletter, WhatsApp support. Mobile-responsive, deployed on Vercel. Live with real customers.",
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "Prisma",
    ],
    proof: "Live, real orders, real customers. Client in Islamabad.",
    links: {
      demo: "https://andazenu.vercel.app",
    },
    featured: true,
    image: "/andazenu-1.png",
  },
];
