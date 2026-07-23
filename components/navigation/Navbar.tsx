import { navigationLinks } from "@/lib/navigation";
import React from "react";
import Button from "../ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          ORYTHYN
        </h1>

        {/* Navigation */}
        <ul className="flex items-center gap-8">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-700 transition hover:text-black"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button variant="primary">
          Book a Call
        </Button>

      </div>
    </nav>
  );
}