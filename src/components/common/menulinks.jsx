import { NavLink } from 'react-router-dom';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

function NavBarSub({ page }) {
  if (!page.subPages) return null;

  return (
    <>
      {page.subPages.map((subPage) => {
        const path = `/${page.path}/${subPage.path}`;
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

export default function NavBarM() {
  return (
    <ul id='ul_menu'>
      {pages.map((page) => {
        const path = `/${page.path}`;
        return (
          <>
            <li key={uuidv4()} className='li_menu'>
              <NavLink to={path}>
                <p>{page.name}</p>
              </NavLink>
            </li>
            <NavBarSub page={page} />
          </>
        );
      })}
    </ul>
  );
}