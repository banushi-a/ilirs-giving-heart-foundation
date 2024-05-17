import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen">
      {/* <Links /> */}
      <HeroSection />
      <AboutSection />
      <p>🚧 Website Under Construction 🚧</p>
      <p>❤️ Donations Can Be Processed! ❤️</p>
    </main>
  );
}
