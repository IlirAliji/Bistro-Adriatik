export default function ReservationInfo() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="font-heading text-2xl text-navy mb-4">
          Location
        </h3>
        <p className="text-muted mb-6">
          Bistro Adriatik, Ivana Vrbana, 53288, Karlobag, Croatia
        </p>

        <div className="w-full h-[280px] rounded-[2rem] overflow-hidden shadow-soft">
          <iframe
            src="https://maps.google.com/maps?q=Bistro%20Adriatik%20Karlobag&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>

      <div>
        <h3 className="font-heading text-2xl text-navy mb-4">
          Opening Hours
        </h3>
        <p className="text-muted">Monday – Friday: 12:00 – 23:00</p>
        <p className="text-muted">Saturday – Sunday: 13:00 – 00:00</p>
      </div>

      <div>
        <h3 className="font-heading text-2xl text-navy mb-4">
          Contact
        </h3>
        <p className="text-muted">+385 91 000 0000</p>
        <p className="text-muted">info@bistroadriatik.com</p>
      </div>
    </div>
  );
}
