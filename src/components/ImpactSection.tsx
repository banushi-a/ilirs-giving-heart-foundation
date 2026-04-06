const stats = [
  {
    number: "$18K+",
    label: "Raised at the Red Out",
    detail: "Milton v. Edgerton Basketball Game",
  },
  {
    number: "$40K+",
    label: "in Scholarships",
    detail: "Partnered with Chilimania",
  },
  {
    number: "20+",
    label: "Educational Grants",
    detail: "Awarded to Edgerton students",
  },
  {
    number: "100+",
    label: "Volunteers",
    detail: "Community members who gave their time",
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-ink py-24 px-8 md:px-16 lg:px-24" id="impact">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-sans text-gold text-xs tracking-[0.35em] uppercase font-medium">
            Our Impact
          </span>
          <h2
            className="font-display font-bold text-cream mt-3 leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            The Good We&apos;ve Done
          </h2>
        </div>

        {/* Stats grid — divided by 1px lines */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-ink p-8 lg:p-12">
              <div
                className="font-display font-bold text-crimson leading-none mb-3"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                {stat.number}
              </div>
              <div className="font-sans font-semibold text-cream text-base mb-1">
                {stat.label}
              </div>
              <div className="font-sans text-cream/35 text-sm">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* Quote + story */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center border-t border-cream/10 pt-16">
          <blockquote>
            <p
              className="font-display italic text-cream/75 leading-relaxed"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)" }}
            >
              &ldquo;Ilir was well known in the community for his generosity
              and willingness to give back to everyone in need.&rdquo;
            </p>
          </blockquote>
          <div>
            <p className="font-sans text-cream/50 leading-relaxed text-lg">
              Founded in 2024 in honor and memory of Ilir Banushi, the
              foundation continues his legacy of bringing people together and
              extending a hand to anyone in need. Every dollar raised goes
              directly back into our community through grants, scholarships, and
              grassroots events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
