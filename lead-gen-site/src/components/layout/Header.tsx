"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="container-site flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-brand-700">
          Pipeline<span className="text-brand-500">Pro</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#lead-magnet" variant="primary" size="sm">
            Free Audit
          </Button>
        </nav>

        <button
          className="rounded-md p-2 text-gray-600 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute left-0 top-16 w-full border-b border-gray-100 bg-white px-4 pb-4 pt-2 transition-all md:hidden",
          open ? "block" : "hidden"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-600"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-3">
          <Button href="#lead-magnet" variant="primary" className="w-full">
            Free Audit
          </Button>
        </div>
      </div>
    </header>
  );
}
