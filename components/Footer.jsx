import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="container py-20 grid md:grid-cols-3 gap-16">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl mb-4">Bistro Adriatik</h3>
          <p className="text-cream/70 leading-relaxed">
            Mediterranean cuisine inspired by the Adriatic coast, crafted with
            seasonal ingredients and timeless hospitality.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6">Navigate</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="hover:text-gold transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-gold transition">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="hover:text-gold transition">
                Reservations
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6">Visit Us</h4>
          <p className="text-cream/70 leading-relaxed">
            Bistro Adriatik
            <br />
            Ivana Vrbana
            <br />
            53288 Karlobag, Croatia
          </p>

          <p className="mt-6 text-cream/70">+385 91 000 0000</p>
          <p className="text-cream/70">info@bistroadriatik.com</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-cream/50 text-sm">
        © {new Date().getFullYear()} Bistro Adriatik. All rights reserved.
      </div>
    </footer>
  );
}
