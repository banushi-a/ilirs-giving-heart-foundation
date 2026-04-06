import Hero from "../components/Hero";
import UpcomingEvents from "../components/UpcomingEvents";
import ImpactSection from "../components/ImpactSection";
import PastEvents from "../components/PastEvents";
import DonateSection from "../components/DonateSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <UpcomingEvents />
      <ImpactSection />
      <PastEvents />
      <DonateSection />
      <ContactSection />
    </main>
  );
}
