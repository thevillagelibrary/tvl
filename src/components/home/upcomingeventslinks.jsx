import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function UpcomingEventsLinks({ futureEvents }) {
  const futureEventCount = futureEvents.length;

  const linksToDisplay = futureEvents.map((event, index) => (
    <hgroup key={uuidv4()}>
      <h3>{event[3]}</h3>
      <p className='eventlink'>
        {event[5]}, {event[2]}
      </p>
    </hgroup>
  ));

  const EventDisplay = () => (
    <>
      <h2>Upcoming Events</h2>
      <small>
        <Link className='eventlink' to='/newsevents/upcomingevents'>
          <p>Click here for details.</p>
        </Link>
      </small>
      {linksToDisplay}
    </>
  );
  if (futureEventCount > 0) {
    return <>{futureEventCount && <EventDisplay />}</>;
  } else {
    return null;
  }
}
