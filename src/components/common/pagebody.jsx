import { useLocation } from 'react-router-dom';
import { BreadCrumbs } from '@/components/common';
import { pages } from '@/constants';

export function PageBodyNoSideMenu(props) {
  return (
    <>
      <section className='pagenosidemenu'>
        {props.children}
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
      <section className='visibility_phone'>
        <BreadCrumbs />
      </section>
      <section className='pagesidemenu'>
        <article className='pagesidemenubody'>{props.children}</article>
      </section>
    </>
  );
}
