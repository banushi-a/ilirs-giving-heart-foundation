"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../public/IlirsGivingHeartFoundation.png";
import GolfCart from "../public/denago-rover-xl-cart.png";

const STORAGE_KEY = "ilirfest2026-popup-dismissed";

export default function IlirFestPopup() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Show once per browser session so we don't nag returning visitors.
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setClosing(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ilirfest-title"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-ink/80 backdrop-blur-sm ${
          closing ? "animate-pop-out" : "animate-overlay-in"
        }`}
        onClick={handleClose}
      />

      {/* Modal card */}
      <div
        className={`relative flex w-full max-w-sm max-h-[92vh] flex-col overflow-hidden rounded-3xl bg-cream ring-1 ring-black/5 ${
          closing ? "animate-pop-out" : "animate-pop-in"
        }`}
        style={{ boxShadow: "0 40px 90px -20px rgba(13,9,6,0.75)" }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/30"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 2l12 12M14 2L2 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* ── Header (dark) ─────────────────────────────── */}
        <div className="relative overflow-hidden bg-gradient-to-br from-ink via-crimson-deep to-ink px-5 pt-6 pb-2 text-center">
          {/* Static gold spotlight */}
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(181,137,58,0.45) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10">
            {/* Foundation logo */}
            <Image
              src={Logo}
              alt="Ilir's Giving Heart Foundation"
              className="mx-auto h-auto w-16 opacity-95"
            />

            {/* Eyebrow */}
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="h-px w-5 bg-gold/70" />
              <span className="font-sans text-[0.6rem] font-medium uppercase tracking-[0.3em] text-gold">
                You&apos;re Invited
              </span>
              <span className="h-px w-5 bg-gold/70" />
            </div>

            {/* Title */}
            <h2
              id="ilirfest-title"
              className="mt-1 font-display text-[2.75rem] font-bold leading-none"
            >
              <span
                className="shimmer-text bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, #b5893a 0%, #f5e6c4 25%, #b5893a 50%, #f5e6c4 75%, #b5893a 100%)",
                }}
              >
                Ilir Fest
              </span>
              <span className="block font-sans text-sm font-semibold tracking-[0.5em] text-cream/80">
                2026
              </span>
            </h2>
          </div>

          {/* ── Grand prize (golf cart) ─────────────────── */}
          <div className="relative z-10 mt-1">
            <span className="inline-block rounded-full bg-gold px-3 py-0.5 font-sans text-[0.55rem] font-bold uppercase tracking-[0.2em] text-ink shadow">
              ★ Grand Prize ★
            </span>

            <div className="relative flex items-center justify-center">
              {/* Static glow behind cart */}
              <div
                className="pointer-events-none absolute h-28 w-60 rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(245,230,196,0.5) 0%, rgba(181,137,58,0.2) 45%, transparent 70%)",
                }}
              />
              <Image
                src={GolfCart}
                alt="2026 Denago Rover XL 4-passenger golf cart"
                className="relative w-[72%] max-w-[15rem] drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* ── Body ──────────────────────────────────────── */}
        <div className="px-5 pb-5 pt-3 text-center">
          {/* Date + venue */}
          <p className="font-display text-lg font-bold text-ink">
            Saturday, June 27 · Noon
          </p>
          <p className="font-sans text-xs text-ink/70">
            Two Brother&apos;s Bar &amp; Grill · Downtown Edgerton
          </p>

          {/* Divider */}
          <div className="my-3 flex items-center gap-2">
            <span className="h-px flex-1 bg-ink/10" />
            <span className="font-sans text-[0.6rem] font-bold uppercase tracking-[0.2em] text-gold">
              Raffle · Drawing 7 PM
            </span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>

          {/* Prizes */}
          <ul className="space-y-2 text-left">
            {[
              {
                rank: "1st",
                text: "2026 Denago Rover XL 4-passenger golf cart",
              },
              { rank: "2nd", text: "Private keg party at Lounge 1848" },
              { rank: "3rd", text: "Milwaukee Brewers tickets for 4" },
            ].map((prize) => (
              <li key={prize.rank} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-crimson font-sans text-[0.65rem] font-bold text-white shadow">
                  {prize.rank}
                </span>
                <span className="font-sans text-sm leading-snug text-ink/80">
                  {prize.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Pricing pill */}
          <div className="mt-4 rounded-2xl bg-ink px-4 py-2.5">
            <p className="font-display text-base font-bold text-cream">
              $20 each <span className="text-gold">·</span> 6 for $100
            </p>
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.15em] text-cream/55">
              Need not be present to win
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
