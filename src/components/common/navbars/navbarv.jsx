import { NavLink } from 'react-router-dom';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export default function NavBarV({ mainPage }) {
  let path = `/${mainPage.path}`;
  return (
    <nav id='vnav' className='vstack'>
      <NavLink
        key={uuidv4()}
        to={path}
        className={({ isActive }) =>
          isActive ? 'linkV linkVActive' : 'linkV LinkVInactive'
        }
        end>
        {mainPage.name}
      </NavLink>
      <li>
        <hr className='divider-vNav' />
      </li>
      {mainPage.subPages.map((subPage) => {
        let path = `/${mainPage.path}/${subPage.path}`;
        return (
          <NavLink
            key={uuidv4()}
            to={path}
            className={({ isActive }) =>
              isActive ? 'linkV linkVActive' : 'linkV LinkVInactive'
            }>
            {subPage.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
