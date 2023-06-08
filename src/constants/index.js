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
const BOARD_URL = BASE_URL + SHEET_ID + '/values/Organization' + KEY;
const DONATIONS_URL = BASE_URL + SHEET_ID + '/values/Donations' + KEY;
const NEW_ARRIVALS_URL =
  BASE_URL +
  SHEET_ID +
  '/values:batchGet?ranges=Just_Off_Rental&ranges=Books&ranges=Youth' +
  BATCH_KEY;

export {
  HOME_URL,
  BOARD_URL,
  UPCOMINGEVENTS_URL,
  NEW_ARRIVALS_URL,
  DONATIONS_URL,
};
export const pages = [
  {
    name: 'Home',
    path: '',
    subPages: [],
  },
  {
    name: 'About',
    path: 'aboutus',
    subPages: [
      {
        name: 'Board',
        path: 'board',
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
    name: 'New Arrivals',
    path: 'newarrivals',
    subPages: [],
  },
  {
    name: 'Donate',
    path: 'donate',
    subPages: [
      {
        name: 'Recent Donors',
        path: 'recentdonors',
      },
      {
        name: 'Supporters',
        path: 'supporters',
      },
    ],
  },
];
