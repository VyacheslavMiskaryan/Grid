import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
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
        <Droppable key={`${rowIndex}-${elem}`} droppableId={String(elem)}>
          {(provided) => (
            <ListItem
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classes.emptyItem}
            >
              {typeof (Array[index]) === 'number' ? (
                <ListItemText primary="" />
              ) : (
                <Draggable draggableId={`grid ${String(gridValuesList[rowIndex][index])}`} index={index}>
                  {/* eslint-disable-next-line no-shadow */}
                  {(provided) => (
                    <ListItemText
                      className={classes.listItem}
                      primary={Array[index]}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
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
  // eslint-disable-next-line react/forbid-prop-types
  array: PropTypes.array.isRequired,
  gridList: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  gridValuesList: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default React.memo(GridField);
