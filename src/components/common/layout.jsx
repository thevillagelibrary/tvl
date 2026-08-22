import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { Footer, Hero, NavHPhone} from '@/components/common';
import '@/styles/index.css';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollRestoration />
      <ScrollToTop className='.scroll-to-top' />
      {pathname !== '/menu' && pathname !=='/upcomingevents' && (
        <header>
          <Hero />
          <div id='new-wing' ></div>
          <NavHPhone />
        </header>
      )}
      <main>
        <Outlet />
      </main>
      {pathname !== '/menu' && pathname !=='/upcomingevents' && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
}
