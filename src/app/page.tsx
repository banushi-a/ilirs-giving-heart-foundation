import Hero from "@/src/components/Hero";
import Mission from "../components/Mission";
import RecentEvents from "../components/RecentEvents";
import Impact from "../components/Impact";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Hero />
      <Mission />
      <RecentEvents />
      <Impact />
    </div>
  );
}
