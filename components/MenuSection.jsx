import Link from "next/link";

const dishes = [
  {
    name: "Grilled Sea Bass",
    description: "Olive oil, lemon, herbs, seasonal vegetables",
    price: "18€",
  },
  {
    name: "Black Risotto",
    description: "Cuttlefish ink, garlic, white wine, parsley",
    price: "16€",
  },
  {
    name: "Adriatic Octopus",
    description: "Charcoal grilled, potato cream, citrus glaze",
    price: "19€",
  },
];

export default function MenuSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-sm">
            Signature Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-navy mt-6">
            Chef’s Favorites
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {dishes.map((dish, i) => (
            <div
              key={i}
              className="group relative bg-cream rounded-[2.5rem] p-10 shadow-soft hover:-translate-y-2 transition duration-500"
            >
              <div className="absolute -top-6 left-8 bg-gold px-4 py-2 rounded-full text-ink font-semibold shadow-lg">
                {dish.price}
              </div>

              <h3 className="font-heading text-2xl text-navy mb-4 mt-6 group-hover:text-gold transition">
                {dish.name}
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                {dish.description}
              </p>

              <div className="h-px w-12 bg-gold" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/menu" className="btn-primary">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
