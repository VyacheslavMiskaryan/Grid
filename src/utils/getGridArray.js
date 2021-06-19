import { COLUMNS, ROWS } from '../constants';

const getGridArray = () => {
  const rows = [];
  const array = [];
  for (let i = 1; i <= COLUMNS * ROWS; i += 1) {
    rows.push(i);
    if (rows.length === COLUMNS) {
      const row = rows.splice(0, COLUMNS);
      array.push(row);
    }
  }
  return array;
};

export default getGridArray;
