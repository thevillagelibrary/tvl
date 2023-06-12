import { NavLink } from 'react-router-dom';
import { MdMenu as MenuIcon } from 'react-icons/md';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export default function NavHNotPhone() {
  return (
    <nav className='visibility_not-phone nav_h'>
        <ul > 
          {pages.map((page, index) => {
            const path = `${page.path}`;
            return (
              <li key={uuidv4()}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }>
                  {page.name}
                </NavLink>
              </li>
            );
          })}
        <li>
          <a href='#menu_not-phone'><MenuIcon size={25} /></a>
        </li>
      </ul>
    </nav>
  );
}