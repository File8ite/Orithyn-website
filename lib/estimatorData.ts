export interface ProjectType {
  id: string;
  name: string;
  badge: string;
  description: string;
  iconName: string;
  baseMinCost: number;
  baseMaxCost: number;
  baseMinWeeks: number;
  baseMaxWeeks: number;
}

export interface ScopeTier {
  id: string;
  name: string;
  multiplier: number;
  description: string;
}

export interface FeatureAddon {
  id: string;
  name: string;
  description: string;
  category: "auth" | "data" | "ai" | "ops" | "analytics";
  minCost: number;
  maxCost: number;
  minWeeks: number;
  maxWeeks: number;
}

export const projectTypes: ProjectType[] = [
  {
    id: "web-saas",
    name: "Custom Web App & SaaS",
    badge: "Web Platform",
    description: "Modern responsive web portal, admin control panel, and customer-facing web app.",
    iconName: "LayoutDashboard",
    baseMinCost: 3500,
    baseMaxCost: 6500,
    baseMinWeeks: 3,
    baseMaxWeeks: 5,
  },
  {
    id: "ai-assistant",
    name: "AI Knowledge Assistant & RAG",
    badge: "AI Product",
    description: "Private document vector search engine, custom LLM query pipeline, and conversational agent.",
    iconName: "Bot",
    baseMinCost: 4500,
    baseMaxCost: 8500,
    baseMinWeeks: 3,
    baseMaxWeeks: 6,
  },
  {
    id: "automation",
    name: "Business Workflow Automation",
    badge: "Operations",
    description: "Event-driven pipelines connecting CRMs, databases, notifications, and inventory systems.",
    iconName: "Workflow",
    baseMinCost: 2800,
    baseMaxCost: 5200,
    baseMinWeeks: 2,
    baseMaxWeeks: 4,
  },
  {
    id: "enterprise",
    name: "Custom Enterprise Portal",
    badge: "Enterprise",
    description: "Multi-tenant business software with role-based access, audit logs, and complex API logic.",
    iconName: "Building2",
    baseMinCost: 6500,
    baseMaxCost: 12500,
    baseMinWeeks: 5,
    baseMaxWeeks: 9,
  },
];

export const scopeTiers: ScopeTier[] = [
  {
    id: "mvp",
    name: "MVP / Core Release",
    multiplier: 1.0,
    description: "Focused release with core features for rapid launch & user validation.",
  },
  {
    id: "pro",
    name: "Full Production Platform",
    multiplier: 1.35,
    description: "Complete feature set with analytics, automated reporting, and refined UX.",
  },
  {
    id: "enterprise-tier",
    name: "High-Scale & SLA Guaranteed",
    multiplier: 1.75,
    description: "Dedicated infrastructure, zero-downtime CI/CD, and 24/7 SLA maintenance.",
  },
];

export const featureAddons: FeatureAddon[] = [
  {
    id: "auth-roles",
    name: "Auth & Role Access Control",
    description: "OAuth 2.0, multi-tenant RBAC, JWT, and email verification.",
    category: "auth",
    minCost: 500,
    maxCost: 1000,
    minWeeks: 0.5,
    maxWeeks: 1,
  },
  {
    id: "payments",
    name: "Stripe & Subscription Billing",
    description: "Recurring subscriptions, webhooks, invoice generation, and tier upgrades.",
    category: "data",
    minCost: 800,
    maxCost: 1400,
    minWeeks: 1,
    maxWeeks: 1.5,
  },
  {
    id: "rag-llm",
    name: "Custom LLM Vector Search (RAG)",
    description: "Document ingestion, embeddings index, and real-time LLM streaming.",
    category: "ai",
    minCost: 1200,
    maxCost: 2200,
    minWeeks: 1,
    maxWeeks: 2,
  },
  {
    id: "analytics",
    name: "Analytics & Custom Reporting",
    description: "Interactive data charts, CSV/PDF export, and operational telemetry.",
    category: "analytics",
    minCost: 600,
    maxCost: 1200,
    minWeeks: 0.5,
    maxWeeks: 1,
  },
  {
    id: "api-integrations",
    name: "Third-Party API & CRM Connectors",
    description: "Sync with Salesforce, HubSpot, WhatsApp API, or custom REST/GraphQL endpoints.",
    category: "ops",
    minCost: 700,
    maxCost: 1500,
    minWeeks: 0.5,
    maxWeeks: 1.5,
  },
  {
    id: "sla-monitoring",
    name: "24/7 SLA Monitoring & Security Audit",
    description: "Automated error tracking, uptime monitoring, and vulnerability patching.",
    category: "ops",
    minCost: 900,
    maxCost: 1600,
    minWeeks: 1,
    maxWeeks: 1,
  },
];

export interface CalculationResult {
  projectType: ProjectType;
  scopeTier: ScopeTier;
  selectedAddons: FeatureAddon[];
  totalMinCost: number;
  totalMaxCost: number;
  totalMinWeeks: number;
  totalMaxWeeks: number;
  summaryText: string;
}

export function calculateProjectEstimate(
  projectTypeId: string,
  tierId: string,
  addonIds: string[]
): CalculationResult {
  const projectType = projectTypes.find((p) => p.id === projectTypeId) || projectTypes[0];
  const scopeTier = scopeTiers.find((t) => t.id === tierId) || scopeTiers[0];
  const selectedAddons = featureAddons.filter((a) => addonIds.includes(a.id));

  let rawMinCost = projectType.baseMinCost;
  let rawMaxCost = projectType.baseMaxCost;
  let rawMinWeeks = projectType.baseMinWeeks;
  let rawMaxWeeks = projectType.baseMaxWeeks;

  for (const addon of selectedAddons) {
    rawMinCost += addon.minCost;
    rawMaxCost += addon.maxCost;
    rawMinWeeks += addon.minWeeks;
    rawMaxWeeks += addon.maxWeeks;
  }

  const totalMinCost = Math.round((rawMinCost * scopeTier.multiplier) / 100) * 100;
  const totalMaxCost = Math.round((rawMaxCost * scopeTier.multiplier) / 100) * 100;
  const totalMinWeeks = Math.max(1, Math.round(rawMinWeeks * scopeTier.multiplier * 10) / 10);
  const totalMaxWeeks = Math.max(2, Math.round(rawMaxWeeks * scopeTier.multiplier * 10) / 10);

  const addonListText = selectedAddons.length > 0 
    ? selectedAddons.map((a) => a.name).join(", ")
    : "Standard baseline capabilities";

  const summaryText = `[Project Scope Estimate]\nType: ${projectType.name}\nTier: ${scopeTier.name}\nFeatures: ${addonListText}\nEstimated Budget: $${totalMinCost.toLocaleString()} - $${totalMaxCost.toLocaleString()}\nTimeline: ${totalMinWeeks} - ${totalMaxWeeks} weeks`;

  return {
    projectType,
    scopeTier,
    selectedAddons,
    totalMinCost,
    totalMaxCost,
    totalMinWeeks,
    totalMaxWeeks,
    summaryText,
  };
}
