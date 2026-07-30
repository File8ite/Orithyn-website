import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { engineeringProcess } from "@/lib/process";
import { CheckCircle2 } from "lucide-react";

export default function Process() {
  return (
    <Section id="process" className="py-20">
      <div className="max-w-3xl space-y-4 mb-16 text-center mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Methodology</span>
        <Heading level={2} className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
          The 7-Stage Engineering Delivery Process
        </Heading>
        <Text className="text-base text-neutral-600">
          From initial discovery to post-launch maintenance, our structured process mitigates risk, ensures transparency, and yields high-quality outcomes.
        </Text>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {engineeringProcess.map((proc) => (
          <div
            key={proc.step}
            className="relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm hover:shadow-md transition group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-sm font-extrabold font-mono text-white">
                  0{proc.step}
                </span>
                <span className="text-xs font-medium text-neutral-400">Step {proc.step} of 7</span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 pt-2">{proc.title}</h3>
              <p className="text-xs font-semibold text-blue-600">{proc.subtitle}</p>
              <p className="text-xs text-neutral-600 leading-relaxed">{proc.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 space-y-1.5 text-xs text-neutral-500">
              <span className="font-semibold text-neutral-700 block mb-1">Deliverables:</span>
              {proc.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
