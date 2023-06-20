import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/eventList";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()

  return <div>
    <h1>The Home Page</h1>
    <EventList items={featuredEvents}/>
  </div>;
}
