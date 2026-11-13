"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Section from "@/components/ui/Section";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  LayoutDashboard, 
  Bot, 
  Workflow, 
  ShieldCheck, 
  Layers, 
  Activity,
  Check,
  Server,
  Smartphone
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"web" | "ai" | "automation" | "support">("web");

  return (
    <Section className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24">
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_15%,rgba(245,158,11,0.18)_0%,transparent_100%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Clear Value Proposition */}
        <div className="lg:col-span-6 space-y-6 md:space-y-7">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-300 shadow-md shadow-amber-500/10 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span className="tracking-wider uppercase">Custom Software Development Company</span>
          </div>

          {/* Primary Hero H1 - Crystal Clear Business Value Headline */}
          <Heading level={1} className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-[1.12]">
            <span className="text-white drop-shadow-md">Technology That Moves</span>{" "}
            <span className="text-amber-400 font-black drop-shadow-sm">
              Your Business Forward.
            </span>
          </Heading>

          {/* Sub-headline / Direct Value Clarification */}
          <Text className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal">
            We design and build custom software, web applications, mobile apps and intelligent business systems that help organisations operate better, serve customers and grow.
          </Text>

          {/* At-a-Glance Delivery Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-200">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 font-bold shrink-0">
                <LayoutDashboard className="h-4 w-4" />
              </span>
              <span>Custom Business Software</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-200">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 font-bold shrink-0">
                <Smartphone className="h-4 w-4" />
              </span>
              <span>Web &amp; Mobile Apps (React Native)</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-200">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 font-bold shrink-0">
                <Workflow className="h-4 w-4" />
              </span>
              <span>Business Management Systems</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-200">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 font-bold shrink-0">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span>Maintenance &amp; Technical Support</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto h-12 px-7 text-base font-extrabold inline-flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-transform hover:scale-[1.02]">
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto h-12 px-7 text-base font-semibold inline-flex items-center justify-center gap-2">
                Explore Our Services
              </Button>
            </Link>
          </div>

          {/* Value Props Checklist */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-zinc-200 font-semibold">Contracted Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-zinc-200 font-semibold">Dedicated Technical Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-zinc-200 font-semibold">Structured Delivery Process</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Solution Showcase Deck */}
        <div className="lg:col-span-6 relative">
          <div className="relative mx-auto w-full rounded-2xl border border-amber-500/30 bg-zinc-950/95 p-5 sm:p-6 shadow-2xl shadow-amber-500/10 text-white backdrop-blur-xl">
            {/* Header & Tab Selectors */}
            <div className="space-y-3 border-b border-zinc-800 pb-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-amber-400" />
                  Solution Architecture Deck
                </span>
              </div>

              {/* Navigation Tabs */}
              <div className="grid grid-cols-4 gap-1.5 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveTab("web")}
                  className={`py-2 px-1 text-center rounded-lg transition ${
                    activeTab === "web"
                      ? "bg-amber-500 text-black font-bold shadow"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  Web Apps
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className={`py-2 px-1 text-center rounded-lg transition ${
                    activeTab === "ai"
                      ? "bg-amber-500 text-black font-bold shadow"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  AI Solutions
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("automation")}
                  className={`py-2 px-1 text-center rounded-lg transition ${
                    activeTab === "automation"
                      ? "bg-amber-500 text-black font-bold shadow"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  Automation
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("support")}
                  className={`py-2 px-1 text-center rounded-lg transition ${
                    activeTab === "support"
                      ? "bg-amber-500 text-black font-bold shadow"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  Support
                </button>
              </div>
            </div>

            {/* TAB CONTENT PANELS */}
            <div className="min-h-[280px] flex flex-col justify-between">
              {/* TAB 1: WEB APPS & SAAS */}
              {activeTab === "web" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                    <div className="flex items-center gap-2">
                      <LayoutDashboard className="h-4 w-4 text-amber-400" />
                      <span className="text-sm font-bold text-white">Custom Web &amp; Business Portals</span>
                    </div>
                    <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
                      Responsive Architecture
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <Server className="h-3 w-3 text-amber-400" /> Architecture
                      </span>
                      <p className="text-base font-bold text-white">Component-Driven</p>
                      <p className="text-[10px] text-zinc-400">React 19 &amp; Next.js 16</p>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3 text-amber-400" /> Data Layer
                      </span>
                      <p className="text-base font-bold text-white">PostgreSQL Schemas</p>
                      <p className="text-[10px] text-zinc-400">Strict type safety &amp; validation</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2 text-xs text-zinc-300">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-amber-400">Target Deliverables:</span>
                      <span className="font-mono text-zinc-400 text-[11px]">Next.js 16 + TypeScript</span>
                    </div>
                    <p className="text-zinc-300 text-[12px] leading-relaxed">
                      Custom responsive admin interfaces, client portals, billing integrations, and operational tools designed for your specific business workflow.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: AI PRODUCTS & KNOWLEDGE ASSISTANTS */}
              {activeTab === "ai" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-amber-400" />
                      <span className="text-sm font-bold text-white">Document Knowledge &amp; Query Assistant</span>
                    </div>
                    <span className="text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full font-semibold">
                      Knowledge Retrieval
                    </span>
                  </div>

                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800">
                      <span className="text-amber-400 font-bold">Query:</span> Search operational manuals for equipment maintenance guidelines.
                    </div>
                    <div className="p-3 rounded-lg bg-amber-950/30 text-zinc-200 border border-amber-500/30 space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-amber-400 font-bold">
                        <span>Orithyn Assistant:</span>
                        <span className="text-zinc-400 font-mono">Context-Verified Retrieval</span>
                      </div>
                      <p className="text-[11px] text-zinc-300 font-sans leading-relaxed">
                        Extracted maintenance steps with source document references.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 border-t border-zinc-800/50">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-emerald-400" /> Vector Document Search
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-emerald-400" /> Context Isolation
                    </span>
                  </div>
                </div>
              )}

              {/* TAB 3: BUSINESS PROCESS AUTOMATION */}
              {activeTab === "automation" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                    <div className="flex items-center gap-2">
                      <Workflow className="h-4 w-4 text-amber-400" />
                      <span className="text-sm font-bold text-white">Automated Business Workflow</span>
                    </div>
                    <span className="text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full font-semibold">
                      Event Automation
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-amber-400" /> 1. Form Enquiry Received
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px]">Triggered Event</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Bot className="h-3.5 w-3.5 text-amber-400" /> 2. Rule-Based Validation &amp; Scoring
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px]">Standardized Flow</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/30 text-xs">
                      <span className="flex items-center gap-2 text-amber-300 font-semibold">
                        <Workflow className="h-3.5 w-3.5 text-amber-400" /> 3. Dispatch to Operations &amp; Team Alert
                      </span>
                      <span className="text-amber-400 font-mono text-[11px]">Automated Routing</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Eliminate repetitive manual steps, spreadsheet errors, and sluggish multi-tool handoffs with custom event-driven pipelines.
                  </p>
                </div>
              )}

              {/* TAB 4: SUPPORT & MAINTENANCE */}
              {activeTab === "support" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-amber-400" />
                      <span className="text-sm font-bold text-white">Technical Support &amp; Maintenance</span>
                    </div>
                    <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
                      Ongoing Support
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <Activity className="h-3 w-3 text-amber-400" /> System Health
                      </span>
                      <p className="text-base font-bold text-emerald-400">Proactive Monitoring</p>
                      <p className="text-[10px] text-zinc-400">Regular health &amp; uptime checks</p>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3 text-amber-400" /> Support Model
                      </span>
                      <p className="text-base font-bold text-white">Structured Escalation</p>
                      <p className="text-[10px] text-zinc-400">Defined triage for critical issues</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 space-y-1">
                    <span className="font-semibold text-white">Included in Support Agreements:</span>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Continuous security updates, database backup verification, performance optimization, and proactive feature enhancements.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Footer Bar */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span className="text-zinc-400 font-medium">Click tabs above to preview services</span>
                <Link href="/services" className="text-amber-400 font-bold hover:underline inline-flex items-center gap-1">
                  View Full Specs <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}