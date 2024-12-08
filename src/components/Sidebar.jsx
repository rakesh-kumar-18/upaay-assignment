import { Box, Typography, List, ListItem, Button } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

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
            <List sx={{ borderBottom: '1px solid #ccc' }}>
                <ListItem sx={{ p: 0, mb: 2 }}>
                    <HomeOutlinedIcon sx={{ mr: 1, color: '#787486' }} />
                    <Typography fontWeight="bold">Home</Typography>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 2 }}>
                    <TextsmsOutlinedIcon sx={{ mr: 1, color: '#787486' }} />
                    Messages
                </ListItem>
                <ListItem sx={{ p: 0, mb: 2 }}>
                    <AssignmentOutlinedIcon sx={{ mr: 1, color: '#787486' }} />
                    Tasks
                </ListItem>
                <ListItem sx={{ p: 0, mb: 2 }}>
                    <PeopleOutlineOutlinedIcon sx={{ mr: 1, color: '#787486' }} />
                    Members
                </ListItem>
                <ListItem sx={{ p: 0, mb: 2 }}>
                    <SettingsOutlinedIcon sx={{ mr: 1, color: '#787486' }} />
                    Settings
                </ListItem>
            </List>

            <Typography variant="subtitle1" color="gray.600" display="flex" alignItems='center' justifyContent='space-between' sx={{ mt: 4, mb: 2 }}>
                My Projects
                <AddBoxOutlinedIcon fontSize='small' />
            </Typography>
            <List>
                <ListItem sx={{ p: 0, mb: 1 }}>
                    <CircleIcon sx={{ fontSize: "10px", color: '#7AC555', mr: 1 }} />
                    <Typography fontWeight="bold">Mobile App</Typography>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                    <CircleIcon sx={{ fontSize: "10px", color: '#FFA500', mr: 1 }} />
                    Website Redesign
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                    <CircleIcon sx={{ fontSize: "10px", color: '#E4CCFD', mr: 1 }} />
                    Design System
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                    <CircleIcon sx={{ fontSize: "10px", color: '#76A5EA', mr: 1 }} />
                    Wireframes
                </ListItem>
            </List>

            <Box sx={{ backgroundColor: 'yellow.50', p: 2, mt: 4, borderRadius: 1, textAlign: 'center' }}>
                <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>Thoughts Time</Typography>
                <Typography variant="caption" color="gray.600">
                    We don&apos;t have any notice for you, till then you can share your thoughts with your peers.
                </Typography>
                <Button variant="contained" size="small" sx={{ mt: 1 }}>Write a message</Button>
            </Box>
        </Box>
    );
}
