import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Button, IconButton } from '@mui/material';

export const RBCToolbar = (props: any) => {

  const goToCurrent = () => {
    const now = new Date();
    props.date.setMonth(now.getMonth());
    props.date.setYear(now.getFullYear());
    props.onNavigate('current');
  };

  const goToBack = () => {
    let view = props.view;
    let mDate = props.date;
    let newDate;
    if (view === "month") {
      newDate = new Date(mDate.getFullYear(), mDate.getMonth() - 1, 1);
    }
    props.onNavigate("prev", newDate);
  };

  const goToNext = () => {
    let view = props.view;
    let mDate = props.date;
    let newDate;
    if (view === "month") {
      newDate = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 1);
    }
    props.onNavigate("next", newDate);
  };

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Box display='flex' alignItems="center">
        <IconButton sx={{ mr: '20px', mb: 1 }} id="prev-btn-icon" onClick={goToBack}>
          <ChevronRightIcon />
        </IconButton>
        {props.label}
        <IconButton sx={{ ml: '20px', mb: 1 }} id="next-btn-icon" onClick={goToNext}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Button variant="outlined" color='info' sx={{ ml: '20px', mb: 1 }} id="next-btn-icon" onClick={goToCurrent}>
        امروز
      </Button>
    </Box>
  );
}