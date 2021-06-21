const createGrid = () => {
  const rows = Number(sessionStorage.getItem('rows'));
  const columns = Number(sessionStorage.getItem('columns'));
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
