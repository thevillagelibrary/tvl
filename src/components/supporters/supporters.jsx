import { PageBodySideMenu } from '@/components/common';

export default function Supporters() {
  return (
    <PageBodySideMenu name={'Supporters'}>
      <p>
        We wish to thank all the organizations, businesses, and dedicated
        volunteers who have made our library possible.
      </p>
      <p>
        A special thanks goes to David L. Litten, who was a major donor to the
        new wing in memory of his late wife, Ann Resch Litten, and who continues
        to suport the library generously in her memory.
      </p>
      <p>
        A special thanks also goes to Landings Landlovers, which has been a
        regular and generous supporter of the library for many years.
      </p>
      <p>Below are links to the websites of some of these contributors:</p>
      <section id='sec_supporter-links'>
        <a href='https://www.landingslandlovers.com'>Landings Landlovers</a>
        <a href='https://www.landings.org'>The Landings Association</a>
        <a href='https://thelandings.com/golf-and-athletic-club'>
          The Landings Golf and Athletic Club
        </a>
      </section>
    </PageBodySideMenu>
  );
}
