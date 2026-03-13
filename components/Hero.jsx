import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/homebg2.jpg')] bg-cover bg-center scale-110" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <span className="mb-5 inline-block text-sm uppercase tracking-[0.35em] text-gold">
          Bistro Adriatik
        </span>

        <h1 className="max-w-4xl font-heading text-5xl leading-[0.95] text-cream md:text-7xl xl:text-8xl">
          Mediterranean Cuisine
          <br />
          <span className="italic text-gold">with Adriatic Soul</span>
        </h1>

        

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-navy transition duration-300 hover:-translate-y-1 hover:bg-cream"
          >
            View Menu
          </Link>

          <Link
            href="/reservations"
            className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-navy"
          >
            Reserve Table
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center text-cream/70">
          <span className="mb-2 text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="flex h-10 w-6 justify-center rounded-full border border-white/30">
            <span className="mt-2 h-2 w-2 animate-bounce rounded-full bg-gold" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}