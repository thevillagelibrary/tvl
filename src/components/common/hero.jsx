import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id='sec_hero'>
      <article />
      <article>
        <h1>The Village Library</h1>
        <div>Skidway Island</div>
      </article>
      <article>
        <button>
          <Link to='/supporters/donate'>Donate</Link>
        </button>
      </article>
    </section>
  );
}
