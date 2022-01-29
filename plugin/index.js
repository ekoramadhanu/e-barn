import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3cb815', //green,
      light: '#76eb4f',
      dark: '#008700',
    },
    secondary: {
      main: '#ff7b05', // orange
      light: '#ffac44',
      dark: '#c54c00',
    },
    text: {
      primary:'#ffffff', // white
      secondary: '#000000', // black
    },
  },
  spacing: 4,
});

export default theme;