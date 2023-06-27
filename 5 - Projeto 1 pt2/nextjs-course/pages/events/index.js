import EventList from "../../components/events/eventList";
import EventsSearch from "../../components/events/eventsSearch";
import { getAllEvents } from "../../components/data/api-util";
import Head from "next/head";

export default function EventsHomePage(props) {
  const allEvents = props.allEvents;
  return (
    <div>
      <Head>
        <title>Todos os Eventos</title>
        <meta
          name="description"
          content="Aqui você encontra todos os melhores eventos para evoluir pessoal e profissionalmente!"
        />
      </Head>
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
