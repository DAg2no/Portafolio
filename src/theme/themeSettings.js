import { createTheme } from "@mui/material";



const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0080ff',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff0000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#212121',
    },
    text: {
      primary: '#ffffff',
      secondary: '#0080ff',
      disabled: '#999999',
    },
  },
});


  export {lightTheme, darkTheme}