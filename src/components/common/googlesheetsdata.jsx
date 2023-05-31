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
  const sheet = {
    JustOffRental: {
      sheetNo: 0,
      leftCellWidth: 'narrow',
    },
    Books: {
      sheetNo: 1,
      leftCellWidth: 'narrow',
    },
    BookCDs: {
      sheetNo: 2,
      leftCellWidth: 'narrow',
    },
    YouthSection: {
      sheetNo: 3,
      leftCellWidth: 'narrow',
    },
    RecentDonors: {
      sheetNo: 4,
      leftCellWidth: 'wide',
    },
  };
  const className = `${sheet[name].leftCellWidth}`;
  const updated = values[0][3];
  const combinedAuthorTitle = values[0][2] === 'Not Used';
  function buildCategoryList(category) {
    return category;
  }
  const categoryList = categories.map(buildCategoryList);
  //build the rows and tables
  //first, build the rows
  //start by building the materials array for each category

  function buildMaterials(category, index) {
    const row = category.row;
    const entries = category.entries;
    const lastEntry = row + entries;
    function createMaterial(entry, index) {
      return index > row && index < lastEntry + 1;
    }
    const material = values.filter(createMaterial);
    return material;
  }
  const materials = categoryList.map(buildMaterials);

  function buildRows(material) {
    if (combinedAuthorTitle) {
      function createRow1(material) {
        return (
          <li key={uuidv4()} className='materials'>
            <p>{material[1]}</p>
          </li>
        );
      }
      const row = material.map(createRow1);
      return row;
    } else {
      function createRow2(material, index) {
        return (
          <li key={uuidv4()}>
            <p className='materials'>
              {material[1]}, <span className='title'>{material[2]}</span>
            </p>
          </li>
        );
      }
      const row = material.map(createRow2);
      return row;
    }
  }
  const rows = materials.map(buildRows);

  //then, build the tables
  function buildTable(table, index) {
    return (
      <>
        {categoryList.length > 1 || name === 'YouthSection' ? (
          <p className='category'>{table.category}</p>
        ) : null}
        <ul key={uuidv4()} className='bookslist'>
          <p>{rows[index]}</p>
        </ul>
        <br />
      </>
    );
  }
  const tables = categoryList.map(buildTable);

  return (
    <>
      <p className='updated'>{updated}</p>

      {sheet[name].sheetNo === 1 && (
        <p id='rentalornew'>Rental or New at the Library</p>
      )}
      {sheet[name].sheetNo === 4 && (
        <h3 /* variant={'text-center italic m-y-[.0625rem]'} */>
          We wish to thank those who have donated to the Library recently.
        </h3>
      )}
      {tables}
      {sheet[name].sheetNo === 1 && (
        <>
          <p>
            <strong>KAREN MARTORELLI</strong>
          </p>
          <p>
            <em>Acquisitions Chair</em>
          </p>
        </>
      )}
    </>
  );
}
