import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "'Inter', sans-serif"
    },
    palette: {
        background: {
            default: '#f5f7fa'
        },
        text: {
            primary: '#333'
        },
        primary: {
            main: '#657aff'
        },
        secondary: {
            main: '#3747a8'
        }
    }
});

export default theme;
