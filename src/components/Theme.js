import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const palette = {
    primary: { main: '#cc7393' },
    secondary: { main: '#7075b5' },
};

const typography = {
    fontFamily: [
        'Spartan',
        'Open Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
}

const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 1050,
        lg: 1280,
        xl: 1920
    }
}

const themeName = 'Charm Wild Blue Yonder Giraffe';
let theme = createMuiTheme({ palette, themeName, typography, breakpoints });
theme = responsiveFontSizes(theme);


export default theme;