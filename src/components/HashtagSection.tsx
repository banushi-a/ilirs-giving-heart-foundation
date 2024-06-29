import Image from "next/image";
import Link from "next/link";

import Facebook from "../public/facebook.png";
import IlirProud from "../public/ilir-proud-window.jpg";

export default function EventsSection() {
  return (
    <section
      className="bg-black text-white w-screen pb-0 relative flex justify-center"
      id="hashtag"
    >
      <Image
        src={IlirProud}
        alt="Ilir Proud Window Painting"
        className="w-screen"
      />
      {/* Shadow Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
      <div className="absolute inset-0 m-auto text-white text-center flex md:flex-row items-center gap-4 w-fit h-fit p-8">
        <h2 className="font-bold text-2xl md:text-4xl">
          Use #IlirProud on social media to share moments from events, memories,
          and tributes!
        </h2>
        <Link href="https://www.facebook.com/hashtag/ilirproud" target="_blank">
          <Image src={Facebook} alt="Facebook logo" width={250} />
        </Link>
      </div>
    </section>
  );
}
