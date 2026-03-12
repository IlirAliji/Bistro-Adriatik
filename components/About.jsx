import Image from "next/image";

export default function About() {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-20 items-center">
        {/* Images */}
        <div className="relative h-[520px]">
          <div className="absolute top-0 left-0 w-72 h-96 rounded-[2.5rem] overflow-hidden shadow-xl rotate-[-4deg]">
            <Image
              src="/home1.jpg"
              alt="Restaurant interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-72 h-96 rounded-[2.5rem] overflow-hidden shadow-xl rotate-[4deg]">
            <Image
              src="/home2.jpg"
              alt="Mediterranean cuisine"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="text-gold uppercase tracking-[0.3em] text-sm block mb-6">
            Our Story
          </span>

          <h2 className="text-4xl md:text-5xl font-heading text-navy leading-tight mb-8">
            Inspired by the Adriatic Coast,
            <br />
            Crafted with Passion
          </h2>

          <p className="text-muted leading-relaxed mb-6">
            Bistro Adriatik was born from a love for Mediterranean cuisine and
            timeless hospitality. Our chefs blend coastal flavors, seasonal
            ingredients, and refined techniques to create dishes that honor
            tradition while embracing modern elegance.
          </p>

          <p className="text-muted leading-relaxed mb-10">
            From freshly caught seafood to handmade pastas and curated wines,
            every detail is designed to transport you to the shores of the
            Adriatic Sea — without leaving your city.
          </p>

          <div className="flex items-center gap-6">
            <div className="h-px w-20 bg-gold" />
            <span className="uppercase tracking-widest text-sm text-gold">
              Since 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
