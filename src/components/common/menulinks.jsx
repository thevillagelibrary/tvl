import { Link } from 'react-router-dom';
import { NavBarM } from '@/components/common';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export default function MenuLinks() {
  let subPages = pages.filter((page) => page.subPages.length > 0);
  const details = [];
  subPages.forEach(createDetails);
  function createDetails(mainPage, index) {
    details.push(<NavBarM key={uuidv4()} mainPage={mainPage} />);
  }

  return (
    <ul id='menu'>
      <li key={uuidv4()} className='menunosubpages'>
        <Link to='/'>
          <p>Home</p>
        </Link>
      </li>
      <li key={uuidv4()} className='menunosubpages'>
        <Link to='/newbooks'>
          <p>Books</p>
        </Link>
      </li>
      {details}
    </ul>
  );
}
