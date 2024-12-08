import { Box, Typography, List, ListItem, Button } from '@mui/material';

export default function Sidebar() {
    return (
        <Box
            sx={{
                width: 250,
                backgroundColor: '#fff',
                borderRight: '1px solid #ccc',
                p: 2
            }}
        >
            <List>
                <ListItem sx={{ p: 0, mb: 2 }}><Typography fontWeight="bold">Home</Typography></ListItem>
                <ListItem sx={{ p: 0, mb: 2 }}>Messages</ListItem>
                <ListItem sx={{ p: 0, mb: 2 }}>Tasks</ListItem>
                <ListItem sx={{ p: 0, mb: 2 }}>Members</ListItem>
                <ListItem sx={{ p: 0, mb: 2 }}>Settings</ListItem>
            </List>

            <Typography variant="subtitle2" color="gray.600" sx={{ mt: 4, mb: 2 }}>My Projects</Typography>
            <List>
                <ListItem sx={{ p: 0, mb: 1 }}><Typography fontWeight="bold">Mobile App</Typography></ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>Website Redesign</ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>Design System</ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>Wireframes</ListItem>
            </List>

            <Box sx={{ backgroundColor: 'yellow.50', p: 2, mt: 4, borderRadius: 1, textAlign: 'center' }}>
                <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>Thoughts Time</Typography>
                <Typography variant="caption" color="gray.600">
                    We don’t have any notice for you, till then you can share your thoughts with your peers.
                </Typography>
                <Button variant="contained" size="small" sx={{ mt: 1 }}>Write a message</Button>
            </Box>
        </Box>
    );
}
