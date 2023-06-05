import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function UpcomingEventsLinks({ futureEvents }) {
  const futureEventCount = futureEvents.length;

  function PhoneEvents() {
    return (
      <table id='tbl_upcoming-events' className='visibility_not-phone'>
        <tbody>
          {futureEvents.map((event, index) => (
            <tr key={uuidv4()} className='tr_event'>
              <td>{event[3]}</td>
              <td>{event[5]}</td>
              <td>{event[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  function NotPhoneEvents() {
    return (
      <dl key={uuidv4()} id='dl_upcoming-events' className='visibility_phone'>
        {futureEvents.map((event, index) => (
          <div key={uuidv4()}>
            <dt>{event[3]}</dt>
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
        <h2>Upcoming Events</h2>
        <br />
        <Link id='a_event-link' to='/newsevents/upcomingevents'>
          Click here for details.
        </Link>
        <NotPhoneEvents />
        <PhoneEvents />
      </>
    );
  }

  if (futureEventCount > 0) {
    return <>{futureEventCount && <EventDisplay />}</>;
  } else {
    return null;
  }
}
