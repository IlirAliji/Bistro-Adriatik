export default function MenuHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-[url('/menu-hero.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-6">
        <span className="uppercase tracking-[0.3em] text-gold text-sm block mb-4">
          Our Cuisine
        </span>
        <h1 className="text-5xl md:text-6xl font-heading text-cream mb-6">
          The Menu
        </h1>
        <p className="text-cream/80 max-w-xl mx-auto">
          A refined selection of Mediterranean dishes crafted with seasonal
          ingredients and Adriatic inspiration.
        </p>
      </div>
    </section>
  );
}
