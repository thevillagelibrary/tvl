import { NavLink } from 'react-router-dom';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export default function NavV({ mainPage }) {
  let path = `/${mainPage.path}`;
  return (
    <nav id='nav_v' className='visibility_not-phone'>
      <ul>
        <li>
          <NavLink
            key={uuidv4()}
            to={path}
            className={({ isActive }) =>
              isActive ? 'active' : 'inactive'
            }
            end>
            {mainPage.name}
          </NavLink>
        </li>
        <li><div className='divider nav-v' /></li>      
        {mainPage.subPages.map((subPage) => {
          let path = `/${mainPage.path}/${subPage.path}`;
          return (
            <li key={uuidv4()}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? 'active'
                  : 'inactive'
              }>
              {subPage.name}
            </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
