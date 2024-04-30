import type { Metadata } from "next";
import "../styles/globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
