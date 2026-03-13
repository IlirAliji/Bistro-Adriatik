'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/fishplate.webp",
    title: "Signature Seafood Plate",
    desc: "A refined seafood presentation with fresh Adriatic flavors and elegant plating.",
  },
  {
    src: "/freshseafood.jpeg",
    title: "Fresh Catch Selection",
    desc: "Daily fresh seafood prepared with seasonal ingredients and coastal inspiration.",
  },
  {
    src: "/meatplate.webp",
    title: "Chef’s Meat Special",
    desc: "Tender cuts, rich textures, and a beautifully balanced gourmet presentation.",
  },
  {
    src: "/mix.jpg",
    title: "Mediterranean Variety",
    desc: "A vibrant mix of flavors designed to capture the spirit of the Adriatic table.",
  },
  {
    src: "/stek.jpg",
    title: "Premium Steak Dish",
    desc: "Perfectly cooked steak served with refined detail and bold flavor.",
  },
  {
    src: "/grilledbranzin.jpg",
    title: "Grilled Branzino",
    desc: "A guest favorite, grilled delicately to preserve freshness and natural taste.",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  function prevImage() {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextImage() {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    function handleKey(e) {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active]);

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-gold uppercase tracking-[0.3em] text-xs">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-navy mt-4">
            Atmosphere & Cuisine
          </h2>
          <p className="text-muted max-w-2xl mx-auto mt-4">
            A visual journey through our cuisine, elegant ambiance, and the
            signature details that define the Bistro Adriatik experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group relative aspect-[4/4.2] overflow-hidden rounded-[1.8rem] shadow-soft text-left"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-white font-heading text-xl">{img.title}</p>
                <p className="text-white/75 text-sm mt-1 line-clamp-2">
                  {img.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

        {active !== null && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl rounded-[2rem] overflow-hidden bg-white shadow-2xl">
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black"
              >
                ✕
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-navy shadow-lg transition hover:scale-105"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-navy shadow-lg transition hover:scale-105"
              >
                ›
              </button>

              <div className="grid md:grid-cols-[1.4fr_0.8fr]">
                <div className="relative min-h-[320px] md:min-h-[640px] bg-black">
                  <Image
                    src={images[active].src}
                    alt={images[active].title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between p-8 md:p-10 bg-cream">
                  <div>
                    <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
                      Featured Dish
                    </p>
                    <h3 className="text-3xl font-heading text-navy mb-4">
                      {images[active].title}
                    </h3>
                    <p className="text-muted leading-relaxed text-base">
                      {images[active].desc}
                    </p>
                  </div>

                  <div className="mt-10">
                    <div className="flex gap-2 mb-6">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className={`h-2.5 rounded-full transition-all ${
                            active === i ? "w-8 bg-gold" : "w-2.5 bg-navy/20"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={prevImage}
                        className="rounded-full border border-navy/10 px-5 py-3 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
                      >
                        Previous
                      </button>

                      <span className="text-sm text-muted">
                        {active + 1} / {images.length}
                      </span>

                      <button
                        onClick={nextImage}
                        className="rounded-full border border-navy/10 px-5 py-3 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}