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
    question: "What types of software does Orithyn build?",
    answer:
      "Orithyn develops custom software across seven core service areas: Custom Software Development, Web Applications, Native Mobile Applications (React Native), Backend & REST APIs, Business Management Systems, AI Solutions & Workflow Automation, and Software Maintenance. We apply these technical capabilities across eight target industry sectors, including Healthcare, Education, Hospitality, Real Estate, Retail, SMEs, Startups, and Transportation.",
  },
  {
    question: "How long does a typical software project take from start to launch?",
    answer:
      "Timelines depend on project scope: focused MVP releases typically take 2 to 4 weeks, standard business applications take 4 to 8 weeks, and larger custom management systems range from 6 to 12 weeks with staged milestone deliveries.",
  },
  {
    question: "How are source code ownership and project handovers handled?",
    answer:
      "Source code ownership, repository access, and handover deliverables are formally specified in your project agreement and statement of work. Upon completion and fulfillment of agreed project milestones, custom codebases, configurations, and documentation are handed over to your organization according to contract terms.",
  },
  {
    question: "What maintenance and technical support do you offer after launch?",
    answer:
      "We offer structured maintenance and technical support agreements including automated system health monitoring, routine security patching, bug fixes, database backup management, and responsive technical support from our engineering team.",
  },
  {
    question: "How do your AI solutions integrate with existing business data?",
    answer:
      "We design secure vector database pipelines and private retrieval systems that index internal documents, manuals, or database records. Your team can query internal organizational knowledge with fast, context-grounded responses while keeping all sensitive data isolated from public model training.",
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
            Everything you need to know about partnering with Orithyn for software and digital solutions.
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
