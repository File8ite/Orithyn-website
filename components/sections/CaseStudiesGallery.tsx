"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { caseStudies, CaseStudy } from "@/lib/caseStudies";
import {
  Sparkles,
  ArrowRight,
  Bot,
  LayoutDashboard,
  Workflow,
  Layers,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export default function CaseStudiesGallery() {
  const [filter, setFilter] = useState<"All" | "AI Products" | "Web & SaaS Apps" | "Workflow Automation">("All");
  const [expandedId, setExpandedId] = useState<string | null>("chata-ai");

  const filteredStudies = filter === "All" 
    ? caseStudies 
    : caseStudies.filter((s) => s.clientCategory === filter);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section id="portfolio" className="py-16 md:py-24 border-y border-zinc-800/80 bg-zinc-950/80">
      <div className="max-w-6xl mx-auto space-y-10 px-4">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1 text-xs font-bold text-amber-300">
            <Layers className="h-3.5 w-3.5 text-amber-400" />
            <span className="uppercase tracking-widest">Real Desktop &amp; Enterprise Projects</span>
          </div>

          <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Engineered Solutions &amp; Case Studies
          </Heading>

          <Text className="text-base sm:text-lg text-zinc-300">
            Explore our real-world software products, AI chatbots, and automated data pipelines.
          </Text>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {(["All", "AI Products", "Web & SaaS Apps", "Workflow Automation"] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition duration-200 ${
                  filter === cat
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat === "AI Products" && <Bot className="h-3.5 w-3.5 inline mr-1.5" />}
                {cat === "Web & SaaS Apps" && <LayoutDashboard className="h-3.5 w-3.5 inline mr-1.5" />}
                {cat === "Workflow Automation" && <Workflow className="h-3.5 w-3.5 inline mr-1.5" />}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredStudies.map((study) => {
            const isExpanded = expandedId === study.id;
            const contactUrl = `/contact?scope=${encodeURIComponent(`Inquiry for project similar to: ${study.title}`)}`;

            return (
              <div
                key={study.id}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl hover:border-amber-500/40 transition duration-300 space-y-6"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                        {study.badge}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">ID: {study.id}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white">{study.title}</h3>
                    <p className="text-sm font-medium text-amber-400">{study.tagline}</p>
                  </div>

                  <Link href={contactUrl}>
                    <Button variant="primary" className="h-10 px-5 text-xs font-bold shrink-0 inline-flex items-center gap-1.5">
                      Build Similar Solution <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>

                {/* Summary */}
                <p className="text-sm text-zinc-300 leading-relaxed">{study.summary}</p>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-3 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-center">
                  {study.metrics.map((m) => (
                    <div key={m.label} className="space-y-0.5">
                      <p className="text-lg sm:text-xl font-black text-white">{m.value}</p>
                      <p className="text-[11px] text-zinc-400">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-zinc-500 font-bold flex items-center gap-1">
                    <Cpu className="h-3.5 w-3.5 text-amber-400" /> Stack:
                  </span>
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Architectural Details */}
                <div className="border-t border-zinc-800/80 pt-4">
                  <button
                    type="button"
                    onClick={() => toggleExpand(study.id)}
                    className="text-xs font-bold text-amber-400 hover:underline inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    {isExpanded ? (
                      <>
                        Hide Engineering Details <ChevronUp className="h-3.5 w-3.5" />
                      </>
                    ) : (
                      <>
                        View Engineering Challenge &amp; Architecture <ChevronDown className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-zinc-800/60 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs animate-in fade-in duration-200">
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                        <span className="font-bold text-red-400 flex items-center gap-1">
                          ⚠️ The Challenge
                        </span>
                        <p className="text-zinc-300 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-950 border border-amber-500/30 space-y-2">
                        <span className="font-bold text-amber-400 flex items-center gap-1">
                          ⚡ Orythyn Solution
                        </span>
                        <p className="text-zinc-300 leading-relaxed">{study.solution}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-950 border border-emerald-500/30 space-y-2">
                        <span className="font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Measurable Outcome
                        </span>
                        <p className="text-zinc-300 leading-relaxed">{study.result}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
