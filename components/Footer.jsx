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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 right-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid gap-14 border-b border-white/10 pb-14 md:grid-cols-3">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold">
              Bistro Adriatik
            </p>
            <h3 className="font-heading text-3xl mb-4">Refined Coastal Dining</h3>
            <p className="max-w-sm text-cream/70 leading-relaxed">
              Mediterranean cuisine inspired by the Adriatic coast, crafted with
              seasonal ingredients and timeless hospitality in an elegant setting.
            </p>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream/80 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold hover:text-navy"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm uppercase tracking-[0.3em] text-gold">
              Navigate
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex text-cream/75 transition duration-300 hover:translate-x-1 hover:text-gold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm uppercase tracking-[0.3em] text-gold">
              Visit Us
            </h4>

            <div className="space-y-5 text-cream/70 leading-relaxed">
              <p>
                Bistro Adriatik
                <br />
                Ivana Vrbana
                <br />
                53288 Karlobag, Croatia
              </p>

              <div className="space-y-2">
                <p className="transition hover:text-gold">+385 91 000 0000</p>
                <p className="transition hover:text-gold">info@bistroadriatik.com</p>
              </div>

              <p className="text-sm text-cream/50">
                Open daily · 12:00 PM – 11:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Bistro Adriatik. All rights reserved.</p>
          <p className="text-center md:text-right">
            Designed for elegant dining experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}