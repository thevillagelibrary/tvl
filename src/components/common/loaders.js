import {
  HOME_URL,
  ORGANIZATION_URL,
  UPCOMINGEVENTS_URL,
  JUSTOFFRENTAL_URL,
  BOOKS_URL,
  CDS_URL,
  YOUTH_URL,
  DONATIONS_URL,
} from '@/constants';

async function getData(url) {
  const res = await fetch(url);
  if (!res.ok) return [];
  return res.json();
}

export async function homeLoader() {
  const data = await getData(HOME_URL);
  return data;
}

export async function organizationLoader() {
  const data = await getData(ORGANIZATION_URL);
  return data;
}

export async function upcomingeventsLoader() {
  const data = await getData(UPCOMINGEVENTS_URL);
  return data;
}

export async function justoffrentalLoader() {
  const data = await getData(JUSTOFFRENTAL_URL);
  return data;
}

export async function booksLoader() {
  const data = await getData(BOOKS_URL);
  return data;
}

export async function cdsLoader() {
  const data = await getData(CDS_URL);
  return data;
}

export async function youthLoader() {
  const data = await getData(YOUTH_URL);
  return data;
}

export async function donationsLoader() {
  const data = await getData(DONATIONS_URL);
  return data;
}
