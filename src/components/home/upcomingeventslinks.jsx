import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function UpcomingEventsLinks({ futureEvents }) {
  const futureEventCount = futureEvents.length;

  function Events() {
    return (
      <dl key={uuidv4()} id='upcomingevents'>
        {futureEvents.map((event, index) => (
          <div key={uuidv4()}>
            <dt>
              <h3>{event[3]}</h3>
            </dt>
            <dd>
              {event[5]}, {event[2]}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  function EventDisplay() {
    return (
      <>
      <br />
      <div className='divider full'></div>
        <h2>Upcoming Events</h2>
        <Link to='/upcomingevents'>
          Click here for details.
        </Link>
        <Events />
      </>
    );
  }

  if (futureEventCount > 0) {
    return <>{futureEventCount && <EventDisplay />}</>;
  } else {
    return null;
  }
}
