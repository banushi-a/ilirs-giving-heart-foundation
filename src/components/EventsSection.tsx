import TwoBros from "../public/2bros-outside.jpg";
import Image from "next/image";
import Button from "./Button";
import Event, { type EventProps } from "./Event";

export default function EventsSection() {
  const events: EventProps[] = [
    {
      image: TwoBros,
      altText: "Two Brothers Bar and Grill Outside View",
      name: "Ilir's Celebration of Life Blockparty Fundraiser",
      date: "June 22nd 2024",
      volunteerLink: "https://forms.fillout.com/t/nPaMuUDQ9Uus",
      paragraphs: [
        "Once met, never forgotten. Ilir loved brining people together and extending a hand to anyone in need. Let's honor Ilir by coming together for what made him the most happy: family, friends, & music! Join us in front of Two Brother's Bar on Fulton Street for a special tribute Block Party starting at 2PM. An all day celebration of life for the man who wanted everyone to always have a good time.",
        "Appearances by Pink Houses, The Gary Band, Mad Tadders, and special guest Jason Stubbs.",
      ],
    },
  ];

  return (
    <section className="grid grid-cols-5" id="events">
      <div className="relative col-span-5">
        <h2 className="text-4xl text-gh-red-200 text-right p-8 font-semibold bg-black">
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
          />
        );
      })}
    </section>
  );
}
