import { useLoaderData } from 'react-router-dom';
import { GoogleSheetsData } from '@/components/common';

export default function Books() {
  const data = useLoaderData();
  const values = data.values;
  return <GoogleSheetsData name={'Books'} values={values} />;
}
