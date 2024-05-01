"use client";

import Heart from "../public/svg/heart.svg";
import Image from "next/image";

export default function DonateButton() {
  return (
    <button
      type="button"
      className="flex items-center justify-center font-semibold border-2 bg-white border-white rounded-full px-3 py-2 gap-x-2 hover:bg-gray-200 transition-colors duration-300 ease-in-out overflow-hidden relative"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.1), rgba(255, 255, 255, 0))",
        backgroundSize: "200% 100%",
        animation: "wave 4s linear infinite",
      }}
    >
      <div className="animate-pulse">
        <Image src={Heart} width={32} height={36} alt="Heart Image" />
      </div>
      <p className="text-center text-sm md:text-xl">Give Today</p>
      <style jsx>{`
        @keyframes wave {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </button>
  );
}
