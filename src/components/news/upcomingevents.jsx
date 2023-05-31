import { useLoaderData } from 'react-router-dom';
import { PageBodySideMenu } from '@/components/common';
import UpcomingEventsList from '@/components/news/upcomingeventslist';

export default function UpcomingEvents() {
  const data = useLoaderData();
  const events = data.values;

  return (
    <PageBodySideMenu name={'UpcomingEvents'}>
      <UpcomingEventsList events={events} />
      <br />
      <br />
    </PageBodySideMenu>
  );
}
