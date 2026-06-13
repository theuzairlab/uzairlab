export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  status: "IN DEV" | "LIVE" | "SHIPPED";
  link?: string;
  image?: string;
}

export const currentWork: NewsItem[] = [
  {
    id: "clipsgen",
    date: "April 2026",
    title: "ClipsGen AI — AI Viral Content Generator",
    excerpt:
      "Shipped dual AI pipeline with AssemblyAI word-level timestamps, Celery async workers, and Cloudflare R2 storage.",
    status: "IN DEV",
    link: "https://github.com/theuzairlab/ClipsGen-AI",
    image: "/clipsgenai.png",
  },
  {
    id: "techtivai",
    date: "June 2026",
    title: "TechTivAI — AI Automation Platform",
    excerpt:
      "Building LangGraph agents, Vapi voice integration, and n8n workflows for NXTechnova's AI-native automation platform.",
    status: "IN DEV",
    image: "/techtiveai.png",
  },
  
];
