import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "../../components/data/api-util";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Head from "next/head";

export default function SpecificEventPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content={event.description}
        />
      </Head>
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
      selectedEvent: event,
    },
    revalidate: 1800,
  };
}

// EM PÁGINAS DINÂMICAS PRECISAMOS IMPLEMENTAR GETSTATICPATHS
export async function getStaticPaths() {
  // aqui precisamos retornar pra quais IDS nós queremos retornar páginas
  const events = await getFeaturedEvents(); // aqui só retorna os eventos destacados, mas com o fallback ativado ele vai gerar dinamicamente os outros
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: true, // perguntando se é possível que sejam criadas mais paginas do que foi passado por padrao
    // fallback pode ser true, false ou blocking para demorar pra carregar a pag mas ja carregar de uma vez
  };
}
