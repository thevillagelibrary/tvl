import tgarx from '@/images/TGARX.gif';
import { PageBodySideMenu } from '@/components/common';

export default function ReadingListsOnTheWeb() {
  return (
    <PageBodySideMenu name={'ReadingListsOnTheWeb'}>
      <section className='flex'>
        <article>
          <h2>The Pulitzer Prizes:</h2>
          <a href='https://www.pulitzer.org/prize-winners-by-category/219'>
            <p>Fiction</p>
          </a>
          <a
            className='link'
            href='https://www.pulitzer.org/prize-winners-by-category/218'>
            <p>Drama</p>
          </a>
          <a
            className='link'
            href='https://www.pulitzer.org/prize-winners-by-category/220'>
            <p>History</p>
          </a>
          <a
            className='link'
            href='https://www.pulitzer.org/prize-winners-by-category/222'>
            <p>Biography</p>
          </a>
          <a
            className='link'
            href='https://www.pulitzer.org/prize-winners-by-category/650'>
            <p>Memoir or Autobiography</p>
          </a>
          <a
            className='link'
            href='https://www.pulitzer.org/prize-winners-by-category/224'>
            <p>Poetry</p>
          </a>
          <a
            className='link'
            href='https://www.pulitzer.org/prize-winners-by-category/223'>
            <p>General Nonfiction</p>
          </a>
        </article>
        <article>
          <h2>The Booker Prizes:</h2>
          <a href='https://thebookerprizes.com/the-booker-library/features/full-list-of-booker-prize-winners-shortlisted-authors-and-their-books'>
            <p>Domestic Winners and Shortlisted Authors</p>
          </a>
          <a href='https://thebookerprizes.com/the-booker-library/features/full-list-of-international-booker-prize-winners-shortlisted-authors-and-their-books'>
            <p>International Winners and Shortlisted Authors</p>
          </a>
        </article>
      </section>
      <hr className='divider-sidemenu' />
      <section>
        <h2>
          On its 125th anniversary, the New York Public Library published this
          list:
        </h2>
        <a href='https://www.nypl.org/125/topcheckouts'>
          <p>Top 10 Checkouts of All Time</p>
        </a>
        <hr className='divider-sidemenu' />

        <h2>This site lists all mysteries by an author by publishing date:</h2>
        <a href='http://stopyourekillingme.com'>
          <p>Stop, You&apos;re Killing Me!</p>
        </a>
        <hr className='divider-sidemenu' />

        <h2>
          A national survey conducted by PBS published this list of
          America&apos;s 100 most-loved books:
        </h2>
        <a
          className='link'
          href='http://www.pbs.org/the-great-american-read/books/#/'>
          <p>The Great American Read</p>
        </a>

        <h3>
          Our collection includes all except those marked &quot;X&quot; below.
        </h3>
        <img alt='The Great American Read' src={tgarx} />
      </section>
    </PageBodySideMenu>
  );
}
