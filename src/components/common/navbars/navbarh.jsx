import { createElement } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome as HomeIcon, FaDonate as SupportersIcon } from 'react-icons/fa';
import { BiNews as NewsEventsIcon } from 'react-icons/bi';
import { HiInformationCircle as AboutUsIcon } from 'react-icons/hi';
import { MdMenu as MenuIcon } from 'react-icons/md';
import { TbBooks as NewArrivalsIcon } from 'react-icons/tb';
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

const phoneSize = 30;
const notPhoneSize = 25;

function NavBarHPhone() {
  const icons = [
    <HomeIcon size={phoneSize} className='icon_mobile-menu' />,
    <AboutUsIcon size={phoneSize} className='icon_mobile-menu' />,
    <NewsEventsIcon size={phoneSize} className='icon_mobile-menu' />,
    <NewArrivalsIcon size={phoneSize} className='icon_mobile-menu' />,
    <SupportersIcon size={phoneSize} className='icon_mobile-menu' />,
  ];

  return (
    <>
      {pages.map((page, index) => {
        const path = `${page.path}`;
        return (
          <li key={uuidv4()}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? 'li_nav_h li_nav_h-active' : 'li_nav_h LinkHInactive'
              }>
              {icons[index]}
            </NavLink>
          </li>
        );
      })}
      <li>
        <NavLink
          to='/menu'
          className={({ isActive }) => (isActive ? 'li_nav_h' : 'li_nav_h')}>
          <MenuIcon size={phoneSize} />
        </NavLink>
      </li>
    </>
  );
}

function NavBarHNotPhone() {
  return (
    <>
      {pages.map((page, index) => {
        const path = `${page.path}`;
        return (
          <li key={uuidv4()}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? 'li_nav_h li_nav_h-active' : 'li_nav_h LinkHInactive'
              }>
              {page.name}
            </NavLink>
          </li>
        );
      })}
      <li id='icon_menu-not-phone'>
        <NavLink to='/menu'>
          <MenuIcon size={notPhoneSize} />
        </NavLink>
      </li>
    </>
  );
}

export default function NavBarH() {
  return (
    <>
      <ul id='ul_nav-h_not-phone' className='ul_nav-h visibility_not-phone'>
        <NavBarHNotPhone />
      </ul>

      <ul id='ul_nav-h_phone' className='ul_nav-h visibility_phone'>
        <NavBarHPhone />
      </ul>
    </>
  );
}
