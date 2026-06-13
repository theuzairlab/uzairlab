export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  isCurrent?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    id: "nxttechnova",
    period: "January 2026 - Present",
    title: "Full-Stack Engineer & Infrastructure Owner",
    company: "NXTechnova, Islamabad",
    description:
      "Solo engineer managing: client products, TechTivAI platform, Hetzner VPS infrastructure, DNS/SSL/CI-CD pipelines",
    isCurrent: true,
  },
  {
    id: "clipsgenai",
    period: "April 2026 - Present",
    title: "Building ClipsGen AI",
    company: "Independent",
    description:
      "AI SaaS for video content automation. Architecture → development → production infrastructure. Mine.",
  },
  {
    id: "zetasoftsolutions",
    period: "November 2023 - September 2025",
    title: "Full Stack Developer",
    company: "Zetasoft Solutions",
    description: "MERN + Next.js with AI integration. FastAPI. Python.",
  },
  {
    id: "wrenchx",
    period: "September 2024 - Present",
    title: "Freelance Engineering",
    company: "WrenchEx · Andazenu · Teseer",
    description: "Real clients, real deadlines, real code",
  },
  {
    id: "mindsgigs",
    period: "October 2022 - January 2023",
    title: "Trainee → Rapidly Self-Sufficient",
    company: "Mindsgigs",
    description: "Bootcamp → immediately began shipping solo",
  },
];
