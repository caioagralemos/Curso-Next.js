import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/eventList";
import { getFilteredEvents } from "../../components/data/api-util";

export default function FilterEventPage() {
  const router = useRouter();

  if (!router.query.slug) {
    return (
      <div>
        <h1>Invalid Date</h1>
      </div>
    );
  }

  const events = getFilteredEvents(
    +router.query.slug[0],
    +router.query.slug[1]
  );

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
