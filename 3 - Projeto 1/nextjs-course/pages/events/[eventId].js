import { useRouter } from "next/router";

export default function SpecificEventPage() {
    const router = useRouter()
    return (<div>
      <h1>Specific Event</h1>
      <div>Event ID: {router.query.eventId}</div>
    </div>);
}