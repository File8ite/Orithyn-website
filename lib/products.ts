export interface Product {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  status: string;
  badge: string;
}

export const featuredProducts: Product[] = [
  {
    name: "Chata",
    tagline: "AI-Powered Conversational Knowledge Assistant",
    description: "An internal product built by Orythyn engineering to demonstrate our capabilities in LLM integration, real-time streaming, and secure enterprise knowledge retrieval.",
    highlights: [
      "Real-time streaming responses with context isolation",
      "Instant indexing of documents and enterprise knowledge bases",
      "Built with Next.js 16, React 19, and scalable AI infrastructure",
    ],
    status: "Active Beta",
    badge: "Orythyn Labs",
  },
];
