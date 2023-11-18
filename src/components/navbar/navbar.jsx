import {
    AppBar,
    Hidden,
    IconButton,
    Stack,
    Toolbar,
    Typography,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import ThemeSwitch from "../../theme/themeButton";
import { navLinks } from "../../helpers/navLinks";
import { Link } from "react-router-dom";

  
  
 export const NavBar = ({ toggleDrawer, toggleTheme }) => {

    const renderNavButtons = () => {
      return navLinks.map((link) => (
        <Link key={link.link} to={link.link} style={{textDecoration: 'none', color: 'inherit',}}>
          <Typography variant="h6" color="inherit" fontSize="1.1rem">
            {link.text}
          </Typography>
        </Link>
      ));
    };
  
    return (
      <AppBar position="fixed" sx={{ backgroundColor: "#000000" }}>
        <Toolbar>
          <ThemeSwitch toggleTheme={toggleTheme} />
  
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ marginLeft: "1rem" }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
  
          <Hidden mdDown>
            <Stack direction="row" spacing={2}>
              {renderNavButtons()}
            </Stack>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  };

  
