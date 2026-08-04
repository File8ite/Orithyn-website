import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Link from "next/link";
import { LayoutDashboard, Bot, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AtAGlance() {
  const pillars = [
    {
      id: "web-apps",
      icon: <LayoutDashboard className="h-6 w-6 text-amber-400" />,
      tagline: "Custom Web & SaaS Development",
      title: "Full-Stack Web Applications & Client Portals",
      description:
        "We build high-performance web applications, customer portals, and internal management tools from scratch using React, Next.js, and TypeScript.",
      bullets: [
        "Tailored user interfaces & admin dashboards",
        "Secure auth, payments, & API integrations",
        "Sub-second page speeds & SEO optimization",
      ],
      linkText: "Explore Web Engineering",
      href: "/services#web-development",
    },
    {
      id: "ai-automation",
      icon: <Bot className="h-6 w-6 text-amber-400" />,
      tagline: "AI Systems & Automation",
      title: "AI Knowledge Assistants & Workflow Automation",
      description:
        "We integrate AI into your operations—building enterprise chatbots, vector document search, and automated pipelines that replace repetitive tasks.",
      bullets: [
        "Private LLM & RAG document search engines",
        "Automated CRM & customer query routing",
        "Data extraction & automated reporting pipelines",
      ],
      linkText: "Explore AI & Automation",
      href: "/services#ai-automation",
    },
    {
      id: "sla-support",
      icon: <ShieldCheck className="h-6 w-6 text-amber-400" />,
      tagline: "SLA Maintenance & Support",
      title: "Dedicated Technical Maintenance & Scaling",
      description:
        "We don't abandon your code after launch. We provide ongoing 24/7 SLA uptime monitoring, cloud maintenance, and feature enhancements.",
      bullets: [
        "99.99% uptime SLA commitments",
        "Continuous security updates & dependency audits",
        "Dedicated senior engineering response line",
      ],
      linkText: "Explore SLA Maintenance",
      href: "/services#maintenance",
    },
  ];

  return (
    <Section className="py-16 md:py-20 border-y border-zinc-800/80 bg-zinc-950/70">
      <div className="max-w-3xl text-center mx-auto space-y-3 mb-12 px-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
          In One Glance
        </span>
        <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          What Orythyn Does For Your Business
        </Heading>
        <Text className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
          We eliminate the guess-work of software development. Here is exactly what our engineering studio delivers.
        </Text>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="flex flex-col justify-between rounded-2xl bg-zinc-900/80 p-6 sm:p-8 border border-zinc-800/90 shadow-xl hover:border-amber-500/40 transition duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:scale-105 transition">
                  {pillar.icon}
                </div>
                <span className="text-[11px] font-mono font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                  {pillar.tagline}
                </span>
              </div>

              <Heading level={3} className="text-xl font-bold text-white leading-snug">
                {pillar.title}
              </Heading>

              <Text className="text-sm text-zinc-300 leading-relaxed">
                {pillar.description}
              </Text>

              <div className="pt-2 space-y-2 border-t border-zinc-800/60">
                {pillar.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/80">
              <Link
                href={pillar.href}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition group-hover:translate-x-1 duration-200"
              >
                <span>{pillar.linkText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
