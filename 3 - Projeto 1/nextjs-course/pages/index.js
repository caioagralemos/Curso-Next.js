import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/eventList";
import Link from "next/link";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()

  return <div>
    <h1>Página Inicial</h1>
    <EventList items={featuredEvents}/>
    <Link href="/events">Ir para todos os eventos</Link>
  </div>;
}
