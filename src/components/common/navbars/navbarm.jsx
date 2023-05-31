import { Link } from 'react-router-dom';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export default function NavBarM({ mainPage }) {
  let path = `/${mainPage.path}`;

  return (
    <>
      <li className='menumainsubpage' key={uuidv4()}>
        <Link to={path}>
          <p>{mainPage.name}</p>
        </Link>
      </li>
      {mainPage.subPages.map((subPage) => {
        let path = `/${mainPage.path}/${subPage.path}`;
        return (
          <li key={uuidv4()} className='menusubpages'>
            <Link to={path}>
              <p>{subPage.name}</p>
            </Link>
          </li>
        );
      })}
    </>
  );
}
