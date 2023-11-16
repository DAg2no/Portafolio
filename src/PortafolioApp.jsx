import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { darkTheme, lightTheme } from './theme/themeSettings';
import Home from './pages/home/home';
import { Contact, Description } from './pages'
import NavBar from './components/Navbar/Navbar';
import CustomDrawer from './components/Navbar/CustomDrawer';

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
          <Routes>
            <Route path="/" element={<Layout toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} toggleTheme={toggleTheme}><Home toggleTheme={toggleTheme} /></Layout>} />
            <Route path="/description" element={<Layout toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} toggleTheme={toggleTheme}><Description /></Layout>} />
            <Route path="/contact" element={<Layout toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} toggleTheme={toggleTheme}><Contact /></Layout>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default PortafolioApp;
