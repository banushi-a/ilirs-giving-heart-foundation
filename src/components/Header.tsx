import Image from "next/image";
import Logo from "../public/IlirsGivingHeartFoundation.png";
import DonateButton from "./DonateButton";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gh-red-400 to-gh-red-800 w-screen h-24 flex justify-between items-center p-4 gap-x-4 m-4 mr-0 rounded-l-full shadow-2xl">
      <div className="flex items-center gap-x-4">
        <Image
          src={Logo}
          width={75}
          height={75}
          alt="Ilir's Giving Heart Foundation Logo"
        />
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white">
          Ilir's Giving Heart Foundation
        </h2>
      </div>
      <DonateButton />
    </header>
  );
}
