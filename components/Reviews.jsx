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
        <h2 className="section-title text-center mb-16">
          Guest Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="relative bg-white rounded-[2.5rem] px-8 pt-12 pb-10 shadow-soft hover:-translate-y-2 transition duration-500"
            >
              {/* Floating stars */}
              <div className="absolute -top-6 left-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-gold drop-shadow"
                  >
                    <path d="M12 2l2.9 6.9L22 9.7l-5 4.9 1.2 7.1L12 18.6l-6.2 3.1L7 14.6 2 9.7l7.1-0.8L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-muted italic leading-relaxed mb-6">
                “{r.text}”
              </p>
              <p className="font-heading text-navy text-lg">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
