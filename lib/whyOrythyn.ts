export interface Differentiator {
  title: string;
  description: string;
  iconName: string;
}

export const differentiators: Differentiator[] = [
  {
    title: "Solutions Designed Around Actual Business Requirements",
    description:
      "We build software that fits how your business actually operates, rather than forcing your team into the rigid constraints of generic off-the-shelf tools.",
    iconName: "Target",
  },
  {
    title: "Clear Communication Throughout Development",
    description:
      "No confusing technical jargon or hidden roadblocks. You receive regular milestone demos, written sprint updates, and direct access to your engineering team.",
    iconName: "MessageSquare",
  },
  {
    title: "Maintainable Software Architecture",
    description:
      "We write clean, type-safe, modular codebases designed to be dependable today and straightforward to extend or update as your organization grows.",
    iconName: "Layers",
  },
  {
    title: "Practical & Thoughtful Technology Choices",
    description:
      "We select proven, battle-tested technologies like Next.js, React Native, TypeScript, and PostgreSQL that deliver lasting value over fleeting technical fads.",
    iconName: "Cpu",
  },
  {
    title: "Transparent Project Scope & Delivery Expectations",
    description:
      "Predictable timelines, clearly defined deliverables, and transparent estimates ensure complete alignment before writing a single line of code.",
    iconName: "Compass",
  },
  {
    title: "Continued Technical Support After Delivery",
    description:
      "We do not vanish at launch. We provide structured post-delivery support agreements, automated health monitoring, and security updates as agreed.",
    iconName: "ShieldCheck",
  },
];
