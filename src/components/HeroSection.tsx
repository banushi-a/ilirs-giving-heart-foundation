import Hero from "../public/red-out.jpg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative">
      <Image
        src={Hero}
        alt={"Red Out Fundraiser Group Photo"}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-end justify-start p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="text-start bg-gh-red-800 p-2 md:p-4 rounded-2xl shadow-2xl shadow-black">
          <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-white">
            Red Out Fundraiser
          </h1>
          <p className="text-sm md:text-md lg:text-lg text-white">
            Raised $18,000+ For Educational Grants
          </p>
        </div>
      </div>
    </section>
  );
}
