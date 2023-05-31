import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Banner, NavBarV } from '@/components/common';
import { MOBILE_VW, pages } from '@/constants';

export function PageBodyNoSideMenu(props) {
  return (
    <section id='pagebodynosidemenu'>
      <article>
        <Banner name={props.name} />
      </article>
      {props.children}
    </section>
  );
}

export function PageBodySideMenu(props) {
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
  const { pathname } = useLocation();
  const currentMainPage = pages
    .filter((obj) => obj.path !== '')
    .find((obj) => pathname.includes(`/${obj.path}`));
  return (
    <>
      <Banner name={props.name} />
      <section id='pagebodysidemenu'>
        {dimensions.width > MOBILE_VW && (
          <aside id='vmenu'>
            {currentMainPage?.subPages && (
              <NavBarV mainPage={currentMainPage} />
            )}
          </aside>
        )}
        <article id='pagebody'>{props.children}</article>
      </section>
    </>
  );
}
