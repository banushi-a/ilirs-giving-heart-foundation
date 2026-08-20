"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import IlirFest2026 from "../public/ilir-fest-2026.jpg";
import TwoBros from "../public/2bros-outside.jpg";
import RedOutTeam from "../public/red-out-team.png";

const events = [
  {
    image: IlirFest2026,
    title: "Ilir Fest 2026",
    date: "Saturday, June 27th, 2026",
    location: "Downtown Edgerton",
    description:
      "Ilir's spirit of giving and bringing friends and family together filled the streets of downtown Edgerton for an all-day celebration in his honor. From noon until well into the evening, the community gathered for food, music, and a raffle drawing to carry his generosity forward — continuing the foundation's mission of turning his memory into support for the people around us.",
  },
  {
    image: TwoBros,
    title: "Celebration of Life Block Party",
    date: "June 22nd, 2024",
    location: "Two Brothers Bar, Fulton Street",
    description:
      "Once met, never forgotten. Ilir loved bringing people together and extending a hand to anyone in need. A special tribute Block Party starting at 2PM — family, friends, and music. Appearances by Pink Houses, The Gary Band, Mad Tadders, and special guest Jason Stubbs.",
  },
  {
    image: RedOutTeam,
    title: "Red Out Fundraiser",
    date: "January 22nd, 2024",
    location: "Milton v. Edgerton Basketball Game",
    description:
      "The community showed up wearing red in memory of Ilir, raising over $18,000 for educational grants. Ilir's youngest son Brenon led Milton to victory — playing the game his father would have played on the opposite side decades before.",
  },
];

function EventPhoto({ image, alt }: { image: typeof TwoBros; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-15% 0px -15% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative aspect-[4/3] overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        className={`object-cover transition-all duration-700 ${
          inView ? "grayscale-0" : "grayscale"
        }`}
      />
    </div>
  );
}

export default function PastEvents() {
  return (
    <section className="bg-cream-dark py-24 px-8 md:px-16 lg:px-24" id="past-events">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <h2
            className="font-display font-bold text-ink shrink-0"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Past Events
          </h2>
          <div className="flex-1 h-px bg-ink/15" />
        </div>

        <div className="space-y-20">
          {events.map((event, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Photo */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <EventPhoto image={event.image} alt={event.title} />
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-crimson">
                  {event.date}
                </span>
                <h3
                  className="font-display font-bold text-ink mt-2 mb-2 leading-tight"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  {event.title}
                </h3>
                <p className="font-sans text-ink/45 text-sm mb-6">
                  {event.location}
                </p>
                <p className="font-sans text-ink/65 leading-relaxed text-lg">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
