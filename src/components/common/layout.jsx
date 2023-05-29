import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer, Hero, NavBarH } from '@/components/common';
import '@/styles/index.css';
//import { pages } from '@/constants';

export default function Layout() {
  function clearLocalStorage() {
    localStorage.clear();
  }

  return (
    <>
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
