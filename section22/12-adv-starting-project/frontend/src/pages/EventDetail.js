import EventItem from "../components/EventItem";
import { useRouteLoaderData } from "react-router-dom";

function EventDetail() {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
}

export default EventDetail;
export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw Response.json(
      { message: "Could not fetch detail of selected events." },
      { status: 500 },
    );
  } else {
    return response;
  }
}
