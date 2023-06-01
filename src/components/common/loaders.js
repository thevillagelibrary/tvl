import {
  HOME_URL,
  ORGANIZATION_URL,
  UPCOMINGEVENTS_URL,
  NEW_ARRIVALS_URL,
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

export async function newarrivalsLoader() {
  const data = await getData(NEW_ARRIVALS_URL);
  return data;
}

export async function donationsLoader() {
  const data = await getData(DONATIONS_URL);
  return data;
}
