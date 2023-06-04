import { Link, useLoaderData } from 'react-router-dom';
//import BackOfLibrary from '@/assets/images/BackOfLibrary.jpg';
//import BookA from '@/assets/images/book-A.gif';
//import Facebook from '@/assets/images/Facebook.png';
//import InstagramIcon from '@/assets/images/Instagram.png';
import UpcomingEventsLinks from '@/components/home/upcomingeventslinks';
import { PageBodyNoSideMenu } from '@/components/common';
import getFutureEvents from '@/components/newsevents/getFutureEvents';

export default function Home() {
  const data = useLoaderData();
  const hoursData = data.valueRanges[0];
  const hours = hoursData.values[2][1];
  const upcomingEventsData = data.valueRanges[1];
  const events = upcomingEventsData.values;
  const futureEvents = getFutureEvents(events);

  return (
    <>
      <PageBodyNoSideMenu name={'Home'}>
        <section id='home' className='vstack'>
          <h2>Hours</h2>
          <small>{hours}</small>
          <hr className='hr_divider' />
          <h2>Quick Links</h2>
          <section id='sec_quick-links'>
            <article id='art_quick-links_left'>
              <a href='https://thevillagelibrary.library.site'>
                Online Catalog
              </a>
              <Link to='/newarrivals'>New Arrivals</Link>
              <Link to='/supporters/donate'>Support Us</Link>
            </article>
            <article id='art_quick-links_right'>
              <Link to='/supporters/recentdonors'>Recent Donors</Link>
              <Link to='/aboutus/bookdonations'>Book Donations</Link>
              <Link to='/aboutus/grabandgo'>Curbside Pickup</Link>
            </article>
          </section>
          <br />
          <a
            id='a_photo-album'
            href='https://thevillagelibrary.org/album/album.html'>
            Photo Album
          </a>
          <hr className='hr_divider' />
          <article id='eventslinks'>
            <UpcomingEventsLinks futureEvents={futureEvents} />
          </article>
        </section>
      </PageBodyNoSideMenu>
    </>
  );
}
