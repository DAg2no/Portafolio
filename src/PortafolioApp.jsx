import { useState } from "react";
import Home from "./components";
import { ThemeProvider, createTheme } from "@mui/material";



const PortafolioApp = () => {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      
      <Home/>
        
    </ThemeProvider>
  );
};

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#525252",
    },
  },
})

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
  },
})

export default PortafolioApp;
