import { PageBodySideMenu } from '@/components/common';
import { v4 as uuidv4 } from 'uuid';

export default function GoogleSheetsData({ name, values }) {
  let categories = [];
  getCategories();
  categories.forEach(setEntryCount);

  function getCategories() {
    let categoryList = [];
    let i;
    for (i = 1; i < values.length; i++) {
      let category = values[i][0];
      if (category !== '') {
        let categoryObject = {
          row: i,
          category: values[i][0],
          entries: 0,
        };

        categories.push(categoryObject);
      }
    }
  }

  function setEntryCount(item, index) {
    if (categories.length < 2) {
      categories[0].entries = values.length - 2;
    } else {
      let i;
      for (i = 0; i < categories.length - 1; i++) {
        categories[i].entries = categories[i + 1].row - categories[i].row - 1;
      }
      categories[i].entries = values.length - categories[i].row - 1;
    }
  }

  const updated = values[0][3];
  const combinedAuthorTitle = values[0][2] === 'Not Used';
  function buildCategoryList(category) {
    return category;
  }
  const categoryList = categories.map(buildCategoryList);

  function buildListValues(category, index) {
    const rowNumber = category.row;
    const entries = category.entries;
    const lastEntry = rowNumber + entries;
    function createListValue(entry, index) {
      return index > rowNumber && index < lastEntry + 1;
    }
    const listValue = values.filter(createListValue);
    return listValue;
  }
  const listValues = categoryList.map(buildListValues);

  function buildLis(listValue) {
    if (combinedAuthorTitle) {
      function createLi1(listValue) {
        return (
          <li key={uuidv4()}>
            <p>{listValue[1]}</p>
          </li>
        );
      }
      const li = listValue.map(createLi1);
      return li;
    } else {
      function createLi2(listValue, index) {
        if (name === 'RecentDonors') {
          let imo = '';
          if (listValue[2]) {
            imo = ` (${listValue[2]})`;
          }

          return (
            <li key={uuidv4()}>
              <p>
                {listValue[1]}
                {imo}
              </p>
            </li>
          );
        }

        return (
          <li key={uuidv4()}>
            <p>
              {listValue[1]},{' '}
              <span>
                <i>{listValue[2]}</i>
              </span>
            </p>
          </li>
        );
      }
      const li = listValue.map(createLi2);
      return li;
    }
  }
  const lis = listValues.map(buildLis);

  //then, build the lists
  function buildList(list, index) {
    return (
      <>
        {categoryList.length > 1 || name === 'YouthSection' ? (
          <p className='p_category'>{list.category}</p>
        ) : null}
        <ul key={uuidv4()} className='ul_gsheets-data'>
          {lis[index]}
        </ul>
        <br />
      </>
    );
  }
  const lists = categoryList.map(buildList);

  return (
    <>
      <div className='div_updated'>
        <i>{updated}</i>
      </div>

      {name === 'Books' && (
        <p id='p_rentalornew'>Rental or New at the Library</p>
      )}
      {name === 'RecentDonors' && (
        <h2>Thanks to those who have donated to the Library recently.</h2>
      )}
      {lists}
      {name === 'Books' && (
        <div id='div_books-footer'>
          <b>KAREN MARTORELLI</b>
          <i>Acquisitions Chair</i>
        </div>
      )}
    </>
  );
}
