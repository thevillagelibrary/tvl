import { PageBodySideMenu } from '@/components/common';

export default function Donate() {
  return (
    <PageBodySideMenu name={'Donate'}>
      <article>
        <p>
          Unlike tax supported public libraries, we receive no funds from
          Federal, State, or local governments. Our funding comes from
          membership fees, donations, book rentals, the sale of used books and
          engraved bricks. Because we are a Section 501 (c) (3) organization,
          all donations are tax-deductible.
        </p>
        <h2>Make a Tax-deductible Donation</h2>
        <small>
          Click below to donate through PayPal, even if you do not have a PayPal
          account:
        </small>
        <br />
        <form
          id='form_paypal'
          action='https://www.form_paypal.com/cgi-bin/webscr'
          method='post'
          target='_top'>
          <input type='hidden' name='cmd' value='_s-xclick' />
          <input type='hidden' name='hosted_button_id' value='ECABE5X7996XU' />
          <input
            type='image'
            src='https://www.form_paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
            border='0'
            name='submit'
            alt='PayPal - The safer, easier way to pay online!'
          />
          <img
            alt=''
            border='0'
            src='https://www.form_paypalobjects.com/en_US/i/scr/pixel.gif'
            width='1'
            height='1'
          />
        </form>
        <br />
        <hr className='hr_sub-divider' />
        <br />
        <small>
          Or, write a check to &quot;The Village Library&quot; and deposit it in
          the book drop at the library or mail it to:
        </small>
        <br />
        <address>
          Village Library, Inc.
          <br />
          1 Skidaway Village Square
          <br />
          Savannah, GA 31411
        </address>
      </article>
      <hr />
      <br />
      <article id='art_buyabrick'>
        <h2>Buy a Brick Program</h2>
        <p>
          The Buy a Brick Program is a means of raising funds to support the
          library. The bricks border the entry to the library. In addition to
          supporting the library by having bricks engraved with their own names,
          our donors have had bricks engraved with the names of their
          grandchildren, to commemorate the passing of a loved one or to honor a
          friend.
        </p>
        <p>
          Brick donations are $200 each. All contributions are tax-deductible as
          the library is a not-for-profit organization. Brick donor forms are
          available at the library front desk. Checks should be made payable to
          The Village Library.
        </p>
      </article>
    </PageBodySideMenu>
  );
}
