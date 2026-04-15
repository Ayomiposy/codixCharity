import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import SectionTag from "@/components/SectionTag";
import heroLab from "@/assets/hero-lab.jpg";
import heroTraining from "@/assets/hero-training.jpg";
import heroHealth from "@/assets/hero-health.jpg";
import accomplishments from "@/assets/accomplishments.jpg";

const pillars = [
  { title: "Health", desc: "Contributing and prioritizing the health and well-being of communities at large." },
  { title: "Education", desc: "Prioritizing education and training initiatives that benefit our stakeholders and the broader community.", highlighted: true },
  { title: "Philanthropic Initiatives", desc: "Supporting charitable causes and organizations." },
  { title: "Community Engagement", desc: "Supporting and contributing to local communities." },
  { title: "Research & Development", desc: "Supporting activities around research and development." },
];

const stats = [
  { label: "Scholars Supported", value: "250+", desc: "Students across Nigeria receiving educational support and mentorship." },
  { label: "Healthcare professionals trained", value: "1,200+", desc: "Medical laboratory scientists and healthcare workers in our development programs." },
  { label: "Communities reached", value: "15", desc: "States and communities benefiting from our health and education initiatives." },
];

const testimonials = [
  { text: "Studying Biosensors & Nanotechnology at Olabisi Onabanjo University really helped me understand how diagnostic systems actually work, not just the theory.", name: "Precious Akinyemi", role: "Graduate of Industrial Chemistry", stars: 5 },
  { text: "Taking the Biosensors and Nanotechnology course helped me see how biosensors and nanotechnology actually work in real products.", name: "Kasarachi Moku", role: "Graduate of Industrial Chemistry", stars: 4.5 },
  { text: "Taking the Biosensors & Nanotechnology course as a final-year student at OOU genuinely shaped how I think about modern diagnostics and pharmaceutical innovation.", name: "Imoleayo Solaja", role: "Graduate of Industrial Chemistry", stars: 4 },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="container py-16 md:py-24 text-center">
        <p className="text-sm text-primary font-medium mb-4">Established 2026 • Lagos, Nigeria</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
          Health &amp; Education<br />
          <span className="text-primary">Transforms</span> Communities
        </h1>
        <p className="max-w-xl mx-auto text-muted-foreground mb-8">
          Codix Charity Foundation builds stronger healthcare systems and empowers the next generation of professionals across Nigeria. We invest in people, knowledge, and lasting change.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Apply Now
          </Link>
          <Link to="/about" className="inline-flex items-center justify-center rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
            Learn More
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <img src={heroLab} alt="Lab training" className="rounded-lg w-full h-56 object-cover" width={800} height={600} />
          <img src={heroTraining} alt="Community training" className="rounded-lg w-full h-56 object-cover" loading="lazy" width={800} height={600} />
          <img src={heroHealth} alt="Healthcare workers" className="rounded-lg w-full h-56 object-cover" loading="lazy" width={800} height={600} />
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-secondary py-20">
        <div className="container text-center">
          <SectionTag>Our Focus</SectionTag>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">The Pillars that Guide our Work</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            We channel resources into health, education, and research to create measurable impact where it matters most.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className={`rounded-xl p-6 text-left border transition-shadow hover:shadow-md ${
                  p.highlighted
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border"
                }`}
              >
                <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                <p className={`text-sm ${p.highlighted ? "opacity-90" : "text-muted-foreground"}`}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accomplishments */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <SectionTag>Impact</SectionTag>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">What we've accomplished</h2>
          <p className="text-muted-foreground mt-2">Since 2022, we've reached thousands of students and professionals.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {stats.map((s) => (
              <div key={s.label} className="border-l-4 border-primary pl-6">
                <p className="text-sm font-semibold text-foreground">{s.label}</p>
                <p className="text-4xl font-heading font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <img src={accomplishments} alt="Students training" className="rounded-lg w-full h-80 object-cover" loading="lazy" width={800} height={600} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mb-2">Real Voices</h2>
          <p className="text-navy-foreground/70 mb-12">Hear from those we've supported</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background rounded-xl p-6 text-left">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(t.stars) ? "fill-primary text-primary" : "text-border"}
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20" />
                  <div>
                    <p className="text-sm font-semibold font-heading">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to join us</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Apply for scholarships, enroll in Codix Academy, or connect with a mentor.
        </p>
        <div className="flex gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border border-border px-4 py-3 text-sm"
          />
          <button className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          By clicking Get Started you're confirming that you agree with our Terms and Conditions.
        </p>
      </section>
    </div>
  );
};

export default Index;
