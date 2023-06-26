import { Fragment } from "react";
import EventList from "../../components/events/eventList";
import { getFilteredEvents } from "../../components/data/api-util";
import { useRouter } from "next/router";

export default function FilterEventPage(props) {
  const router = useRouter()
  const events = props.filteredEvents;

  if (!events) {
    return (
      <div>
        <h1>No events found</h1>
      </div>
    );
  }

  return (
    <Fragment>
      <h3 className="center" style={{ marginTop: "15px" }}>
        Filtrar por Data
      </h3>
      <h3 className="center" style={{ marginBottom: "-30px" }}>
        {router.query.slug[1] < 10
          ? `0${router.query.slug[1]}`
          : `${router.query.slug[1]}`}
        /{router.query.slug[0]}
      </h3>
      <EventList items={events} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;
  const events = await getFilteredEvents(+filterData[0], +filterData[1]);

  if (!params.slug || params.slug.length != 2) {
    return {
      notFound: true,
      // redirect: {
      //   destination: './error'
      // }
    };
  }

  return {
    props: {
      filteredEvents: events,
    },
  };
}
