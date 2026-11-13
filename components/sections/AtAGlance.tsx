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
      tagline: "Web & Business Software",
      title: "Custom Web Applications & Portals",
      description:
        "We build responsive web applications, customer portals, and internal management tools from scratch using modern, type-safe technologies.",
      bullets: [
        "Tailored user interfaces & administrative control panels",
        "Secure user authentication & role-based permissions",
        "Clean architecture designed for fast loading & maintainability",
      ],
      linkText: "Explore Web Applications",
      href: "/services#web-applications",
    },
    {
      id: "ai-automation",
      icon: <Bot className="h-6 w-6 text-amber-400" />,
      tagline: "AI & Process Automation",
      title: "Intelligent Workflows & Document Assistance",
      description:
        "We help organizations apply practical automation and AI—building internal search tools, document assistants, and data pipelines that reduce repetitive manual tasks.",
      bullets: [
        "Internal document search & knowledge retrieval tools",
        "Automated inquiry sorting & team notifications",
        "Scheduled data synchronization and reporting pipelines",
      ],
      linkText: "Explore Automation Solutions",
      href: "/services#ai-solutions",
    },
    {
      id: "support-maintenance",
      icon: <ShieldCheck className="h-6 w-6 text-amber-400" />,
      tagline: "Maintenance & Support",
      title: "Dedicated Technical Support & Upkeep",
      description:
        "We provide structured post-launch support agreements so your software remains secure, dependable, and updated as your operations expand.",
      bullets: [
        "Proactive system health & error tracking",
        "Continuous security updates & dependency audits",
        "Direct developer support for bug fixes and feature enhancements",
      ],
      linkText: "Explore Maintenance Support",
      href: "/services#software-maintenance",
    },
  ];

  return (
    <Section className="py-16 md:py-20 border-y border-zinc-800/80 bg-zinc-950/70">
      <div className="max-w-3xl text-center mx-auto space-y-3 mb-12 px-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
          In One Glance
        </span>
        <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          What Orithyn Does For Your Business
        </Heading>
        <Text className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
          We build dependable digital software that solves operational bottlenecks and scales with your organization.
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
