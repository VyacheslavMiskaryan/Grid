import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

import WidgetArea from '../../components/WidgetArea';
import GridField from '../../components/GridField';

import { allWidgets, store } from '../../constants';
import getGridArray from '../../utils/getGridArray';
import getSourceData from '../../utils/getSourceData';
import getDestinationData from '../../utils/getDestinationData';

import MainPageStyles from './MainPageStyles';

const MainPage = () => {
  const classes = MainPageStyles();

  const history = useHistory();

  const gridArray = getGridArray();

  const [widgetList, setWidgetList] = useState(allWidgets);
  const [gridWidgetList, setGridWidgetList] = useState(gridArray);

  const handleOnDragEnd = useCallback((result) => {
    const widgetsItems = Array.from(widgetList);
    const gridWidgetsItems = Array.from(gridWidgetList);

    const sourceId = result.source.droppableId;
    const destinationId = result.destination.droppableId;

    const { sourceValue, sourceRow, sourceColumns } = getSourceData(result);
    const { destinationRow, destinationColumns } = getDestinationData(result);

    if (!result.destination) return;

    if (sourceId === 'droppableId' && destinationId === 'droppableId') {
      const [reorderedItem] = widgetsItems.splice(result.source.index, 1);
      widgetsItems.splice(result.destination.index, 0, reorderedItem);
      setWidgetList(widgetsItems);
    }

    if (sourceId === 'droppableId' && Number(destinationId)) {
      gridWidgetsItems[destinationRow - 1][destinationColumns - 1] = widgetsItems[
        result.source.index
      ].widgetsText;
      setGridWidgetList(gridWidgetsItems);
      widgetsItems.splice(result.source.index, 1);
      setWidgetList(widgetsItems);
    }

    if (sourceId !== 'droppableId' && destinationId === 'droppableId') {
      gridWidgetsItems[sourceRow - 1][sourceColumns - 1] = sourceValue;
      setGridWidgetList(gridWidgetsItems);
      const element = {
        id: Date.now(),
        widgetsText: sourceId,
      };
      widgetsItems.splice(result.destination.index, 0, element);
      setWidgetList(widgetsItems);
    }

    if (sourceId !== 'droppableId' && Number(destinationId)) {
      const sourceWidgetText = sourceId;
      gridWidgetsItems[sourceRow - 1][sourceColumns - 1] = sourceValue;
      gridWidgetsItems[destinationRow - 1][destinationColumns - 1] = sourceWidgetText;
      setGridWidgetList(gridWidgetsItems);
    }
  }, [gridWidgetList, widgetList]);

  useEffect(() => {
    if (store.rows <= 0 || store.columns <= 0) {
      history.push('/');
    }
  }, [history]);

  return (
    <div className={classes.mainContainer}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <WidgetArea droppableId="droppableId" array={widgetList} />
        <GridField gridList={gridArray} gridValuesList={gridArray} array={gridWidgetList} />
      </DragDropContext>
    </div>
  );
};

export default MainPage;
