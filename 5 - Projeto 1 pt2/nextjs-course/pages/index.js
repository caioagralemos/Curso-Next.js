import EventList from "../components/events/eventList";
import Link from "next/link";
import EventsSearch from "../components/events/eventsSearch";
import Fetcher from "../components/data/Fetcher";
import { getFeaturedEvents } from "../components/data/api-util";

export default function HomePage(props) {
  if (props.featuredEvents) {
    return (
      <div>
        <EventsSearch />
        <EventList items={props.featuredEvents} />
      </div>
    );
  } else {
    return (
      <div>
        <EventsSearch />
        <p>Loading...</p>
      </div>
    );
  }
}


export async function getStaticProps() {
  const data = await getFeaturedEvents()

  if(data) {
    return {
      props: {
        featuredEvents: data
      }
    }
  } else {
    return {
      props: {
        featuredEvents: false
      }
    }
  }

}
