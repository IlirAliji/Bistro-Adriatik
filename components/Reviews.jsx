const reviews = [
  {
    name: "Elena M.",
    text: "One of the finest dining experiences in the city. Every dish felt like art.",
  },
  {
    name: "Marco T.",
    text: "Exceptional seafood, beautiful atmosphere, and flawless service.",
  },
  {
    name: "Adrian K.",
    text: "A restaurant that truly understands elegance and flavor.",
  },
];

export default function Reviews() {
  return (
    <section className="section bg-cream">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">
            Testimonials
          </p>
          <h2 className="section-title">Guest Experiences</h2>
          <p className="text-muted max-w-2xl mx-auto mt-4">
            Discover what our guests say about the atmosphere, flavors, and
            unforgettable dining moments at Adriatik.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-soft border border-black/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition duration-500 group-hover:bg-gold/20" />
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-navy/5 blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-cream font-heading text-lg shadow-lg">
                    {r.name.charAt(0)}
                  </div>

                  <div className="flex items-center justify-center rounded-full bg-gold/10 p-3">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-gold"
                    >
                      <path d="M7.2 6C4.9 7.4 3.5 9.8 3.5 12.8c0 3.2 2.1 5.7 5.2 5.7 2.5 0 4.3-1.8 4.3-4.1 0-2.4-1.8-4-4-4-.4 0-.8 0-1.1.1.4-1.5 1.5-2.9 3.2-3.9L7.2 6zm9 0c-2.3 1.4-3.7 3.8-3.7 6.8 0 3.2 2.1 5.7 5.2 5.7 2.5 0 4.3-1.8 4.3-4.1 0-2.4-1.8-4-4-4-.4 0-.8 0-1.1.1.4-1.5 1.5-2.9 3.2-3.9L16.2 6z" />
                    </svg>
                  </div>
                </div>

                <p className="text-muted italic leading-relaxed text-[1.02rem] mb-8">
                  “{r.text}”
                </p>

                <div className="border-t border-black/5 pt-5">
                  <p className="font-heading text-navy text-lg">{r.name}</p>
                  <p className="text-sm text-muted mt-1">Verified Guest</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}