import { Link } from 'react-router-dom';
import { MdMenu as MenuIcon } from 'react-icons/md';
import { NavHPhoneListItem } from '@/components/common';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export default function NavHPhone() {

  return (
    <nav className='visibility_phone nav_h'>
      <ul>
        {pages.map((page, index) => 
        <NavHPhoneListItem page={page} index={index} />)}
        <li key={uuidv4()}>
          <Link
            to='/menu'>
            <MenuIcon size={30} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
