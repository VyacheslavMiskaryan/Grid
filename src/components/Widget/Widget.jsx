import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import {
  ListItem, ListItemText,
} from '@material-ui/core';

const Widget = (widgetsText, id, index) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <ListItem
        draggable
        button
        innerRef={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <ListItemText primary={widgetsText} />
      </ListItem>
    )}
  </Draggable>
);

Widget.propTypes = {
  widgetsText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default React.memo(Widget);
