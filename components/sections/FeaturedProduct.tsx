import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { featuredProducts } from "@/lib/products";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export default function FeaturedProduct() {
  const product = featuredProducts[0];

  return (
    <Section className="py-20">
      <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white p-8 sm:p-12 lg:p-16 border border-neutral-800 shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
                <Sparkles className="h-3.5 w-3.5" /> {product.badge}
              </span>
              <span className="text-xs font-mono text-neutral-400">{product.status}</span>
            </div>

            <Heading level={2} className="text-3xl sm:text-4xl font-extrabold text-white">
              {product.name} — {product.tagline}
            </Heading>

            <Text className="text-base text-neutral-300 leading-relaxed">
              {product.description}
            </Text>

            <div className="space-y-3 pt-2">
              {product.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 text-sm text-neutral-200">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link href="/contact">
                <Button variant="primary" className="h-11 px-6 text-sm inline-flex items-center gap-2">
                  Request Private Demo <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 border border-neutral-800 rounded-2xl bg-neutral-950 p-6 space-y-4 shadow-inner">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-neutral-800 pb-3">
              <span>Chata Engine v1.0</span>
              <span className="text-emerald-400">Connected</span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800">
                <span className="text-blue-400 font-semibold">User:</span> How can Orythyn automate our customer query routing?
              </div>
              <div className="p-3 rounded-lg bg-blue-950/40 text-neutral-200 border border-blue-900/40">
                <span className="text-emerald-400 font-semibold">Chata AI:</span> By integrating Orythyn knowledge pipelines, your incoming requests are parsed, classified, and dispatched in &lt;120ms with 99.4% accuracy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
