import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/events/eventList";

export default function FilterEventPage() {
  const router = useRouter();
  console.log(router.query.slug)

  if (!router.query.slug) {
    return <div>
      <h1>Invalid Date</h1>
    </div>
  }
  
  const events = getFilteredEvents(router.query.slug[0], router.query.slug[1])
  console.log(events)

  if (!events) {
    return (<div>
      <h1>No events found</h1>
    </div>)
  }

  return (
    <div>
      <h1>Filtrar por Data</h1>
      <h3>{router.query.slug[1] < 10 ? `0${router.query.slug[1]}` : `${router.query.slug[1]}`}/{router.query.slug[0]}</h3>
      <EventList items={events}/>
    </div>
  );
}
