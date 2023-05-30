import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function UpcomingEventsLinks({ futureEvents }) {
  const futureEventCount = futureEvents.length;

  const rows = futureEvents.map((event, index) => (
    <tr key={uuidv4()} className='event'>
      <td>{event[3]}</td>
      <td>{event[5]}</td>
      <td>{event[2]}</td>
    </tr>
  ));

  const EventDisplay = () => (
    <>
      <h2>Upcoming Events</h2>
      <small>
        <Link className='eventlink' to='/newsevents/upcomingevents'>
          <p>Click here for details.</p>
        </Link>
      </small>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
  if (futureEventCount > 0) {
    return <>{futureEventCount && <EventDisplay />}</>;
  } else {
    return null;
  }
}
