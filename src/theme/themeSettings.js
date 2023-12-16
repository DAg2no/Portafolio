import { createTheme } from "@mui/material";


const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff"
    }
    
  },

});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#18152f',
      paper: '#18152f'
    },
  },
 
});

export { lightTheme, darkTheme };

