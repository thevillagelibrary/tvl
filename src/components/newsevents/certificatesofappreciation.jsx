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
import SandyAndKaren from '@/assets/images/SandyAndKaren.jpg';
import NicoleAndSandy from '@/assets/images/NicoleAndSandy.jpg'

export default function CertificatesOfAppreciation() {
  return (
    <PageBodySideMenu name={'OutgoingBoardMembers'}>
      <figure id='firstOutgoing'>
        <figcaption>
          Village Library President, Nicole Tifverman, presents a certificate of
          appreciation to Sandy Cooper, who leaves the Board after
          six years of service, including four years as President.
        </figcaption>
        <img className='picture' src={NicoleAndSandy} alt='Nicole and Sandy' />
      </figure>
      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Karen Martorelli for serving twenty years as a library volunteer.
        </figcaption>
        <img className='picture' src={SandyAndKaren} alt='Sandy and Karen' />
      </figure>
      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Ren&eacute;e Collins, who leaves the Board after
          serving as Vice President, Operations.
        </figcaption>
        <img className='picture' src={SandyAndRenee} alt='Sandy and Renee' />
      </figure>
      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Jayne Hoover, who leaves the Board after serving as
          Secretary.
        </figcaption>
        <img className='picture' src={SandyAndJane} alt='Sandy and Jane' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Kathy Berlin, who leaves the board after serving as
          CD/DVD manager.
        </figcaption>
        <img className='picture' src={SandyAndKathy} alt='Sandy and Kathy' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation and gift card to Phil Van Ess in recognition of his years
          of service as Facilities Manager.
        </figcaption>
        <img className='picture' src={SandyAndPhil} alt='Sandy and Phil' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Sally Arman, who leaves the Board after serving for seven
          years as Volunteer Coordinator.
        </figcaption>
        <img className='picture' src={SandyAndSally} alt='Sandy and Sally' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sandy Cooper, presents a certificate of
          appreciation to Joy Howard, who leaves the Board after serving six years
          as Treasurer
        </figcaption>
        <img className='picture' src={SandyAndJoy} alt='Sandy and Joy' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Ken Goode, presents a certificate of
          appreciation to outgoing President, Sue Storer, for her three years as
          President and two years as Vice President, Operations.
        </figcaption>
        <img className='picture' src={KenAndSue} alt='Ken and Sue' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Janet Murphy for her six years
          as Children&apos;s Section Manager.
        </figcaption>
        <img className='picture' src={SueAndJanet} alt='Sue and Janet' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Phil Van Ess for his six years
          as Facilities Manager.
        </figcaption>
        <img className='picture' src={SueAndPhil} alt='Sue and Phil' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Ann Yingling, who was in charge
          of new volunteer training.
        </figcaption>
        <img className='picture' src={SueAndAnn} alt='Sue and Ann' />
      </figure>

      <figure>
        <figcaption>
          Village Library President, Sue Storer, presents a certificate of
          appreciation to outgoing board member Allison Smith, who was Publicity
          Chair.
        </figcaption>
        <img className='picture' src={SueAndAllison} alt='Sue and Allison' />
      </figure>
    </PageBodySideMenu>
  );
}
