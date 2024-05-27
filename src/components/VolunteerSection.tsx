import Image from "next/image";

import Logo from "../public/IlirsGivingHeartFoundation.png";
import Button from "./Button";

export default function VolunteerSection() {
  return (
    <section className="bg-neutral-700 text-white w-full grid grid-cols-2 gap-y-4 py-10 px-12">
      <div className="col-span-2 md:col-span-1 md:border-r-2 border-gh-red-800 md:px-12">
        <h2 className="text-2xl font-semibold text-gh-red-400">
          Want to Keep In Touch With Us?
        </h2>
        <p className="italic">
          Sign up to recieve updates whenever we are looking for volunteers to
          assist in our mission. Check above for events we are actively
          recruiting for!
        </p>
      </div>
      <div className="flex items-center justify-start md:justify-center col-span-2 md:col-span-1 md:border-l-2 border-gh-red-800 md:p-2">
        <Button
          href={"https://forms.fillout.com/t/vvjaUXLWRWus"}
          target={"_blank"}
          text={"Keep In Touch With Us"}
          extraStyles={"px-10"}
        />
        <Image
          src={Logo}
          width={90}
          height={90}
          alt="Ilir's Giving Heart Foundation Logo"
          className="ml-8"
        />
      </div>
    </section>
  );
}
