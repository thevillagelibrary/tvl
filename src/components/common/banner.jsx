import React from 'react';
import { bannerTextNavBarV } from '@/constants';

export default function Banner({ name }) {
  return <h1 id='banner'>~ {bannerTextNavBarV[name].bannerText} ~</h1>;
}
