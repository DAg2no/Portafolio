import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/home/home";
import { darkTheme, lightTheme } from "./theme/themeSettings";

const PortafolioApp = () => {
  
const [currentTheme, setCurrentTheme] = useState(darkTheme);


  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline/>
        
        

        <Home toggleTheme={toggleTheme}/>
        
      </ThemeProvider>
    </>
  );
};

export default PortafolioApp;
