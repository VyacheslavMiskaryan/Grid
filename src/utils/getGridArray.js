import { store } from '../constants';

const getGridArray = () => {
  const storeRows = store.rows;
  const storeColumns = store.columns;

  const rows = [];
  const array = [];
  for (let i = 1; i <= storeColumns * storeRows; i += 1) {
    rows.push(i);
    if (rows.length === storeColumns) {
      const row = rows.splice(0, storeColumns);
      array.push(row);
    }
  }
  return array;
};

export default getGridArray;
