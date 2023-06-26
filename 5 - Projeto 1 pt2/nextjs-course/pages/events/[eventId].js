import { useRouter } from "next/router";
import { getEventById } from "../../components/data/api-util";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function SpecificEventPage(props) {
  const event = props.selectedEvent

  if (!event) {
    return <h1>Evento não encontrado!</h1>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    }
  }
}

// EM PÁGINAS DINÂMICAS PRECISAMOS IMPLEMENTAR GETSTATICPATHS
export async function getStaticPaths(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    }
  }
}