"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationLinks } from "@/lib/navigation";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/80 transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white hover:text-yellow-400 transition">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-black font-mono text-lg font-extrabold shadow-md shadow-amber-500/20">
            O
          </span>
          <span className="font-extrabold tracking-wider">ORYTHYN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 transition hover:text-yellow-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button variant="primary">Book a Call</Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex md:hidden items-center justify-center p-2 rounded-lg text-zinc-300 hover:bg-zinc-800 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-yellow-400" /> : <Menu className="h-6 w-6" />}
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
                  className="block text-base font-medium text-zinc-200 hover:text-yellow-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-zinc-800">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}