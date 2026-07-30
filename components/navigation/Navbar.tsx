"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationLinks } from "@/lib/navigation";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-neutral-200/80 transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-neutral-900 hover:text-black transition">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white font-mono text-base font-extrabold shadow-sm">
            O
          </span>
          <span>ORYTHYN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
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
          className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-neutral-700 hover:bg-neutral-100 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <ul className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-neutral-700 hover:text-neutral-900"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-neutral-100">
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