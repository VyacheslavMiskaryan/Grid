import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
  List, ListItem, ListItemText,
} from '@material-ui/core';

import { allWidgets } from '../../constants';

import WidgetAreaStyles from './WidgetAreaStyles';

const WidgetArea = () => {
  const classes = WidgetAreaStyles();

  const [widgetList, setWidgetList] = React.useState(allWidgets);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(widgetList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setWidgetList(items);
  };

  return (
    <div className={classes.root}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="widgetList">
          {(provided) => (
            <List className="widgetList" {...provided.droppableProps} ref={provided.innerRef}>
              {widgetList.map(({ id, widgetsText }, index) => (
                <Draggable key={id} draggableId={String(id)} index={index}>
                  {/* eslint-disable-next-line no-shadow */}
                  {(provided) => (
                    <ListItem
                      button
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ListItemText primary={widgetsText} />
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default WidgetArea;
