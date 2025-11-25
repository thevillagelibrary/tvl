import { Link, useLoaderData } from 'react-router-dom';
import { GoogleSheetsData, PageBodyNoSideMenu } from '@/components/common';

export default function NewArrivals() {
  const data = useLoaderData();
  let values = [];
  for (let i = 0; i < 3; i++) {
    values[i] = data.valueRanges[i].values;
  }

  return (
    <PageBodyNoSideMenu name={'NewArrivals'}>
      <section id='new-arrivals'>
        {/* <article>
          <Link to='/newarrivals#just-off-rental'>Just Off Rental</Link>
          <Link to='/newarrivals#books'>Books</Link>
          <Link to='/newarrivals#youth-section'>Youth Section</Link>
        </article>
        <br />
        <div className='divider full'></div>
        <br />
        <h2 id='just-off-rental'>Just Off Rental</h2>
        <GoogleSheetsData name={'JustOffRental'} values={values[0]} />
        <div className='divider full'></div>
        <br /> */}
        <h2>Savannah Book Festival</h2>
        <p>The Village Library is supporting the Savannah Book Festival (February 5-8, 2026) by acquiring as many of the titles as possible.  The books will be displayed and available for check out through February.</p>
        <h2 id='books'>Books</h2>
        <GoogleSheetsData name={'Books'} values={values[1]} />
        {/* <br />
        <div className='divider full'></div>
        <br />
        <h2 id='youth-section'>Youth Section</h2>
        <GoogleSheetsData name={'YouthSection'} values={values[2]} /> */}
      </section>
    </PageBodyNoSideMenu>
  );
}
