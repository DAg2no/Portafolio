import {
  AppBar,
  Hidden,
  IconButton,
  Stack,
  Toolbar,
  InputBase,
  Box,
  alpha, Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeSwitch from "../../theme/themeButton";
import { renderNavButtons } from "../../helpers/renderNavButtons";
import { Search, GitHub } from "@mui/icons-material";


export const NavBar = ({ toggleDrawer, toggleTheme }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box flexGrow={2}>
          <Typography variant="h5" sx={{fontFamily: "Orbitron"}}>Dag2no</Typography>
        </Box>
        <Hidden mdDown>
          <Stack direction="row" spacing={5} marginLeft="10px">
            {renderNavButtons()}
          </Stack>
        </Hidden>

        <Stack sx={{ marginLeft: 2, }} flexDirection="row">
          <ThemeSwitch toggleTheme={toggleTheme} />
        </Stack>

        <Hidden mdUp>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ marginRight: "1rem" }}
            accessibilityLabel="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
