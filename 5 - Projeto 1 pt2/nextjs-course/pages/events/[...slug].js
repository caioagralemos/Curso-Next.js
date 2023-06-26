import { Fragment, useEffect, useState } from "react";
import EventList from "../../components/events/eventList";
import { getFilteredEvents } from "../../components/data/api-util";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function FilterEventPage(props) {
  const router = useRouter();
  const events = props.filteredEvents;
  const [loadedEvents, setLoadedEvents] = useState(events);

  const { data, error } = useSWR(
    "https://nextjs-course-13a42-default-rtdb.firebaseio.com/events.json"
  );

  useEffect(() => {
    if (data) {
      var eventsArray = [];

      for (const key in data) {
        eventsArray.push({
          id: key,
          ...data[key],
        });
      }

      var year = +router.query.slug[0];
      var month = +router.query.slug[1];
    
      let filteredEvents = eventsArray.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
        );
      });

      setLoadedEvents(filteredEvents);
    }
  }, [data]);

  if (loadedEvents.length == 0) {
    return (
      <div className="center">
        <h1>Não foram encontrados eventos para essa data</h1>
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
      <EventList items={loadedEvents} />
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
