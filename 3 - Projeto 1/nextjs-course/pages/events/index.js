import { getAllEvents } from "../../data/dummy-data";
import EventList from "../../components/events/eventList";
import EventsSearch from "../../components/events/eventsSearch";
import Link from "next/link";

export default function EventsHomePage() {
    const allEvents = getAllEvents()
    return <div>
      <EventsSearch />
      <EventList items={allEvents} />
    </div>;
}

  