import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export default function CtaSection() {
  const whatsappNumber = "2348148526658";

  return (
    <Section id="contact" className="py-16 md:py-24">
      <div className="relative rounded-3xl bg-zinc-900/90 border border-amber-500/30 text-white p-8 sm:p-16 text-center max-w-5xl mx-auto overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_70%)]" />

        <div className="space-y-6 max-w-2xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Start Your Project</span>
          <Heading level={2} className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have a Business Challenge We Can Solve?
          </Heading>
          <Text className="text-base sm:text-lg text-zinc-300">
            Tell us what you are trying to build or improve. Let&apos;s discuss a practical software solution for your organisation.
          </Text>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto h-12 px-8 text-base inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25">
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/estimator" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto h-12 px-6 text-base inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500">
                Request a Project Estimate
              </Button>
            </Link>
          </div>

          <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-400">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Orithyn,%20I'd%20like%20to%20discuss%20a%20software%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-amber-400 transition"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>WhatsApp: <strong className="text-zinc-200">+234 814 852 6658</strong></span>
            </a>

            <a
              href="mailto:contact@orithyn.com"
              className="inline-flex items-center gap-2 hover:text-amber-400 transition"
            >
              <Mail className="h-4 w-4 text-amber-400" />
              <span>Email: <strong className="text-zinc-200">contact@orithyn.com</strong></span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

