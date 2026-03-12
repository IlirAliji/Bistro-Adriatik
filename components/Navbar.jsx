"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cream/80 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-2xl tracking-wide text-navy"
        >
          Bistro Adriatik
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm uppercase tracking-wider transition ${
                  active ? "text-gold" : "text-ink hover:text-gold"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile button */}
        <button onClick={() => setOpen(true)} className="md:hidden text-ink">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-cream z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="font-heading text-2xl text-navy">
              Bistro Adriatik
            </span>
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-8 text-xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-ink hover:text-gold transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
