import { useState } from "react";
import SectionTag from "@/components/SectionTag";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="container py-16 md:py-24 text-center">
        <SectionTag variant="dark">Get in Touch</SectionTag>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4">Contact Us</h1>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">
          Have questions about our programmes? Want to partner or apply? Reach out to us.
        </p>
      </section>
      <section className="container pb-20 max-w-lg mx-auto">
        {submitted ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-heading font-bold text-primary mb-2">Thank you!</h3>
            <p className="text-muted-foreground">We'll get back to you shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-4"
          >
            <input type="text" placeholder="Full Name" required className="w-full rounded-md border border-border px-4 py-3 text-sm" />
            <input type="email" placeholder="Email Address" required className="w-full rounded-md border border-border px-4 py-3 text-sm" />
            <select className="w-full rounded-md border border-border px-4 py-3 text-sm text-muted-foreground">
              <option>General Inquiry</option>
              <option>Codix Academy</option>
              <option>Scholarship</option>
              <option>Mentoring</option>
              <option>Partnership</option>
            </select>
            <textarea placeholder="Your message" rows={5} required className="w-full rounded-md border border-border px-4 py-3 text-sm" />
            <button type="submit" className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Contact;
