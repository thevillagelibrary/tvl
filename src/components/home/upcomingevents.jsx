import { useNavigate } from 'react-router-dom';
import { MdArrowBack as Close } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import StoryTime from '@/assets/images/posters/StoryTime.jpg';
const posters = [{
  name: 'StoryTime',
  src: StoryTime,
}]

export default function UpcomingEvents() {
  console.log("😊😊 posters", posters)
  const navigate = useNavigate();
  const futureEvents = JSON.parse(localStorage.getItem('futureEvents'));
  const futureEventCount = futureEvents.length;

  const eventsToDisplay = futureEvents.map((event, index) => {
    let poster;
    if (event[6]) {
      poster = posters.find(item => item.name === event[6]);
     }
    return (
      <article key={uuidv4()}>
        <h2>{event[3]}</h2>
        {event[6] && (
          <img className='poster' alt={event[3]} src={poster.src} />
        )}
        <p>
          <b>{event[5]}:</b> {event[2]} -- {event[4]}
        </p>
        {index < futureEventCount - 1 ? (
          <div className='divider side-menu'></div>
        ) : (
          ''
        )}
      </article>
    );
  });

  const EventDisplay = () => <>{eventsToDisplay}</>;  

  function handleClick(event) {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <section id='upcomingeventslist'>
    <button id='close' >
      <Close  size={50} onClick={handleClick} />
    </button>
    <div className='divider full'></div>
      {futureEventCount > 0 ? (
        <EventDisplay key={uuidv4()} />
      ) : (
        <p key={uuidv4()}>There are no upcoming events.</p>
      )}
      <div className='divider full'></div>
    </section>
  );
}

