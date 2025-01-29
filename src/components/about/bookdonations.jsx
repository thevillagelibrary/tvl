import { PageBodySideMenu } from '@/components/common';

export default function BookDonations() {
  return (
    <PageBodySideMenu name='BookDonations'>
      <ul id='donation-hours'>
        <li>
          Small Donations (individual or one small bag or box): Tues. - Sat., 10
          a.m. to 5 p.m.
        </li>
        <li>Large Donations: Sat., 10 a.m. to 12</li>
        <li>Estate Donations: By appointment (call the Library)</li>
      </ul>
      <p>
        The Village Library accepts donations of current hardback and paperback
        books, and children’s books. Virtually all items
        that you donate to the library will be sold, generating much-needed
        revenue for your library. Therefore, all donated items must be in very
        good condition, not damaged or outdated. Unfortunately, there are items
        we cannot accept such as magazines, reference and textbooks, travel
        guides and cassette tapes. Please see the list below for more specific
        information regarding all donated items.
      </p>
      <p>
        The Village Library is most interested in the following types of
        materials for inclusion in its Book Sale inventory. Our books are
        available for sale during regular hours of operation, Monthly Bag of
        Book Sales, and our annual Fall and Spring Book Sales:
      </p>
      <dl className='book-donations'>
        <dt>Hardbound current fiction and non-fiction books with jackets</dt>
        <dt>Biographies and autobiographies</dt>
        <dt>Children&apos;s books</dt>
        <dt>Trade Paperback books fiction and non-fiction</dt>
        <dt>Mass Market paperbacks</dt>
        <dt>Books of local interest</dt>
        <dt>Cookbooks</dt>
        <dt>Art Books/Coffee Table Books</dt>
      </dl>
      <p>
        The following are books and periodicals that we cannot use or even
        accept as they present a disposal problem:
      </p>
      <dl className='book-donations'>
        <dt>Damaged books, which may include:</dt>
        <dd>
          Missing book jackets, covers, or pages; loose bindings; ripped or
          missing pages; disintegrating pages and covers caused by exposure to
          heat and sun; water-damaged or moldy books
        </dd>
        <dt>Textbooks and Reference books, which include:</dt>
        <dd>
          Encyclopedias, Dictionaries, Bibliographies, Almanacs,
          Directories, Atlases, Handbooks
        </dd>
        <dt>Informational Books:</dt>
        <dd>Technological, Tax, Investment, Medical, Educational, Legal</dd>
        <dt>Condensed or Abridged materials</dt>
        <dt>Magazines of any sort</dt>
        <dt>Travel and Restaurant Guides</dt>
        <dt>Cassette Tapes, VHS tapes, Audio book CDs, and DVDs</dt>
        <dt>Ex-library books</dt>
      </dl>
      <p>
        <b>
          The Village Library acknowledges the great importance of your
          donation.
        </b>
      </p>
      <p>
        <b>Thank you.</b>
      </p>
    </PageBodySideMenu>
  );
}
