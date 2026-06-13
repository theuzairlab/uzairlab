export interface StackGroup {
  label: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    label: "SHIP WITH",
    items: [
      "Next.js 15",
      "TypeScript",
      "React",
      "TailwindCSS",
      "Framer Motion",
      "FastAPI",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    label: "THINK WITH",
    items: [
      "LangGraph",
      "n8n",
      "AssemblyAI",
      "Vapi",
      "OpenAI APIs",
      "Better Auth",
      "Stripe API",
      "Resend",
    ],
  },
  {
    label: "RUN WITH",
    items: [
      "Hetzner VPS",
      "Cloudflare R2",
      "Neon",
      "Vercel",
      "Docker",
      "GitHub CI/CD",
      "Linux",
      "Nginx",
      "DNS + SSL",
    ],
  },
];
