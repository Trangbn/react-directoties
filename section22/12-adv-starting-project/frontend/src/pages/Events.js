import {Link} from "react-router";

const DUMMY_EVENTS = [
    {
        id: "e1",
        title: "Event1"
    },
    {
        id: "e2",
        title: "Event2"
    },
    {
        id: "e2",
        title: "Event2"
    }
]

function Events() {
    return <>
        <h1>Events page</h1>
        <ul>
            {DUMMY_EVENTS.map((event) => {
                return <li key={event.id}>
                    <Link to={event.id}>{event.title}</Link>
                </li>
            })}
        </ul>

    </>
}

export default Events;