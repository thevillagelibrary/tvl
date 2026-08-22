import { Link } from 'react-router-dom';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

function LinksSub({ page }) {
  if (!page.subPages) return null;

  return (
    <>
      {page.subPages.map((subPage) => {
        const path = `/${page.path}/${subPage.path}`;
        return (          
            <li key={uuidv4()} className='subpages'>
              <Link to={path}>{subPage.name}</Link>
            </li>
        );
      })}
    </>
  );
}

export default function MenuPhoneLinks() {
  return (
      <ul> 
        {pages.map((page) => {
          const path = `/${page.path}`;
          return (
            <div key={uuidv4()}>
              <li>
                <Link to={path}>{page.name}</Link>
              </li>
              <LinksSub page={page} />
            </div>
          );
        })}
      </ul>
  );
}
