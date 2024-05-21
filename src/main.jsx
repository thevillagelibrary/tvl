import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import {
  Home,
  About,
  ArtForSale,
  BookDonations,
  ChildrensProgram,
  Collection,
  Membership,
  Board,
  MissionStatement,
  GrabAndGo,
  NewsEvents,
  UpcomingEvents,
  CertificatesOfAppreciation,
  LiteraryPrizes,
  ReadingListsOnTheWeb,
  NewArrivals,
  Donate,
  Supporters,
  RecentDonors,
  homeLoader,
  boardLoader,
  upcomingeventsLoader,
  newarrivalsLoader,
  donationsLoader,
} from '@/components';
import { Layout, Loading, MenuPhone } from '@/components/common';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        loader: homeLoader,
        Component: Home,
      },
      {
        Component: MenuPhone,
        path: '/menu',
      },
      {
        loader: upcomingeventsLoader,
        Component: UpcomingEvents,
        path: '/upcomingevents',
      },
      {
        loader: newarrivalsLoader,
        Component: NewArrivals,
        path: '/newarrivals',
      },
      {
        Component: About,
        path: '/about',
      },
      {
        loader: boardLoader,
        Component: Board,
        path: '/about/board',
      },
      {
        Component: MissionStatement,
        path: '/about/missionstatement',
      },
      {
        Component: Membership,
        path: '/about/membership',
      },
      {
        Component: Collection,
        path: '/about/collection',
      },
      {
        Component: ChildrensProgram,
        path: '/about/childrensprogram',
      },
      {
        Component: ArtForSale,
        path: '/about/artforsale',
      },
      {
        Component: BookDonations,
        path: '/about/bookdonations',
      },
      {
        Component: GrabAndGo,
        path: '/about/grabandgo',
      },
      {
        Component: NewsEvents,
        path: '/newsevents',
      },
      {
        Component: CertificatesOfAppreciation,
        path: '/newsevents/certificatesofappreciation',
      },
      {
        Component: ReadingListsOnTheWeb,
        path: '/newsevents/readinglistsontheweb',
      },
      {
        Component: LiteraryPrizes,
        path: '/newsevents/literaryprizes',
      },
      {
        Component: Donate,
        path: '/donate',
      },
      {
        Component: Supporters,
        path: '/donate/supporters',
      },
      {
        loader: donationsLoader,
        Component: RecentDonors,
        path: '/donate/recentdonors',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackComponent:Loading />
  </React.StrictMode>
);
