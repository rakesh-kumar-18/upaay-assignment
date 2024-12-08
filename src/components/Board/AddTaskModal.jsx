/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';

export default function AddTaskModal({ open, onClose, status }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        if (title.trim()) {
            dispatch(addTask({ title, description, status }));
            setTitle('');
            setDescription('');
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Task</DialogTitle>
            <DialogContent>
                <Typography variant="subtitle2" mb={1}>Title</Typography>
                <TextField fullWidth value={title} onChange={(e) => setTitle(e.target.value)} size="small" />
                <Typography variant="subtitle2" mb={1} mt={2}>Description</Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    size="small"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}
