import { createElement, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome as HomeIcon, FaDonate as SupportersIcon } from 'react-icons/fa';
import { BiNews as NewsIcon } from 'react-icons/bi';
import { HiInformationCircle as AboutIcon } from 'react-icons/hi';
import { MdMenu as MenuIcon } from 'react-icons/md';
import { TbBooks as BooksIcon } from 'react-icons/tb';
import { MOBILE_VW, pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

function NavBarHMobile() {
  const size = 30;
  const icons = [
    <HomeIcon size={size} className='icon_hmenu' />,
    <BooksIcon size={size} className='icon_hmenu' />,
    <AboutIcon size={size} className='icon_hmenu' />,
    <NewsIcon size={size} className='icon_hmenu' />,
    <SupportersIcon size={size} className='icon_hmenu' />,
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
          className={({ isActive }) =>
            isActive ? 'linkH linkHActive' : 'linkH LinkHInactive'
          }>
          <MenuIcon size={size} />
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
      <ul id='hNav'>
        <NavBarHComputer />
      </ul>
    );
  }

  return (
    <ul id='hNav'>
      <NavBarHMobile />
    </ul>
  );
}
