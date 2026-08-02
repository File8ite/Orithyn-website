import Link from "next/link";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Section from "@/components/ui/Section";
import { CheckCircle2, ArrowRight, Code2, Cpu, ShieldCheck, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-10 pb-16 md:py-20 lg:py-24">
      {/* Background Ambient Golden Yellow Radial Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(65%_50%_at_50%_20%,rgba(245,158,11,0.16)_0%,transparent_100%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Content & Hierarchy */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300 shadow-md shadow-amber-500/10 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span className="tracking-wide">Engineering Digital Products That Drive Growth</span>
          </div>

          {/* Primary Hero Heading (H1) - User Exact Headline */}
          <Heading level={1} className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-[1.12]">
            <span className="text-white drop-shadow-md">Engineering Software for</span>{" "}
            <span className="inline-block animate-gold-shimmer font-black drop-shadow-sm">
              Ambitious Organizations &amp; Individuals.
            </span>
          </Heading>

          {/* Sub-headline / Body */}
          <Text className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl font-normal">
            From custom web applications and business workflow automation to AI-powered digital products, Orythyn partners with ambitious organizations and founders to design, build, and scale reliable software.
          </Text>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto h-12 px-7 text-base font-extrabold inline-flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-transform hover:scale-[1.02]">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto h-12 px-7 text-base font-semibold inline-flex items-center justify-center gap-2">
                Explore Our Services
              </Button>
            </Link>
          </div>

          {/* Value Props Checklist */}
          <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium text-zinc-300">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-zinc-200 font-semibold">Fast &amp; Disciplined</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-zinc-200 font-semibold">Modern Stack</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
              <span className="text-zinc-200 font-semibold">Architected for Scale</span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Engineering Showcase Mockup */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md w-full rounded-2xl border border-amber-500/30 bg-zinc-950/95 p-6 shadow-2xl shadow-amber-500/10 text-white backdrop-blur-xl">
            {/* Header Bar */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-amber-400 font-medium flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-amber-400" />
                orithyn.engine.ts
              </span>
            </div>

            {/* Code Block */}
            <div className="space-y-3 font-mono text-xs text-zinc-300">
              <p className="text-amber-400/90 font-medium">
                {`// Orythyn High-Performance Architecture`}
              </p>
              <p className="leading-relaxed">
                <span className="text-amber-400 font-semibold">import</span> &#123; SystemEngine &#125; <span className="text-amber-400 font-semibold">from</span> <span className="text-yellow-300">&quot;@orythyn/core&quot;</span>;
              </p>
              
              {/* Metrics Card */}
              <div className="rounded-xl bg-zinc-900/90 p-4 border border-zinc-800/90 space-y-2.5">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-300"><Code2 className="h-3.5 w-3.5 text-amber-400"/> Build Output</span>
                  <span className="text-amber-400 font-semibold">✓ 100% Type-Safe</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-300"><Cpu className="h-3.5 w-3.5 text-amber-400"/> Microservices</span>
                  <span className="text-amber-300 font-medium">Active</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-2 text-zinc-300"><ShieldCheck className="h-3.5 w-3.5 text-amber-400"/> SLA Guarantee</span>
                  <span className="text-white font-bold">99.99% Uptime</span>
                </div>
              </div>
            </div>

            {/* Footer Bar */}
            <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span className="text-zinc-400">Status: Operational</span>
              <span className="text-amber-400 font-extrabold tracking-wide">Ready for Scale</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}