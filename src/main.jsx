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
  Organization,
  MissionStatement,
  GrabAndGo,
  NewsEvents,
  UpcomingEvents,
  OutgoingBoardMembers,
  ReadingListsOnTheWeb,
  NewBooks,
  Donate,
  Supporters,
  RecentDonors,
  homeLoader,
  organizationLoader,
  upcomingeventsLoader,
  newbooksLoader,
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
        loader: newbooksLoader,
        Component: NewBooks,
        path: '/books',
      },
      {
        Component: AboutUs,
        path: '/aboutus',
      },
      {
        loader: organizationLoader,
        Component: Organization,
        path: '/aboutus/organization',
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
        Component: Supporters,
        path: '/supporters',
      },
      {
        Component: Donate,
        path: '/supporters/donate',
      },
      {
        loader: donationsLoader,
        Component: RecentDonors,
        path: '/supporters/recentdonors',
      },
    ],
  },
  {
    Component: Menu,
    path: '/menu',
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackComponent:Loading />,
  </React.StrictMode>
);
