import {
    AppBar,
    Button,
    Hidden,
    IconButton,
    Stack,
    Toolbar,
    Typography,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import ThemeSwitch from "../theme/themeButton";
import { navLinks } from "../helpers/navLinks";

  
  
  const NavBar = ({ toggleDrawer, toggleTheme }) => {
    const renderNavButtons = () => {
      return navLinks.map((link, index) => (
        <Button key={index} variant="text" color="inherit" href={link.link}>
          <Typography variant="h6" color="inherit" fontSize="1.1rem">
            {link.text}
          </Typography>
        </Button>
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
            <Stack direction="row">
              {renderNavButtons()}
            </Stack>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  };

  
  export default NavBar;
  
