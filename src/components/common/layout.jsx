import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { Footer, Hero, NavBarH } from '@/components/common';
import '@/styles/index.css';
//import { pages } from '@/constants';

export default function Layout() {
  function clearLocalStorage() {
    localStorage.clear();
  }

  return (
    <>
      <ScrollToTop />
      <ScrollRestoration />
      <header>
        <Hero />
        <NavBarH />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
