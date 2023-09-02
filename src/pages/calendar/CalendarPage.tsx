import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import faIR from 'date-fns-jalali/locale/fa-IR'
import { getDay, format, parse, startOfWeek, isToday} from 'date-fns-jalali'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Box, useMediaQuery } from "@mui/material"
import { RBCToolbar } from './RBCToolbar'
import { useContext, useState } from 'react'
import { Event } from 'react-big-calendar'
import DialogEvent from './DialogEvent'
import { ThemeContext } from '@/context/ThemeContext'

const locales = {
  'fa-IR': faIR
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const CalendarPage = () => {
  const matches = useMediaQuery('(max-width:500px)');
  const [eventsData, setEventsData] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedStart, setSelectedStart] = useState<Date | null>(null);
  const [selectedEnd, setSelectedEnd] = useState<Date | null>(null);
  const [eventTitle, setEventTitle] = useState<string>('');

  const theme = useContext(ThemeContext)

  const handleSelect = ({ start, end }: { start: Date, end: Date }) => {
    setSelectedStart(start);
    setSelectedEnd(end);
    setSelectedEvent(null);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setSelectedStart(null);
    setSelectedEnd(null);
    setEventTitle('');
  };

  const handleCreateEvent = () => {
    if (eventTitle && selectedStart && selectedEnd) {
      const newEvent: Event = {
        start: selectedStart,
        end: selectedEnd,
        title: eventTitle,
      };

      if (selectedEvent) {
        const updatedEvents = eventsData.map((event) => (event === selectedEvent ? newEvent : event));
        setEventsData(updatedEvents);
        setSelectedEvent(newEvent);
      } else {
        setEventsData([...eventsData, newEvent]);
        setSelectedEvent(newEvent);
      }

      handleCloseModal();
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      const updatedEvents = eventsData.filter((event) => event !== selectedEvent);
      setEventsData(updatedEvents);
      setSelectedEvent(null);
      handleCloseModal();
    }
  };

  return (
    <Box component='section' overflow='auto'>
      <Box component='div' sx={{ width: "100%", display: 'table', tableLayout: "fixed" }}>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '500px', width: matches ? '550px' : '100%' }}
          rtl
          components={{
            toolbar: RBCToolbar
          }}
          eventPropGetter={
            () => {
              let newStyle = {
                backgroundColor: "orange",
                color: 'black',
                borderRadius: "0px",
                border: "none"
              }

              return {
                style: newStyle
              };
            }
          }
          selectable
          showAllEvents
          events={eventsData}
          onSelectEvent={(event: Event | undefined) => {
            if (event) {
              setSelectedEvent(event);
              setEventTitle(String(event.title || ''));
              setSelectedStart(event.start as Date);
              setSelectedEnd(event.end as Date);
            }
          }}
          onSelectSlot={handleSelect}
          dayPropGetter={( date:Date ) => {
            const style = isToday(date) ? { backgroundColor: theme?.mode === 'dark' ? '#4a4a4a' : undefined } : {};
            return {
              style
            };
          }}
        />
      </Box>
      <DialogEvent 
        eventTitle={eventTitle} 
        selectedStart={selectedStart} 
        selectedEnd={selectedEnd} 
        selectedEvent={selectedEvent} 
        setEventTitle={setEventTitle} 
        handleCloseModal={handleCloseModal} 
        handleCreateEvent={handleCreateEvent} 
        handleDeleteEvent={handleDeleteEvent} 
      />
    </Box>
  );
};

export default CalendarPage;