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
    tagline: "Group Travel & AI Routing Prototype",
    description: "An internal proof-of-concept application built by Orithyn engineering to explore relational booking schemas, waitlist management, and conversational inquiry routing.",
    highlights: [
      "Relational booking schema with PostgreSQL and Node.js",
      "Interactive waitlist lead capture and route filtering",
      "Modular full-stack architecture built with React 19, TypeScript, and Vite",
    ],
    status: "Internal Prototype",
    badge: "Orithyn Labs",
  },
];
