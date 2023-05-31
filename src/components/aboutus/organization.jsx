import { useLoaderData } from 'react-router-dom';
import { PageBodySideMenu } from '@/components/common';

export default function Organization() {
  const data = useLoaderData();
  const organization = data.values;
  organization.splice(0, 1);

  return (
    <PageBodySideMenu name={'Organization'}>
      <p>
        The Village Library, Inc. is a Georgia non-profit [§501 (c) (3)]
        corporation and is managed by a slate of officers elected by a board of
        directors. The directors are chosen by the members at an annual meeting
        in May of each year.
      </p>
      <h2>Officers & Directors</h2>
      <table id='tb_officers'>
        <tbody>
          {organization.map((item, index) => (
            <tr key={index}>
              <td className='orgtitle'>{item[1]}</td>
              <td className='orgname'>{item[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <p>
        The library is run by about ninety volunteers who each donate from 25 to
        more than 100 hours of their time each year. Some of them have served
        for 20 years. These are the people who keep the library running smoothly
        by checking books in and out, wrapping new books in plastic jackets,
        attaching bar codes and entering them into our system. Without their
        generosity the library would not exist.
      </p>
    </PageBodySideMenu>
  );
}
