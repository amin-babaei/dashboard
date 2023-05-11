import { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'react-uuid';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { IColumn } from './type';
import DeleteIcon from '@mui/icons-material/Delete';
type Event = {
  title:string
  "تمام شده":[]
  "در حال انجام":[]
  "لیست کار ها":[]
}
const Column = ({ tag, currentEvent, events, setEvents }:any) => {
  console.log(events);
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleAdd = () => {
    if (title.length === 0 || description.length === 0) {
      return
    }
    setEvents((prev: { title: string; }[]) => {
      const arrCopy = [...prev];
      if(prev){
        const index = prev.findIndex(
          (event: { title: string; }) => event.title === currentEvent.title
        );
        const eventCopy = arrCopy[index];
        arrCopy.splice(index, 1, {
          ...eventCopy,
          [tag]: [
            { name: title, id: uuid(), details: description },
          ],
        });
        setTitle('')
        setDescription('')
        setOpen(false)
        return arrCopy;
      }
    });
  };

  const handleRemove = (id:string, e:React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setEvents((prev: { title: string; }[]) =>
      prev.map((event: any) => {
        if (event.title === currentEvent.title) {
          const taskList = event[tag];
          const index = event[tag].findIndex((item: { id: string; }) => item.id === id);
          taskList.splice(index, 1);
          return { ...event, [tag]: [...taskList] };
        } else {
          return event;
        }
      })
    );
  };

  return (
    <Grid item xs={12} md={3}>
      <Paper sx={{ p: 4 }}>
        <Typography component='h5'>{tag}</Typography>
        <Button color='warning' variant='contained' onClick={handleOpen} sx={{ mt: 3 }}>
          <AddIcon fontSize='medium' />
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullScreen={fullScreen}
          fullWidth
        >
          <DialogTitle id="alert-dialog-title">
            اضافه کردن کار جدید
          </DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="عنوان"
              fullWidth
              variant="standard"
              value={title || ''}
              onChange={val => setTitle(val.target.value)}
            />
            <TextField
              margin="dense"
              label="توضیحات"
              fullWidth
              variant="standard"
              value={description || ''}
              onChange={val => setDescription(val.target.value)}
            />
          </DialogContent>
          <DialogActions dir='ltr'>
            <Button color='warning' onClick={handleClose}>بستن</Button>
            <Button color='warning' onClick={handleAdd} autoFocus>
              تایید
            </Button>
          </DialogActions>
        </Dialog>
        <Droppable droppableId={tag}>
          {(provided) => {
            return (
              <Box
                component='div'
                minHeight='10px'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {events
                  .find((event: any) => event.title === currentEvent.title)
                  ?.[tag].map((item:{name:string,details:string,id:string}, index:number) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                       <Box component="article"
                       mt={2}
                       border='1px solid #f1f1f1'
                       ref={provided.innerRef}
                       {...provided.draggableProps}
                       {...provided.dragHandleProps}
                     >
                       <Typography component='h4' fontWeight='bold' py={2}>{item.name}</Typography>
                       <Typography component='p' fontSize='13px' color='gray'>{item.details}</Typography>
                       <Button size="small" color='warning' variant='contained' sx={{mt:2,mb:1}} onClick={(e) => handleRemove(item.id, e)}>
                         <DeleteIcon fontSize="small"/>
                       </Button>
                     </Box>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </Box>
            );
          }}
        </Droppable>
      </Paper>
    </Grid>
  );
};

export default Column;