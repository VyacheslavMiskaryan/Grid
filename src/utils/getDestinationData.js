import { gridParameters } from '../constants';

const getDestinationData = (value) => {
  const storeColumns = gridParameters.columns;
  const cellValue = Number(value);
  const row = Math.ceil(cellValue / storeColumns);
  const columns = value - (row - 1) * storeColumns;
  return { cellValue, row, columns };
};

export default getDestinationData;
