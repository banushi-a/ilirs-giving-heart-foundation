const VOLUNTEER_URL = "https://forms.fillout.com/t/vvjaUXLWRWus";

interface UpcomingEvent {
  title: string;
  date: string;
  location: string;
  description: string;
  type: string;
  link?: string;
  linkLabel?: string;
}

const upcomingEvents: UpcomingEvent[] = [
  // Add upcoming events here as they are scheduled.
  // Example:
  // {
  //   title: "Summer 2025 Fundraiser",
  //   date: "TBD — Summer 2025",
  //   location: "To Be Announced",
  //   description: "Details coming soon — follow #IlirProud for updates.",
  //   type: "Fundraiser",
  // },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-cream py-24 px-8 md:px-16 lg:px-24" id="events">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <h2
            className="font-display font-bold text-ink shrink-0"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Upcoming Events
          </h2>
          <div className="flex-1 h-px bg-ink/15" />
        </div>

        {upcomingEvents.length === 0 ? (
          <div className="border border-ink/10 bg-white p-12 md:p-16 text-center">
            <p className="font-display text-2xl md:text-3xl text-ink/30 italic mb-4">
              No upcoming events scheduled.
            </p>
            <p className="font-sans text-ink/45 text-base mb-8">
              Follow{" "}
              <a
                href="https://www.facebook.com/hashtag/ilirproud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crimson hover:underline"
              >
                #IlirProud
              </a>{" "}
              on Facebook for announcements.
            </p>
            <a
              href={VOLUNTEER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-ink/20 hover:border-crimson text-ink hover:text-crimson font-sans font-medium px-8 py-3 text-sm tracking-wide uppercase transition-colors duration-200"
            >
              Sign Up to Volunteer
            </a>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event, i) => (
              <div
                key={i}
                className="border border-ink/10 bg-white p-8 hover:border-crimson/40 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-crimson">
                    {event.type}
                  </span>
                  <span className="text-sm font-sans text-ink/45">
                    {event.date}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-2 leading-tight">
                  {event.title}
                </h3>
                <p className="text-sm font-sans text-ink/50 mb-4">
                  {event.location}
                </p>
                <p className="font-sans text-ink/65 leading-relaxed">
                  {event.description}
                </p>
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-sm font-sans font-semibold text-crimson hover:text-crimson-deep tracking-wide uppercase transition-colors"
                  >
                    {event.linkLabel ?? "Learn More"} →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
