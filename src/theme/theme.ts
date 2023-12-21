import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: '#692bec',
            light:'white'
        },
        secondary: {
            main: '#e1e1e1',
            light:'#cccccc'
        },
        text: {
            primary: '#141414',
            secondary: '#8d8d8d'
        },
        background: {
            default: '#f4f8f8'
        }
    },
    typography:{
        fontFamily:"dana , Roboto, Helvetica, Arial, sans-serif",
        allVariants:{
            color:'rgb(255 , 255 , 255 , 1)'
        }
    }
});