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
  NewArrivals,
  JustOffRental,
  Books,
  BookCDs,
  YouthSection,
  PhotoAlbum,
  Donate,
  Supporters,
  RecentDonors,
  LandingsLandlovers,
  LandingsAssociation,
  LandingsClub,
  ContactUs,
  homeLoader,
  organizationLoader,
  upcomingeventsLoader,
  justoffrentalLoader,
  booksLoader,
  cdsLoader,
  youthLoader,
  donationsLoader,
} from '@/components';
import { Layout, Loading } from '@/components/common';

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
        Component: NewArrivals,
        path: '/newarrivals',
      },
      {
        loader: justoffrentalLoader,
        Component: JustOffRental,
        path: '/newarrivals/justoffrental',
      },
      {
        loader: booksLoader,
        Component: Books,
        path: '/newarrivals/books',
      },
      {
        loader: cdsLoader,
        Component: BookCDs,
        path: '/newarrivals/bookcds',
      },
      {
        loader: youthLoader,
        Component: YouthSection,
        path: '/newarrivals/youthsection',
      },
      {
        Component: PhotoAlbum,
        path: '/photoalbum',
      },
      {
        Component: Donate,
        path: '/donate',
      },
      {
        Component: Supporters,
        path: '/supporters',
      },
      {
        loader: donationsLoader,
        Component: RecentDonors,
        path: '/supporters/recentdonors',
      },
      {
        Component: LandingsLandlovers,
        path: '/supporters/landingslandlovers',
      },
      {
        Component: LandingsAssociation,
        path: '/supporters/landingsassociation',
      },
      {
        Component: LandingsClub,
        path: '/supporters/landingsclub',
      },
      {
        Component: ContactUs,
        path: '/contactus',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackComponent:Loading />,
  </React.StrictMode>
);
