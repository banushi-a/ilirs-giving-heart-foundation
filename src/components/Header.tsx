import Image from "next/image";
import Logo from "../public/IlirsGivingHeartFoundation.png";
import DonateButton from "./DonateButton";

export default function Header() {
  const sections = [
    { name: "About Us", href: "#about-us" },
    { name: "Events", href: "#events" },
    // { name: "Our Work", href: "#our-work" },
    // { name: "Volunteer", href: "#volunteer" },
  ];

  return (
    <header className="bg-gradient-to-r from-gh-red-800 to-gh-red-200 w-screen h-24 flex justify-between items-center p-4 gap-x-4 sticky top-0 z-10">
      <div className="flex items-center gap-x-4">
        <Image
          src={Logo}
          width={75}
          height={75}
          alt="Ilir's Giving Heart Foundation Logo"
        />
        <h2 className="hidden sm:block text-2xl lg:text-4xl font-bold text-white">
          Ilir's Giving Heart Foundation
        </h2>
      </div>
      <div className="flex items-center gap-x-4">
        <DonateButton />
      </div>
    </header>
  );
}
