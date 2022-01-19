import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import Texto from '../Texto'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useContext } from 'react';
import './inputtask.css'
const InputTask = () => {
    const [tarea, setTarea] = useState("")
    const [toDos, setToDos] = useState([])
    const handleChange = (e) => {
        setTarea(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarea === "") return;
        setToDos([{ id: uuidv4(), name: tarea }, ...toDos])
        setTarea('');
    }
    const handleDelete=(deletedItem)=>{
        setToDos(toDos.filter(item=>item.id !== deletedItem.id))
    }
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h1" component="div" textAlign={"center"} color={"navy"}>
                        To Do List
                    </Typography>
                    <Stack direction="row" spacing={2} margin={5} textAlign={"center"}>
                        <form onSubmit={handleSubmit}>
                            <TextField id="standard-basic" variant="standard" placeholder='Ingrese una Tarea' value={tarea} onChange={handleChange} />
                        </form>
                        <Button variant='outlined' color="primary" sx={{ p: '4px' }} aria-label="add" onClick={handleSubmit} >Añadir Tarea</Button>
                    </Stack>
                </CardContent>
            </Card>
            <div className='container d-block m-2'>
            {toDos.length > 0 ?
                toDos.map((task) => (
                    <div className='d-flex tareas' key={task.id}>
                        <ListItem>
                            <ListItemText primary={task.name} />
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon onClick={() => handleDelete(task)}/>
                            </IconButton>
                        </ListItem>
                    </div>)) :
                <Texto />
            }
            </div>
        </div>
    );
}
export default InputTask;