"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-md border-b border-black/10"
            : "bg-cream/92 backdrop-blur-md border-b border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading text-xl sm:text-2xl tracking-wide text-navy"
          >
            Bistro Adriatik
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm uppercase tracking-[0.18em] transition duration-300 ${
                    active ? "text-gold" : "text-ink hover:text-gold"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gold rounded-full transition-all duration-300 ${
                      active ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-ink hover:text-gold transition"
            aria-label="Open menu"
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark background */}
        <div
          className="absolute inset-0 bg-black/45 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Sliding panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-cream shadow-2xl border-l border-black/10 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-black/10">
            <span className="font-heading text-2xl text-navy">
              Bistro Adriatik
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-ink hover:text-gold transition"
              aria-label="Close menu"
            >
              <X size={30} />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-4 text-lg uppercase tracking-[0.14em] border-b border-black/5 transition ${
                    active
                      ? "text-gold"
                      : "text-ink hover:text-gold"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}