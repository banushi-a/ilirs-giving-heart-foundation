import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilir's Giving Heart Foundation",
  description:
    "Spreading love, hope, and support to families in need. Honoring the legacy of Ilir Banushi through compassion and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${dmSans.variable}`}
    >
      <body className="bg-cream overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
