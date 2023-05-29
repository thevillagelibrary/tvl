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
const JUSTOFFRENTAL_URL = BASE_URL + SHEET_ID + '/values/Just_Off_Rental' + KEY;
const BOOKS_URL = BASE_URL + SHEET_ID + '/values/Books' + KEY;
const CDS_URL = BASE_URL + SHEET_ID + '/values/CDs' + KEY;
const YOUTH_URL = BASE_URL + SHEET_ID + '/values/Youth' + KEY;

export {
  HOME_URL,
  ORGANIZATION_URL,
  UPCOMINGEVENTS_URL,
  JUSTOFFRENTAL_URL,
  BOOKS_URL,
  CDS_URL,
  YOUTH_URL,
  DONATIONS_URL,
};
export const pages = [
  {
    name: 'Home',
    path: '',
    subPages: [],
  },
  {
    name: 'About Us',
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
    name: 'News & Events',
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
    subPages: [
      {
        name: 'Just Off Rental',
        path: 'justoffrental',
      },
      {
        name: 'Books',
        path: 'books',
      },
      {
        name: 'Book CDs',
        path: 'bookcds',
      },
      {
        name: 'Youth Section',
        path: 'youthsection',
      },
    ],
  },
  {
    name: 'Photo Album',
    path: 'photoalbum',
    subPages: [],
  },
  {
    name: 'Supporters',
    path: 'supporters',
    subPages: [
      {
        name: 'Recent Donors',
        path: 'recentdonors',
      },
      {
        name: 'Landings Landlovers',
        path: 'landingslandlovers',
      },
      {
        name: 'The Landings Association',
        path: 'landingsassociation',
      },
      {
        name: 'The Landings Club',
        path: 'landingsclub',
      },
    ],
  },
  {
    name: 'Donate',
    path: 'donate',
    subPages: [],
  },
  {
    name: 'Contact Us',
    path: 'contactus',
    subPages: [],
  },
];

/*-- used by @/components/common/banner.jsx --*/
export const bannerTextNavBarV = {
  Home: { bannerText: 'Welcome to Our Website' },
  AboutUs: {
    bannerText: 'The Landings Village Library',
    navBarV: 'AboutUs',
  },
  Organization: {
    bannerText: 'Our Organization',
    navBarV: 'AboutUs',
  },
  MissionStatement: {
    bannerText: 'Our Mission Statement',
    navBarV: 'AboutUs',
  },
  Membership: { bannerText: 'Membership', navBarV: 'AboutUs' },
  Collection: {
    bannerText: "Our Library's Collection",
    navBarV: 'AboutUs',
  },
  ChildrensProgram: {
    bannerText: 'The Children are Our Future',
    navBarV: 'AboutUs',
  },
  ArtForSale: { bannerText: 'Art for Sale', navBarV: 'AboutUs' },
  BookDonations: {
    bannerText: 'Book Donations',
    navBarV: 'AboutUs',
  },
  GrabAndGo: { bannerText: 'Grab-&-Go', navBarV: 'AboutUs' },
  NewsEvents: { bannerText: 'Newsletter', navBarV: 'NewsEvents' },
  UpcomingEvents: {
    bannerText: 'Upcoming Events',
    navBarV: 'NewsEvents',
  },
  OutgoingBoardMembers: {
    bannerText: 'Outgoing Board Members',
    navBarV: 'NewsEvents',
  },
  ReadingListsOnTheWeb: {
    bannerText: 'Reading Lists on the Web',
    navBarV: 'NewsEvents',
  },
  NewArrivals: {
    bannerText: 'New Arrivals',
    navBarV: 'NewArrivals',
  },
  JustOffRental: {
    bannerText: 'Just Off Rental',
    navBarV: 'NewArrivals',
  },
  Books: {
    bannerText: 'New Books Last Month',
    navBarV: 'NewArrivals',
  },
  BookCDs: {
    bannerText: 'New CDs Last Month',
    navBarV: 'NewArrivals',
  },
  YouthSection: {
    bannerText: 'Recent New Youth Books',
    navBarV: 'NewArrivals',
  },
  PhotoAlbum: { bannerText: 'Photo Album' },
  Donate: { bannerText: 'How You Can Support the Library' },
  Supporters: {
    bannerText: 'Sponsers & Supporters Page',
    navBarV: 'Supporters',
  },
  RecentDonors: {
    bannerText: 'Recent Donors',
    navBarV: 'Supporters',
  },
  LandingsLandlovers: {
    bannerText: 'Landings Landlovers',
    navBarV: 'Supporters',
  },
  TheLandingsAssociation: {
    bannerText: 'The Landings Association',
    navBarV: 'Supporters',
  },
  TheLandingsClub: {
    bannerText: 'The Landings Club',
    navBarV: 'Supporters',
  },
  ContactUs: { bannerText: 'Contact Us' },
};
