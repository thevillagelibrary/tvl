import { useLocation } from 'react-router-dom';
import { BreadCrumbs, NavBarV } from '@/components/common';
import { pages } from '@/constants';

export function PageBodyNoSideMenu(props) {
  return (
    <>
      <section id='sec_page-body-no-side-menu'>
        <article className='art_page-body'>{props.children}</article>
      </section>
    </>
  );
}

export function PageBodySideMenu(props) {
  const vw = window.innerWidth;
  const { pathname } = useLocation();
  const currentMainPage = pages
    .filter((obj) => obj.path !== '')
    .find((obj) => pathname.includes(`/${obj.path}`));
  return (
    <>
      <section id='sec_page-body-side-menu'>
        <article className='visibility_phone'>
          <BreadCrumbs />
        </article>
        <article className='visibility_not-phone'>
          {currentMainPage?.subPages && <NavBarV mainPage={currentMainPage} />}
        </article>
        <article className='art_page-body'>{props.children}</article>
      </section>
    </>
  );
}
