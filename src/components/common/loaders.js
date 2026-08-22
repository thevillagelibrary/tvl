import {
  HOME_URL,
  BOARD_URL,
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

export async function boardLoader() {
  const data = await getData(BOARD_URL);
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
