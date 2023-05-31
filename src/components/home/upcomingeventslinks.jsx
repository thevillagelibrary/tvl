import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MOBILE_VW } from '@/constants';

export default function UpcomingEventsLinks({ futureEvents }) {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
  });

  const futureEventCount = futureEvents.length;

  let events = [];

  if (dimensions.width > MOBILE_VW) {
    events = (
      <table>
        <tbody>
          {
            (events = futureEvents.map((event, index) => (
              <tr key={uuidv4()} className='event'>
                <td>{event[3]}</td>
                <td>{event[5]}</td>
                <td>{event[2]}</td>
              </tr>
            )))
          }
        </tbody>
      </table>
    );
  } else {
    events = (
      <dl key={uuidv4()} id='dl_upcoming-events'>
        {
          (events = futureEvents.map((event, index) => (
            <>
              <dt>{event[3]}</dt>
              <dd>
                {event[5]}, {event[2]}
              </dd>
            </>
          )))
        }
      </dl>
    );
  }

  const EventDisplay = () => (
    <>
      <h2>Upcoming Events</h2>
      <small>
        <Link className='eventlink' to='/news/upcomingevents'>
          <p>Click here for details.</p>
        </Link>
      </small>
      {events}
    </>
  );
  if (futureEventCount > 0) {
    return <>{futureEventCount && <EventDisplay />}</>;
  } else {
    return null;
  }
}
