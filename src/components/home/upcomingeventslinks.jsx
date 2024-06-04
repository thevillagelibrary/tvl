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
      <div className='divider full'></div>
        <h2>Upcoming Events (
        <Link to='/upcomingevents'>
          Details
        </Link>)</h2>
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
