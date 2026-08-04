export interface CaseStudy {
  id: string;
  title: string;
  clientCategory: "AI Products" | "Web & SaaS Apps" | "Workflow Automation";
  badge: string;
  tagline: string;
  summary: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  challenge: string;
  solution: string;
  result: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "chata-ai",
    title: "Chata AI Chatbot & Group Logistics Engine",
    clientCategory: "AI Products",
    badge: "Featured AI Project",
    tagline: "Conversational Intelligence & Real-time Group Logistics Platform",
    summary:
      "A full-stack AI-assisted application built by Orythyn engineering featuring real-time seat reservation, waitlist lead capture, and conversational query routing.",
    metrics: [
      { label: "API Query Latency", value: "<120ms" },
      { label: "Schema Efficiency", value: "100% Type-Safe" },
      { label: "Lead Engine Accuracy", value: "99.4%" },
    ],
    techStack: ["React 19", "TypeScript", "Node.js/Express", "PostgreSQL", "Docker", "Vite"],
    challenge:
      "Legacy group booking systems suffered from slow search responses, manual waitlist tracking, and lack of real-time seat allocation.",
    solution:
      "Engineered an automated PostgreSQL relational schema paired with a high-throughput Express API backend, real-time waitlist engine, and responsive dark-mode UI.",
    result:
      "Delivered a production-ready MVP with full group trip CRUD, authentication, and instant waitlist lead management.",
    featured: true,
  },
  {
    id: "orithyn-engine",
    title: "Orythyn Digital Engineering Studio Platform",
    clientCategory: "Web & SaaS Apps",
    badge: "Web Platform",
    tagline: "High-Performance Enterprise Web Application & Interactive Estimator",
    summary:
      "Full-stack Next.js 16 web platform equipped with an interactive project cost calculator, automated JSON-LD schema engine, and pre-filled lead funnel.",
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Page Speed Load", value: "<0.8s" },
      { label: "Search Indexing", value: "Google Rich Results" },
    ],
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Lucide React", "Turbopack"],
    challenge:
      "Visitors previously struggled to understand technical services at a glance and calculate realistic project budgets.",
    solution:
      "Designed an interactive solution showcase deck, multi-step budget calculator, and automated Google Schema markup for max SEO visibility.",
    result:
      "Achieved sub-second page loads, 100% static prerendering, and pre-filled WhatsApp lead conversion routing.",
    featured: true,
  },
  {
    id: "data-pipeline",
    title: "Automated Data Processing & Analytics Engine",
    clientCategory: "Workflow Automation",
    badge: "Operations Pipeline",
    tagline: "Enterprise Data Cleaning & Automated ETL Pipeline",
    summary:
      "High-performance Python and Pandas data processing pipeline designed to ingest, clean, and transform unstructured datasets automatically.",
    metrics: [
      { label: "Data Processing Speed", value: "10x Faster" },
      { label: "Error Reduction", value: "99.8%" },
      { label: "Automation Level", value: "100% Scheduled" },
    ],
    techStack: ["Python 3.12", "Pandas", "ETL Pipelines", "Automated Scripts"],
    challenge:
      "Manual data processing and CSV data cleaning consumed hundreds of operational hours with high risk of human error.",
    solution:
      "Developed modular Python scripts with automated data validation, missing value imputation, and standardized data transformation pipelines.",
    result:
      "Automated complete data ingestion workflow, reducing processing times from hours to seconds with zero manual data entry.",
    featured: true,
  },
];
