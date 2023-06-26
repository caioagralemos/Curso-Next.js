import EventList from "../../components/events/eventList";
import EventsSearch from "../../components/events/eventsSearch";
import Link from "next/link";
import { getAllEvents } from "../../components/data/api-util";

export default function EventsHomePage() {
    const allEvents = getAllEvents()
    return <div>
      <EventsSearch />
      <EventList items={allEvents} />
    </div>;
}

  