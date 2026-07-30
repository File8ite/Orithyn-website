import Link from "next/link";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Section from "@/components/ui/Section";
import { CheckCircle2, ArrowRight, Code2, Cpu, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-12 pb-20 md:py-24">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_40%,rgba(59,130,246,0.06)_0%,transparent_100%)]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-semibold text-neutral-700 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            Engineering Digital Products That Drive Growth
          </div>

          <Heading level={1} className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl leading-[1.1]">
            We Build Software That Helps Businesses Move Faster.
          </Heading>

          <Text className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
            From custom web applications and business workflow automation to AI-powered digital products, Orythyn partners with ambitious organizations to design, build, and scale reliable software.
          </Text>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button variant="primary" className="h-12 px-6 text-base inline-flex items-center gap-2 shadow-md">
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
          <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-neutral-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Fast &amp; Disciplined Execution</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Modern Microservice Tech Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Architected for Scale</span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Engineering Showcase Mockup */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md rounded-2xl border border-neutral-200/80 bg-neutral-900 p-6 shadow-2xl text-white">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-neutral-400">orithyn.engine.ts</span>
            </div>

            <div className="space-y-3 font-mono text-xs text-neutral-300">
              <p className="text-blue-400">
                {`// Orythyn High-Performance Architecture`}
              </p>
              <p>
                <span className="text-purple-400">import</span> &#123; SystemEngine &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&quot;@orythyn/core&quot;</span>;
              </p>
              <div className="rounded-lg bg-neutral-950 p-4 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="flex items-center gap-1.5"><Code2 className="h-3.5 w-3.5 text-blue-400"/> Build Output</span>
                  <span className="text-emerald-400">✓ 100% Type-Safe</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="flex items-center gap-1.5"><Cpu className="h-3.5 w-3.5 text-purple-400"/> Microservices</span>
                  <span className="text-blue-400">Active</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-emerald-400"/> SLA Guarantee</span>
                  <span className="text-white">99.99% Uptime</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span>Status: Operational</span>
              <span className="text-emerald-400 font-semibold">Ready for Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}