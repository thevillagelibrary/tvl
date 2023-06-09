import { Link } from 'react-router-dom';
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
              <Link to={path}>{subPage.name}</Link>
            </li>
        );
      })}
    </>
  );
}

export default function MenuLinks() {
  return (
    <> 
      <ul id='ul_menu'> 
        {pages.map((page) => {
          const path = `/${page.path}`;
          return (
            <div key={uuidv4()}>
              <li className='li_menu'>
                <Link to={path}>{page.name}</Link>
              </li>
              <NavBarSub page={page} />
            </div>
          );
        })}
      </ul>
    </>
  );
}
