import { Link } from 'react-router-dom';
import bookA from '@/images/book-A.gif';
import { PageBodyNoSideMenu } from '@/components/common';

export default function ContactUs() {
  return (
    <PageBodyNoSideMenu name={'ContactUs'}>
      <p className='address'>
        Village Library, Inc.
        <br />
        1 Skidaway Village Square
        <br />
        Savannah, GA 31411
        <br /> (912) 598-1183
      </p>
      <Link to='mailto:thevillagelibrary.org@gmail.com'>
        <p>Click here to contact our Webmaster.</p>
      </Link>
      {/* <br />
      <img src={bookA} alt='Book' /> */}
    </PageBodyNoSideMenu>
  );
}
