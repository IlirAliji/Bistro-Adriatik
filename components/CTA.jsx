import Link from "next/link";

export default function CTA() {
  return (
    <section className="section bg-navy text-cream">
      <div className="container text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-heading mb-6">
          Reserve Your Table
        </h2>
        <p className="text-cream/80 mb-10 text-lg">
          Join us for an unforgettable dining experience inspired by the
          Mediterranean coast.
        </p>
        <Link href="/reservations" className="btn-primary">
          Make a Reservation
        </Link>
      </div>
    </section>
  );
}
