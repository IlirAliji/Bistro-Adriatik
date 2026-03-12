import Image from "next/image";

export default function Ingredients() {
  return (
    <section className="section bg-cream">
      <div className="container grid gap-12 md:grid-cols-3 text-center">
        {[
          {
            title: "Fresh Seafood",
            text: "Daily-sourced fish and shellfish inspired by Adriatic coastal cuisine.",
            img: "/ingredients-1.jpg",
          },
          {
            title: "Seasonal Produce",
            text: "Locally grown vegetables and herbs chosen at peak freshness.",
            img: "/ingredients-2.jpg",
          },
          {
            title: "Artisan Oils & Spices",
            text: "Cold-pressed olive oils and hand-selected Mediterranean spices.",
            img: "/ingredients-3.jpg",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-soft overflow-hidden group"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="font-heading text-2xl text-navy mb-3">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
