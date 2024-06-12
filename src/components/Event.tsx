import Image, { StaticImageData } from "next/image";
import Button from "./Button";

export type EventProps = {
  image: StaticImageData;
  altText: string;
  name: string;
  date: string;
  volunteerLink?: string;
  paragraphs: string[];
};

export default function Event(event: EventProps) {
  return (
    <div className="col-span-5 grid grid-cols-5">
      <div className="relative col-span-5 lg:col-span-3">
        <Image src={event.image} alt={event.altText} />
        {/* Shadow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/10 to-transparent invisible lg:visible"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
        {/* Event Name Overlay */}
        <div className="text-5xl absolute inset-0 m-auto text-white text-center flex flex-col items-center gap-4 w-fit h-fit p-2">
          <h2 className="font-bold">{event.name}</h2>
          <p className="italic font-semibold">June 22nd 2024</p>
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
}
