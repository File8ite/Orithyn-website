import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";
import { 
  Layers, 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";

export default function SelectedProjects() {
  return (
    <Section id="projects" className="py-16 md:py-24 border-y border-zinc-800/80 bg-zinc-950/70">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Selected Work
          </span>
          <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Selected Projects &amp; Technical Work
          </Heading>
          <Text className="text-base sm:text-lg text-zinc-300">
            A showcase of our internal software applications, functional prototypes, and technical reference architectures built to demonstrate practical engineering capabilities.
          </Text>
        </div>

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition shrink-0"
        >
          View Full Portfolio <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* 2x2 Grid of Projects */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
        {caseStudies.map((project) => {
          const contactUrl = `/contact?scope=${encodeURIComponent(`Inquiry regarding project similar to: ${project.title}`)}`;
          return (
            <Card
              key={project.id}
              className="p-6 sm:p-8 bg-zinc-900/60 border-zinc-800/90 shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition duration-300"
            >
              <div className="space-y-5">
                {/* Status Badge & Category */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/70 pb-3">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                    {project.badge}
                  </span>
                  <span className="text-xs font-medium text-zinc-300 bg-zinc-950 px-2.5 py-0.5 rounded-md border border-zinc-800">
                    {project.clientCategory}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-amber-400/90">
                    {project.tagline}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {project.summary}
                </p>

                {/* Architecture Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-zinc-950 p-3 rounded-xl border border-zinc-800/80 text-center text-xs">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="space-y-0.5 py-0.5">
                      <p className="text-xs sm:text-sm font-bold text-white truncate">{m.value}</p>
                      <p className="text-[10px] text-zinc-400 font-mono">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] text-zinc-400 font-semibold mr-1 flex items-center gap-1">
                    <Cpu className="h-3 w-3 text-amber-400" /> Stack:
                  </span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-[11px] font-mono px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between gap-4">
                <Link
                  href={contactUrl}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 transition inline-flex items-center gap-1.5"
                >
                  Discuss a Similar Build <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="text-xs text-zinc-400 hover:text-white transition inline-flex items-center gap-1"
                >
                  Details <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Bottom Exploration Banner */}
      <div className="mt-12 text-center pt-4">
        <Link href="/portfolio">
          <Button variant="secondary" className="h-11 px-8 text-xs font-bold inline-flex items-center gap-2">
            Explore All Reference Projects &amp; Architectures <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
