import { PageBodySideMenu } from '@/components/common';
import SandyAndRenee from '@/images/SandyAndRenee.jpg';
import SandyAndJane from '@/images/SandyAndJane.jpg';
import SandyAndKathy from '@/images/SandyAndKathy.jpg';
import SandyAndPhil from '@/images/SandyAndPhil.jpg';
import SandyAndSally from '@/images/SandyAndSally.jpg';
import SandyAndJoy from '@/images/SandyAndJoy.jpg';
import KenAndSue from '@/images/KenAndSue.jpg';
import SueAndPhil from '@/images/SueAndPhil.jpg';
import SueAndAllison from '@/images/SueAndAllison.jpg';
import SueAndJanet from '@/images/SueAndJanet.jpg';
import SueAndAnn from '@/images/SueAndAnn.jpg';

export default function OutgoingBoardMembers() {
  return (
    <PageBodySideMenu name={'OutgoingBoardMembers'}>
      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Ren&eacute;e Collins, who leaves the Board after
          serving as Vice President, Operations.
        </figcaption>
        <img className='poster' src={SandyAndRenee} alt='Sandy and Renee' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Jayne Hoover, who leaves the Board after serving as
          Secretary.
        </figcaption>
        <img className='poster' src={SandyAndJane} alt='Sandy and Jane' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Kathy Berlin, who leaves the board after serving as
          CD/DVD manager.
        </figcaption>
        <img className='poster' src={SandyAndKathy} alt='Sandy and Kathy' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation and gift card to Phil Van Ess in recognition of his years
          of service as Facilities Manager.
        </figcaption>
        <img className='poster' src={SandyAndPhil} alt='Sandy and Phil' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Sally Arman, who leaves the Board after serving for 7
          years as Volunteer Coordinator.
        </figcaption>
        <img className='poster' src={SandyAndSally} alt='Sandy and Sally' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Joy Howard, who leaves the Board after serving 6 years
          as Treasurer
        </figcaption>
        <img className='poster' src={SandyAndJoy} alt='Sandy and Joy' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Ken Goode, presents a certificate of
          appreciation to outgoing President, Sue Storer, for her three years as
          President and two years as Vice President, Operations.
        </figcaption>
        <img className='poster' src={KenAndSue} alt='Ken and Sue' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Janet Murphy for her six years
          as Children&apos;s Section Manager.
        </figcaption>
        <img className='poster' src={SueAndJanet} alt='Sue and Janet' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Phil Van Ess for his six years
          as Facilities Manager.
        </figcaption>
        <img className='poster' src={SueAndPhil} alt='Sue and Phil' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Ann Yingling, who was in charge
          of new volunteer training.
        </figcaption>
        <img className='poster' src={SueAndAnn} alt='Sue and Ann' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Allison Smith, who was Publicity
          Chair.
        </figcaption>
        <img className='poster' src={SueAndAllison} alt='Sue and Allison' />
      </figure>
    </PageBodySideMenu>
  );
}
