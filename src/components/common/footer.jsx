import { Link } from 'react-router-dom';
import { QuickLinks } from '@/components/common';
import Facebook from '@/images/Facebook.png';
import InstagramIcon from '@/images/Instagram.png';

export default function Footer() {
  return (
    <>
      <section>
        <p className='address'>
          Village Library, Inc.
          <br />
          1 Skidaway Village Square
          <br />
          Savannah, GA 31411
          <br />
          (912) 598-1183
        </p>
      </section>
      <section>
        <article id='logos'>
          <Link
            id='facebook'
            target='_blank'
            title='The Village Library on Facebook'
            to='http://www.facebook.com/SIvillagelibrary/'>
            <img className='icon' alt='Facebook' src={Facebook} />
          </Link>
          <Link
            id='instagram'
            title='The Village Library on Instagram'
            to='http://www.instagram.com/si_village_library'>
            <img
              className='icon'
              alt='Follow us on Instagram'
              src={InstagramIcon}
            />
          </Link>
        </article>
        <article>
          <Link to='mailto:thevillagelibrary.inc@gmail.com'>
            <p>Click here to contact our Webmaster</p>
          </Link>
        </article>
      </section>
      <section className='quicklinks'>
        <QuickLinks />
      </section>
    </>
  );
}
