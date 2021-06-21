import { gridParameters } from '../constants';

const getSourceData = (value) => {
  const storeColumns = gridParameters.columns;
  const sourceValue = Number(value);
  const sourceRow = Math.ceil(sourceValue / storeColumns);
  const sourceColumns = sourceValue - (sourceRow - 1) * storeColumns;
  return { sourceValue, sourceRow, sourceColumns };
};

export default getSourceData;
