import { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'react-uuid';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import Task from './Task';
import AddIcon from '@mui/icons-material/Add';
import { IColumn } from './type';

const Column = ({ tag, currentEvent, events, setEvents }:IColumn) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
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
    setEvents((prev) => {
      const arrCopy = [...prev];
      const index = prev.findIndex(
        (event: { title: string; }) => event.title === currentEvent.title
      );
      const eventCopy = arrCopy[index];
      arrCopy.splice(index, 1, {
        ...eventCopy,
        [tag]: [
          ...eventCopy[tag],
          { name: title, id: uuid(), details: description },
        ],
      });
      setTitle('')
      setDescription('')
      setOpen(false)
      return arrCopy;
    });
  };

  const handleRemove = (id:string, e:React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setEvents((prev) =>
      prev.map((event: { title: string; }) => {
        if (event.title === currentEvent.title) {
          const taskList = event[tag];
          const index = taskList.findIndex((item: { id: string; }) => item.id === id);
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
                  .find((event) => event.title === currentEvent.title)
                  ?.[tag].map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Task
                          name={item.name}
                          details={item.details}
                          id={item.id}
                          provided={provided}
                          snapshot={snapshot}
                          handleRemove={handleRemove}
                        />
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