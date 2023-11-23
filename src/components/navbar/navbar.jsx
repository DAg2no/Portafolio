import {
    AppBar,
    Hidden,
    IconButton,
    Stack,
    Toolbar,
  
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import ThemeSwitch from "../../theme/themeButton";
import { renderNavButtons } from "../../helpers/renderNavButtons";
  
  
 export const NavBar = ({ toggleDrawer, toggleTheme }) => {

    
  
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

  
