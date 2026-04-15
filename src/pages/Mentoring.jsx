import SectionTag from "@/components/SectionTag";

const Mentoring = () => (
  <div>
    <section className="container py-16 md:py-24 text-center">
      <SectionTag variant="dark">Community</SectionTag>
      <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4">Mentoring Programme</h1>
    </section>
    <section className="container pb-20 max-w-3xl mx-auto">
      <p className="text-muted-foreground leading-relaxed mb-6">
        Scholarship beneficiaries and NYSC participants are paired with experienced industry professionals within the Codix network. This structured mentorship programme bridges the gap between formal education and workplace readiness — building the communication skills, professional instincts, and sector knowledge that no curriculum alone can deliver.
      </p>
    </section>
  </div>
);

export default Mentoring;
