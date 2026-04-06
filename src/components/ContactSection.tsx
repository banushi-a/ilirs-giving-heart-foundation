"use client";

import { type FormEvent } from "react";

const EMAIL = "ilirsgivingheartfoundation@gmail.com";

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

  const subject = `Message from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactSection() {
  return (
    <section className="bg-cream py-24 px-8 md:px-16 lg:px-24" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <span className="font-sans text-crimson text-xs tracking-[0.35em] uppercase font-medium">
              Stay Connected
            </span>
            <h2
              className="font-display font-bold text-ink mt-3 leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Get in touch.
            </h2>
            <p className="font-sans text-ink/55 text-lg leading-relaxed mt-6 mb-8 max-w-sm">
              Questions, partnership inquiries, or just want to share your
              #IlirProud story? We&apos;d love to hear from you.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="font-display text-xl text-crimson hover:text-crimson-deep transition-colors duration-200 underline underline-offset-4 break-all"
            >
              {EMAIL}
            </a>

            <div className="mt-8">
              <a
                href="https://www.facebook.com/hashtag/ilirproud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-sans font-semibold text-ink hover:text-crimson transition-colors duration-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 object-contain"
                />
                <span>#IlirProud</span>
              </a>
            </div>
          </div>

          {/* Right — simple mailto form */}
          <div className="bg-white p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-ink mb-7">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-sans text-xs font-semibold text-ink/50 uppercase tracking-[0.15em] block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-ink/15 px-4 py-3 font-sans text-ink bg-transparent focus:outline-none focus:border-crimson transition-colors"
                />
              </div>
              <div>
                <label className="font-sans text-xs font-semibold text-ink/50 uppercase tracking-[0.15em] block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-ink/15 px-4 py-3 font-sans text-ink bg-transparent focus:outline-none focus:border-crimson transition-colors"
                />
              </div>
              <div>
                <label className="font-sans text-xs font-semibold text-ink/50 uppercase tracking-[0.15em] block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border border-ink/15 px-4 py-3 font-sans text-ink bg-transparent focus:outline-none focus:border-crimson transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink hover:bg-crimson text-white font-sans font-semibold py-4 text-xs tracking-[0.2em] uppercase transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
