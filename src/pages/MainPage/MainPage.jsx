import React, {
  useState, useCallback, useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

import WidgetArea from '../../components/WidgetArea';
import GridField from '../../components/GridField';

import { allWidgets, gridParameters } from '../../constants';
import createGrid from '../../utils/createGrid';
import getSourceData from '../../utils/getSourceData';
import getDestinationData from '../../utils/getDestinationData';

import MainPageStyles from './MainPageStyles';

const MainPage = () => {
  const classes = MainPageStyles();

  const history = useHistory();

  const gridArray = createGrid(gridParameters.rows, gridParameters.columns);

  const [widgetList, setWidgetList] = useState(allWidgets);
  const [gridWidgetList, setGridWidgetList] = useState(gridArray);

  const handleOnDragEnd = useCallback((result) => {
    if (result?.destination?.droppableId) {
      const widgetsItems = Array.from(widgetList);
      const gridWidgetsItems = Array.from(gridWidgetList);

      const sourceId = result.source.droppableId;
      const destinationId = result.destination.droppableId;

      let sourceCellData = getSourceData(result.draggableId.slice(4));
      let destinationCellData = getDestinationData(result.destination.droppableId);

      if (sourceId === 'droppableId' && destinationId === 'droppableId') {
        const [reorderedItem] = widgetsItems.splice(result.source.index, 1);
        widgetsItems.splice(result.destination.index, 0, reorderedItem);
        setWidgetList(widgetsItems);
      }

      if (sourceId === 'droppableId' && Number(destinationId)) {
        gridWidgetsItems[
          destinationCellData.row - 1
        ][
          destinationCellData.columns - 1
        ] = widgetsItems[
          result.source.index
        ].widgetsText;
        setGridWidgetList(gridWidgetsItems);
        widgetsItems.splice(result.source.index, 1);
        setWidgetList(widgetsItems);
      }

      if (sourceId !== 'droppableId' && destinationId === 'droppableId') {
        gridWidgetsItems[
          sourceCellData.sourceRow - 1
        ][
          sourceCellData.sourceColumns - 1
        ] = sourceCellData.sourceValue;
        setGridWidgetList(gridWidgetsItems);
        const element = {
          id: Date.now(),
          widgetsText: sourceId,
        };
        widgetsItems.splice(result.destination.index, 0, element);
        setWidgetList(widgetsItems);
      }

      if (
        sourceId !== 'droppableId'
        && destinationId !== 'droppableId'
        && sourceId !== destinationId
      ) {
        if (Number(destinationId)) {
          const sourceWidgetText = sourceId;
          gridWidgetsItems[
            sourceCellData.sourceRow - 1
          ][
            sourceCellData.sourceColumns - 1
          ] = sourceCellData.sourceValue;
          gridWidgetsItems[
            destinationCellData.row - 1
          ][
            destinationCellData.columns - 1
          ] = sourceWidgetText;
          setGridWidgetList(gridWidgetsItems);
        } else {
          sourceCellData = getSourceData(result.source.index);
          destinationCellData = getDestinationData(result.destination.index);
          if (sourceCellData.sourceRow !== destinationCellData.row
            || sourceCellData.sourceColumns !== destinationCellData.columns) {
            if (typeof (gridWidgetsItems[
              destinationCellData.row - 1
            ][
              destinationCellData.columns - 1
            ]) !== 'number') {
              gridWidgetsItems[
                sourceCellData.sourceRow - 1
              ][
                sourceCellData.sourceColumns - 1
              ] = destinationId;
              gridWidgetsItems[
                destinationCellData.row - 1
              ][
                destinationCellData.columns - 1
              ] = sourceId;
              setWidgetList(widgetsItems);
            }
          }
        }
      }
    }
  }, [gridWidgetList, widgetList]);

  useEffect(() => {
    if (gridParameters.rows <= 0 || gridParameters.columns <= 0) {
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
