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
      <div className="relative rounded-3xl bg-zinc-900/90 border border-yellow-500/30 text-white p-8 sm:p-16 text-center max-w-5xl mx-auto overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.15),transparent_70%)]" />

        <div className="space-y-6 max-w-2xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Let&apos;s Build Together</span>
          <Heading level={2} className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Transform Your Digital Infrastructure?
          </Heading>
          <Text className="text-base text-zinc-300">
            Reach out via WhatsApp or email to discuss your goals, technical requirements, and how Orythyn can deliver results.
          </Text>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Orythyn,%20I'd%20like%20to%20schedule%20a%20discovery%20call`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="primary" className="w-full sm:w-auto h-12 px-8 text-base inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25">
                <MessageSquare className="h-4 w-4" /> Chat on WhatsApp (+234 814 852 6658)
              </Button>
            </a>

            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto h-12 px-6 text-base inline-flex items-center justify-center gap-2">
                Send Project Enquiry <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <a href="mailto:contact@orithyn.com" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto h-12 px-6 text-base inline-flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" /> Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
