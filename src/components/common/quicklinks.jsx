import { Link } from 'react-router-dom';
import { NavBarF } from '@/components/common';
import { pages } from '@/constants';

export default function QuickLinks() {
  let subPages = pages.filter((page) => page.subPages.length > 0);
  const details = [];
  subPages.forEach(createDetails);
  function createDetails(mainPage, index) {
    details.push(<NavBarF mainPage={mainPage} />);
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
    <details id='main'>
      <summary>QuickLinks</summary>
      <ul className='fnav'>
        <li className='nosubpages'>
          <Link to='/' onClick={handleClick}>
            <p>Home</p>
          </Link>
        </li>
        {details}
        <li className='nosubpages'>
          <Link to='/donate' onClick={handleClick}>
            <p>Donate</p>
          </Link>
        </li>
        <li className='nosubpages'>
          <Link to='/contactus' onClick={handleClick}>
            <p>Contact Us</p>
          </Link>
        </li>
      </ul>
    </details>
  );
}
