import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme, lightTheme } from "./theme/themeSettings";
import Home from "./pages/home/Home";
import { Contact, About } from "./pages";
import NavBar from "./components/Navbar/Navbar";
import CustomDrawer from "./components/Navbar/CustomDrawer";
import { Project } from "./pages/Project";
import { LoandingPage } from "./LoandingPage";

const Layout = ({ children, toggleDrawer, toggleTheme, isDrawerOpen }) => {
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
          {isLoading ? <LoandingPage /> : ( 
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
                    <Home toggleTheme={toggleTheme} />
                  </Layout>
                }
              />
              {/* Project router */}
              <Route
                path="/project"
                element={
                  <Layout
                    toggleDrawer={toggleDrawer}
                    isDrawerOpen={isDrawerOpen}
                    toggleTheme={toggleTheme}
                  >
                    <Project/>
                  </Layout>
                }
              />
              {/* Description router */}
              <Route
                path="/about"
                element={
                  <Layout
                    toggleDrawer={toggleDrawer}
                    isDrawerOpen={isDrawerOpen}
                    toggleTheme={toggleTheme}
                  >
                    <About />
                  </Layout>
                }
              />
              {/* Contact  router */}
              <Route
                path="/contact"
                element={
                  <Layout
                    toggleDrawer={toggleDrawer}
                    isDrawerOpen={isDrawerOpen}
                    toggleTheme={toggleTheme}
                  >
                    <Contact />
                  </Layout>
                }
              />
            </Routes>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default PortafolioApp;
