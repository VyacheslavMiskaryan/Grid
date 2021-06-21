import { store } from '../constants';

const getDestinationData = (result) => {
  const storeColumns = store.columns;

  const destinationValue = Number(result.destination.droppableId);
  const destinationRow = Math.ceil(destinationValue / storeColumns);
  const destinationColumns = destinationValue - (destinationRow - 1) * storeColumns;
  return { destinationValue, destinationRow, destinationColumns };
};

export default getDestinationData;
