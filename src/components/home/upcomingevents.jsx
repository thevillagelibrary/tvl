import { useNavigate } from "react-router-dom";
import { MdArrowBack as Close } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import StoryTime from "@/assets/images/posters/StoryTime.jpg";
import FallBookSale from "@/assets/images/posters/FallBookSale.jpg";
import KarenDoveBarr from "@/assets/images/posters/KarenDoveBarr.jpg";

const posters = [
  {
    name: "FallBookSale",
    src: FallBookSale,  
  },
  {
     name: "KarenDoveBarr",
     src: KarenDoveBarr,
  },
  {
    name: "StoryTime",
    src: StoryTime,
  }
]
export default function UpcomingEvents() {
  const navigate = useNavigate();
  const futureEvents = JSON.parse(localStorage.getItem("futureEvents"));
  const futureEventCount = futureEvents.length;

  const eventsToDisplay = futureEvents.map((event, index) => {
    let poster;
    let altText = event[3] + " Poster";
    if (event[6]) {
      poster = posters.find((item) => item.name === event[6]);
    }
    return (
      <article key={uuidv4()}>
        <h2>{event[3]}</h2>
        {event[6] && <img className="poster" alt={altText} src={poster.src} />}
        <p>
          <b>{event[5]}:</b> {event[2]} {event[4]}
        </p>
        {index < futureEventCount - 1 ? (
          <div className="divider side-menu"></div>
        ) : (
          ""
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
    <section id="upcomingeventslist">
      <button id="close">
        <Close size={50} onClick={handleClick} />
      </button>
      {futureEventCount > 0 ? (
        <EventDisplay key={uuidv4()} />
      ) : (
        <p key={uuidv4()}>There are no upcoming events.</p>
      )}
    </section>
  );
}
