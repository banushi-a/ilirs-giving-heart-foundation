import Image from "next/image";
import Logo from "../public/IlirsGivingHeartFoundation.png";

const DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/b5b13e8a-4447-46ca-955f-9ef805e10aee";
const VOLUNTEER_URL = "https://forms.fillout.com/t/vvjaUXLWRWus";

const links = [
  { label: "Our Story", href: "#impact" },
  { label: "Events", href: "#events" },
  { label: "Past Events", href: "#past-events" },
  { label: "Donate", href: DONATE_URL, external: true },
  { label: "Volunteer", href: VOLUNTEER_URL, external: true },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src={Logo}
                width={44}
                height={44}
                alt="Ilir's Giving Heart Foundation Logo"
              />
              <span className="font-display text-lg font-bold text-cream leading-tight">
                Ilir&apos;s Giving Heart Foundation
              </span>
            </div>
            <p className="font-sans text-cream/40 leading-relaxed max-w-sm text-sm">
              Spreading love, hope, and support to families in need. Together,
              we create lasting change through compassion and action.
            </p>
            <div className="mt-6">
              <span className="font-sans text-crimson font-bold tracking-wide text-sm">
                #IlirProud
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-cream/30 mb-6">
              Links
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="font-sans text-cream/50 hover:text-cream transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-cream/25 text-xs">
            © {new Date().getFullYear()} Ilir&apos;s Giving Heart Foundation.
            All rights reserved.
          </p>
          <a
            href="mailto:ilirsgivingheartfoundation@gmail.com"
            className="font-sans text-cream/30 hover:text-cream/60 text-xs transition-colors duration-200"
          >
            ilirsgivingheartfoundation@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
