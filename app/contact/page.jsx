import ContactForm from "../../components/ContactForm";
import ContactInfo from "../../components/ContactInfo";
import CTA from "../../components/CTA";

export default function ContactPage() {
  return (
    <main className="pt-32">
      <section className="section bg-white">
        <div className="container text-center max-w-3xl mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-sm">
            Contact
          </span>
          <h1 className="text-5xl md:text-6xl font-heading text-navy mt-6 mb-6">
            Get in Touch
          </h1>
          <p className="text-muted text-lg">
            Questions, events, or special requests — we’re here to help.
          </p>
        </div>

        <div className="container grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <CTA />
    </main>
  );
}
