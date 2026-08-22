import { useLoaderData } from 'react-router-dom';
import { GoogleSheetsData, PageBodySideMenu } from '@/components/common';

export default function RecentDonors() {
  const data = useLoaderData();
  const values = data.values;
  return (
    <PageBodySideMenu name='RecentDonors'>
      <GoogleSheetsData name={'RecentDonors'} values={values} />
    </PageBodySideMenu>
  );
}
