import { MdMenu as MenuIcon } from 'react-icons/md';

export default function Hero() {
  return (
    <section id='hero'>
      <article><a href='/menu'><MenuIcon /></a></article>
      <article>
        <h1>The Village Library</h1>
        <div>Skidaway Island</div>
        <p>(912) 598-1183</p>
      </article>
      <article>
        <button>
          <a href='/donate'>Donate</a>
        </button>
      </article>
    </section>
  );
}
