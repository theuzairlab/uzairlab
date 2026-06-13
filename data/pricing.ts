export interface PricingTier {
  id: string;
  name: string;
  rate: string;
  unit: string;
  description: string;
  features: string[];
  complexity: string;
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    rate: "$30",
    unit: "/hr",
    complexity: "Low complexity",
    description: "Bug fixes, small features, quick integrations",
    features: [
      "Small feature additions",
      "Bug fixes & debugging",
      "UI tweaks & responsive fixes",
      "API endpoint updates",
      "Code review sessions",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    rate: "$45",
    unit: "/hr",
    complexity: "Medium complexity",
    description: "Full-stack features, API integrations, database work",
    highlighted: true,
    features: [
      "Full-stack feature development",
      "Third-party API integrations",
      "Database schema & migrations",
      "Auth & payment systems",
      "Performance optimization",
      "CI/CD pipeline setup",
    ],
  },
  {
    id: "product",
    name: "Product",
    rate: "$60",
    unit: "/hr",
    complexity: "High complexity",
    description: "AI SaaS builds, architecture consulting, greenfield products",
    features: [
      "AI product architecture",
      "LangGraph / LLM pipelines",
      "Multi-tenant SaaS design",
      "Infrastructure ownership",
      "Technical consulting",
      "Founding engineer engagements",
    ],
  },
];
