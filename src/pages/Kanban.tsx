import TaskBox from '@/components/kanban/TaskBox';
import { Box } from '@mui/material';
import { useMemo, useState, useCallback, useEffect } from 'react';

function Kanban() {
  const initEvent = useMemo(() => [
    {
      title: 'Add a new Event',
      ['لیست کار ها']: [],
      ['در حال انجام']: [],
      ['تمام شده']: [],
    },
  ], []);

  const [events, setEvents] = useState(() => {
    return localStorage.getItem('events')
      ? JSON.parse(localStorage.getItem('events')||'')
      : initEvent;
  });

  const [currentEvent] = useState(events[0]);

  const updateEvents = useCallback(async () => {
    try {
      if (!events.length) {
        localStorage.setItem('events', JSON.stringify(initEvent));
        setEvents(JSON.parse(localStorage.getItem('events')||''));
      } else {
        localStorage.setItem('events', JSON.stringify(events));
      }
    } catch (e) {
      console.error('Failed to modify events!');
    }
  }, [events]);

  useEffect(() => {
    updateEvents();
  }, [events]);

  return (
    <Box component="div">
      <TaskBox
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent} 
        tag={''}
        />
    </Box>
  );
}

export default Kanban;