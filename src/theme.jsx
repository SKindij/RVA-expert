import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#2793FF',
      yellow: '#FBD062',
      green: '#7AB259',
    },
    secondary: {
      main: '#ff9327',
    },
	error: {
      main: red.A400,
    },
  },
});

export default theme;