import { Link, useLoaderData } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { GoogleSheetsData, PageBodyNoSideMenu } from '@/components/common';

export default function NewBooks() {
  const data = useLoaderData();
  let values = [];
  for (let i = 0; i < 3; i++) {
    values[i] = data.valueRanges[i].values;
  }

  return (
    <PageBodyNoSideMenu name={'Books'}>
      <>
        <ScrollToTop />
        <Link to='/books#link-target_just-off-rental'>
          <p>Just Off Rental</p>
        </Link>
        <Link to='/books#link-target_books'>
          <p>Books</p>
        </Link>
        <Link to='/books#link-target_youth-section'>
          <p>Youth Section</p>
        </Link>
        <hr className='hr_divider' />
        <h2 id='link-target_just-off-rental'>Just Off Rental</h2>
        <GoogleSheetsData name={'JustOffRental'} values={values[0]} />
        <hr className='hr_divider' />
        <h2 id='link-target_books'>Books</h2>
        <GoogleSheetsData name={'Books'} values={values[1]} />
        <hr className='hr_divider' />
        <h2 id='link-target_youth-section'>Youth Section</h2>
        <GoogleSheetsData name={'YouthSection'} values={values[2]} />
      </>
    </PageBodyNoSideMenu>
  );
}
