import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { Footer, Hero, NavBarH } from '@/components/common';
import NewWing from '@/assets/images/NewWing.jpg';
import '@/styles/index.css';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <ScrollRestoration />
      {pathname !== '/menu' && (
        <header>
          <Hero />
          <div id='div_new-wing' />
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
