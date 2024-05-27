import TwoBros from "../public/2bros-outside.jpg";
import Image from "next/image";
import Button from "./Button";

export default function EventsSection() {
  const events = [
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
          <div key={event.name + i} className="col-span-5 grid grid-cols-5">
            <div className="relative col-span-5 lg:col-span-3">
              <Image src={event.image} alt={event.altText} />
              {/* Shadow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/10 to-transparent invisible lg:visible"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
              {/* Event Name Overlay */}
              <div className="text-5xl absolute inset-0 m-auto text-white text-center flex flex-col items-center gap-4 w-fit h-fit">
                <h2 className="font-bold">{event.name}</h2>
                <p className="italic font-semibold">June 22nd 2024</p>
                <Button
                  extraStyles="text-2xl"
                  href={event.volunteerLink}
                  target="_blank"
                  text={"Sign Up To Volunteer"}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center bg-black text-white text-right col-span-5 lg:col-span-2 lg:text-xl p-8 italic gap-3">
              {event.paragraphs.map((paragraph, i) => {
                return (
                  <p key={"paragraph" + i} className="lg:leading-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
