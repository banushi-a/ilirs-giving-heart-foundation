import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import HashtagSection from "../components/HashtagSection";
import HeroSection from "../components/HeroSection";
import VolunteerSection from "../components/VolunteerSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen">
      {/* <Links /> */}
      <HeroSection />
      <AboutSection />
      <HashtagSection />
      <EventsSection />
      <VolunteerSection />
    </main>
  );
}
