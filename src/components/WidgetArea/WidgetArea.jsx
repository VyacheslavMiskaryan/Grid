import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import {
  List, ListItem, ListItemText, Divider,
} from '@material-ui/core';

import WidgetAreaStyles from './WidgetAreaStyles';

const WidgetArea = ({ array, droppableId }) => {
  const classes = WidgetAreaStyles();

  return (
    <div className={classes.root}>
      <Droppable droppableId={droppableId}>
        {(providedDrop) => (
          <List className="widgetList" {...providedDrop.droppableProps} ref={providedDrop.innerRef}>
            {array.map(({ id, widgetsText }, index) => (
              <Draggable key={`widget-${id}`} draggableId={String(id)} index={index}>
                {(providedDrag) => (
                  <>
                    <ListItem
                      button
                      ref={providedDrag.innerRef}
                      {...providedDrag.draggableProps}
                      {...providedDrag.dragHandleProps}
                    >
                      <ListItemText primary={widgetsText} />
                    </ListItem>
                    <Divider />
                  </>
                )}
              </Draggable>
            ))}
            {providedDrop.placeholder}
          </List>
        )}
      </Droppable>
    </div>
  );
};

WidgetArea.propTypes = {
  array: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    widgetsText: PropTypes.string.isRequired,
  })).isRequired,
  droppableId: PropTypes.string.isRequired,
};

export default React.memo(WidgetArea);
