import { NavLink } from 'react-router-dom';
import { FaHome as HomeIcon, FaDonate as SupportersIcon } from 'react-icons/fa';
import { BiNews as NewsEventsIcon } from 'react-icons/bi';
import { HiInformationCircle as AboutIcon } from 'react-icons/hi';
import { TbBooks as NewArrivalsIcon } from 'react-icons/tb';
import { v4 as uuidv4 } from 'uuid';

export default function NavHPhoneListItem ({page, index}) {
  const icons = [
    <HomeIcon size={30} />,
    <AboutIcon size={30} />,
    <NewsEventsIcon size={30} />,
    <NewArrivalsIcon size={30} />,
    <SupportersIcon size={30} />,
  ];

  
  const path = `/${page.path}`;

  if (page.subPages.length === 0) {
    return (
    <li key={uuidv4()}>
      <NavLink key={uuidv4()}
        to={path}
        className={({ isActive }) =>
          isActive ? 'active' : 'inactive'
        }>
        {icons[index]}{page.name}
      </NavLink>
    </li>

  )}

  return (
		<li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? 'active' : 'inactive'
        }>
        {icons[index]}{page.name}
      </NavLink>
			<ul className='dropdown'>
        <li>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? 'activesub' : 'inactivesub'
            }>
            {page.name}
          </NavLink>
        </li>
          {page.subPages.map((subPage) => {
            const path = `/${page.path}/${subPage.path}`;

            return (          
              <li key={uuidv4()}>
                <NavLink
                  to={path} 
                  className={({ isActive }) =>
                    isActive ? 'activesub' : 'inactivesub'
                  }>
                  {subPage.name}
                </NavLink>
              </li>
            );
          })} 
			</ul>
    </li>
  )
}
    
 