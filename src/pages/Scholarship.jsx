import SectionTag from "@/components/SectionTag";

const Scholarship = () => (
  <div>
    <section className="container py-16 md:py-24 text-center">
      <SectionTag variant="dark">Philanthropy</SectionTag>
      <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4">Scholarship Programme</h1>
    </section>
    <section className="container pb-20 max-w-3xl mx-auto">
      <p className="text-muted-foreground leading-relaxed mb-6">
        The Foundation provides targeted scholarship support to help underserved students achieve their academic and career goals. Rooted in the belief that financial circumstance should not determine professional potential, the scheme identifies and invests in promising individuals — removing barriers to entry in specialised and competitive fields.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Our scholarships cover tuition, learning materials, and mentorship access, ensuring that beneficiaries receive holistic support throughout their academic journey.
      </p>
    </section>
  </div>
);

export default Scholarship;
