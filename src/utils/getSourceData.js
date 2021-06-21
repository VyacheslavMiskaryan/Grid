const getSourceData = (value) => {
  const columns = Number(sessionStorage.getItem('columns'));
  const sourceValue = Number(value);
  const sourceRow = Math.ceil(sourceValue / columns);
  const sourceColumns = sourceValue - (sourceRow - 1) * columns;
  return { sourceValue, sourceRow, sourceColumns };
};

export default getSourceData;
