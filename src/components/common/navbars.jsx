import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { pages } from '@/constants';

export function NavBarF({ mainPage }) {
  let path = `/${mainPage.path}`;

  function handleClick() {
    event.preventDefault();
    const elements = document.getElementsByTagName('details');
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeAttribute('open');
    }
  }

  return (
    <details>
      <summary>{mainPage.name}</summary>
      <section className='subdetail'>
        <ul className='fnav'>
          <li>
            <Link
              className='linkF'
              key={uuidv4()}
              to={path}
              onClick={handleClick}>
              {mainPage.name}
            </Link>
          </li>
          {mainPage.subPages.map((subPage) => {
            let path = `/${mainPage.path}/${subPage.path}`;
            return (
              <li className='subpage'>
                <Link
                  className='linkF'
                  key={uuidv4()}
                  to={path}
                  onClick={handleClick}>
                  {subPage.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </details>
  );
}

export function NavBarH() {
  return (
    <>
      {/*  <input type='checkbox' id='hMenuShowHide' />
      <label for='hMenuShowHide'></label>  <ul id='hMenu'>*/}
      <ul id='hNav'>
        {pages.map((page, index) => {
          const path = `${page.path}`;

          return (
            <li>
              <NavLink
                key={uuidv4()}
                to={path}
                className={({ isActive }) =>
                  isActive ? 'linkH linkHActive' : 'linkH LinkHInactive'
                }>
                {page.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function NavBarV({ mainPage }) {
  let path = `/${mainPage.path}`;
  return (
    <nav id='vnav' className='vstack'>
      <NavLink
        key={uuidv4()}
        to={path}
        className={({ isActive }) =>
          isActive ? 'linkV linkVActive' : 'linkV LinkVInactive'
        }
        end>
        {mainPage.name}
      </NavLink>
      <li>
        <hr className='divider-vNav' />
      </li>
      {mainPage.subPages.map((subPage) => {
        let path = `/${mainPage.path}/${subPage.path}`;
        return (
          <NavLink
            key={uuidv4()}
            to={path}
            className={({ isActive }) =>
              isActive ? 'linkV linkVActive' : 'linkV LinkVInactive'
            }>
            {subPage.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
