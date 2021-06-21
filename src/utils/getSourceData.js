import { store } from '../constants';

const getSourceData = (result) => {
  const storeColumns = store.columns;

  const sourceValue = Number(result.draggableId.slice(4));
  const sourceRow = Math.ceil(sourceValue / storeColumns);
  const sourceColumns = sourceValue - (sourceRow - 1) * storeColumns;
  return { sourceValue, sourceRow, sourceColumns };
};

export default getSourceData;
