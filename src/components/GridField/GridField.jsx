import React from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import {
  List, ListItem, ListItemText,
} from '@material-ui/core';

import FiledStyles from './GridFiledStyles';

const GridField = ({ gridList, anotherList, array }) => {
  const classes = FiledStyles();
  const func = (Array, rowIndex) => Array.map((elem, index) => (
    <Droppable droppableId={String(elem)} key={`${rowIndex}-${elem}`}>
      {(provided) => (
        <ListItem
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={classes.emptyItem}
        >
          {Number(Array[index]) ? (
            <ListItemText primary="" />
          ) : (
            <Draggable draggableId={`grid ${String(anotherList[rowIndex][index])}`} index={index}>
              {/* eslint-disable-next-line no-shadow */}
              {(provided) => (
                <ListItemText
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
  ));

  return (
    <List className={classes.field}>
      {gridList.map((row, index) => (
        func(array[index], index)
      ))}
    </List>
  );
};

GridField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  array: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  gridList: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  anotherList: PropTypes.array.isRequired,
};

export default GridField;
