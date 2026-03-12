import ReservationForm from "../../components/ReservationForm";
import ReservationInfo from "../../components/ReservationInfo";


export default function ReservationsPage() {
  return (
    <main className="pt-32">
      <section className="section bg-white">
        <div className="container text-center max-w-3xl mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-sm">
            Reservations
          </span>
          <h1 className="text-5xl md:text-6xl font-heading text-navy mt-6 mb-6">
            Book Your Table
          </h1>
          <p className="text-muted text-lg">
            Reserve your table and enjoy an unforgettable Mediterranean dining
            experience at Bistro Adriatik.
          </p>
        </div>

        <div className="container grid lg:grid-cols-2 gap-16 items-start">
          <ReservationForm />
          <ReservationInfo />
        </div>
      </section>
    </main>
  );
}
