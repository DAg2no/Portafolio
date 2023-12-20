import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme/themeSettings";
import { Home, Projects } from "./pages";
import { CustomDrawer, NavBar } from "./components/navbar";
import { LoandingPage } from "./LoandingPage";
import { ErrorPage } from "./pages/ErrorPage";


 export const Layout = ({ children, toggleDrawer, toggleTheme, isDrawerOpen }) => {
  return (
    <>
    
      <NavBar toggleDrawer={toggleDrawer} toggleTheme={toggleTheme} />
      <CustomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      {children}
    </>
  );
};

const PortafolioApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, []);

  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <BrowserRouter>
          {isLoading ? (
            <div data-testid="loading-page">

              <LoandingPage  />
            </div>
          ) : (
            <Routes>
              {/* Home router */}
              <Route
                path="/"
                element={
                  <Layout
                    toggleDrawer={toggleDrawer}
                    isDrawerOpen={isDrawerOpen}
                    toggleTheme={toggleTheme}
                  >
                    <Home data-testid="main-content" toggleTheme={toggleTheme}  />
                  </Layout>
                }
                errorElement={<ErrorPage />}
              />

             
             
              <Route
                path="/project"
                element={
                  <Layout
                    toggleDrawer={toggleDrawer}
                    isDrawerOpen={isDrawerOpen}
                    toggleTheme={toggleTheme}
                  >
                    <Projects/>
                  </Layout>
                }
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default PortafolioApp;
