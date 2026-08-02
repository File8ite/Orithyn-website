import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { engineeringProcess } from "@/lib/process";
import { CheckCircle2 } from "lucide-react";

export default function Process() {
  return (
    <Section id="process" className="py-16 md:py-24">
      <div className="max-w-3xl space-y-4 mb-12 md:mb-16 text-center mx-auto px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Engineering Methodology</span>
        <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          The 7-Stage Delivery Process
        </Heading>
        <Text className="text-base sm:text-lg text-zinc-300">
          From initial discovery to post-launch maintenance, our structured process mitigates risk, ensures transparency, and yields high-quality outcomes.
        </Text>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {engineeringProcess.map((proc) => (
          <div
            key={proc.step}
            className="relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md p-6 shadow-xl hover:border-yellow-500/50 hover:shadow-yellow-500/5 transition duration-300 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-sm font-extrabold font-mono text-black shadow-md shadow-amber-500/20">
                  0{proc.step}
                </span>
                <span className="text-xs font-medium text-zinc-400">Stage {proc.step} of 7</span>
              </div>

              <h3 className="text-lg font-bold text-white pt-2">{proc.title}</h3>
              <p className="text-xs font-semibold text-yellow-400">{proc.subtitle}</p>
              <p className="text-xs text-zinc-300 leading-relaxed">{proc.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 space-y-1.5 text-xs text-zinc-400">
              <span className="font-semibold text-zinc-200 block mb-1">Key Deliverables:</span>
              {proc.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-yellow-400 shrink-0" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
