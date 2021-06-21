import { gridParameters } from '../constants';

const createGrid = () => {
  const { rows, columns } = gridParameters;
  console.log('step!!!');
  const gridRows = [];
  const gridArray = [];
  for (let i = 1; i <= columns * rows; i += 1) {
    gridRows.push(i);
    if (gridRows.length === columns) {
      const row = gridRows.splice(0, columns);
      gridArray.push(row);
    }
  }
  return gridArray;
};

export default createGrid;
