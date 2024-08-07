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
    <html lang="en" className="scroll-smooth max-w-screen">
      <body className="flex flex-col items-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
