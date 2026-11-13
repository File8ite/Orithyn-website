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
    title: "Discovery & Consultation",
    subtitle: "Understanding business goals & constraints",
    description: "We evaluate your organisation's operational challenges, existing workflows, and strategic goals to define clear objectives.",
    deliverables: ["Product Roadmap", "Technical Requirements", "Risk Analysis"],
  },
  {
    step: 2,
    title: "Requirements & Planning",
    subtitle: "Architecture & sprint strategy",
    description: "Defining system specifications, database schemas, API architecture, and sprint timelines for predictable delivery.",
    deliverables: ["System Architecture Plan", "Sprint Roadmap", "Data Schema Specification"],
  },
  {
    step: 3,
    title: "Design & Architecture",
    subtitle: "User experience & system interface",
    description: "Crafting intuitive user flows, responsive UI component libraries, and interactive design prototypes.",
    deliverables: ["Interactive Prototypes", "Design System Components", "User Flow Diagrams"],
  },
  {
    step: 4,
    title: "Development & Testing",
    subtitle: "Clean code & rigorous verification",
    description: "Building type-safe, modular solutions with automated unit tests, continuous integration, and performance benchmarking.",
    deliverables: ["Type-Safe Codebase", "Automated Test Suite", "Milestone Review Demos"],
  },
  {
    step: 5,
    title: "Deployment & Handover",
    subtitle: "Production release & documentation",
    description: "Deploying to production cloud environments with domain/SSL setup, structured handover, and full source code transfer per contract.",
    deliverables: ["Production Release", "Cloud Infrastructure Setup", "Source Code Handover"],
  },
  {
    step: 6,
    title: "Ongoing Support",
    subtitle: "Maintenance & technical evolution",
    description: "Providing post-delivery technical maintenance, dependency updates, automated health monitoring, and agreed feature evolution.",
    deliverables: ["Support Agreement", "Security & Dependency Updates", "Health Monitoring"],
  },
];
