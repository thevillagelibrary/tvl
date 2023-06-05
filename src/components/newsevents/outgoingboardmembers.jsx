import { PageBodySideMenu } from '@/components/common';
import SandyAndRenee from '@/assets/images/SandyAndRenee.jpg';
import SandyAndJane from '@/assets/images/SandyAndJane.jpg';
import SandyAndKathy from '@/assets/images/SandyAndKathy.jpg';
import SandyAndPhil from '@/assets/images/SandyAndPhil.jpg';
import SandyAndSally from '@/assets/images/SandyAndSally.jpg';
import SandyAndJoy from '@/assets/images/SandyAndJoy.jpg';
import KenAndSue from '@/assets/images/KenAndSue.jpg';
import SueAndPhil from '@/assets/images/SueAndPhil.jpg';
import SueAndAllison from '@/assets/images/SueAndAllison.jpg';
import SueAndJanet from '@/assets/images/SueAndJanet.jpg';
import SueAndAnn from '@/assets/images/SueAndAnn.jpg';

export default function OutgoingBoardMembers() {
  return (
    <PageBodySideMenu name={'OutgoingBoardMembers'}>
      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Ren&eacute;e Collins, who leaves the Board after
          serving as Vice President, Operations.
        </figcaption>
        <img className='img_poster' src={SandyAndRenee} alt='Sandy and Renee' />
      </figure>
      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Jayne Hoover, who leaves the Board after serving as
          Secretary.
        </figcaption>
        <img className='img_poster' src={SandyAndJane} alt='Sandy and Jane' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Kathy Berlin, who leaves the board after serving as
          CD/DVD manager.
        </figcaption>
        <img className='img_poster' src={SandyAndKathy} alt='Sandy and Kathy' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation and gift card to Phil Van Ess in recognition of his years
          of service as Facilities Manager.
        </figcaption>
        <img className='img_poster' src={SandyAndPhil} alt='Sandy and Phil' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Sally Arman, who leaves the Board after serving for 7
          years as Volunteer Coordinator.
        </figcaption>
        <img className='img_poster' src={SandyAndSally} alt='Sandy and Sally' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Joy Howard, who leaves the Board after serving 6 years
          as Treasurer
        </figcaption>
        <img className='img_poster' src={SandyAndJoy} alt='Sandy and Joy' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Ken Goode, presents a certificate of
          appreciation to outgoing President, Sue Storer, for her three years as
          President and two years as Vice President, Operations.
        </figcaption>
        <img className='img_poster' src={KenAndSue} alt='Ken and Sue' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Janet Murphy for her six years
          as Children&apos;s Section Manager.
        </figcaption>
        <img className='img_poster' src={SueAndJanet} alt='Sue and Janet' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Phil Van Ess for his six years
          as Facilities Manager.
        </figcaption>
        <img className='img_poster' src={SueAndPhil} alt='Sue and Phil' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Ann Yingling, who was in charge
          of new volunteer training.
        </figcaption>
        <img className='img_poster' src={SueAndAnn} alt='Sue and Ann' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Allison Smith, who was Publicity
          Chair.
        </figcaption>
        <img className='img_poster' src={SueAndAllison} alt='Sue and Allison' />
      </figure>
    </PageBodySideMenu>
  );
}
