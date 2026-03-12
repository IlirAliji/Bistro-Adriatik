import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/homebg.jpg')] bg-cover bg-center scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <span className="uppercase tracking-[0.3em] text-gold text-sm block mb-6">
          Bistro Adriatik
        </span>

        <h1 className="text-5xl md:text-7xl xl:text-8xl font-heading text-cream leading-tight mb-8">
          Mediterranean Cuisine
          <br />
          <span className="italic text-gold">with Adriatic Soul</span>
        </h1>

        <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          A refined dining experience inspired by coastal flavors, seasonal
          ingredients, and timeless hospitality.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/menu" className="btn-primary">
            View Menu
          </Link>
          <Link href="/reservations" className="btn-outline">
            Reserve Table
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
