export default function ReservationForm() {
  return (
    <div className="bg-cream rounded-[2.5rem] p-10 shadow-soft">
      <h2 className="font-heading text-3xl text-navy mb-8">
        Make a Reservation
      </h2>

      <form className="grid gap-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" className="input" />
          <input type="email" placeholder="Email Address" className="input" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <input type="date" className="input" />
          <input type="time" className="input" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <input type="number" placeholder="Guests" min="1" className="input" />
          <input type="tel" placeholder="Phone Number" className="input" />
        </div>

        <textarea
          placeholder="Special requests..."
          rows="4"
          className="input resize-none"
        />

        <button className="btn-primary w-full mt-4">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}
