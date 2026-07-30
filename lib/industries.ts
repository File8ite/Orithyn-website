export interface Industry {
  id: string;
  title: string;
  description: string;
  challenges: string;
  outcomes: string;
  iconName: string;
}

export const industries: Industry[] = [
  {
    id: "education",
    title: "Education",
    description: "Modern administrative tools, student portals, and e-learning ecosystems built for schools and institutions.",
    challenges: "Outdated legacy software, manual grading/admissions workflows, poor mobile access for students.",
    outcomes: "Automated student management, seamless digital portals, and real-time operational reporting.",
    iconName: "GraduationCap",
  },
  {
    id: "smes",
    title: "SMEs & Growing Businesses",
    description: "Tailored business software, custom CRM/ERP integrations, and workflow automation.",
    challenges: "Inefficient paper-based processes, disconnected tools, bottlenecked operations.",
    outcomes: "Up to 60% faster workflow execution, centralized data visibility, and scalable operations.",
    iconName: "Building2",
  },
  {
    id: "startups",
    title: "Startups & Tech Founders",
    description: "Rapid MVP development, cloud architecture setup, and agile product scaling.",
    challenges: "Tight timelines, evolving requirements, need for robust infrastructure from day one.",
    outcomes: "Speed-to-market within weeks, investor-ready prototypes, and production-grade software.",
    iconName: "Rocket",
  },
  {
    id: "ngos",
    title: "NGOs & Non-Profits",
    description: "Impact tracking platforms, donor management systems, and transparent data reporting solutions.",
    challenges: "Stringent reporting mandates, limited tech staff, fragmented field data collection.",
    outcomes: "Automated donor insights, field data sync, and transparent impact metrics for stakeholders.",
    iconName: "HeartHandshake",
  },
  {
    id: "transportation",
    title: "Transportation & Logistics",
    description: "Fleet tracking interfaces, dispatch automation, and real-time operational dashboards.",
    challenges: "Manual dispatching, lack of real-time visibility, complex route management.",
    outcomes: "Optimized route planning, reduced fuel overheads, and live tracking capabilities.",
    iconName: "Truck",
  },
];
