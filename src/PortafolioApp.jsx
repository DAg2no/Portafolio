import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/home";
import { darkTheme, lightTheme } from "./theme/themeSettings";
import { useState } from "react";





const PortafolioApp = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        
        <Home toggleTheme={toggleTheme} />
      
      </ThemeProvider>
    </>
  );
};

export default PortafolioApp;
