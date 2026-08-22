import tgarx from '@/assets/images/TGARX.gif';
import { PageBodySideMenu } from '@/components/common';

export default function ReadingListsOnTheWeb() {
  return (
    <PageBodySideMenu name={'ReadingListsOnTheWeb'}>
      <section id='readinglists'>
        <h2>
          On its 125th anniversary, the New York Public Library published this
          list:
        </h2>
        <br />
        <a href='https://www.nypl.org/125/topcheckouts'>
          Top 10 Checkouts of All Time
        </a>
        <br />
        <br />
        <div className='divider side-menu'></div>

        <h2>This site lists all mysteries by an author by publishing date:</h2>

        <br />
        <a href='http://stopyourekillingme.com'>
          Stop, You&apos;re Killing Me!
        </a>
        <br />
        <br />
        <div className='divider side-menu'></div>

        <h2>
          A national survey conducted by PBS published this list of
          America&apos;s 100 most-loved books:
        </h2>
        <br />
        <a
          
          href='http://www.pbs.org/the-great-american-read/newarrivals/#/'>
          The Great American Read
        </a>
        <br />
        <br />

        <h3>
          Our collection includes all except those marked &quot;X&quot; below.
        </h3>
        <img alt='The Great American Read' src={tgarx} />
      </section>
    </PageBodySideMenu>
  );
}
