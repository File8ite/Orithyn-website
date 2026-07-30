import Link from "next/link";
import { Mail, ArrowUpRight, MessageSquare } from "lucide-react";
import { navigationLinks } from "@/lib/navigation";

export default function Footer() {
  const whatsappNumber = "2348148526658";

  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-neutral-400 py-16">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-12">
        {/* Brand & Overview */}
        <div className="lg:col-span-5 space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black font-mono text-base font-extrabold">
              O
            </span>
            <span>ORYTHYN</span>
          </Link>
          <p className="text-sm leading-relaxed text-neutral-400 max-w-md">
            Orythyn Inc. is a software engineering company dedicated to designing, building, and scaling high-impact digital products for ambitious organizations.
          </p>
          <div className="flex items-center gap-4 pt-2">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Orythyn,%20I'd%20like%20to%20discuss%20a%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 transition hover:bg-emerald-900 hover:text-white"
              aria-label="WhatsApp Us"
              title="WhatsApp +234 814 852 6658"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
            {/* GitHub SVG */}
            <a
              href="https://github.com/Orithyn/website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
              aria-label="GitHub Repository"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:contact@orithyn.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
              aria-label="Email Us"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Navigation</h3>
          <ul className="space-y-2.5 text-sm">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Legal */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Direct Contacts</h3>
          <p className="text-sm text-neutral-400">
            WhatsApp: <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+234 814 852 6658</a>
          </p>
          <p className="text-sm text-neutral-400">
            Email: <a href="mailto:contact@orithyn.com" className="text-white hover:underline">contact@orithyn.com</a>
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Orythyn,%20I'd%20like%20to%20discuss%20a%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition"
            >
              Chat on WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-6 mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <p>© {new Date().getFullYear()} Orythyn Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
