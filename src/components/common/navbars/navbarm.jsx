import { NavLink } from 'react-router-dom';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export default function NavBarM({ mainPage }) {
  let path = `/${mainPage.path}`;

  return (
    <>
      <li key={uuidv4()} className='li_menu'>
        <NavLink to={path}>
          <p>{mainPage.name}</p>
        </NavLink>
      </li>
      {mainPage.subPages.map((subPage) => {
        let path = `/${mainPage.path}/${subPage.path}`;
        return (
          <li key={uuidv4()} className='li_menu li_menu-subpages'>
            <NavLink to={path}>
              <p>{subPage.name}</p>
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
