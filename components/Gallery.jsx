import Image from "next/image";

const images = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
];

export default function Gallery() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-gold uppercase tracking-widest text-sm">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-navy mt-4">
            Atmosphere & Cuisine
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden shadow-soft group"
            >
              <Image
                src={src}
                alt="Restaurant gallery"
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
