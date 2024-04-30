import Image from "next/image";
import Logo from "../public/IlirsGivingHeartFoundation.png";

export default function Header() {
  return (
    <header className="bg-gray-200 w-screen h-24 flex items-center p-4 gap-x-4">
      <Image
        src={Logo}
        width={75}
        height={75}
        alt="Ilir's Giving Heart Foundation Logo"
      />
      <h2 className="text-xl">Ilir's Giving Heart Foundation</h2>
    </header>
  );
}
