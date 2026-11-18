"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import {
  projectTypes,
  scopeTiers,
  featureAddons,
  calculateProjectEstimate,
} from "@/lib/estimatorData";
import { mapProjectTypeToService, mapBudgetRange, WHATSAPP_BUSINESS_URL } from "@/lib/contactConfig";
import {
  LayoutDashboard,
  Bot,
  Workflow,
  Building2,
  CheckCircle2,
  ArrowRight,
  Calculator,
  RotateCcw,
  Sparkles,
  Clock,
  DollarSign,
  Layers,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard className="h-5 w-5 text-amber-400" />,
  Bot: <Bot className="h-5 w-5 text-amber-400" />,
  Workflow: <Workflow className="h-5 w-5 text-amber-400" />,
  Building2: <Building2 className="h-5 w-5 text-amber-400" />,
};

export default function ProjectEstimator() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedType, setSelectedType] = useState<string>("web-saas");
  const [selectedTier, setSelectedTier] = useState<string>("pro");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "auth-roles",
    "analytics",
  ]);

  // Compute live calculation estimate
  const estimate = useMemo(() => {
    return calculateProjectEstimate(selectedType, selectedTier, selectedAddons);
  }, [selectedType, selectedTier, selectedAddons]);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleReset = () => {
    setSelectedType("web-saas");
    setSelectedTier("pro");
    setSelectedAddons(["auth-roles", "analytics"]);
    setStep(1);
  };

  // Encoded URL string for structured contact pre-fill
  const contactUrl = useMemo(() => {
    const serviceName = mapProjectTypeToService(estimate.projectType.id);
    const budgetRange = mapBudgetRange(estimate.totalMinCost, estimate.totalMaxCost);
    const params = new URLSearchParams({
      scope: estimate.summaryText,
      service: serviceName,
      budget: budgetRange,
      type: estimate.projectType.name,
      tier: estimate.scopeTier.name,
      minCost: estimate.totalMinCost.toString(),
      maxCost: estimate.totalMaxCost.toString(),
      minWeeks: estimate.totalMinWeeks.toString(),
      maxWeeks: estimate.totalMaxWeeks.toString(),
    });
    return `/contact?${params.toString()}`;
  }, [estimate]);

  return (
    <Section id="estimator" className="py-16 md:py-24 border-y border-zinc-800/80 bg-zinc-950/90 relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(245,158,11,0.1)_0%,transparent_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-300 shadow-md">
            <Calculator className="h-3.5 w-3.5 text-amber-400" />
            <span className="uppercase tracking-widest">Interactive Scope &amp; Budget Calculator</span>
          </div>

          <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Estimate Your Custom Project Cost &amp; Timeline
          </Heading>

          <Text className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            Select your target software requirements below to generate an interactive ballpark estimate and timeline for your business.
          </Text>
        </div>

        {/* Step Progress Bar */}
        <div className="bg-zinc-900/80 p-3 rounded-2xl border border-zinc-800 flex items-center justify-between gap-2 overflow-x-auto text-xs font-medium">
          <button
            type="button"
            onClick={() => setStep(1)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition shrink-0 ${
              step === 1 ? "bg-amber-500 text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/20 text-[11px] font-bold">1</span>
            <span>Project Type</span>
          </button>

          <ChevronRight className="h-4 w-4 text-zinc-700 shrink-0" />

          <button
            type="button"
            onClick={() => setStep(2)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition shrink-0 ${
              step === 2 ? "bg-amber-500 text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/20 text-[11px] font-bold">2</span>
            <span>Scope Tier</span>
          </button>

          <ChevronRight className="h-4 w-4 text-zinc-700 shrink-0" />

          <button
            type="button"
            onClick={() => setStep(3)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition shrink-0 ${
              step === 3 ? "bg-amber-500 text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/20 text-[11px] font-bold">3</span>
            <span>Features ({selectedAddons.length})</span>
          </button>

          <ChevronRight className="h-4 w-4 text-zinc-700 shrink-0" />

          <button
            type="button"
            onClick={() => setStep(4)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition shrink-0 ${
              step === 4 ? "bg-amber-500 text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/20 text-[11px] font-bold">4</span>
            <span>Summary</span>
          </button>
        </div>

        {/* STEP PANELS */}
        <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
          {/* STEP 1: PROJECT TYPE */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Step 1: Choose Your Primary Project Type</h3>
                  <p className="text-xs text-zinc-400">Select what core product or system you need built.</p>
                </div>
                <span className="text-xs text-amber-400 font-mono font-semibold">1 of 4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="radiogroup" aria-label="Project Type Selection">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-5 rounded-2xl border text-left transition duration-200 flex flex-col justify-between space-y-3 ${
                        isSelected
                          ? "border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500"
                          : "border-zinc-800 bg-zinc-950/60 hover:border-zinc-700 hover:bg-zinc-950"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                          {iconMap[type.iconName]}
                        </div>
                        <span className="text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 px-2.5 py-0.5 rounded-full font-semibold">
                          {type.badge}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white mb-1">{type.name}</h4>
                        <p className="text-xs text-zinc-300 leading-relaxed">{type.description}</p>
                      </div>

                      <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                        <span>Baseline Turnaround:</span>
                        <span className="text-amber-400 font-mono font-semibold">
                          {type.baseMinWeeks} - {type.baseMaxWeeks} Wks
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <span className="text-xs text-zinc-400">Next step: Choose complexity tier</span>
                <Button
                  variant="primary"
                  onClick={() => setStep(2)}
                  className="h-10 px-5 text-xs font-bold inline-flex items-center gap-1.5"
                >
                  Continue to Scope Tier <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: SCOPE TIER */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Step 2: Select Scope &amp; Complexity Tier</h3>
                  <p className="text-xs text-zinc-400">Determine the depth of architectural tooling and support requirements.</p>
                </div>
                <span className="text-xs text-amber-400 font-mono font-semibold">2 of 4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="radiogroup" aria-label="Scope Tier Selection">
                {scopeTiers.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`p-5 rounded-2xl border text-left transition duration-200 flex flex-col justify-between space-y-3 ${
                        isSelected
                          ? "border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500"
                          : "border-zinc-800 bg-zinc-950/60 hover:border-zinc-700 hover:bg-zinc-950"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-amber-400 font-bold">
                          Multiplier: {tier.multiplier}x
                        </span>
                        {isSelected && <CheckCircle2 className="h-4 w-4 text-amber-400" />}
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white mb-1">{tier.name}</h4>
                        <p className="text-xs text-zinc-300 leading-relaxed">{tier.description}</p>
                      </div>

                      <div className="pt-2 border-t border-zinc-800/60 text-[11px] text-zinc-400">
                        {tier.id === "mvp" && "• Rapid MVP deployment"}
                        {tier.id === "pro" && "• Full custom design system & reporting"}
                        {tier.id === "enterprise-tier" && "• Dedicated cloud infrastructure & maintenance"}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-zinc-400 hover:text-white transition"
                >
                  ← Back to Type
                </button>

                <Button
                  variant="primary"
                  onClick={() => setStep(3)}
                  className="h-10 px-5 text-xs font-bold inline-flex items-center gap-1.5"
                >
                  Continue to Features <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: FEATURE ADD-ONS */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Step 3: Select Required Features &amp; Integrations</h3>
                  <p className="text-xs text-zinc-400">Check off specific technical modules your app requires.</p>
                </div>
                <span className="text-xs text-amber-400 font-mono font-semibold">3 of 4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featureAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      role="checkbox"
                      aria-checked={isChecked}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-2xl border text-left transition duration-200 flex items-start justify-between gap-3 ${
                        isChecked
                          ? "border-amber-500/80 bg-amber-500/10 shadow"
                          : "border-zinc-800 bg-zinc-950/60 hover:border-zinc-700"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{addon.name}</span>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">{addon.description}</p>
                      </div>

                      <div className="pt-1 shrink-0">
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-md border text-xs ${
                            isChecked
                              ? "bg-amber-500 border-amber-500 text-black font-bold"
                              : "border-zinc-700 bg-zinc-900"
                          }`}
                        >
                          {isChecked && "✓"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-semibold text-zinc-400 hover:text-white transition"
                >
                  ← Back to Scope Tier
                </button>

                <Button
                  variant="primary"
                  onClick={() => setStep(4)}
                  className="h-10 px-5 text-xs font-bold inline-flex items-center gap-1.5"
                >
                  View Calculated Summary <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 4: ESTIMATE SUMMARY */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Step 4: Your Calculated Project Estimate</h3>
                  <p className="text-xs text-zinc-400">Based on your selected specifications &amp; architecture modules.</p>
                </div>
                <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                  Calculation Complete
                </span>
              </div>

              {/* Estimate Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-zinc-950 border border-amber-500/40 shadow-xl space-y-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <DollarSign className="h-4 w-4 text-amber-400" />
                    <span>Estimated Budget Range</span>
                  </div>
                  <p className="text-3xl font-black text-white">
                    ${estimate.totalMinCost.toLocaleString()} — ${estimate.totalMaxCost.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-zinc-400">Includes core development, testing, &amp; initial launch.</p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950 border border-amber-500/40 shadow-xl space-y-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Clock className="h-4 w-4 text-amber-400" />
                    <span>Estimated Timeline</span>
                  </div>
                  <p className="text-3xl font-black text-white">
                    {estimate.totalMinWeeks} — {estimate.totalMaxWeeks} Weeks
                  </p>
                  <p className="text-[11px] text-zinc-400">Agile sprints with bi-weekly progress demos.</p>
                </div>
              </div>

              {/* Breakdown Card */}
              <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3 text-xs">
                <div className="flex items-center justify-between text-zinc-300 font-bold border-b border-zinc-800 pb-2">
                  <span>Configuration Breakdown</span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-amber-400 hover:underline flex items-center gap-1 font-normal"
                  >
                    <RotateCcw className="h-3 w-3" /> Reset Selections
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-zinc-300">
                  <div>
                    <span className="text-zinc-500">Project Type:</span>
                    <p className="font-semibold text-white">{estimate.projectType.name}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500">Scope Tier:</span>
                    <p className="font-semibold text-white">{estimate.scopeTier.name}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500">Active Features:</span>
                    <p className="font-semibold text-amber-400">{estimate.selectedAddons.length} Modules Selected</p>
                  </div>
                </div>

                {estimate.selectedAddons.length > 0 && (
                  <div className="pt-2 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
                    {estimate.selectedAddons.map((addon) => (
                      <span key={addon.id} className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-[11px] text-zinc-300">
                        ✓ {addon.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Funnel CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-xs font-semibold text-zinc-400 hover:text-white transition"
                >
                  ← Modify Feature Selections
                </button>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <a
                    href={WHATSAPP_BUSINESS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp (opens in a new tab)"
                    className="w-full sm:w-auto h-12 px-5 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 border border-amber-500/40 bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                    Chat with us on WhatsApp
                  </a>

                  <Link href={contactUrl} className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      className="w-full sm:w-auto h-12 px-7 text-sm font-extrabold inline-flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25"
                    >
                      Book Strategy Call with this Scope <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Live Calculation Bar (Always visible) */}
        <div className="rounded-2xl bg-zinc-900/90 border border-amber-500/30 p-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono backdrop-blur-md">
          <div className="flex items-center gap-4 text-zinc-300">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Sparkles className="h-4 w-4" /> Live Estimate:
            </span>
            <span className="text-white font-bold text-sm">
              ${estimate.totalMinCost.toLocaleString()} - ${estimate.totalMaxCost.toLocaleString()}
            </span>
            <span className="text-zinc-400 hidden sm:inline">|</span>
            <span className="text-zinc-300 hidden sm:inline">
              {estimate.totalMinWeeks}-{estimate.totalMaxWeeks} wks
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {step < 4 && (
              <button
                type="button"
                onClick={() => setStep(4)}
                className="text-amber-400 hover:underline text-xs font-sans font-semibold shrink-0"
              >
                Skip to Summary →
              </button>
            )}
            <Link href={contactUrl} className="w-full sm:w-auto">
              <Button variant="primary" className="h-9 px-4 text-xs font-bold w-full sm:w-auto">
                Lock Scope &amp; Book Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
