import { Link } from 'react-router-dom';

import NewWing from '@/assets/images/NewWing.jpg';

export default function Hero() {
  return (
    <>
      <section id='sec_hero'>
        <article id='art_hero-left' />
        <article id='art_hero-center'>
          <p id='p-hero_title'> The Village Library </p>
          <p id='p-hero_location'>Skidway Island</p>
        </article>
        <article id='art_hero-right'>
          <button id='btn_donate'>
            <Link to='/supporters/donate'>Donate</Link>
          </button>
        </article>
      </section>
      <img id='img_newwing' src={NewWing} alt='Picture of the Library' />
    </>
  );
}
