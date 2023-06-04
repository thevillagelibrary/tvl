import { Link } from 'react-router-dom';
import Facebook from '@/assets/images/Facebook.png';
import InstagramIcon from '@/assets/images/Instagram.png';

export default function Footer() {
  return (
    <>
      <section>
        <address>
          Village Library, Inc.
          <br />
          1 Skidaway Village Square
          <br />
          Savannah, GA 31411
          <br />
          (912) 598-1183
        </address>
      </section>
      <section>
        <article id='logos'>
          <Link
            id='facebook'
            target='_blank'
            title='The Village Library on Facebook'
            to='http://www.facebook.com/SIvillagelibrary/'>
            <img className='icon_social-media' alt='Facebook' src={Facebook} />
          </Link>
          <Link
            id='instagram'
            title='The Village Library on Instagram'
            to='http://www.instagram.com/si_village_library'>
            <img
              className='icon_social-media'
              alt='Follow us on Instagram'
              src={InstagramIcon}
            />
          </Link>
        </article>
        <br /> <br />
        <Link to='/menu'>
          <p>Site Map</p>
        </Link>
      </section>
      <section>
        <Link to='mailto:thevillagelibrary.inc@gmail.com'>
          <p>Contact our Webmaster</p>
        </Link>
      </section>
    </>
  );
}
