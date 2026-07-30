export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const engineeringProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Discover",
    subtitle: "Understanding business goals & constraints",
    description: "We dive deep into your organization's goals, existing infrastructure, and operational challenges to map clear objectives.",
    deliverables: ["Product Roadmap", "Technical Requirements", "Risk Analysis"],
  },
  {
    step: 2,
    title: "Plan",
    subtitle: "Architecture & sprint strategy",
    description: "Designing system architecture, database schemas, API specs, and sprint timelines to ensure transparent execution.",
    deliverables: ["System Architecture Diagram", "Sprint Schedule", "Data Schema"],
  },
  {
    step: 3,
    title: "Design",
    subtitle: "User experience & visual interface",
    description: "Crafting intuitive visual design systems, accessible UI components, and interactive prototypes.",
    deliverables: ["Figma Design System", "High-Fidelity Wireframes", "Interactive Prototypes"],
  },
  {
    step: 4,
    title: "Build",
    subtitle: "Clean, scalable engineering",
    description: "Writing high-quality, type-safe modular code with rigorous code reviews and continuous integration.",
    deliverables: ["Clean Codebase", "CI/CD Pipeline", "API Integration"],
  },
  {
    step: 5,
    title: "Test",
    subtitle: "Quality assurance & performance audit",
    description: "Comprehensive automated unit tests, security audits, accessibility checks, and performance optimization.",
    deliverables: ["QA Report", "Security Audit", "LCP / CWV Optimization"],
  },
  {
    step: 6,
    title: "Deploy",
    subtitle: "Smooth launch & infrastructure setup",
    description: "Zero-downtime deployment to production cloud environments with monitoring and automated failover.",
    deliverables: ["Production Release", "Domain & SSL Setup", "Uptime Monitoring"],
  },
  {
    step: 7,
    title: "Support",
    subtitle: "Continuous improvement & maintenance",
    description: "Ongoing technical maintenance, performance monitoring, updates, and feature expansions.",
    deliverables: ["Maintenance SLA", "Feature Upgrades", "24/7 Monitoring"],
  },
];
