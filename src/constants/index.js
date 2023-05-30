const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/';
const KEY = '?key=' + API_KEY;
const BATCH_KEY = '&key=' + API_KEY;
const HOME_URL =
  BASE_URL +
  SHEET_ID +
  '/values:batchGet?ranges=Hours&ranges=Upcoming_Events' +
  BATCH_KEY;
const UPCOMINGEVENTS_URL =
  BASE_URL + SHEET_ID + '/values/Upcoming_Events' + KEY;
const ORGANIZATION_URL = BASE_URL + SHEET_ID + '/values/Organization' + KEY;
const DONATIONS_URL = BASE_URL + SHEET_ID + '/values/Donations' + KEY;
const NEW_BOOKS_URL =
  BASE_URL +
  SHEET_ID +
  '/values:batchGet?ranges=Just_Off_Rental&ranges=Books&ranges=Youth' +
  BATCH_KEY;

export {
  HOME_URL,
  ORGANIZATION_URL,
  UPCOMINGEVENTS_URL,
  NEW_BOOKS_URL,
  DONATIONS_URL,
};
export const pages = [
  {
    name: 'Home',
    path: '',
    subPages: [],
  },
  {
    name: 'New Books',
    path: 'newbooks',
    subPages: [],
  },
  {
    name: 'About',
    path: 'aboutus',
    subPages: [
      {
        name: 'Organization',
        path: 'organization',
      },
      {
        name: 'Mission Statement',
        path: 'missionstatement',
      },
      {
        name: 'Membership',
        path: 'membership',
      },
      {
        name: 'Collection',
        path: 'collection',
      },
      {
        name: "Children's Program",
        path: 'childrensprogram',
      },
      {
        name: 'Art for Sale',
        path: 'artforsale',
      },
      {
        name: 'Book Donations',
        path: 'bookdonations',
      },
      {
        name: 'Grab-&-Go',
        path: 'grabandgo',
      },
    ],
  },
  {
    name: 'News',
    path: 'newsevents',
    subPages: [
      {
        name: 'Upcoming Events',
        path: 'upcomingevents',
      },
      {
        name: 'Outgoing Board Members',
        path: 'outgoingboardmembers',
      },
      {
        name: 'Reading Lists on the Web',
        path: 'readinglistsontheweb',
      },
    ],
  },
  {
    name: 'Supporters',
    path: 'supporters',
    subPages: [
      {
        name: 'Donate',
        path: 'donate',
      },
      {
        name: 'Recent Donors',
        path: 'recentdonors',
      },
    ],
  },
];

/*-- used by @/components/common/banner.jsx --*/
export const bannerTextNavBarV = {
  Home: { bannerText: 'Welcome to Our Website' },
  AboutUs: {
    bannerText: 'The Landings Village Library',
  },
  Organization: {
    bannerText: 'Our Organization',
  },
  MissionStatement: {
    bannerText: 'Our Mission Statement',
  },
  Membership: { bannerText: 'Membership' },
  Collection: {
    bannerText: "Our Library's Collection",
  },
  ChildrensProgram: {
    bannerText: 'The Children are Our Future',
  },
  ArtForSale: { bannerText: 'Art for Sale' },
  BookDonations: {
    bannerText: 'Book Donations',
  },
  GrabAndGo: { bannerText: 'Grab-&-Go' },
  NewsEvents: { bannerText: 'Newsletter' },
  UpcomingEvents: {
    bannerText: 'Upcoming Events',
  },
  OutgoingBoardMembers: {
    bannerText: 'Outgoing Board Members',
  },
  ReadingListsOnTheWeb: {
    bannerText: 'Reading Lists on the Web',
  },
  NewBooks: {
    bannerText: 'New Books',
  },
  Donate: {
    bannerText: 'How You Can Support the Library',
  },
  Supporters: {
    bannerText: 'Sponsers & Supporters Page',
  },
  RecentDonors: {
    bannerText: 'Recent Donors',
  },
};
