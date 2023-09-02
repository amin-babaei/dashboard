import { FC } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material"
import { Event } from "react-big-calendar";

interface Props {
    selectedStart: Date | null
    selectedEnd: Date | null
    selectedEvent: Event | null;
    eventTitle: string;
    handleCloseModal: () => void;
    handleCreateEvent: () => void;
    handleDeleteEvent: () => void;
    setEventTitle: (title: string) => void;
}

const DialogEvent: FC<Props> = ({ selectedStart, selectedEnd, selectedEvent, eventTitle, handleCloseModal, handleCreateEvent, handleDeleteEvent, setEventTitle }) => {
    return (
        <Dialog fullWidth maxWidth="sm" open={Boolean(selectedStart && selectedEnd || selectedEvent)} onClose={handleCloseModal}>
            <DialogTitle>{selectedEvent ? 'ویرایش رویداد' : 'رویداد جدید'}</DialogTitle>
            <DialogContent>
                <TextField
                    label="عنوان رویداد"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    fullWidth
                    variant='filled'
                />
                <Typography mt={2}>{selectedEvent && eventTitle}</Typography>
            </DialogContent>
            <DialogActions sx={{ direction: 'rtl', gap: 2 }}>
                {selectedEvent && <Button variant='contained' color='error' onClick={handleDeleteEvent}>حذف رویداد</Button>}
                <Button variant='outlined' onClick={handleCreateEvent}>{selectedEvent ? 'ویرایش رویداد' : 'ساخت رویداد'}</Button>
                <Button variant='outlined' onClick={handleCloseModal}>لغو</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogEvent