import Link from "next/link";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Section from "@/components/ui/Section";
import { CheckCircle2, ArrowRight, Code2, Cpu, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-12 pb-20 md:py-24">
      {/* Background Subtle Yellow Radial Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_45%_at_50%_25%,rgba(234,179,8,0.12)_0%,transparent_100%)]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold text-yellow-400 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-yellow-400 animate-pulse" />
            <span>Engineering Digital Products That Drive Growth</span>
          </div>

          <Heading level={1} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            We Build Software That Helps Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">Move Faster.</span>
          </Heading>

          <Text className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
            From custom web applications and business workflow automation to AI-powered digital products, Orythyn partners with ambitious organizations to design, build, and scale reliable software.
          </Text>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button variant="primary" className="h-12 px-6 text-base inline-flex items-center gap-2 shadow-lg shadow-amber-500/25">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" className="h-12 px-6 text-base">
                Explore Our Services
              </Button>
            </Link>
          </div>

          {/* Value Props Checklist */}
          <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-yellow-400" />
              <span>Fast &amp; Disciplined Execution</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-yellow-400" />
              <span>Modern Microservice Tech Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-yellow-400" />
              <span>Architected for Scale</span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Engineering Showcase Mockup */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md rounded-2xl border border-yellow-500/30 bg-zinc-950/90 p-6 shadow-2xl shadow-yellow-500/10 text-white backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-yellow-400/90">orithyn.engine.ts</span>
            </div>

            <div className="space-y-3 font-mono text-xs text-zinc-300">
              <p className="text-yellow-400/80">
                {`// Orythyn High-Performance Architecture`}
              </p>
              <p>
                <span className="text-amber-400">import</span> &#123; SystemEngine &#125; <span className="text-amber-400">from</span> <span className="text-yellow-300">&quot;@orythyn/core&quot;</span>;
              </p>
              <div className="rounded-xl bg-zinc-900/90 p-4 border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5 text-yellow-400"/> Build Output</span>
                  <span className="text-yellow-400 font-semibold">✓ 100% Type-Safe</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-1.5"><Cpu className="h-3.5 w-3.5 text-amber-400"/> Microservices</span>
                  <span className="text-amber-300 font-medium">Active</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-yellow-400"/> SLA Guarantee</span>
                  <span className="text-white font-semibold">99.99% Uptime</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span>Status: Operational</span>
              <span className="text-yellow-400 font-semibold">Ready for Scale</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}