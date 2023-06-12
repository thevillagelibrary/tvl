import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { Footer, Hero, NavHNotPhone, NavHPhone, MenuNotPhone } from '@/components/common';
import '@/styles/index.css';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollRestoration />
      <ScrollToTop className='.scroll-to-top' />
      {pathname !== '/menu' && (
        <header>
          <Hero />
          <div id='new-wing' />
          <NavHPhone />
          <NavHNotPhone />
        </header>
      )}
      <main>
        <Outlet />
      </main>
      {pathname !== '/menu' && (
        <footer>
          <Footer />
        </footer>
      )}
      <MenuNotPhone />
    </>
  );
}
