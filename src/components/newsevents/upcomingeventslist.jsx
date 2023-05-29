import getFutureEvents from '@/components/newsevents/getFutureEvents';
import { v4 as uuidv4 } from 'uuid';

export default function UpcomingEventsList({ events }) {
  const futureEvents = getFutureEvents(events);
  const futureEventCount = futureEvents.length;

  const eventsToDisplay = futureEvents.map((event, index) => {
    let imgSource = 'https://drive.google.com/uc?export=view&id=' + event[6];
    return (
      <article key={uuidv4()}>
        <h3>{event[3]}</h3>
        {event[6] && <img className='poster' alt={event[3]} src={imgSource} />}
        <p>
          <strong>{event[5]}:</strong> {event[2]} -- {event[4]}
        </p>
        {index < futureEventCount - 1 ? (
          <hr className='divider-sidemenu' />
        ) : (
          ''
        )}
      </article>
    );
  });

  const EventDisplay = () => <>{eventsToDisplay}</>;

  return (
    <>
      {futureEventCount > 0 ? (
        <EventDisplay key={uuidv4()} />
      ) : (
        <p key={uuidv4()}>There are no upcoming events.</p>
      )}
    </>
  );
}
