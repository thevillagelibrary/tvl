import { Link } from 'react-router-dom';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

export default function NavBarF({ mainPage }) {
  let path = `/${mainPage.path}`;

  function handleClick() {
    event.preventDefault();
    const elements = document.getElementsByTagName('details');
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeAttribute('open');
    }
  }

  return (
    <details className='fnav subdetail'>
      <summary>{mainPage.name}</summary>
      <ul>
        <li className='mainsubpage' key={uuidv4()}>
          <Link className='linkF' to={path} onClick={handleClick}>
            {mainPage.name}
          </Link>
        </li>
        {mainPage.subPages.map((subPage) => {
          let path = `/${mainPage.path}/${subPage.path}`;
          return (
            <li key={uuidv4()} className='subpage'>
              <Link className='linkF' to={path} onClick={handleClick}>
                {subPage.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
