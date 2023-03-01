import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import faIR from 'date-fns-jalali/locale/fa-IR'
import getDay from 'date-fns-jalali/getDay'
import format from 'date-fns-jalali/format'
import parse from 'date-fns-jalali/parse'
import startOfWeek from 'date-fns-jalali/startOfWeek'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Box,Table, useMediaQuery } from "@mui/material";
import { RBCToolbar } from './RBCToolbar'

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
  return (
    <Box overflow='auto'>
      <Box sx={{ width: "100%", display: 'table', tableLayout: "fixed" }}>
        <Table>
          <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{height:'500px',width : matches ? '550px' : '100%'}}
          rtl
          components={{
            toolbar: RBCToolbar
          }}
          />
          </Table>
      </Box>
    </Box>
  );
};

export default CalendarPage;
