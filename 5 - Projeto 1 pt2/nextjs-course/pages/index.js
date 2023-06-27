import Head from "next/head";

import EventList from "../components/events/eventList";
import EventsSearch from "../components/events/eventsSearch";
import { getFeaturedEvents } from "../components/data/api-util";

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next.js Events</title>
        <meta
          name="description"
          content="Aqui você encontra os melhores eventos para evoluir pessoal e profissionalmente!"
        />
      </Head>
      <EventsSearch />
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getFeaturedEvents();

  if (data) {
    return {
      props: {
        featuredEvents: data,
      },
    };
  } else {
    return {
      props: {
        featuredEvents: false,
      },
    };
  }
}
