export default function ContactForm() {
  return (
    <div className="bg-cream rounded-[2.5rem] p-10 shadow-soft">
      <h2 className="font-heading text-3xl text-navy mb-8">
        Send a Message
      </h2>

      <form className="grid gap-6">
        <input type="text" placeholder="Full Name" className="input" />
        <input type="email" placeholder="Email Address" className="input" />
        <input type="text" placeholder="Subject" className="input" />
        <textarea
          placeholder="Your message..."
          rows="5"
          className="input resize-none"
        />

        <button className="btn-primary w-full mt-4">
          Send Message
        </button>
      </form>
    </div>
  );
}
