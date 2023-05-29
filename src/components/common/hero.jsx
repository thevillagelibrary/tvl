import { useLocation } from 'react-router-dom';

import NewWing from '@/images/NewWing.jpg';
import TVL from '@/images/TVL.jpg';

export default function Hero() {
  const { pathname } = useLocation();

  return (
    <section id='hero'>
      <img src={TVL} alt='Picture of the Library' />
      <article>
        <p id='title'>The Village Library</p>
        <p id='location'>Skidway Island</p>
      </article>
      <button>
        <a href='/donate'>Donate</a>
      </button>
    </section>
  );
}
