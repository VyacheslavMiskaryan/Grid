import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import {
  List, ListItem, ListItemText,
} from '@material-ui/core';

import FiledStyles from './GridFiledStyles';

const GridField = ({ gridList, gridValuesList, array }) => {
  const classes = FiledStyles();

  const cellRenderer = useCallback((Array, rowIndex) => (
    <List key={`${rowIndex}`} className={classes.rowsField}>
      {Array.map((elem, index) => (
        <Droppable key={uuid()} droppableId={String(elem)}>
          {(providedDrop) => (
            <ListItem
              {...providedDrop.droppableProps}
              ref={providedDrop.innerRef}
              className={classes.emptyItem}
            >
              {typeof (Array[index]) === 'number' ? (
                <ListItemText primary="" />
              ) : (
                <Draggable draggableId={`grid ${String(gridValuesList[rowIndex][index])}`} index={gridValuesList[rowIndex][index]}>
                  {(providedDrag) => (
                    <ListItemText
                      className={classes.listItem}
                      primary={Array[index]}
                      ref={providedDrag.innerRef}
                      {...providedDrag.draggableProps}
                      {...providedDrag.dragHandleProps}
                    />
                  )}
                </Draggable>
              )}
            </ListItem>
          )}
        </Droppable>
      ))}
    </List>
  ), [classes.emptyItem, classes.listItem, classes.rowsField, gridValuesList]);

  return (
    <div className={classes.field}>
      {gridList.map((row, index) => (
        cellRenderer(array[index], index)
      ))}
    </div>
  );
};

GridField.propTypes = {
  array: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any.isRequired)).isRequired,
  gridList: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  gridValuesList: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default React.memo(GridField);
