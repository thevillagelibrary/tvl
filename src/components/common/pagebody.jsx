import { useLocation } from 'react-router-dom';
import { Banner, NavBarV } from '@/components/common';
import { pages } from '@/constants';

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
  const { pathname } = useLocation();
  const currentMainPage = pages
    .filter((obj) => obj.path !== '')
    .find((obj) => pathname.includes(`/${obj.path}`));
  return (
    <>
      <Banner name={props.name} />
      <section id='pagebodysidemenu'>
        <aside id='vmenu'>
          {currentMainPage?.subPages && <NavBarV mainPage={currentMainPage} />}
        </aside>
        <article id='pagebody'>{props.children}</article>
      </section>
    </>
  );
}
