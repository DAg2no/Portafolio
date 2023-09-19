import { useState } from "react";

import Home from "./pages/home";
import { darkTheme, lightTheme } from "./theme/themeSettings";
import { ThemeProvider } from "@mui/material";

const PortafolioApp = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <Home toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </>
  );
};

export default PortafolioApp;
