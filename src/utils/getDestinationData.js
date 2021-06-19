import { COLUMNS } from '../constants';

const getDestinationData = (result) => {
  const destinationValue = Number(result.destination.droppableId);
  const destinationRow = Math.ceil(destinationValue / COLUMNS);
  const destinationColumns = destinationValue - (destinationRow - 1) * COLUMNS;
  return { destinationValue, destinationRow, destinationColumns };
};

export default getDestinationData;
