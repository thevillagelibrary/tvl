import { NavBarM } from '@/components/common';
import { pages } from '@/constants';

export default function Menu() {
  const mainPage = pages[2];
  return <NavBarM mainPage={mainPage} />;
}
