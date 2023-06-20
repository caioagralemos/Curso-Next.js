import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/eventList";
import Link from "next/link";
import EventsSearch from "../components/events/eventsSearch";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()

  return <div>
    <EventsSearch />
    <EventList items={featuredEvents}/>
    <Link href="/events">Ir para todos os eventos</Link>
  </div>;
}
