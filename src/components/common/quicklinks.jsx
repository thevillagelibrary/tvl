import { Link } from 'react-router-dom';
import { NavBarF } from '@/components/common';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export default function QuickLinks() {
  let subPages = pages.filter((page) => page.subPages.length > 0);
  const details = [];
  subPages.forEach(createDetails);
  function createDetails(mainPage, index) {
    details.push(<NavBarF key={uuidv4()} mainPage={mainPage} />);
  }

  function handleClick() {
    event.preventDefault();
    const elements = document.getElementsByTagName('details');
    console.log('😊😊 elements', elements);
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeAttribute('open');
    }
  }

  return (
    <details id='main' className='fnav'>
      <summary>Menu Links</summary>
      <ul>
        <li key={uuidv4()} className='nosubpages'>
          <Link to='/' onClick={handleClick}>
            <p>Home</p>
          </Link>
        </li>
        <li key={uuidv4()} className='nosubpages'>
          <Link to='/newbooks' onClick={handleClick}>
            <p>Books</p>
          </Link>
        </li>
        {details}
      </ul>
    </details>
  );
}
