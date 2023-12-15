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
      main: 'rgba(212,212,226,0.71)',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#282e3d',
      paper: '#19272b',
    },
  },
 
});

export { lightTheme, darkTheme };

