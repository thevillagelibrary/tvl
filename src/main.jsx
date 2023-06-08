import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import {
  Home,
  AboutUs,
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
  OutgoingBoardMembers,
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
import { Layout, Loading, Menu } from '@/components/common';

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
        Component: Menu,
        path: '/menu',
      },
      {
        loader: newarrivalsLoader,
        Component: NewArrivals,
        path: '/newarrivals',
      },
      {
        Component: AboutUs,
        path: '/aboutus',
      },
      {
        loader: boardLoader,
        Component: Board,
        path: '/aboutus/board',
      },
      {
        Component: MissionStatement,
        path: '/aboutus/missionstatement',
      },
      {
        Component: Membership,
        path: '/aboutus/membership',
      },
      {
        Component: Collection,
        path: '/aboutus/collection',
      },
      {
        Component: ChildrensProgram,
        path: '/aboutus/childrensprogram',
      },
      {
        Component: ArtForSale,
        path: '/aboutus/artforsale',
      },
      {
        Component: BookDonations,
        path: '/aboutus/bookdonations',
      },
      {
        Component: GrabAndGo,
        path: '/aboutus/grabandgo',
      },
      {
        Component: NewsEvents,
        path: '/newsevents',
      },
      {
        loader: upcomingeventsLoader,
        Component: UpcomingEvents,
        path: '/newsevents/upcomingevents',
      },
      {
        Component: OutgoingBoardMembers,
        path: '/newsevents/outgoingboardmembers',
      },
      {
        Component: ReadingListsOnTheWeb,
        path: '/newsevents/readinglistsontheweb',
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
