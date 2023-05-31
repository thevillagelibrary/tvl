import { Link } from 'react-router-dom';

import NewWing from '@/assets/images/NewWing.jpg';

export default function Hero() {
  return (
    <>
      <section id='sec_hero'>
        <div id='div_hero-left' />
        <article id='art_hero'>
          <p id='p-hero_title'> The Village Library </p>
          <p id='p-hero_location'>Skidway Island</p>
        </article>
        <button id='btn_donate'>
          <Link to='/supporters/donate'>Donate</Link>
        </button>
      </section>
      <img id='img_newwing' src={NewWing} alt='Picture of the Library' />
    </>
  );
}
