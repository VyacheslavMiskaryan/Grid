import React from 'react';

import { COLUMNS, ROWS } from '../../constants';
import IndividualCell from '../IndividualCell';

import './GridArea.css';

const GridArea = () => {
  const row = [];
  for (let i = 1; i <= COLUMNS; i += 1) {
    row.push(i);
  }
  const array = [];
  for (let i = 1; i <= ROWS; i += 1) {
    array.push(row);
  }

  return (
    <div className="grid-container">
      {(array.map((rowArray) => (
        <div className="row">
          {rowArray.map((elem) => (
            <IndividualCell key={elem} />
          ))}
        </div>
      )))}
    </div>
  );
};

export default GridArea;
