import { Link } from 'react-router-dom';

import { PageBodySideMenu } from '@/components/common';

export default function GrabAndGo() {
  return (
    <PageBodySideMenu name={'GrabAndGo'}>
      <section id='sec_grab-and-go'>
        <p>1. Curbside pickup is available Tuesdays through Saturdays.</p>
        <p>
          2.{' '}
          <Link href='https://thevillagelibrary.library.site'>
            Click here to view our online catalog.
          </Link>
        </p>

        <p>
          3. Call 598-1183 between 10:00 a.m. and 3:00 p.m. to reserve your
          books. Please limit your selections to 3 adult books or 5
          children&apos;s books and do not leave a voicemail message.
        </p>
        <p>
          4. Curbside pickup is between 11:00 a.m. and 4:00 p.m. Please stay in
          your car, pop your trunk, and a volunteer will bring your books to
          you.
        </p>
        <p>
          5. If your membership needs to be renewed or fines are due, we will
          let you know when you pick your books up and what the options are to
          pay.
        </p>
      </section>
    </PageBodySideMenu>
  );
}
