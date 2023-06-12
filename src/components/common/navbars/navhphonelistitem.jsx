import { NavLink } from 'react-router-dom';
import { FaHome as HomeIcon, FaDonate as SupportersIcon } from 'react-icons/fa';
import { BiNews as NewsEventsIcon } from 'react-icons/bi';
import { HiInformationCircle as AboutUsIcon } from 'react-icons/hi';
import { TbBooks as NewArrivalsIcon } from 'react-icons/tb';
import { v4 as uuidv4 } from 'uuid';

export default function NavHPhoneListItem ({page, index}) {
  const icons = [
    <HomeIcon size={30} className='icon_mobile-menu' />,
    <AboutUsIcon size={30} className='icon_mobile-menu' />,
    <NewsEventsIcon size={30} className='icon_mobile-menu' />,
    <NewArrivalsIcon size={30} className='icon_mobile-menu' />,
    <SupportersIcon size={30} className='icon_mobile-menu' />,
  ];

  
  const path = `/${page.path}`;

  if (page.subPages.length === 0) {
    return (
    <li key={uuidv4()}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? 'active' : 'inactive'
        }>
        {icons[index]}
      </NavLink>
    </li>

  )}

  return (
    <>
		<li key={uuidv4()}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? 'active' : 'inactive'
        }>
        {icons[index]}
      </NavLink>
			<ul>
        <li key={uuidv4()}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? 'li_nav_h_phone li_nav_h_phone-active' : 'li_nav_h_phone li_nav_h_phone-inactive'
            }>
            {page.name}
          </NavLink>
        </li>
          {page.subPages.map((subPage) => {
            const path = `/${page.path}/${subPage.path}`;
            console.log("😊😊 path", path)

            return (          
              <li key={uuidv4()}>
                <NavLink
                  to={path} 
                  className={({ isActive }) =>
                    isActive ? 'li_nav_h li_nav_h-active' : 'li_nav_h '
                  }>
                  {subPage.name}
                </NavLink>
              </li>
            );
          })} 
			</ul>
    </li>
    </>
  )
}
    
 