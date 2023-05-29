import { useLoaderData } from 'react-router-dom';
import { GoogleSheetsData } from '@/components/common';

export default function BookCDs() {
  const data = useLoaderData();
  const values = data.values;
  return <GoogleSheetsData name={'BookCDs'} values={values} />;
}
