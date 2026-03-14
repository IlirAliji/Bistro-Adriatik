"use client";

import { useState } from "react";
import { X } from "lucide-react";

const MENU = {
  Starters: [
    {
      name: "Bruschetta Adriatik",
      desc: "Tomato, basil, olive oil, sourdough",
      price: "6€",
      ingredients: [
        "Sourdough bread",
        "Cherry tomatoes",
        "Fresh basil",
        "Extra virgin olive oil",
        "Sea salt",
      ],
      details:
        "A light Adriatic-style starter with bright tomato freshness and a crisp rustic base.",
      pairing: "Pairs beautifully with chilled white wine.",
    },
    {
      name: "Seafood Carpaccio",
      desc: "Fresh fish, citrus vinaigrette, capers",
      price: "10€",
      ingredients: [
        "Fresh fish",
        "Citrus vinaigrette",
        "Capers",
        "Olive oil",
        "Micro herbs",
      ],
      details:
        "Delicate slices of fresh seafood finished with citrus and a clean, elegant balance.",
      pairing: "Recommended with sparkling mineral water or prosecco.",
    },
  ],
  Mains: [
    {
      name: "Grilled Sea Bass",
      desc: "Olive oil, lemon, herbs, seasonal vegetables",
      price: "18€",
      ingredients: [
        "Sea bass",
        "Olive oil",
        "Lemon",
        "Fresh herbs",
        "Seasonal vegetables",
      ],
      details:
        "A signature main course focused on freshness, simplicity, and Mediterranean character.",
      pairing: "Excellent with dry coastal white wine.",
    },
    {
      name: "Black Risotto",
      desc: "Cuttlefish ink, garlic, white wine, parsley",
      price: "16€",
      ingredients: [
        "Arborio rice",
        "Cuttlefish ink",
        "Garlic",
        "White wine",
        "Parsley",
      ],
      details:
        "Creamy, rich, and deeply savory, prepared in the traditional Adriatic style.",
      pairing: "Best enjoyed with crisp white wine.",
    },
  ],
  Desserts: [
    {
      name: "Tiramisu",
      desc: "Espresso, mascarpone, cocoa",
      price: "6€",
      ingredients: ["Espresso", "Mascarpone", "Ladyfingers", "Cocoa"],
      details:
        "A classic Italian dessert with a soft texture and balanced coffee flavor.",
      pairing: "Perfect with espresso.",
    },
    {
      name: "Lemon Tart",
      desc: "Citrus cream, almond crust",
      price: "6€",
      ingredients: ["Lemon cream", "Almond crust", "Butter", "Vanilla"],
      details:
        "Bright and refined, with a smooth citrus filling and delicate nutty base.",
      pairing: "Pairs nicely with tea or dessert wine.",
    },
  ],
  Drinks: [
    {
      name: "House White Wine",
      desc: "Dry, crisp, Adriatic coast",
      price: "4€",
      ingredients: ["Local white grapes"],
      details:
        "A refreshing house selection inspired by coastal Mediterranean vineyards.",
      pairing: "Ideal with seafood and starters.",
    },
    {
      name: "Espresso",
      desc: "Italian blend",
      price: "2€",
      ingredients: ["Premium roasted coffee beans"],
      details:
        "A bold and aromatic espresso served in classic Italian style.",
      pairing: "Perfect after dessert.",
    },
  ],
};

export default function MenuTabs() {
  const categories = Object.keys(MENU);
  const [active, setActive] = useState(categories[0]);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-12 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-52 w-52 rounded-full bg-navy/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="inline-block text-gold uppercase tracking-[0.35em] text-[11px] sm:text-sm">
            Our Menu
          </span>

          <h1 className="mt-4 font-heading text-3xl text-navy sm:text-5xl lg:text-6xl">
            Bistro Adriatik
          </h1>

          <div className="mx-auto mt-5 h-[2px] w-20 rounded-full bg-gold/70" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Discover a selection of fresh Mediterranean dishes inspired by the
            Adriatic coast. Click on any dish to view more details.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3 sm:mb-14 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2.5 text-sm uppercase tracking-[0.18em] transition-all duration-300 sm:px-6 ${
                active === cat
                  ? "border-gold bg-gold text-navy shadow-md"
                  : "border-black/10 bg-white/60 text-muted hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="rounded-[28px] border border-black/5 bg-white/50 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:p-6 lg:p-8">
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-black/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Category
              </p>
              <h2 className="mt-2 font-heading text-2xl text-navy sm:text-3xl">
                {active}
              </h2>
            </div>

            <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold sm:flex">
              <span className="font-heading text-lg">
                {MENU[active].length}
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5">
            {MENU[active].map((item, i) => (
              <button
                key={i}
                onClick={() => setSelectedItem(item)}
                className="group w-full rounded-2xl border border-black/8 bg-cream/70 p-4 text-left transition-all duration-300 hover:border-gold/30 hover:bg-white sm:p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading text-xl text-navy sm:text-2xl">
                        {item.name}
                      </h3>
                      <span className="hidden h-px flex-1 bg-black/10 sm:block" />
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                      {item.desc}
                    </p>

                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gold/80">
                      Click to view details
                    </p>
                  </div>

                  <div className="self-start rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-base font-semibold text-gold sm:min-w-[88px] sm:text-center sm:text-lg">
                    {item.price}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <button
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
            aria-label="Close modal"
          />

          <div className="relative z-10 w-full max-w-2xl rounded-[28px] border border-white/10 bg-[#fffdf8] p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-navy transition hover:border-gold hover:text-gold"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="pr-10">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Signature Dish
              </p>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="font-heading text-3xl text-navy sm:text-4xl">
                  {selectedItem.name}
                </h3>

                <span className="self-start rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-lg font-semibold text-gold">
                  {selectedItem.price}
                </span>
              </div>

              <p className="mt-4 text-base leading-8 text-muted">
                {selectedItem.details}
              </p>

              <div className="mt-8">
                <h4 className="text-sm uppercase tracking-[0.25em] text-gold">
                  Ingredients
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedItem.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="rounded-full border border-black/10 bg-cream px-3 py-1.5 text-sm text-navy"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-cream p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">
                    Description
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {selectedItem.desc}
                  </p>
                </div>

                <div className="rounded-2xl bg-cream p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">
                    Pairing
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {selectedItem.pairing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}