import { useLoaderData } from 'react-router-dom';
import { GoogleSheetsData } from '@/components/common';

export default function RecentDonors() {
  const data = useLoaderData();
  const values = data.values;
  return <GoogleSheetsData name={'RecentDonors'} values={values} />;
}
