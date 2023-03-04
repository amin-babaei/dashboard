import { useCallback } from 'react';
import Column from './Column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Grid } from '@mui/material';
import { IColumn } from './type';

interface IDropResult{
  source:DropResult['source']
  destination:DropResult['destination']
}
const TaskBox = ({ events, setEvents, currentEvent }:IColumn) => {
 
  const handleDragEnd = useCallback((result:IDropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const curEvent = events.find((item: { title: string }) => item.title === currentEvent.title);
    const taskCopy = curEvent[source.droppableId][source.index];
    setEvents((prev) =>
    prev.map((event: { [x: string]: any; title: string; }) => {
        if (event.title === currentEvent.title) {
          let eventCopy = { ...event };

          const taskListSource = event[source.droppableId];
          taskListSource.splice(source.index, 1);
          eventCopy = { ...event, [source.droppableId]: taskListSource };
 
          const taskListDes = event[destination.droppableId];
          taskListDes.splice(destination.index, 0, taskCopy);
          eventCopy = { ...event, [destination.droppableId]: taskListDes };
          return eventCopy;
        } else {
          return event;
        }
      })
    );
  }, [events, setEvents, currentEvent]);

  return (
      <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
        <Grid container gap={3} justifyContent='space-between' textAlign='center'>
          {
            ['لیست کار ها', 'در حال انجام', 'تمام شده'].map(tag => (
              <Column
                key={tag}
                tag={tag}
                events={events}
                setEvents={setEvents}
                currentEvent={currentEvent}
              />
            ))
          }
        </Grid>
      </DragDropContext>
  );
};

export default TaskBox;