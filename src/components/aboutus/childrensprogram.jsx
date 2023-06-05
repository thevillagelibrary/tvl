import { PageBodySideMenu } from '@/components/common';
import ChildrenReading from '@/assets/images/ChildrenReading.jpg';
import _2018Childrens01 from '@/assets/images/2018Childrens01.jpg';
import _2018Childrens02 from '@/assets/images/2018Childrens02.jpg';
import _2018Childrens03 from '@/assets/images/2018Childrens03.jpg';
import _2018Childrens04 from '@/assets/images/2018Childrens04.jpg';
import _2018Childrens05 from '@/assets/images/2018Childrens05.jpg';
import _2019Childrens1 from '@/assets/images/2019Childrens1.jpg';
import _2019Childrens2 from '@/assets/images/2019Childrens2.jpg';
import BeeAReader1 from '@/assets/images/BeeAReader1.jpg';
import BeeAReader2 from '@/assets/images/BeeAReader2.jpg';
import NotSoScaryHalloween from '@/assets/images/NotSoScaryHalloween.jpg';
import PhyllisAndChildren from '@/assets/images/PhyllisAndChildren.jpg';
import PhyllisLimbacherTildes from '@/assets/images/PhyllisLimbacherTildes.jpg';

export default function ChildrensProgram() {
  return (
    <PageBodySideMenu name={'ChildrensProgram'}>
      <img
        className='img_poster'
        alt='Children Reading'
        src={ChildrenReading}
      />
      <p>
        Whether you are young in age or young at heart, you might want to check
        out the children&#8217;s room at The Village Library. The room is
        bright, colorful, and arranged with children in mind. There are a few
        steps or sitting rows in front of a beautiful window. Two sets of tables
        and chairs provide a place to sit and read or to work on a project
        during the Story Hour at 10:30 on Tuesday mornings. There are some
        stuffed toys for cuddling and even a small rocking chair to relax.
      </p>
      <p>
        If you are looking for a book&#8230;keep color in mind as the materials
        are arranged by color for specific age groups. The spines of all the
        fiction books have a bright colorful dot. As you enter the
        children&#8217;s room, the RED dots on the books to the right are for
        pre-school and up. These books are great for tiny tots to beginning
        readers. You might also want to look at these red-dotted books for their
        beautiful art work. Award winners are labeled at the top of the spine
        with a &#8220;Caldecott Award&#8221; sticker. Continuing toward the back
        of the room, you will find a few shelves with GREEN dots. These books
        are especially set aside for those children who are just beginning to
        read. The vocabulary is controlled, the print is large, and the stories
        are fun. Look at the green-dotted books to get kids going on reading.
      </p>
      <p>
        The BLUE books are for elementary school age&#8230;approximately grades
        2 through 5. Many favorite authors are here from Cleary and Keene to
        Parks and Wilder, there are stories old and new. Middle school books are
        labeled in YELLOW. Look for Newbery Award winners, both in the yellow
        and blue, to find that special book. Then there are the favorites&#8230;
        Harry Potter, Lemony Snickett, and anything by O&#8217;Dell or Tolkien.
      </p>
      <p>
        To complete the collection, be sure to look at the non-fiction books.
        These books do not have color dots on them, but are shelved according to
        the Dewey Decimal System, just as they are in the regular section in the
        library. Have you looked at books in the 398.2&#8217;s? These are fairy
        tales and will surely delight most any age. Don&#8217;t forget the
        800&#8217;s for poetry and the 560&#8217;s for dinosaurs!
      </p>
      <p>
        Now that you have had a quick tour of our children&#8217;s room
        &#8220;on paper&#8221;, stroll on into the room on your next visit to
        The Village Library. You maybe surprised at what you find!
      </p>
      <figcaption>
        Ocean Creatures--2019 Children&apos;s Summer Reading Program.
      </figcaption>
      <img
        alt="2019 Children's Summer Program 1"
        src={_2019Childrens1}
        className='img_poster'
      />
      <br />
      <img
        alt="2019 Children's Summer Program 2"
        src={_2019Childrens2}
        className='img_poster'
      />
      <br />
      <figcaption>Not-So-Scary Halloween 2018.</figcaption>
      <img
        alt='Not-So-Scary Halloween Story Time'
        src={NotSoScaryHalloween}
        className='img_poster'
      />
      <br />
      <figcaption>
        Turtle Time Tuesdays--2018 Children&apos;s Summer Reading Program.
      </figcaption>
      <img
        alt="2018 Children's Summer Program 1"
        src={_2018Childrens01}
        className='img_poster'
      />
      <br />
      <img
        alt="2018 Children's Summer Program 2"
        src={_2018Childrens02}
        className='img_poster'
      />
      <br />
      <img
        alt="2018 Children's Summer Program 3"
        src={_2018Childrens03}
        className='img_poster'
      />
      <br />
      <img
        alt="2018 Children's Summer Program 4"
        src={_2018Childrens04}
        className='img_poster'
      />
      <br />
      <img
        alt="2018 Children's Summer Program 5"
        src={_2018Childrens05}
        className='img_poster'
      />
      <br />
      <figcaption>
        Bee A Reader--2017 Children&apos;s Summer Reading Program.
      </figcaption>
      <img alt='BeeAReader 1' src={BeeAReader1} className='img_poster' />
      <br />
      <img alt='BeeAReader 2' src={BeeAReader2} className='img_poster' />
      <br />
      <figcaption>
        Phyllis Tildes donates two of her beautiful paintings to the
        Children&apos;s Room. December 2016.
      </figcaption>
      <img
        alt='Phyllis Tildes'
        src={PhyllisLimbacherTildes}
        className='img_poster'
      />
      <br />
      <img
        alt='Phyllis and children'
        src={PhyllisAndChildren}
        className='img_poster'
      />
    </PageBodySideMenu>
  );
}
