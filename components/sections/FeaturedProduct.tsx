import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { featuredProducts } from "@/lib/products";
import { Sparkles, Check, ArrowRight, Bot } from "lucide-react";

export default function FeaturedProduct() {
  const product = featuredProducts[0];

  return (
    <Section className="py-16 md:py-24">
      <div className="rounded-3xl bg-zinc-900/90 text-white p-8 sm:p-12 lg:p-16 border border-yellow-500/30 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 text-xs font-semibold text-yellow-400">
                <Sparkles className="h-3.5 w-3.5" /> {product.badge}
              </span>
              <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2.5 py-0.5 rounded-full border border-zinc-800">{product.status}</span>
            </div>

            <Heading level={2} className="text-3xl sm:text-4xl font-extrabold text-white">
              {product.name} — {product.tagline}
            </Heading>

            <Text className="text-base text-zinc-300 leading-relaxed">
              {product.description}
            </Text>

            <div className="space-y-3 pt-2">
              {product.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 text-sm text-zinc-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400 shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link href="/contact">
                <Button variant="primary" className="h-11 px-6 text-sm inline-flex items-center gap-2">
                  Discuss a Similar System <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 border border-zinc-800 rounded-2xl bg-zinc-950 p-6 space-y-4 shadow-inner">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-zinc-800 pb-3">
              <span className="flex items-center gap-2"><Bot className="h-4 w-4 text-yellow-400"/> Chata Prototype Workflow</span>
              <span className="text-yellow-400 font-semibold">Interactive Demo</span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800">
                <span className="text-yellow-400 font-semibold">User:</span> How can Orithyn automate our customer query routing?
              </div>
              <div className="p-3 rounded-lg bg-amber-950/30 text-zinc-200 border border-yellow-500/20">
                <span className="text-yellow-400 font-semibold">Chata Assistant:</span> By integrating structured query workflows, incoming customer inquiries are automatically classified and routed to the appropriate department for prompt review.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
