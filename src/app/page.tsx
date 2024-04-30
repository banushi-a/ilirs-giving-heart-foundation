import Header from "../components/Header";
import Links from "../components/Links";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <Header />
      <Links />
      <p id="about-us">TODO: mission statement section</p>
      <p>TODO: events section</p>
      <p>TODO: previous work section</p>
    </main>
  );
}
