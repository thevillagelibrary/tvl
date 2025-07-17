import tgarx from '@/assets/images/TGARX.gif';
import { PageBodySideMenu } from '@/components/common';

export default function LiteraryPrizes() {
  return (
    <PageBodySideMenu name={'LiteraryPrizes'}>
      <section id='prizes'>
        <article>
          <h2>Pulitzer Prizes:</h2>
          <a href='https://www.pulitzer.org/prize-winners-by-category/219'>
            Fiction
          </a>
          <a            
            href='https://www.pulitzer.org/prize-winners-by-category/218'>
            Drama
          </a>
          <a            
            href='https://www.pulitzer.org/prize-winners-by-category/220'>
            History
          </a>
          <a            
            href='https://www.pulitzer.org/prize-winners-by-category/222'>
            Biography
          </a>
          <a            
            href='https://www.pulitzer.org/prize-winners-by-category/650'>
            Memoir or Autobiography
          </a>
          <a            
            href='https://www.pulitzer.org/prize-winners-by-category/224'>
            Poetry
          </a>
          <a            
            href='https://www.pulitzer.org/prize-winners-by-category/223'>
            General Nonfiction
          </a>
          <div className='divider'></div>
          <h2>Booker Prize:</h2>
          <a href='https://thebookerprizes.com/the-booker-library/features/full-list-of-booker-prize-winners-shortlisted-authors-and-their-books'>
            Domestic Fiction
          </a>
          <a href='https://thebookerprizes.com/the-booker-library/features/full-list-of-international-booker-prize-winners-shortlisted-authors-and-their-books'>
            International Fiction
          </a>
          <div className='divider'></div>
          <h2>Theakston Awards:</h2>
          <a href='https://www.harrogatetheakstoncrimeaward.com/'>Old Peculier Crime Novel</a>
        </article>
        <article>
          <h2>National Book Awards:</h2>
          <p>Fiction, Nonfiction, Poetry, Translated Literature, Young People's Literature</p>
          <a href='https://www.nationalbook.org/national-book-awards/years/'>
            Browse By Year
          </a>
          <div className='divider'></div>
          <h2>Edgar Awards:</h2>
          <a href='https://edgarawards.com/all-winners/'>Mysteries</a>
          <div className='divider'></div>
          <h2>Barry Awards:</h2>
          <a href='http://new.deadlypleasures.com/barry-awards/'>Mysteries and Crime Novels</a>
          <div className='divider'></div>
          <h2>Crime Writers Association:</h2>
          <a href='https://thecwa.co.uk/awards-and-competitions/the-daggers/'>Dagger Awards</a>
          <div className='divider'></div>
          <h2>Macavity Awards:</h2>
          <a href='https://mysteryreaders.org/macavity-awards/'>Mysteries</a>
          <div className='divider'></div>
          <h2>Australian Crime Writers Association</h2>
          <a href='https://www.austcrimewriters.com/the-ned-kelly-awards'>The Ned Kelly Awards</a>
          </article>
      </section>
    </PageBodySideMenu>
  );
}
