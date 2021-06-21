const getDestinationData = (value) => {
  const gridColumns = Number(sessionStorage.getItem('columns'));
  const cellValue = Number(value);
  const row = Math.ceil(cellValue / gridColumns);
  const columns = value - (row - 1) * gridColumns;
  return { cellValue, row, columns };
};

export default getDestinationData;
