import { NavHPhoneListItem } from '@/components/common';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export default function NavHPhone() {

  return (
    <nav id='nav_h'>
      <ul key={uuidv4()}>
        {pages.map((page, index) => 
        <NavHPhoneListItem key={uuidv4()} page={page} index={index} />)}
      </ul>
    </nav>
  );
}
