import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export default function CtaSection() {
  const whatsappNumber = "2348148526658";

  return (
    <Section id="contact" className="py-20">
      <div className="relative rounded-3xl bg-neutral-900 text-white p-10 sm:p-16 text-center max-w-5xl mx-auto overflow-hidden shadow-2xl">
        <div className="space-y-6 max-w-2xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Let&apos;s Build Together</span>
          <Heading level={2} className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Transform Your Digital Infrastructure?
          </Heading>
          <Text className="text-base text-neutral-300">
            Reach out via WhatsApp or email to discuss your goals, technical requirements, and how Orythyn can deliver results.
          </Text>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Orythyn,%20I'd%20like%20to%20schedule%20a%20discovery%20call`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="h-12 px-8 text-base inline-flex items-center gap-2 shadow-lg bg-emerald-600 hover:bg-emerald-700 text-white border-none">
                <MessageSquare className="h-4 w-4" /> Chat on WhatsApp (+234 814 852 6658)
              </Button>
            </a>

            <Link href="/contact">
              <Button variant="secondary" className="h-12 px-6 text-base bg-neutral-800 text-white hover:bg-neutral-700 border-neutral-700 inline-flex items-center gap-2">
                Send Project Enquiry <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <a href="mailto:contact@orithyn.com">
              <Button variant="secondary" className="h-12 px-6 text-base bg-neutral-800 text-white hover:bg-neutral-700 border-neutral-700 inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
