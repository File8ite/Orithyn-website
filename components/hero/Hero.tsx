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
  TrendingUp, 
  Users, 
  Zap, 
  Layers, 
  Activity,
  Check
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"web" | "ai" | "automation" | "sla">("web");

  return (
    <Section className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24">
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_15%,rgba(245,158,11,0.18)_0%,transparent_100%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Clear Value Proposition */}
        <div className="lg:col-span-6 space-y-6 md:space-y-7">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-300 shadow-md shadow-amber-500/10 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span className="tracking-wider uppercase">Custom Software &amp; AI Engineering Studio</span>
          </div>

          {/* Primary Hero H1 - Crystal Clear One-Glance Headline */}
          <Heading level={1} className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-[1.12]">
            <span className="text-white drop-shadow-md">We Build Custom</span>{" "}
            <span className="inline-block animate-gold-shimmer font-black drop-shadow-sm">
              Web Apps, AI Products &amp; Automation.
            </span>
          </Heading>

          {/* Sub-headline / Direct Value Clarification */}
          <Text className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal">
            Orythyn partners with ambitious businesses and founders to design, develop, and scale custom web platforms, AI assistants, and automated workflow systems built for high performance.
          </Text>

          {/* At-a-Glance Delivery Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-1">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-200">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 font-bold shrink-0">
                <LayoutDashboard className="h-4 w-4" />
              </span>
              <span>Custom Web Apps &amp; SaaS</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-200">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 font-bold shrink-0">
                <Bot className="h-4 w-4" />
              </span>
              <span>AI Agents &amp; Knowledge Systems</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-200">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 font-bold shrink-0">
                <Workflow className="h-4 w-4" />
              </span>
              <span>Business Process Automation</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-200">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 font-bold shrink-0">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span>Ongoing SLA &amp; Support</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto h-12 px-7 text-base font-extrabold inline-flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-transform hover:scale-[1.02]">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto h-12 px-7 text-base font-semibold inline-flex items-center justify-center gap-2">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Guarantee Checklist */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-zinc-200 font-semibold">100% Custom Codebase</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-zinc-200 font-semibold">Production SLA Guarantees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-zinc-200 font-semibold">Fast Turnaround</span>
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
                  Interactive Solutions Deck
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
                  AI Products
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
                  onClick={() => setActiveTab("sla")}
                  className={`py-2 px-1 text-center rounded-lg transition ${
                    activeTab === "sla"
                      ? "bg-amber-500 text-black font-bold shadow"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  SLA Support
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
                      <span className="text-sm font-bold text-white">Custom Web Portal &amp; Analytics</span>
                    </div>
                    <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
                      Live Dashboard
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-amber-400" /> Monthly Growth
                      </span>
                      <p className="text-lg font-bold text-white">+34.8%</p>
                      <p className="text-[10px] text-zinc-400">Automated reporting sync</p>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <Users className="h-3 w-3 text-amber-400" /> Active Users
                      </span>
                      <p className="text-lg font-bold text-white">48,290</p>
                      <p className="text-[10px] text-zinc-400">Sub-second load times</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2 text-xs text-zinc-300">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-amber-400">Target Deliverable:</span>
                      <span className="font-mono text-zinc-400 text-[11px]">Next.js 16 + TypeScript</span>
                    </div>
                    <p className="text-zinc-300 text-[12px] leading-relaxed">
                      Custom responsive admin interfaces, customer portals, billing integrations, and real-time operational platforms.
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
                      <span className="text-sm font-bold text-white">Internal AI Assistant (Orythyn Chata)</span>
                    </div>
                    <span className="text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full font-semibold">
                      LLM Pipeline
                    </span>
                  </div>

                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800">
                      <span className="text-amber-400 font-bold">Query:</span> Search 10,000 internal SLA contracts for renewal clauses.
                    </div>
                    <div className="p-3 rounded-lg bg-amber-950/30 text-zinc-200 border border-amber-500/30 space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-amber-400 font-bold">
                        <span>Chata AI Engine:</span>
                        <span className="text-zinc-400 font-mono">Response in 118ms</span>
                      </div>
                      <p className="text-[11px] text-zinc-300 font-sans leading-relaxed">
                        Extracted 14 renewal clauses. Automated alerts sent to account managers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 border-t border-zinc-800/50">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-emerald-400" /> Vector Database RAG
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Check className="h-3.5 w-3.5 text-emerald-400" /> Enterprise Isolation
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
                      Active Dispatch
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Zap className="h-3.5 w-3.5 text-amber-400" /> 1. Customer Lead Received
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px]">Instant</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Bot className="h-3.5 w-3.5 text-amber-400" /> 2. AI Lead Qualification &amp; Scoring
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px]">99.4% Accuracy</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/30 text-xs">
                      <span className="flex items-center gap-2 text-amber-300 font-semibold">
                        <Workflow className="h-3.5 w-3.5 text-amber-400" /> 3. Sync to CRM &amp; Dispatch Alert
                      </span>
                      <span className="text-amber-400 font-mono text-[11px]">Triggered</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Eliminate repetitive manual steps, data entry errors, and sluggish multi-tool handoffs with custom event-driven pipelines.
                  </p>
                </div>
              )}

              {/* TAB 4: SLA SUPPORT & SCALING */}
              {activeTab === "sla" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-amber-400" />
                      <span className="text-sm font-bold text-white">SLA Support &amp; Maintenance</span>
                    </div>
                    <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
                      Guaranteed SLA
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <Activity className="h-3 w-3 text-amber-400" /> Uptime Guarantee
                      </span>
                      <p className="text-lg font-bold text-emerald-400">99.99%</p>
                      <p className="text-[10px] text-zinc-400">24/7 Automated monitoring</p>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <ShieldCheck className="h-3 w-3 text-amber-400" /> Response Time
                      </span>
                      <p className="text-lg font-bold text-white">&lt; 15 Mins</p>
                      <p className="text-[10px] text-zinc-400">Dedicated engineering line</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 space-y-1">
                    <span className="font-semibold text-white">Included in SLA Support:</span>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Continuous security updates, database backups, performance optimization, and proactive feature upgrades.
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