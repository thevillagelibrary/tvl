import { useLoaderData } from 'react-router-dom';
import { GoogleSheetsData, PageBodyNoSideMenu } from '@/components/common';

export default function NewBooks() {
  const data = useLoaderData();
  let values = [];
  for (let i = 0; i < 3; i++) {
    values[i] = data.valueRanges[i].values;
  }

  return (
    <PageBodyNoSideMenu name={'NewBooks'}>
      <section id='newbooks'>
        <details>
          <summary>Just Off Rental</summary>
          <GoogleSheetsData name={'JustOffRental'} values={values[0]} />
          <hr className='divider' />
        </details>
        <details>
          <summary>
            Books&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
          </summary>
          <GoogleSheetsData name={'Books'} values={values[1]} />
          <hr className='divider' />
        </details>
        <details>
          <summary>Youth Section&nbsp;&nbsp;</summary>
          <GoogleSheetsData name={'YouthSection'} values={values[2]} />
        </details>
      </section>
    </PageBodyNoSideMenu>
  );
}
