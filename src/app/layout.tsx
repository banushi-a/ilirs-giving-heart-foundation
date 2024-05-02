import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Ilir's Giving Heart Foundation",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth min-w-screen">
      <body className="flex flex-col items-center">
        <Header />
        <section className="max-w-[95vw] md:max-w-[80vw]">{children}</section>
      </body>
    </html>
  );
}
