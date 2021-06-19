import { COLUMNS } from '../constants';

const getSourceData = (result) => {
  const sourceValue = Number(result.draggableId.slice(4));
  const sourceRow = Math.ceil(sourceValue / COLUMNS);
  const sourceColumns = sourceValue - (sourceRow - 1) * COLUMNS;
  return { sourceValue, sourceRow, sourceColumns };
};

export default getSourceData;
