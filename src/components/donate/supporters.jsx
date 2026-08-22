import { PageBodySideMenu } from "@/components/common";
import SandyAccepting from "@/assets/images/SandyAcceptingLLGrant.jpg";
import LLGrant2025 from "@/assets/images/LLGrant2025.jpg";
export default function Supporters() {
  return (
    <PageBodySideMenu name={"Supporters"}>
      <p>
        We wish to thank all the organizations, businesses, and dedicated
        volunteers who have made our library possible.
      </p>
      <p>
        A special thanks goes to David L. Litten, who was a major donor to the
        new wing in memory of his late wife, Ann Resch Litten, and who continues
        to suport the library generously in her memory.
      </p>
      <p>
        A special thanks also goes to Landings Landlovers, which has been a
        regular and generous supporter of the library for many years.
      </p>
      <p>The 2024 Landlovers grant provided upgrades to the front desk computer
        systems and water saving sensors to the library’s sprinkler system.
      </p>
      <figure>
        <figcaption>
          Pictured from left to right:<br/>
          Roni Meikle, Landlovers President 2024 –
          2025<br/>
          Sandy Cooper, Village Library Board President
        </figcaption>
        <img
          className="picture"
          src={SandyAccepting}
          alt="Village Library President, Sandy Cooper, accepting LandLovers Grant"
        />
      </figure>
        <p>
          The 2025 Landlovers grant funded beautiful improvements to the Litten
          Wing hallway, portable signage to promote upcoming events and donation
          opportunities, as well as a microphone and speaker system to improve
          the quality of our Between the Lines author series.
          </p>
      <figure>
        <figcaption>
          Pictured from left to right:
          <br />
          Terri Epsy, Landlovers President 2025 - 2026
          <br />
          Nicole Tifverman, Village Library Board President
          <br />
          Roni Meikle, Landlovers President 2024 – 2025
        </figcaption>
        <img
          className="picture"
          src={LLGrant2025}
          alt="2025 LandLovers Grant"
        />
      </figure>
      <p>Below are links to the websites of some of these contributors:</p>
      {/* <section id='sec_supporter-links'>*/}
      <a href="https://www.landingslandlovers.com">Landings Landlovers</a>
      <br />
      <a href="https://www.landings.org">The Landings Association</a>
      <br />
      <a href="https://thelandings.com/golf-and-athletic-club">
        The Landings Golf and Athletic Club
      </a>
      <br />
      <br />
      {/*</section> */}
    </PageBodySideMenu>
  );
}
