import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif"
    },
    colors: {
        brand: {
            50: '#f5f7ff',
            100: '#ebf0ff',
            200: '#d6dbff',
            300: '#b0baff',
            400: '#8b9aff',
            500: '#657aff',
            600: '#4a60db',
            700: '#3747a8',
            800: '#252f75',
            900: '#141946'
        }
    },
    styles: {
        global: {
            body: {
                bg: '#f5f7fa',
                color: 'gray.800'
            }
        }
    }
});

export default theme;
