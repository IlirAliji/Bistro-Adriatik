import { Fish, Wine, Leaf, Sparkles } from "lucide-react";

const features = [
  {
    icon: Fish,
    title: "Fresh Seafood",
    text: "Daily sourced fish and shellfish inspired by Adriatic coastal cuisine.",
  },
  {
    icon: Wine,
    title: "Curated Wines",
    text: "Handpicked Mediterranean wines perfectly paired with every dish.",
  },
  {
    icon: Leaf,
    title: "Seasonal Ingredients",
    text: "Locally grown produce selected at peak freshness.",
  },
  {
    icon: Sparkles,
    title: "Elegant Atmosphere",
    text: "Refined interiors designed for unforgettable evenings.",
  },
];

export default function Features() {
  return (
    <section className="section bg-white">
      <div className="container grid gap-10 md:grid-cols-4">
        {features.map((item, i) => (
          <div
            key={i}
            className="relative group bg-cream rounded-[2rem] p-8 shadow-soft hover:-translate-y-2 transition duration-500"
          >
            <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg">
              <item.icon className="text-ink" size={26} />
            </div>

            <h3 className="font-heading text-2xl text-navy mt-10 mb-3">
              {item.title}
            </h3>
            <p className="text-muted leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
