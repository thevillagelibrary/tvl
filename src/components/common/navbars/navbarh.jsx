import { createElement, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome as HomeIcon, FaDonate as SupportersIcon } from 'react-icons/fa';
import { BiNews as NewsEventsIcon } from 'react-icons/bi';
import { HiInformationCircle as AboutUsIcon } from 'react-icons/hi';
import { MdMenu as MenuIcon } from 'react-icons/md';
import { TbBooks as NewArrivalsIcon } from 'react-icons/tb';
import { MOBILE_VW, pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

const mobileSize = 30;
const computerSize = 25;

function NavBarHMobile() {
  const icons = [
    <HomeIcon size={mobileSize} className='icon_mobile-menu' />,
    <AboutUsIcon size={mobileSize} className='icon_mobile-menu' />,
    <NewsEventsIcon size={mobileSize} className='icon_mobile-menu' />,
    <NewArrivalsIcon size={mobileSize} className='icon_mobile-menu' />,
    <SupportersIcon size={mobileSize} className='icon_mobile-menu' />,
  ];

  return (
    <>
      {pages.map((page, index) => {
        const path = `${page.path}`;
        return (
          <li>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? 'linkH linkHActive' : 'linkH LinkHInactive'
              }>
              {icons[index]}
            </NavLink>
          </li>
        );
      })}
      <li>
        <NavLink
          to='/menu'
          className={({ isActive }) => (isActive ? 'linkH' : 'linkH')}>
          <MenuIcon size={mobileSize} />
        </NavLink>
      </li>
    </>
  );
}

function NavBarHComputer() {
  return (
    <>
      {pages.map((page, index) => {
        const path = `${page.path}`;
        return (
          <li key={uuidv4()}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? 'linkH linkHActive' : 'linkH LinkHInactive'
              }>
              {page.name}
            </NavLink>
          </li>
        );
      })}
      <li>
        <NavLink to='/menu' id='icon_computer-menu'>
          <MenuIcon size={computerSize} />
        </NavLink>
      </li>
    </>
  );
}

export default function NavBarH() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
  });

  if (dimensions.width > MOBILE_VW) {
    return (
      <ul id='ul_nav-h_computer' className='ul_nav-h'>
        <NavBarHComputer />
      </ul>
    );
  }

  return (
    <ul id='ul_nav-h_mobile' className='ul_nav-h'>
      <NavBarHMobile />
    </ul>
  );
}
