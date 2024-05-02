import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Links from "../components/Links";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <Links />
      <HeroSection />
      <p>🚧 Website Under Construction 🚧</p>
      <p>❤️ Donations Can Be Processed! ❤️</p>
    </main>
  );
}
