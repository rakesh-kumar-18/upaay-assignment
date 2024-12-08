/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import AddTaskModal from './AddTaskModal';
import AddIcon from '@mui/icons-material/Add';

export default function Column({ title, tasks, droppableProps, innerRef, placeholder, status }) {
    const [open, setOpen] = useState(false);

    return (
        <Box
            sx={{
                width: 300,
                p: 2,
                backgroundColor: '#f0f0f0',
                borderRadius: 1,
                minHeight: '80vh'
            }}
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
                <IconButton size="small" onClick={() => setOpen(true)}>
                    <AddIcon fontSize="small" />
                </IconButton>
            </Stack>
            <Box ref={innerRef} {...droppableProps} sx={{ minHeight: 'calc(100% - 40px)' }}>
                {tasks}
                {placeholder}
            </Box>
            <AddTaskModal open={open} onClose={() => setOpen(false)} status={status} />
        </Box>
    );
}
