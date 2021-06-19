import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import WidgetArea from '../../components/WidgetArea';
import GridField from '../../components/GridField';

import { allWidgets } from '../../constants';
import getGridArray from '../../utils/getGridArray';
import getSourceData from '../../utils/getSourceData';
import getDestinationData from '../../utils/getDestinationData';

import './MainPageStyles.css';

const MainPage = () => {
  const gridArray = getGridArray();

  const [widgetList, setWidgetList] = React.useState(allWidgets);
  const [secondWidgetList, setSecondWidgetList] = React.useState(gridArray);

  const handleOnDragEnd = (result) => {
    const widgetsItems = Array.from(widgetList);
    const secondWidgetsItems = Array.from(secondWidgetList);

    if (!result.destination) return;

    if (result.source.droppableId === 'droppableId' && result.destination.droppableId === 'droppableId') {
      const [reorderedItem] = widgetsItems.splice(result.source.index, 1);
      widgetsItems.splice(result.destination.index, 0, reorderedItem);
      setWidgetList(widgetsItems);
    }

    if (result.source.droppableId === 'droppableId' && result.destination.droppableId !== 'droppableId') {
      if (Number(result.destination.droppableId)) {
        const { destinationRow, destinationColumns } = getDestinationData(result);
        secondWidgetsItems[destinationRow - 1][destinationColumns - 1] = widgetsItems[
          result.source.index
        ].widgetsText;
        setSecondWidgetList(secondWidgetsItems);
        widgetsItems.splice(result.source.index, 1);
        setWidgetList(widgetsItems);
      }
    }

    if (result.source.droppableId !== 'droppableId' && result.destination.droppableId === 'droppableId') {
      const { sourceValue, sourceRow, sourceColumns } = getSourceData(result);
      secondWidgetsItems[sourceRow - 1][sourceColumns - 1] = sourceValue;
      setSecondWidgetList(secondWidgetsItems);
      const element = { id: sourceValue, widgetsText: result.source.droppableId };
      widgetsItems.splice(result.destination.index, 0, element);
      setWidgetList(widgetsItems);
    }

    if (result.source.droppableId !== 'droppableId' && result.destination.droppableId !== 'droppableId') {
      if (Number(result.destination.droppableId)) {
        const { sourceRow, sourceColumns } = getSourceData(result);
        const { destinationRow, destinationColumns } = getDestinationData(result);
        const sourceWidgetText = result.source.droppableId;
        secondWidgetsItems[sourceRow - 1][sourceColumns - 1] = result.destination.droppableId;
        secondWidgetsItems[destinationRow - 1][destinationColumns - 1] = sourceWidgetText;
        setSecondWidgetList(secondWidgetsItems);
      }
    }
  };

  return (
    <div className="main-container">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <WidgetArea droppableId="droppableId" array={widgetList} />
        <GridField gridList={gridArray} anotherList={gridArray} array={secondWidgetList} />
      </DragDropContext>
    </div>
  );
};

export default MainPage;
