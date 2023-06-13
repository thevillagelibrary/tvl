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
        <article>
          <Link to='/newarrivals#just-off-rental'>
            Just Off Rental
          </Link>
          <Link to='/newarrivals#books'>Books</Link>
          <Link to='/newarrivals#youth-section'>Youth Section</Link>
        </article>
        <br />
        <div className='divider full' />
        <h2 id='just-off-rental'>Just Off Rental</h2>
        <GoogleSheetsData name={'JustOffRental'} values={values[0]} />
        <div className='divider full' />
        <h2 id='books'>Books</h2>
        <GoogleSheetsData name={'Books'} values={values[1]} />
        <div className='divider full' />
        <h2 id='youth-section'>Youth Section</h2>
        <GoogleSheetsData name={'YouthSection'} values={values[2]} />
      </section>
    </PageBodyNoSideMenu>
  );
}
