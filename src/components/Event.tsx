import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import { text } from "stream/consumers";

export type EventProps = {
  image: StaticImageData;
  altText: string;
  name: string;
  date: string;
  volunteerLink?: string;
  paragraphs: string[];
  imageOnRight?: boolean;
};

export default function Event(event: EventProps) {
  const textComponentLeft = (
    <div
      className={`hidden lg:flex flex-col justify-center col-span-5 lg:col-span-2 bg-black text-white lg:text-xl p-8 italic gap-3`}
    >
      {event.paragraphs.map((paragraph, i) => {
        return (
          <p key={"paragraph" + i} className="lg:leading-6">
            {paragraph}
          </p>
        );
      })}
    </div>
  );

  const textComponentRight = (
    <div
      className={`flex-col justify-center col-span-5 lg:col-span-2 bg-black text-white lg:text-xl p-8 italic gap-3 ${
        event.imageOnRight ? "lg:hidden" : "flex"
      }`}
    >
      {event.paragraphs.map((paragraph, i) => {
        return (
          <p key={"paragraph" + i} className="lg:leading-6">
            {paragraph}
          </p>
        );
      })}
    </div>
  );

  return (
    <div className="col-span-5 grid grid-cols-5">
      {event.imageOnRight && textComponentLeft}
      <div className="relative col-span-5 lg:col-span-3">
        <Image src={event.image} alt={event.altText} />
        {/* Shadow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-transparent" />
        {!event.imageOnRight && (
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/10 to-transparent invisible lg:visible" />
        )}
        {event.imageOnRight && (
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent invisible lg:visible" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        {/* Event Name Overlay */}
        <div className="text-4xl md:text-5xl absolute inset-0 m-auto text-white text-center flex flex-col items-center gap-4 w-fit h-fit p-2">
          <h2 className="font-bold">{event.name}</h2>
          <p className="italic font-semibold">{event.date}</p>
          {event.volunteerLink && (
            <Button
              extraStyles="text-2xl"
              href={event.volunteerLink}
              target="_blank"
              text={"Sign Up To Volunteer"}
            />
          )}
        </div>
      </div>
      {textComponentRight}
    </div>
  );
}
