import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Reservations", href: "/reservations" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM17.5 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.4-4.1 4.2V11H7.8v3h2.7v8h3Z" />
      </svg>
    ),
  },
  {
    name: "Location",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-cream">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:gap-12 sm:pb-12 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-14 lg:pb-14">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-gold sm:text-xs">
              Bistro Adriatik
            </p>

            <h3 className="mb-4 font-heading text-2xl leading-tight sm:text-3xl">
              Refined Coastal Dining
            </h3>

            <p className="mx-auto max-w-md text-sm leading-7 text-cream/70 sm:text-base lg:mx-0">
              Mediterranean cuisine inspired by the Adriatic coast, crafted with
              seasonal ingredients and timeless hospitality in an elegant setting.
            </p>

            <div className="mt-7 flex justify-center gap-3 lg:justify-start">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream/80 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold hover:text-navy sm:h-11 sm:w-11"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center lg:text-left">
            <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-gold sm:mb-6 sm:text-sm">
              Navigate
            </h4>

            <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex text-sm text-cream/75 transition duration-300 hover:translate-x-1 hover:text-gold sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Visit */}
          <div className="text-center lg:text-left">
            <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-gold sm:mb-6 sm:text-sm">
              Visit Us
            </h4>

            <div className="space-y-5 text-sm leading-7 text-cream/70 sm:text-base">
              <p>
                Bistro Adriatik
                <br />
                Ivana Vrbana
                <br />
                53288 Karlobag, Croatia
              </p>

              <div className="space-y-2">
                <a
                  href="tel:+385910000000"
                  className="block transition hover:text-gold"
                >
                  +385 91 000 0000
                </a>
                <a
                  href="mailto:info@bistroadriatik.com"
                  className="block break-all transition hover:text-gold sm:break-normal"
                >
                  info@bistroadriatik.com
                </a>
              </div>

              <p className="text-sm text-cream/50">
                Open daily · 12:00 PM – 11:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-center text-xs text-cream/50 sm:text-sm md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Bistro Adriatik. All rights reserved.</p>
          <p className="md:text-right">Designed for elegant dining experiences.</p>
        </div>
      </div>
    </footer>
  );
}