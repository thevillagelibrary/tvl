import { useLoaderData } from 'react-router-dom';
import { PageBodySideMenu } from '@/components/common';

export default function Board() {
  const data = useLoaderData();
  const organization = data.values;
  organization.splice(0, 1);

  return (
    <PageBodySideMenu name={'Board'}>
      <p>
        The Village Library, Inc. is a Georgia non-profit [§501 (c) (3)]
        corporation and is managed by a slate of officers elected by a board of
        directors. The directors are chosen by the members at an annual meeting
        in May of each year.
      </p>
      <h2>Officers & Directors</h2>
      <table id='board'>
        <tbody>
          {organization.map((item, index) => (
            <tr key={index}>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageBodySideMenu>
  );
}
