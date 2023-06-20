import { useRouter } from "next/router";
import { getEventById } from "../../data/dummy-data";

export default function SpecificEventPage() {
    const router = useRouter()
    const eventId = router.query.eventId
    const event = getEventById(eventId)
    return (<div>
      <h1>Detalhes do Evento</h1>
      <div>ID do Evento: {eventId}</div>
    </div>);
}