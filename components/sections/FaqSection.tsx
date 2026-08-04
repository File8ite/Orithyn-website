"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import JsonLd from "@/components/seo/JsonLd";
import { getFaqJsonLd } from "@/lib/jsonLd";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export const homepageFaqs = [
  {
    question: "What types of software does Orythyn build?",
    answer:
      "Orythyn specializes in three primary engineering verticals: 1) Custom Web Applications & SaaS Portals (React, Next.js, TypeScript), 2) AI Knowledge Assistants & RAG Vector Engines, and 3) Business Process & Workflow Automation (connecting CRMs, inventory, and databases).",
  },
  {
    question: "How long does a typical software project take from start to launch?",
    answer:
      "Timelines depend on scope complexity: MVP core releases typically take 2 to 4 weeks, full production platforms take 4 to 8 weeks, and high-scale custom enterprise systems range from 6 to 12 weeks with bi-weekly milestone demos.",
  },
  {
    question: "Do we own 100% of the source code and intellectual property?",
    answer:
      "Yes, absolutely. Upon completion, 100% of the custom source code, documentation, repository access, and IP rights are transferred fully to your organization.",
  },
  {
    question: "What SLA uptime and technical maintenance support do you offer?",
    answer:
      "We provide ongoing SLA support options featuring 99.99% uptime guarantees, 24/7 automated error monitoring, continuous security patching, and dedicated senior engineering response lines (<15 min response time).",
  },
  {
    question: "How does the AI document assistant (RAG) work with our existing files?",
    answer:
      "We build secure vector database pipelines that index your internal PDFs, documentation, and databases into private LLM embeddings. Your team can query enterprise knowledge instantly with sub-200ms response times while isolating your data from public LLM training.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqSchema = getFaqJsonLd(homepageFaqs);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="py-16 md:py-24 border-y border-zinc-800/80 bg-zinc-950/80">
      <JsonLd data={faqSchema} />

      <div className="max-w-3xl mx-auto space-y-8 px-4">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1 text-xs font-bold text-amber-300">
            <HelpCircle className="h-3.5 w-3.5 text-amber-400" />
            <span className="uppercase tracking-wider">Frequently Asked Questions</span>
          </div>

          <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Clear Answers to Common Questions
          </Heading>

          <Text className="text-base sm:text-lg text-zinc-300">
            Everything you need to know about partnering with Orythyn for software &amp; AI development.
          </Text>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 pt-4">
          {homepageFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition duration-200 overflow-hidden ${
                  isOpen
                    ? "border-amber-500/60 bg-zinc-900/90 shadow-xl"
                    : "border-zinc-800/80 bg-zinc-900/50 hover:border-zinc-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-2xl"
                >
                  <span className="text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-lg border transition duration-300 shrink-0 ${
                      isOpen
                        ? "bg-amber-500 border-amber-500 text-black rotate-180"
                        : "border-zinc-700 bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-zinc-800/60 text-sm text-zinc-300 leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Schema Tag Badge */}
        <div className="text-center pt-4">
          <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-amber-400" /> Google Search FAQ Structured Data Active
          </span>
        </div>
      </div>
    </Section>
  );
}
