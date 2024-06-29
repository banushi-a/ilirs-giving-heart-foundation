import TwoBros from "../public/2bros-outside.jpg";
import RedOut from "../public/red-out-team.png";
import Event, { type EventProps } from "./Event";

export default function EventsSection() {
  const events: EventProps[] = [
    {
      image: TwoBros,
      altText: "Two Brothers Bar and Grill Outside View",
      name: "Ilir's Celebration of Life Blockparty Fundraiser",
      date: "June 22nd 2024",
      paragraphs: [
        "Once met, never forgotten. Ilir loved brining people together and extending a hand to anyone in need. Let's honor Ilir by coming together for what made him the most happy: family, friends, & music! Join us in front of Two Brother's Bar on Fulton Street for a special tribute Block Party starting at 2PM. An all day celebration of life for the man who wanted everyone to always have a good time.",
        "Appearances by Pink Houses, The Gary Band, Mad Tadders, and special guest Jason Stubbs.",
      ],
    },
    {
      image: RedOut,
      altText: "Red Out Basketball Game Fundraiser",
      name: "Red Out Milton v. Edgerton Basketball Game Fundraiser",
      date: "January 22nd 2024",
      paragraphs: [
        "Edgerton and Milton basketball teams honored Ilir Banushi at this conference basketball game. The community showed up wearing red apparel in memory of Ilir, all proceeds being donated back into the community.",
        "At the game, Ilir's youngest son, Brenon, played alongside his teammates to lead Milton to victory. Had the game been played a couple decades before, Ilir would be seen playing ball on the Edgerton side.",
      ],
    },
  ];

  return (
    <section className="grid grid-cols-5" id="events">
      <div className="relative col-span-5">
        <h2 className="text-3xl lg:text-4xl text-gh-red-200 p-8 font-semibold bg-black">
          Upcoming and Past Events
        </h2>
      </div>
      {events.map((event, i) => {
        return (
          <Event
            key={i + event.name}
            image={event.image}
            altText={event.altText}
            name={event.name}
            date={event.date}
            volunteerLink={event.volunteerLink}
            paragraphs={event.paragraphs}
            imageOnRight={i % 2 === 0}
          />
        );
      })}
    </section>
  );
}
