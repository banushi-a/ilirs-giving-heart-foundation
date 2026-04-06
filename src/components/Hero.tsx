import Image from "next/image";
import RedOutTeam from "../public/red-out-team.png";

const DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/b5b13e8a-4447-46ca-955f-9ef805e10aee";

export default function Hero() {
  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-ink flex">
      {/* Photo — right side, desktop only */}
      <div className="hidden lg:block absolute right-0 top-0 w-[50%] h-full">
        <Image
          src={RedOutTeam}
          alt="Red Out Fundraiser — Community in Red"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Left-to-right fade so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/10" />
        {/* Warm crimson tint */}
        <div className="absolute inset-0 bg-crimson-deep/30" style={{ mixBlendMode: "multiply" }} />
      </div>

      {/* Mobile background image */}
      <div className="lg:hidden absolute inset-0">
        <Image
          src={RedOutTeam}
          alt="Red Out Fundraiser"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-16 lg:px-24 pt-24 pb-16 w-full lg:w-[62%]">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-4 mb-10"
          style={{ animation: "fadeUp 0.5s ease-out 0.1s both" }}
        >
          <div className="w-8 h-px bg-crimson" />
          <span className="font-sans text-gold text-xs tracking-[0.35em] uppercase font-medium">
            In Honor of Ilir Banushi
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display leading-[0.88] mb-10">
          <span
            className="block text-cream font-bold"
            style={{
              fontSize: "clamp(4rem, 12.5vw, 9.5rem)",
              animation: "fadeUp 0.6s ease-out 0.2s both",
            }}
          >
            Giving
          </span>
          <span
            className="block text-crimson font-bold"
            style={{
              fontSize: "clamp(4rem, 12.5vw, 9.5rem)",
              animation: "fadeUp 0.6s ease-out 0.3s both",
            }}
          >
            Heart
          </span>
          <span
            className="block text-cream/35 font-normal tracking-[0.18em] mt-4"
            style={{
              fontSize: "clamp(0.85rem, 2.5vw, 2rem)",
              animation: "fadeUp 0.6s ease-out 0.4s both",
            }}
          >
            FOUNDATION
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="font-sans text-cream/60 text-lg md:text-xl leading-relaxed max-w-[480px] mb-10"
          style={{ animation: "fadeUp 0.6s ease-out 0.5s both" }}
        >
          Spreading love, hope, and support to families in need. Together, we
          honor Ilir&apos;s legacy through compassion and community.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: "fadeUp 0.6s ease-out 0.6s both" }}
        >
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-crimson hover:bg-crimson-light text-white font-sans font-semibold px-9 py-4 text-sm tracking-[0.12em] uppercase transition-colors duration-200"
          >
            Donate Now
          </a>
          <a
            href="#impact"
            className="inline-block border border-cream/20 hover:border-cream/55 text-cream/70 hover:text-cream font-sans font-medium px-9 py-4 text-sm tracking-[0.12em] uppercase transition-colors duration-200"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
