import { AppBar, Toolbar, Typography, InputBase, Avatar, IconButton, Box } from '@mui/material';
import { Search, Notifications } from '@mui/icons-material';
import logo from '../assets/header-logo.png';

export default function Header() {
    return (
        <AppBar position="static" color="inherit" elevation={0} sx={{ backgroundColor: '#fff', borderBottom: '1px solid #ccc' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Project Logo" style={{ height: 30, marginRight: 8 }} />
                    <Typography variant="h6" sx={{ color: 'gray.700' }}>
                        Project M.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ position: 'relative' }}>
                        <Search sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', color: 'gray.500' }} />
                        <InputBase
                            placeholder="Search for anything..."
                            sx={{
                                pl: 4,
                                pr: 1,
                                border: '1px solid #ccc',
                                borderRadius: 1,
                                width: 300,
                                height: 36
                            }}
                        />
                    </Box>
                    <IconButton>
                        <Notifications />
                    </IconButton>
                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" fontWeight="bold">Palak Jain</Typography>
                        <Typography variant="caption" color="gray.600">Rajasthan, India</Typography>
                    </Box>
                    <Avatar alt="Palak Jain" />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
