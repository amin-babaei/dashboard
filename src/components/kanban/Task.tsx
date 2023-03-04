import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
type ITask = {
  name:string
  details:string
  id:string
  handleRemove:(id:string,e:React.MouseEvent<HTMLElement>)=>void
}
const Task = ({ name, details, id, provided, handleRemove }:ITask) => {
    return (
      <Box component="article"
        mt={2}
        border='1px solid #f1f1f1'
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Typography component='h4' fontWeight='bold' py={2}>{name}</Typography>
        <Typography component='p' fontSize='13px' color='gray'>{details}</Typography>
        <Button size="small" color='warning' variant='contained' sx={{mt:2,mb:1}} onClick={(e) => handleRemove(id, e)}>
          <DeleteIcon fontSize="small"/>
        </Button>
      </Box>
    );
  };
  
  export default Task;