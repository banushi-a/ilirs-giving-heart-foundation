import Image from "next/image";
import Logo from "../public/IlirsGivingHeartFoundation.png";

const DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/b5b13e8a-4447-46ca-955f-9ef805e10aee";

export default function Header() {
  const navLinks = [
    { name: "Our Story", href: "#impact" },
    { name: "Events", href: "#events" },
    { name: "Donate", href: "#donate" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-ink/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <Image
            src={Logo}
            width={38}
            height={38}
            alt="Ilir's Giving Heart Foundation Logo"
          />
          <span className="hidden sm:block font-display text-cream font-bold text-lg leading-tight">
            Ilir&apos;s Giving Heart
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm text-cream/55 hover:text-cream transition-colors duration-200 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-crimson hover:bg-crimson-light text-white font-sans font-semibold px-5 py-2 text-sm tracking-wide transition-colors duration-200 shrink-0"
        >
          Donate
        </a>
      </div>
    </header>
  );
}
