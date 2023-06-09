import { NavLink } from 'react-router-dom';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export default function NavBarV({ mainPage }) {
  let path = `/${mainPage.path}`;
  return (
    <nav id='nav_v' className='visibility_not-phone'>
      <NavLink
        key={uuidv4()}
        to={path}
        className={({ isActive }) =>
          isActive ? 'li_nav_v li_nav_v-active' : 'li_nav_v li_nav_v-inactive'
        }
        end>
        {mainPage.name}
      </NavLink>
      
        <hr className='hr_divider-nav_v' />
      
      {mainPage.subPages.map((subPage) => {
        let path = `/${mainPage.path}/${subPage.path}`;
        return (
          <NavLink
            key={uuidv4()}
            to={path}
            className={({ isActive }) =>
              isActive
                ? 'li_nav_v li_nav_v-active'
                : 'li_nav_v li_nav_v-inactive'
            }>
            {subPage.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
