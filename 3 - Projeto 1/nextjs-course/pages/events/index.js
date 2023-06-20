import { getAllEvents } from "../../data/dummy-data";
import EventList from "../../components/events/eventList";
import Link from "next/link";

export default function EventsHomePage() {
    const allEvents = getAllEvents()
    return <div>
      <h1>Todos os Eventos</h1>
      <EventList items={allEvents} />
      <Link href="/">Voltar para Home</Link>
    </div>;
}

  