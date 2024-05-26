import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import HeroSection from "../components/HeroSection";
import VolunteerSection from "../components/VolunteerSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen">
      {/* <Links /> */}
      <HeroSection />
      <AboutSection />
      <VolunteerSection />
      <EventsSection />
    </main>
  );
}
