"use client";

import { useState } from "react";

const MENU = {
  Starters: [
    {
      name: "Bruschetta Adriatik",
      desc: "Tomato, basil, olive oil, sourdough",
      price: "6€",
    },
    {
      name: "Seafood Carpaccio",
      desc: "Fresh fish, citrus vinaigrette, capers",
      price: "10€",
    },
  ],
  Mains: [
    {
      name: "Grilled Sea Bass",
      desc: "Olive oil, lemon, herbs, seasonal vegetables",
      price: "18€",
    },
    {
      name: "Black Risotto",
      desc: "Cuttlefish ink, garlic, white wine, parsley",
      price: "16€",
    },
  ],
  Desserts: [
    {
      name: "Tiramisu",
      desc: "Espresso, mascarpone, cocoa",
      price: "6€",
    },
    {
      name: "Lemon Tart",
      desc: "Citrus cream, almond crust",
      price: "6€",
    },
  ],
  Drinks: [
    {
      name: "House White Wine",
      desc: "Dry, crisp, Adriatic coast",
      price: "4€",
    },
    {
      name: "Espresso",
      desc: "Italian blend",
      price: "2€",
    },
  ],
};

export default function MenuTabs() {
  const categories = Object.keys(MENU);
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="section bg-cream">
      <div className="container max-w-4xl">

        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-widest text-sm">
            Our Menu
          </span>

          <h1 className="text-5xl font-heading text-navy mt-4">
            Bistro Adriatik
          </h1>

          <p className="text-muted max-w-2xl mx-auto mt-4">
            Discover a selection of fresh Mediterranean dishes inspired by the
            Adriatic coast. Our menu combines seasonal ingredients, traditional
            flavors, and modern culinary techniques to create a refined dining
            experience.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full border transition ${
                active === cat
                  ? "bg-gold text-ink border-gold"
                  : "border-black/10 text-muted hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="space-y-10">
          {MENU[active].map((item, i) => (
            <div
              key={i}
              className="flex items-start justify-between gap-6 border-b border-black/10 pb-6"
            >
              <div>
                <h3 className="font-heading text-2xl text-navy mb-1">
                  {item.name}
                </h3>
                <p className="text-muted">{item.desc}</p>
              </div>

              <span className="text-gold font-semibold text-lg">
                {item.price}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
