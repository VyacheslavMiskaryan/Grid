import React from 'react';

import Paper from '@material-ui/core/Paper';

import IndividualCellStyles from './IndividualCellStyles';

const IndividualCell = () => {
  const classes = IndividualCellStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" />
    </div>
  );
};

export default IndividualCell;
