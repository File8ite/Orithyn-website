"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationLinks } from "@/lib/navigation";
import Button from "@/components/ui/Button";
import { Menu, X, MessageSquare } from "lucide-react";
import { WHATSAPP_BUSINESS_URL } from "@/lib/contactConfig";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/80 transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-black font-mono text-lg font-extrabold shadow-md shadow-amber-500/20">
            O
          </span>
          <span className="font-extrabold tracking-wider">ORITHYN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 transition hover:text-amber-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp (opens in a new tab)"
            title="Chat with us on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 transition hover:bg-amber-500 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link href="/contact">
            <Button variant="primary">Book a Call</Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex md:hidden items-center justify-center p-2 rounded-lg text-zinc-300 hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-amber-400" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <ul className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-zinc-200 hover:text-amber-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-zinc-800 space-y-3">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block">
              <Button variant="primary" className="w-full justify-center">
                Book a Call
              </Button>
            </Link>
            <a
              href={WHATSAPP_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Chat with us on WhatsApp (opens in a new tab)"
              className="w-full rounded-xl px-6 py-3 text-sm font-semibold border border-amber-500/40 bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-black transition flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}