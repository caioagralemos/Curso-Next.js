import EventList from "../../components/events/eventList";
import EventsSearch from "../../components/events/eventsSearch";
import Link from "next/link";
import { getAllEvents } from "../../components/data/api-util";

export default function EventsHomePage(props) {
  const allEvents = props.allEvents;
  return (
    <div>
      <EventsSearch />
      <EventList items={allEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      allEvents: events,
    },
    revalidate: 1800,
  };
}
