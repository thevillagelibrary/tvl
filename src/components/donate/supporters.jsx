import { PageBodySideMenu } from '@/components/common';
import SandyAccepting from '@/assets/images/SandyAcceptingLLGrant.jpg';

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
      
      <figure>
        <figcaption>
        On May 14, 2024, Library President, Sandy Cooper, accepted a grant from Landings Landlovers to upgrade the front desk computers and add water saving sensors to the library's sprinkler system.
        </figcaption>
        <img className='picture' src={SandyAccepting} alt='Village Library President, Sandy Cooper, accepting LandLovers Grant' />
      </figure>
      <figure></figure>
      <p>Below are links to the websites of some of these contributors:</p>
      {/* <section id='sec_supporter-links'>*/}
        <a href='https://www.landingslandlovers.com'>Landings Landlovers</a>
        <br />
        <a href='https://www.landings.org'>The Landings Association</a><br />
        <a href='https://thelandings.com/golf-and-athletic-club'>
          The Landings Golf and Athletic Club
        </a><br /><br />
      {/*</section> */}
    </PageBodySideMenu>
  );
}
