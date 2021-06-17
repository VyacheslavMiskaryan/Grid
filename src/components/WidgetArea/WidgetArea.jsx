import React from 'react';

import {
  List, ListItem, ListItemText, Divider,
} from '@material-ui/core';

import { allWidgets } from '../../constants';

import WidgetAreaStyles from './WidgetAreaStyles';

const WidgetArea = () => {
  const classes = WidgetAreaStyles();

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List>
        {allWidgets.map((widget) => (
          <>
            <ListItem
              key={widget.id}
              button
              selected={selectedIndex === widget.id}
              onMouseDown={(event) => handleListItemClick(event, widget.id)}
              onMouseUp={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText primary={widget.widgetsText} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
};

export default WidgetArea;
