import { useLoaderData } from 'react-router-dom';
import { GoogleSheetsData } from '@/components/common';

export default function JustOffRental() {
  const data = useLoaderData();
  const values = data.values;
  return <GoogleSheetsData name={'JustOffRental'} values={values} />;
}
