import { Link, useLoaderData } from 'react-router-dom';
//import BackOfLibrary from '@/images/BackOfLibrary.jpg';
//import BookA from '@/images/book-A.gif';
//import Facebook from '@/images/Facebook.png';
//import InstagramIcon from '@/images/Instagram.png';
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
          <hr className='divider' />
          <h2>Online Catalog</h2>
          <a href='https://thevillagelibrary.library.site'>
            <p>Click here to view our online catalog.</p>
          </a>
          <hr className='divider' />
          <h2>Donate</h2>
          <Link to='/supporters/donate'>
            <p>Click here to learn how to support us.</p>
          </Link>
          <hr className='divider' />
          <h2>Thanks to Our Recent Donors</h2>
          <Link to='/supporters/recentdonors'>
            <p>Click here for a list of our recent donors.</p>
          </Link>
          <hr className='divider' />
          <article id='eventslinks'>
            <UpcomingEventsLinks futureEvents={futureEvents} />
          </article>
          <hr className='divider' />
          <h2>Book Donations</h2>
          <Link to='/aboutus/bookdonations'>
            <p>Click here for details.</p>
          </Link>
          <hr className='divider' />
          <h2>Grab-&-Go</h2>
          <Link to='/aboutus/grabandgo'>
            <p>Click here for details on curside pickup.</p>
          </Link>
          <hr className='divider' />
          <h2>Photo Album</h2>
          <a href='https://thevillagelibrary.org/album/album.html'>
            <p>Click here to view our photoalbum.</p>
          </a>
        </section>
      </PageBodyNoSideMenu>
    </>
  );
}
