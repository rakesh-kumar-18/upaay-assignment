/* eslint-disable react/prop-types */
import { Box, Typography, Chip, Stack, AvatarGroup, Avatar } from '@mui/material';

export default function TaskCard({ task, provided, innerRef }) {
    const priorityColor = {
        low: 'info',
        high: 'error',
        medium: 'warning'
    }[task.priority] || 'default';

    return (
        <Box
            ref={innerRef}
            {...provided?.draggableProps}
            {...provided?.dragHandleProps}
            sx={{
                backgroundColor: '#fff',
                borderRadius: 1,
                p: 2,
                mb: 2,
                boxShadow: 1
            }}
        >
            <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography variant="subtitle1" fontWeight="bold">{task.title}</Typography>
                <Chip label={task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} color={priorityColor} size="small" />
            </Stack>
            <Typography variant="body2" color="gray.600" mb={1}>
                {task.description}
            </Typography>
            <Stack direction="row" justifyContent="space-between" fontSize="0.8rem" color="gray.500">
                <Typography variant="caption">{task.commentsCount} comments</Typography>
                <Typography variant="caption">{task.filesCount} files</Typography>
            </Stack>
            <AvatarGroup max={4} sx={{ mt: 1 }}>
                {task.assignedTo.map(name => (
                    <Avatar key={name}>{name.charAt(0)}</Avatar>
                ))}
            </AvatarGroup>
        </Box>
    );
}
