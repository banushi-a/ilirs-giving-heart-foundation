const DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/b5b13e8a-4447-46ca-955f-9ef805e10aee";
const VOLUNTEER_URL = "https://forms.fillout.com/t/vvjaUXLWRWus";

export default function DonateSection() {
  return (
    <section className="bg-crimson py-24 px-8 md:px-16 lg:px-24" id="donate">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — headline */}
          <div>
            <span className="font-sans text-white/50 text-xs tracking-[0.35em] uppercase font-medium">
              Make a Difference
            </span>
            <h2
              className="font-display font-bold text-white mt-3 leading-[0.92]"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Give with
              <br />
              your heart.
            </h2>
          </div>

          {/* Right — copy + CTAs */}
          <div>
            <p className="font-sans text-white/75 text-lg leading-relaxed mb-10">
              Your donation directly funds educational grants, scholarships, and
              community support programs. Every contribution — large or small —
              honors Ilir&apos;s legacy of generosity and keeps his spirit alive
              in our community.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-crimson hover:bg-cream font-sans font-bold px-10 py-4 text-sm tracking-[0.12em] uppercase transition-colors duration-200"
              >
                Donate Now
              </a>
              <a
                href={VOLUNTEER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white/60 hover:border-white text-white font-sans font-medium px-10 py-4 text-sm tracking-[0.12em] uppercase transition-colors duration-200"
              >
                Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
