import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { Footer, Hero, NavBarH } from '@/components/common';
import '@/styles/index.css';
//import { pages } from '@/constants';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <ScrollRestoration />
      {pathname !== '/menu' && (
        <header>
          <Hero />
          <NavBarH />
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
    </>
  );
}
